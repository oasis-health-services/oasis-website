import { AppointmentPreferenceSchema, ClinicalHistorySchema, InsuranceSchema, LeadSchema, PaymentInformationSchema, ServiceInformationSchema, type IntakeFormData } from "@/lib/schema";
import React, { useState } from "react";
import { Controller, get, useForm, type FieldPath } from "react-hook-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Calendar, CheckCircle2, ChevronLeft, ChevronRight, Hospital, Loader2, PillBottle, Shield, User } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import FieldError from "../FieldError";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { cn } from "@/lib/utils";

const steps = [
    { id: 1, label: "Personal Info", icon: User },
    { id: 2, label: "Clinical History", icon: Hospital },
    { id: 3, label: "Services Requested", icon: PillBottle },
    { id: 4, label: "Insurance", icon: Shield },
    { id: 5, label: "Appointment", icon: Calendar },
    { id: 6, label: "Review", icon: CheckCircle2 },
]

const SERVICES_REQUESTED_OPTIONS = [
    { value: "ADHD", label: "ADHD" },
    { value: "Anxiety", label: "Anxiety" },
    { value: "Bipolar Disorder", label: "Bipolar Disorder" },
    { value: "Depression", label: "Depression" },
    { value: "Schizophrenia", label: "Schizophrenia" },
    { value: "Substance Use", label: "Substance Use" },
    { value: "Other", label: "Other" },
];

const stepNames = [
    "lead",
    "clinicalHistory",
    "servicesRequested",
    "appointmentPreference",
    "payment"
]
const stepSchemas = [
    LeadSchema,
    ClinicalHistorySchema,
    ServiceInformationSchema,
    AppointmentPreferenceSchema,
    PaymentInformationSchema
]

const BIRTH_SEX_OPTIONS = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "unknown", label: "Unknown" },
];

const GENDER_IDENTITY_OPTIONS = [
    { value: "Declined to specify", label: "Declined to specify" },
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Transger Male", label: "Transgender Male" },
    { value: "Transgender Female", label: "Transgender Female" },
    { value: "Genderqueer", label: "Genderqueer" },
    { value: "Other", label: "Other" },
];

const inputClass = "w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
const selectClass = "w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
const labelClass = "block text-sm font-medium text-foreground mb-1.5"

