import { getFields, LabelValue, MultistepForm, SummarySection, type FormComponentProps } from "./MultistepForm";
import { InsuranceContactSchema, InsuranceSchema, VerifyInsuranceSchema, type VerifyInsuranceFormData } from "@/lib/schema";
import { Label } from "@radix-ui/react-label";
import { User, Shield, ClipboardCheck } from "lucide-react";
import { Input } from "../ui/input";
import FieldError from "../FieldError";
import { Controller, get, type Path, type UseFormReturn } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectValue, SelectTrigger } from "../ui/select";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { useFormStore } from "@/store";
import { z } from "zod";
import { verifyInsurance, uploadFile } from "@/api";
import { formatPhoneNumber } from "@/lib/utils";
import { FileUploadZone, type UploadedFile } from "./FileUploadZone";

export function InsuranceContactFields({ form }: FormComponentProps<VerifyInsuranceFormData>) {

    const { register, control, formState: { errors } } = form;

    return (
        <div className="space-y-6">

            <h3 className="text-lg font-semibold text-foreground pb-2 border-b border-border">
                Personal Information
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">

                <div className="space-y-2">
                    <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="contact_firstName">First Name *</Label>
                    <Input
                        id="contact_firstName"
                        {...register("contact.firstName")}
                        placeholder="John"
                    />
                    <FieldError error={get(errors, "contact.firstName")} />
                </div>

                <div className="space-y-2">
                    <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="contact_lastName">Last Name *</Label>
                    <Input
                        id="contact_lastName"
                        {...register("contact.lastName")}
                        placeholder="Doe"
                    />
                    <FieldError error={get(errors, "contact.lastName")} />
                </div>

                <div className="space-y-2">
                    <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="contact_email">Email Address *</Label>
                    <Input
                        id="contact_email"
                        type="email"
                        {...register("contact.email")}
                        placeholder="john@example.com"
                    />
                    <FieldError error={get(errors, "contact.email")} />
                </div>
                <div className="space-y-2">
                    <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="contact_phone">Phone Number</Label>
                    <Controller
                        name="contact.phone"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <Input
                                id="contact_phone"
                                placeholder="Enter phone number"
                                inputMode="tel"
                                value={formatPhoneNumber(field.value || "")}
                                onChange={(e) => {
                                    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
                                    field.onChange(digitsOnly);
                                }}
                                onBlur={field.onBlur}
                                ref={field.ref}
                            />
                        )}
                    />
                    <FieldError error={get(errors, "contact.phone")} />
                </div>

                <div className="space-y-2">
                    <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="contact_dob">Date of Birth *</Label>
                    <Input
                        id="contact_dob"
                        type="date"
                        className="justify-between"
                        {...register("contact.dob")}
                        placeholder="MM/DD/YYYY"
                    />
                    <FieldError error={get(errors, "contact.dob")} />
                </div>
            </div>
        </div>
    )
}

