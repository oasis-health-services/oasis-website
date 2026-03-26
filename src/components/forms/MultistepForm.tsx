import React, { useEffect, useState } from "react";
import { useForm, FormProvider, type UseFormReturn, type DefaultValues, type Path } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useFormStore } from "@/store";
import { Button } from "../ui/button";
import { CheckCircle2, ChevronLeft, ChevronRight, Edit2, Loader2 } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import FieldError from "../FieldError";
import { motion } from "framer-motion";

export interface BaseFormData {
    [key: string]: any;
}

export interface FormComponentProps<T extends BaseFormData> {
    prefix?: string;
    form: UseFormReturn<T>;
}

interface StepConfig<T extends BaseFormData> {
    id: string;
    label: string;
    icon: React.ElementType;
    schema: z.ZodTypeAny;
    name?: Path<T>;
    validate: (form: UseFormReturn<T>) => Promise<boolean>;
    component: React.ComponentType<FormComponentProps<T>>;
}

interface MultistepFormProps<T extends BaseFormData> {
    contactType: string;
    schema: z.ZodTypeAny;
    defaultValues?: T;
    steps: StepConfig<T>[];
    onSubmit: (data: T) => Promise<any>;
}

export function getFields(schema: z.ZodTypeAny): string[] {
    if (schema instanceof z.ZodObject) {
        return Object.keys(schema.shape);
    } else if (schema instanceof z.ZodEffects) {
        return getFields(schema._def.schema);
    } else if (schema instanceof z.ZodOptional || schema instanceof z.ZodNullable) {
        return getFields((schema as any).unwrap());
    } else if (schema instanceof z.ZodDefault) {
        return getFields(schema._def.innerType);
    }
    return [];
}

export async function validateFields<T extends BaseFormData>(form: UseFormReturn<T>, schema: z.ZodTypeAny, prefix: string) {

    const { trigger } = form;

    const fields = getFields(schema);
    const fieldsToValidate = fields.map(key =>
        prefix + "." + key
    ) as Path<T>[];

    return await trigger(fieldsToValidate.length > 0 ? fieldsToValidate : undefined);
}

export function SummarySection({ title, children, onEdit }: { title: string, children: React.ReactNode, onEdit: () => void }) {
    return (
        <div className="relative p-4 border border-border rounded-lg w-full">
            <div className="flex mb-3 w-full">
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground w-full">{title}</h4>

                <Button
                    variant="ghost"
                    size="sm"
                    onClick={onEdit}
                    className="h-8 gap-1 px-2 text-xs font-medium text-muted-foreground hover:text-secondary"
                >
                    <Edit2 className="h-3 w-3 mr-1" />
                    Edit
                </Button>

                {/* <Button variant="ghost" size="sm" onClick={onEdit} className="h-8 px-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    <Edit2 className="w-3 h-3 mr-1" /> Edit
                </Button> */}
            </div>
            <div className="space-y-2">
                {children}
            </div>
        </div>
    );
}


export function LabelValue({ label, value, vertical = false }: { label: string, value: string | undefined | null, vertical?: boolean }) {

    if (!value) return null;

    return (
        <div className={vertical ? "flex flex-col gap-1" : "flex justify-between py-1 w-[200px]"}>
            <span className="block text-sm font-medium text-muted-foreground text-primary">{label}</span>
            <span className="text-sm font-medium text-foreground">{value}</span>
        </div>
    );
}