export function IntakeForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { register, control, getValues, watch, setValue, setError, clearErrors, formState: { errors } } = useForm<IntakeFormData>({
        mode: "onChange",
        reValidateMode: "onChange",
        defaultValues: {
            lead: {
                firstName: "",
                lastName: "",
                dob: "",
                email: "",
                phone: "",
                //                address: "",
                address: {
                    street: "",
                    city: "",
                    state: "",
                    postalCode: "",
                    timezone: "EST"
                },
                source: "",
                referrer: "",
            },
            clinicalHistory: {
                currentConditions: "",
                currentMedications: "",
                allergies: "",
                courtRecommended: false
            },
            serviceInformation: {
                // medications: "",
                reasons: [],
                description: ""
            },
            // payment: {
            //     paymentType: "insurance",
            //     insurance: {
            //         name: "",
            //         type: "primary",
            //         memberId: "",
            //         subscriberRelationship: "self",
            //         images: {
            //             front: "",
            //             back: ""
            //         }
            //     }
            // }
        }
    });

    function validateStep(step: number): boolean {

        const schema = stepSchemas[step - 1]
        if (!schema) return true // Step 5 (review) has no schema

        const values = getValues();
        const name = stepNames[step - 1] as keyof IntakeFormData;
        const stepValues = values[name];

        //        alert("Step Values: " + name + " = " + JSON.stringify(stepValues));

        const result = schema.safeParse(stepValues)
        //        alert("Result: " + JSON.stringify(result));
        if (result.success) {
            // Clear any errors for fields in this step
            clearErrors(name);
            return true
        }

        // Clear previous step errors first, then set new ones
        clearErrors();
        for (const issue of result.error.issues) {
            // issue.path is relative to lead, e.g. ["address","zip"]
            const path = [name, ...issue.path].join(".") as FieldPath<IntakeFormData>;

            setError(path, {
                type: "zod",
                message: issue.message,
            });
        }

        // for (const issue of result.error.issues) {
        //     const field = issue.path[0] as keyof IntakeFormData
        //     if (field) {
        //         setError(field, { type: "manual", message: issue.message })
        //     }
        // }
        //        alert("Result: " + JSON.stringify(errors));
        return false
    }

    function nextStep() {
        const isValid = validateStep(currentStep)
        if (isValid) {
            setCurrentStep(prev => Math.min(prev + 1, 5))
        }
    }

    function prevStep() {
        clearErrors()
        setCurrentStep(prev => Math.max(prev - 1, 1))
    }

    async function handleSubmit() {
        const isValid = validateStep(4)
        if (!isValid) return

        setIsSubmitting(true)
        const data = getValues()

        try {
            //      const carrier = data.insuranceCarrier === "Other" ? data.otherCarrier : data.insuranceCarrier

            //   const response = await fetch("/api/insurance-verification", {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify({
            //       lead: data.lead,
            //       clinicalHistory: data.clinicalHistory,
            //       servicesRequested: data.servicesRequested,
            //       insurance: data.insurance,
            //       appointmentPreference: data.appointmentPreference
            //     })
            //   })

            //   const result = await response.json()

            //   const params = new URLSearchParams({
            //     type: "insurance",
            //     name: data.firstName,
            //     ...(result.referenceId && { ref: result.referenceId }),
            //   })

        } catch {

        }
    }

    return (
        <Card className="bg-card border-border">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    New Patient Intake
                </CardTitle>
                <CardDescription>
                    Please fill out the form below to complete your intake.
                </CardDescription>
            </CardHeader>
            <CardContent>

                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        if (currentStep < 5) {
                            nextStep()
                        } else {
                            handleSubmit()
                        }
                    }}
                    noValidate
                >

                    <div className="mb-8">
                        <div className="flex items-center justify-between">
                            {steps.map((step, index) => {
                                const isCompleted = currentStep > step.id
                                const isCurrent = currentStep === step.id
                                const StepIcon = step.icon
                                return (
                                    <React.Fragment key={step.id}>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                if (isCompleted) setCurrentStep(step.id)
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
                                            <span className={`text-xs font-medium hidden sm:block ${isCurrent ? "text-primary" : isCompleted ? "text-foreground" : "text-muted-foreground"
                                                }`}>
                                                {step.label}
                                            </span>
                                        </button>
                                        {index < steps.length - 1 && (
                                            <div className={`flex-1 h-0.5 mx-2 ${currentStep > step.id ? "bg-primary" : "bg-muted"
                                                }`} />
                                        )}
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    </div>

                    {currentStep === 1 && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-foreground pb-2 border-b border-border">
                                Personal Information
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4 space-y-2">

                                <div>
                                    <Label htmlFor="firstName" className={labelClass}>First Name *</Label>
                                    <Input type="text" id="firstName" className={inputClass} placeholder="First name"
                                        {...register("lead.firstName")} />
                                    <FieldError error={get(errors, "lead.firstName")} />
                                </div>

                                <div>
                                    <Label htmlFor="lastName" className={labelClass}>Last Name *</Label>
                                    <Input type="text" id="lastName" className={inputClass} placeholder="Last name"
                                        {...register("lead.lastName")} />
                                    <FieldError error={get(errors, "lead.lastName")} />
                                </div>

                                <div>
                                    <Label htmlFor="preferredName" className={labelClass}>Preferred Name</Label>
                                    <Input type="text" id="preferredName" className={inputClass} placeholder="Preferred name"
                                        {...register("lead.preferredName")} />
                                    <FieldError error={get(errors, "lead.preferredName")} />
                                </div>

                                <div>
                                    <Label htmlFor="dob" className={labelClass}>Date of Birth *</Label>
                                    <Input type="date" id="dob" className={inputClass}
                                        {...register("lead.dob")} />
                                    <FieldError error={get(errors, "lead.dob")} />
                                </div>
                                <div>
                                    <Label htmlFor="phone" className={labelClass}>Phone Number *</Label>
                                    <Input type="tel" id="phone" className={inputClass} placeholder="(555) 123-4567"
                                        {...register("lead.phone")} />
                                    <FieldError error={get(errors, "lead.phone")} />
                                </div>
                                <div>
                                    <Label htmlFor="email" className={labelClass}>Email Address *</Label>
                                    <Input type="email" id="email" className={inputClass} placeholder="you@email.com"
                                        {...register("lead.email")} />
                                    <FieldError error={get(errors, "lead.email")} />
                                </div>

                                <div>
                                    <Label htmlFor="birthSex" className={labelClass}>Birth Sex *</Label>
                                    <Controller
                                        name="lead.birthSex"
                                        control={control}
                                        render={({ field }) => (
                                            <Select onValueChange={field.onChange} value={field.value}>
                                                <SelectTrigger id="birthSex" className="w-full">
                                                    <SelectValue placeholder="Select birth sex" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {BIRTH_SEX_OPTIONS.map(
                                                        (option, index) => (
                                                            <SelectItem key={index} value={option.value}>
                                                                {option.label}
                                                            </SelectItem>
                                                        )
                                                    )}
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                    <FieldError error={get(errors, "lead.birthSex")} />
                                </div>

                                <div>
                                    <Label htmlFor="genderIdentity" className={labelClass}>Gender Identity</Label>
                                    <Controller
                                        name="lead.genderIdentity"
                                        control={control}
                                        render={({ field }) => (
                                            <Select onValueChange={field.onChange} value={field.value}>
                                                <SelectTrigger id="genderIdentity" className="w-full">
                                                    <SelectValue placeholder="Select gender identity" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {GENDER_IDENTITY_OPTIONS.map(
                                                        (option, index) => (
                                                            <SelectItem key={index} value={option.value}>
                                                                {option.label}
                                                            </SelectItem>
                                                        )
                                                    )}
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                    <FieldError error={get(errors, "lead.genderIdentity")} />
                                </div>

                                <div className="sm:col-span-2">
                                    <Label htmlFor="street" className={labelClass}>Address</Label>
                                    <Input type="text" id="street" className={inputClass} placeholder="Street Address"
                                        {...register("lead.address.street")} />
                                    <FieldError error={get(errors, "lead.address.street")} />

                                    <div className="grid sm:grid-cols-3 gap-4 mt-4">
                                        <div>
                                            {/* <Label htmlFor="city" className={labelClass}>City</Label> */}
                                            <Input type="text" id="city" className={inputClass} placeholder="City"
                                                {...register("lead.address.city")} />
                                            <FieldError error={get(errors, "lead.address.city")} />
                                        </div>
                                        <div>
                                            {/* <Label htmlFor="state" className={labelClass}>State</Label> */}
                                            <Input type="text" id="state" className={inputClass} placeholder="State"
                                                {...register("lead.address.state")} />
                                            <FieldError error={get(errors, "lead.address.state")} />
                                        </div>
                                        <div>
                                            {/* <Label htmlFor="zip" className={labelClass}>Zip</Label> */}
                                            <Input type="text" id="zip" className={inputClass} placeholder="Zip"
                                                {...register("lead.address.postalCode")} />
                                            <FieldError error={get(errors, "lead.address.postalCode")} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-foreground pb-2 border-b border-border">
                                Clinical History
                            </h3>
                            <div className="grid sm:grid-cols-1 gap-4 space-y-2">

                                <div>
                                    <Label htmlFor="courtRecommended" className={labelClass}>Court Recommended</Label>
                                    <div className="flex items-center space-x-2">
                                        <Controller
                                            name="clinicalHistory.courtRecommended"
                                            control={control}
                                            render={({ field }) => (
                                                <RadioGroup
                                                    onValueChange={(val) => field.onChange(val === "yes")}
                                                    value={field.value ? "yes" : "no"}
                                                    className="flex space-x-4"
                                                >
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="yes" id="courtRecommendedYes" />
                                                        <Label className="block text-sm font-medium text-foreground" htmlFor="courtRecommendedYes">Yes</Label>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="no" id="courtRecommendedNo" />
                                                        <Label className="block text-sm font-medium text-foreground" htmlFor="courtRecommendedNo">No</Label>
                                                    </div>
                                                </RadioGroup>
                                            )}
                                        />
                                    </div>
                                    <FieldError error={get(errors, "clinicalHistory.courtRecommended")} />
                                </div>

                                <div>
                                    <Label htmlFor="currentConditions" className={labelClass}>List any current diagnoses</Label>
                                    <Textarea id="currentConditions" className={inputClass} placeholder="Current Conditions"
                                        {...register("clinicalHistory.currentConditions")} />
                                    <FieldError error={get(errors, "clinicalHistory.currentConditions")} />
                                </div>

                                <div>
                                    <Label htmlFor="currentMedications" className={labelClass}>List any medications you're currently taking</Label>
                                    <Textarea id="currentMedications" className={inputClass} placeholder="Current Medications"
                                        {...register("clinicalHistory.currentMedications")} />
                                    <FieldError error={get(errors, "clinicalHistory.currentMedications")} />
                                </div>

                                <div>
                                    <Label htmlFor="allergies" className={labelClass}>List any allergies</Label>
                                    <Textarea id="allergies" className={inputClass} placeholder="Allergies"
                                        {...register("clinicalHistory.allergies")} />
                                    <FieldError error={get(errors, "clinicalHistory.allergies")} />
                                </div>


                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-foreground pb-2 border-b border-border">
                                Services Requested
                            </h3>
                            <div className="grid sm:grid-cols-1 gap-4 space-y-2">

                                <div>
                                    <Label htmlFor="courtRecommended" className={labelClass}>How would you like to be seen?</Label>
                                    <div className="flex items-center space-x-2">
                                        <Controller
                                            name="appointmentPreference.mode"
                                            control={control}
                                            render={({ field }) => (
                                                <RadioGroup
                                                    onValueChange={(val) => field.onChange(val)}
                                                    value={field.value}
                                                    className="flex space-x-4"
                                                >
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="in-person" id="mode_inPerson" />
                                                        <Label className="block text-sm font-medium text-foreground" htmlFor="mode_inPerson">Office</Label>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="telehealth" id="mode_telehealth" />
                                                        <Label className="block text-sm font-medium text-foreground" htmlFor="mode_telehealth">Telehealth</Label>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="either" id="mode_either" />
                                                        <Label className="block text-sm font-medium text-foreground" htmlFor="mode_either">No Preference</Label>
                                                    </div>
                                                </RadioGroup>
                                            )}
                                        />
                                    </div>
                                    {/* <FieldError error={errors.serviceInformation?.mode} /> */}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
                                    {/* Depression, Anxiety, ADHD, PTSD, Bipolar, Substance Use, Autism Spectrum Disorder, Other */}

                                    {SERVICES_REQUESTED_OPTIONS.map((service, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <Checkbox id={service.value} {...register("serviceInformation.reasons")} />
                                            <Label className="block text-sm font-medium text-foreground" htmlFor={service.value}>{service.label}</Label>
                                        </div>
                                    ))}


                                </div>

                                <div>
                                    <Label htmlFor="description" className={labelClass}>Description</Label>
                                    <Textarea id="description" className={inputClass} placeholder="Description" {...register("serviceInformation.description")} />
                                    <FieldError error={get(errors, "serviceInformation.description")} />
                                </div>
                            </div>
                        </div>
                    )}

                    {currentStep === 4 && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-foreground pb-2 border-b border-border">
                                Insurance
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4 space-y-2">

                            </div>
                        </div>
                    )}

                    {currentStep === 5 && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-foreground pb-2 border-b border-border">
                                Appointment Preference
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4 space-y-2">
                            </div>
                        </div>
                    )}

                    {currentStep === 6 && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-foreground pb-2 border-b border-border">
                                Review
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4 space-y-2">
                            </div>
                        </div>
                    )}

                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                        {currentStep > 1 ? (
                            <Button type="button" variant="outline" className="bg-transparent cursor-pointer" onClick={prevStep}>
                                <ChevronLeft className="mr-1 h-4 w-4" />
                                Back
                            </Button>
                        ) : (
                            <div />
                        )}

                        {currentStep < 5 ? (
                            <Button type="submit" className="cursor-pointer">
                                <ChevronRight className="ml-1 h-4 w-4" />
                            </Button>
                        ) : (
                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    "Submit Verification Request"
                                )}
                            </Button>
                        )}
                    </div>
                </form>

            </CardContent>
        </Card>
    )
}