export function InsuranceDetailFields({ form }: FormComponentProps<VerifyInsuranceFormData>) {

    const { register, watch, control, formState: { errors } } = form;
    const setFiles = useFormStore((state) => state.setFiles);

    const subscriberRelationship = watch("insurance.subscriberRelationship");

    const insuranceImages = useFormStore((state) => state.files["insurance.images"]) || [];

    const setInsuranceImages: React.Dispatch<React.SetStateAction<UploadedFile[]>> = (value) => {
        const newFiles = typeof value === "function" ? value(insuranceImages) : value;
        setFiles("insurance.images", newFiles);
    }

    const INSURANCE_TYPE_OPTIONS = [
        { value: "Medicare", label: "Medicare" },
        { value: "Medicaid", label: "Medicaid" },
        { value: "Tricare Champus", label: "Tricare Champus" },
        { value: "ChampVA", label: "ChampVA" },
        { value: "Group Health Plan", label: "Group Health Plan" },
        { value: "Other", label: "Other" },
    ];

    const INSURANCE_CARRIER_OPTIONS = [
        { value: "Aetna", label: "Aetna" },
        { value: "Ambetter", label: "Ambetter" },
        { value: "Amerigroup", label: "Amerigroup" },
        { value: "Anthem", label: "Anthem" },
        { value: "Beacon", label: "Beacon" },
        { value: "BCBS", label: "BCBS" },
        { value: "Caresource", label: "Caresource" },
        // { value: "Centene", label: "Centene" },
        // { value: "Centivo", label: "Centivo" },
        { value: "Cigna", label: "Cigna" },
        {
            value: "Community Health Plan of Washington",
            label: "Community Health Plan of Washington",
        },
        { value: "ComPsych", label: "ComPsych" },
        { value: "Humana", label: "Humana" },
        { value: "OSCAR", label: "OSCAR" },
        { value: "Meritain Health", label: "Meritain Health" },
        { value: "Optum", label: "Optum" },
        // { value: "PacificSource", label: "PacificSource" },
        { value: "Premera", label: "Premera" },
        { value: "Regence", label: "Regence" },
        { value: "Tricare", label: "Tricare" },
        { value: "United Health Care", label: "United Health Care" },
        { value: "UMR", label: "UMR" },
        {
            value: "Washington Coordinated Care",
            label: "Washington Coordinated Care",
        },
        { value: "Other", label: "Other" },
    ];

    return (
        <>
            <div className="space-y-6">

                <h3 className="mt-10 text-lg font-semibold text-foreground pb-2 border-b border-border">
                    Insurance Information
                </h3>

                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2 w-full">
                        <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="insuranceType">Type *</Label>
                        <Controller
                            name="insurance.type"
                            control={control}
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} defaultValue="" value={field.value}>
                                    <SelectTrigger id="insuranceType" className="w-full">
                                        <SelectValue placeholder="Select insurance type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {INSURANCE_TYPE_OPTIONS.map((option) => (
                                            <SelectItem key={option.value} value={option.value}>
                                                {option.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        <FieldError error={get(errors, "insurance.type")} />
                    </div>
                    <div className="space-y-2 w-full">
                        <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="insuranceName">Carrier *</Label>
                        <Controller
                            name="insurance.name"
                            control={control}
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} defaultValue="" value={field.value}>
                                    <SelectTrigger id="insuranceName" className="w-full">
                                        <SelectValue placeholder="Select insurance" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {INSURANCE_CARRIER_OPTIONS.map((option) => (
                                            <SelectItem key={option.value} value={option.value}>
                                                {option.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        <FieldError error={get(errors, "insurance.name")} />
                    </div>

                    <div className="space-y-2 w-full">
                        <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="insurancePlan">Plan Name</Label>
                        <Input
                            id="insurancePlan"
                            {...register("insurance.plan")}
                            placeholder="Plan name"
                        />
                        <FieldError error={get(errors, "insurance.plan")} />
                    </div>

                    <div className="space-y-2 w-full">
                        <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="insuranceMemberId">Member ID *</Label>
                        <Input
                            id="insuranceMemberId"
                            {...register("insurance.memberId")}
                            placeholder="1234567890"
                        />
                        <FieldError error={get(errors, "insurance.memberId")} />
                    </div>
                    <div className="space-y-2 w-full">
                        <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="insurancePolicyNumber">Policy/Group Number</Label>
                        <Input
                            id="insuranceGroupNumberr"
                            {...register("insurance.groupNumber")}
                            placeholder="1234567890"
                        />
                        <FieldError error={get(errors, "insurance.groupNumber")} />
                    </div>
                    <div className="space-y-2 w-full">
                        <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="subscriberRelationship">What is your relationship to the subscriber? *</Label>
                        <Controller
                            name="insurance.subscriberRelationship"
                            control={control}
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} defaultValue="self" value={field.value}>
                                    <SelectTrigger id="subscriberRelationship" className="w-full align-left">
                                        <SelectValue placeholder="Select subscriber relationship" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                                    </SelectTrigger>
                                    <SelectContent className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                                        <SelectItem value="self">Self</SelectItem>
                                        <SelectItem value="spouse">Spouse</SelectItem>
                                        <SelectItem value="child">Child</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        <FieldError error={get(errors, "insurance.subscriberRelationship")} />
                    </div>

                </div>
            </div>

            {subscriberRelationship !== "self" && (
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }} className="space-y-6">

                    <h3 className="mt-10 text-lg font-semibold text-foreground pb-2 border-b border-border">
                        Subscriber Information
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2 w-full">
                            <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="subscriberName">Subscriber Name *</Label>
                            <Input
                                id="subscriberName"
                                {...register("insurance.subscriber.name")}
                                placeholder="John Doe"
                            />
                            <FieldError error={get(errors, "insurance.subscriber.name")} />
                        </div>
                        <div className="space-y-2 w-full">
                            <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="subscriberDob">Subscriber Date of Birth *</Label>
                            <Input
                                id="subscriberDob"
                                type="date"
                                {...register("insurance.subscriber.dob")}
                                placeholder="MM/DD/YYYY"
                            />
                            <FieldError error={get(errors, "insurance.subscriber.dob")} />
                        </div>
                    </div>
                </motion.div>
            )}

            <div className="space-y-6">

                <div className="space-y-2 w-full col-span-2">
                    <FileUploadZone
                        label="Front and Back of Insurance Card"
                        description="Please upload the front and back of your insurance card."
                        setFiles={setInsuranceImages}
                        files={insuranceImages}
                        maxFiles={2}
                    />
                    {/* <input type="hidden" {...register("insurance.images.front")} /> */}
                    {/* <input type="hidden" {...register("insurance.images.back")} /> */}
                </div>

            </div>
        </>
    )
}