export function MultistepForm<T extends BaseFormData>({
    contactType,
    schema,
    defaultValues,
    steps,
    onSubmit }: MultistepFormProps<T>) {

    const formRef = React.useRef<HTMLFormElement>(null);
    const [consent, setConsent] = useState(false);
    const { currentStep, isSubmitting, next, prev, setStep, setIsSubmitting } = useFormStore();

    useEffect(() => {
        if (formRef.current) {
            const yOffset = -100; // Offset for header if needed
            const element = formRef.current;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: "smooth" });
        }
    }, [currentStep]);

    const form = useForm<T>({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>,
        mode: "onChange",
        reValidateMode: "onChange",
    });

    const { handleSubmit, clearErrors, formState: { errors } } = form;

    const handleNext = async () => {
        clearErrors();
        console.log("Validating Step: ", currentStep);
        const step = steps[currentStep];

        const isValid = await step.validate(form);
        console.log("Valid: ", isValid, errors);
        if (isValid) {
            next();
        }
    }

    const onFormSubmit = async (data: T) => {
        const REDIRECT_ON_FAILURE = String(import.meta.env.PUBLIC_REDIRECT_ON_FAILURE) !== "false";

        setIsSubmitting(true);
        try {
            const response = await onSubmit(data);
            console.log("RESPONSE", response);

            if (!response?.success) {
                console.error("Submission failed" + response.message);

                if (REDIRECT_ON_FAILURE) {
                    alert("Redirecting to sorry page");
                    window.location.href = "/sorry";
                }
                return;
            }

            const params = new URLSearchParams({
                type: contactType,
                name: (data as any).contact?.firstName || (data as any).lead?.firstName || ""
            });
            window.location.href = `/thank-you?${params.toString()}`;
        } catch (error) {
            console.error("Form submission failed:", error);
            alert("Form submission failed");
            if (REDIRECT_ON_FAILURE) {
                window.location.href = "/sorry";
            }
            return;
        } finally {
            setIsSubmitting(false);
        }
    }

    const CurrentStepComponent = steps[currentStep].component;

    return (
        <FormProvider {...form}>
            <form ref={formRef} onSubmit={handleSubmit(onFormSubmit)} className="space-y-8" noValidate>

                {/* Step Indicator UI */}


                <div className="mb-8">
                    <div className="flex items-center justify-between">
                        {steps.map((step, index) => {
                            const isCompleted = currentStep > index
                            const isCurrent = currentStep === index
                            const StepIcon = step.icon
                            return (
                                <React.Fragment key={index}>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            if (isCompleted) setStep(index)
                                        }}
                                        className={`flex flex-col items-center gap-1.5 ${isCompleted ? "cursor-pointer" : "cursor-default"}`}
                                        disabled={!isCompleted && !isCurrent}
                                    >
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isCompleted ? "bg-primary text-primary-foreground" : isCurrent ? "bg-primary/10 text-primary border-2 border-primary" : "bg-muted text-muted-foreground"
                                            }`}>
                                            {isCompleted ? (
                                                <CheckCircle2 className="h-5 w-5" />
                                            ) : (
                                                <StepIcon className="h-4 w-4" />
                                            )}
                                        </div>
                                        <span className={`text-xs break-words w-[100px] text-center font-medium hidden sm:block ${isCurrent ? "text-primary" : isCompleted ? "text-foreground" : "text-muted-foreground"
                                            }`}>
                                            {step.label}
                                        </span>
                                    </button>
                                    {index < steps.length - 1 && (
                                        <div className={`flex-1 h-0.5 mx-2 ${currentStep > index ? "bg-primary" : "bg-muted"}`} />
                                    )}
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>

                {/* Dynamic Step Content */}
                {/*<div className="min-h-[300px]">*/}
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2"
                >
                    <CurrentStepComponent form={form} />
                </motion.div>
                {/*</div>*/}

                {/* Consent */}
                {currentStep === steps.length - 1 && (
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3 p-4 border rounded-lg bg-primary/5 border-primary/20">

                            <Checkbox
                                id="consent"
                                checked={consent}
                                onCheckedChange={() => setConsent(!consent)}
                                className="mt-1"
                            />                            <div className="space-y-1">
                                <Label
                                    htmlFor="consent"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Consent to terms and services
                                </Label>
                                <p className="text-xs text-muted-foreground">
                                    By checking this box, you consent to Oasis Health Services contacting you regarding your inquiry.
                                </p>
                            </div>
                        </div>
                        <FieldError error={errors.consent} />
                    </div>
                )}

                {/* Navigation */}
                <div className="flex justify-between mt-8 border-t pt-6">
                    <Button type="button" variant="ghost" onClick={prev} className="cusor-pointer" disabled={currentStep == 0 || isSubmitting}>
                        <ChevronLeft className="mr-2 h-4 w-4" /> Back
                    </Button>

                    {currentStep < steps.length - 1 ? (
                        <Button type="button" onClick={handleNext} className="cursor-pointer">
                            Next <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    ) : (
                        <Button type="submit" disabled={isSubmitting || !consent} className={isSubmitting ? "" : "cursor-pointer"}>
                            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Submit
                        </Button>
                    )}
                </div>
            </form>
        </FormProvider>
    )
}