function ReviewInsurance({ form }: FormComponentProps<VerifyInsuranceFormData>) {
    const { getValues } = form;
    const values = getValues();
    const { setStep } = useFormStore();

    const insuranceImages = useFormStore((state) => state.files["insurance.images"]) || [];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div>
                <h3 className="text-lg font-semibold border-b pb-2">Review Your Information</h3>
                <p className="text-sm text-muted-foreground mt-1">
                    Please confirm all details are correct before submitting your intake.
                </p>
            </div>

            <div className="grid gap-6">
                <SummarySection title="Personal Information" onEdit={() => setStep(0)}>
                    <LabelValue label="First Name" value={values.contact.firstName} />
                    <LabelValue label="Last Name" value={values.contact.lastName} />
                    <LabelValue label="Email" value={values.contact.email} />
                    {values.contact.phone && <LabelValue label="Phone" value={values.contact.phone} />}
                    <LabelValue label="Date of Birth" value={values.contact.dob} />
                </SummarySection>

                <SummarySection title="Insurance Information" onEdit={() => setStep(1)}>
                    <LabelValue label="Type" value={values.insurance.type} />
                    <LabelValue label="Name" value={values.insurance.name} />
                    {values.insurance.plan && <LabelValue label="Plan" value={values.insurance.plan} />}
                    <LabelValue label="Member ID" value={values.insurance.memberId} />

                    {values.insurance.groupNumber && (
                        <LabelValue label="Group Number" value={values.insurance.groupNumber} />)}
                    <LabelValue label="Subscriber Relationship" value={values.insurance.subscriberRelationship} />

                    {values.insurance.subscriberRelationship !== "self" && (
                        <>
                            <LabelValue label="Subscriber Name" value={values.insurance.subscriber?.name!} />
                            <LabelValue label="Subscriber Date of Birth" value={values.insurance.subscriber?.dob!} />
                        </>
                    )}

                    {insuranceImages?.map((image, index) => (
                        <div key={index}>
                            <LabelValue label={`${index === 0 ? "Front" : "Back"} of Insurance Card`} value={image.file.name} />
                        </div>
                    ))}

                </SummarySection>
            </div>
        </div>
    )
}


export function VerifyInsuranceForm() {

    const STEPS = [
        {
            id: "personal",
            label: "Personal Information",
            icon: User,
            schema: InsuranceContactSchema,
            name: "contact" as const,
            validate: async (form: UseFormReturn<VerifyInsuranceFormData>) => {
                const { trigger, clearErrors } = form;
                const fields = getFields(InsuranceContactSchema);
                const fieldsToValidate = fields.map(key =>
                    "contact" + "." + key
                ) as Path<VerifyInsuranceFormData>[];

                const isValid = await trigger(fieldsToValidate.length > 0 ? fieldsToValidate : undefined);
                if (!isValid) {
                    // clearErrors(fieldsToValidate as Path<VerifyInsuranceFormData>[]);
                }
                return isValid;
            },
            component: InsuranceContactFields
        },
        {
            id: "insurance",
            label: "Insurance Information",
            icon: Shield,
            schema: InsuranceSchema,
            name: "insurance" as const,
            validate: async (form: UseFormReturn<VerifyInsuranceFormData>) => {
                const { trigger, clearErrors } = form;
                const fields = getFields(InsuranceSchema);
                const fieldsToValidate = fields.map(key =>
                    "insurance" + "." + key
                ) as Path<VerifyInsuranceFormData>[];

                const isValid = await trigger(fieldsToValidate.length > 0 ? fieldsToValidate : undefined);
                if (!isValid) {
                    // clearErrors(fieldsToValidate as Path<VerifyInsuranceFormData>[]);
                }
                return isValid;
            },
            component: InsuranceDetailFields
        },
        {
            id: "review",
            label: "Review",
            icon: ClipboardCheck,
            schema: z.object({}),
            validate: async (form: UseFormReturn<VerifyInsuranceFormData>) => {
                return true;
            },
            component: ReviewInsurance
        }
    ]

    const { files, setFiles } = useFormStore();

    const onSubmit = async (data: VerifyInsuranceFormData) => {
        const insuranceImages = files["insurance.images"] || [];
        //        const backFiles = files["insurance.images.back"] || [];

        data.insurance.images = [];
        for (let i = 0; i < insuranceImages.length; i++) {

            const updatedFile: UploadedFile = { ...insuranceImages[i], status: "uploading" };
            setFiles("insurance.images", [updatedFile]);

            try {
                const formData = new FormData();
                formData.append("file", insuranceImages[i].file);
                formData.append("entityType", "insurance_card");

                const response = await uploadFile(formData);
                const updatedFile: UploadedFile = { ...insuranceImages[i], status: "done", fileId: response.document.docId };
                setFiles("insurance.images", [updatedFile]);
                data.insurance.images.push({ docId: response.document.docId });
            } catch (error) {
                console.log("File upload failed", error);
            }
        }

        return await verifyInsurance(data);
    }

    return (

        <Card className="bg-card border-border">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Insurance Verification Request
                </CardTitle>
                <CardDescription>
                    Submit your insurance details for benefits verification prior to your appointment.
                </CardDescription>
            </CardHeader>

            <CardContent>

                <MultistepForm
                    contactType="verifyInsurance"
                    schema={VerifyInsuranceSchema}
                    defaultValues={{
                        contact: {
                            firstName: "",
                            lastName: "",
                            email: "",
                            phone: "",
                            dob: "",
                        },
                        insurance: {
                            name: "",
                            type: "primary",
                            memberId: "",
                            subscriberRelationship: "self",
                            subscriber: undefined,
                        },
                    }}
                    steps={STEPS}
                    onSubmit={onSubmit}
                />

            </CardContent>
        </Card>
    )
}