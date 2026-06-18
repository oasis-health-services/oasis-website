import { AlertCircle, Calendar, ClipboardCheck, CreditCard, PillBottle, PlugIcon, Shield, User, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { getFields, LabelValue, MultistepForm, SummarySection, validateFields, type FormComponentProps } from "./MultistepForm";
import { AdditionalInformationSchema, AppointmentPreferenceSchema, IntakeFormSchema, LeadSchema, PaymentInformationSchema, ServiceInformationSchema, type IntakeFormData } from "@/lib/schema";
import { Controller, type Path, type UseFormReturn } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import FieldError from "../FieldError";
import { formatAddress, formatPhoneNumber, formatPostalCode, isMinor } from "@/lib/utils";
import { useFormStore } from "@/store";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { SelectField } from "./SelectField";
import { RadioGroupField } from "./RadioGroupField";
import { Textarea } from "../ui/textarea";
import { CheckboxField } from "./CheckboxField";
import { EmergencyContactFieldsComponent, GuardianContactFieldsComponent, ReferrerContactFieldsComponent } from "./ContactFields";
import { InsuranceDetailFieldsComponent } from "./InsuranceFields";
import { motion } from "framer-motion";
import { FormattedFieldComponent } from "./FormattedField";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { z } from "zod";
import type { UploadedFile } from "./FileUploadZone";
import { submitIntakeForm, uploadFile } from "@/api";
import { ReviewSummaryCard } from "./ReviewSummaryCard";
import { useEffect, useState } from "react";

const REFERRAL_SOURCE_OPTIONS = [
    { value: "ALMA", label: "ALMA" },
    { value: "BetterHelp", label: "Better Help" },
    { value: "Facebook", label: "Facebook" },
    { value: "Friend", label: "Friend" },
    { value: "Instagram", label: "Instagram" },
    { value: "Insurance", label: "Insurance" },
    { value: "Google Ad", label: "Google Ad" },
    { value: "Google Search", label: "Google Search" },
    { value: "Linked-In", label: "Linked-In" },
    { value: "Mental Health Match", label: "Mental Health Match" },
    { value: "Psychology Today", label: "Psychology Today" },
    { value: "Referrer", label: "Doctor/Therapist" },
    { value: "Relative", label: "Relative" },
    { value: "Talkspace", label: "Talkspace" },
    { value: "Twitter", label: "Twitter" },
    { value: "Website", label: "Website" },
    { value: "YouTube", label: "YouTube" },
];

const STATE_OPTIONS = [
    { value: "AZ", label: "Arizona" },
    { value: "CA", label: "California" },
    { value: "FL", label: "Florida" },
    { value: "GA", label: "Georgia" },
    { value: "MD", label: "Maryland" },
    { value: "MA", label: "Massachusetts" },
    { value: "NJ", label: "New Jersy" },
    { value: "NY", label: "New York" },
    { value: "WA", label: "Washington" }
];

const SERVICES_REQUESTED_OPTIONS = [
    { value: "ADHD", label: "ADHD" },
    { value: "Anxiety", label: "Anxiety" },
    { value: "Bipolar Disorder", label: "Bipolar Disorder" },
    { value: "Depression", label: "Depression" },
    { value: "Schizophrenia", label: "Schizophrenia" },
    { value: "Substance Use", label: "Substance Use" },
    { value: "Other", label: "Other" },
];

const HOW_SOON_OPTIONS = [
    { value: "This Week", label: "This Week" },
    { value: "1-2 Weeks", label: "One to Two Weeks" },
    { value: "2-4 Weeks", label: "Two to Four Weeks" },
    { value: "4 Weeks or More", label: "Four Weeks or More" },
]

const TIMEZONE_OPTIONS = [
    { value: "EST", label: "Eastern Time Zone" },
    { value: "CST", label: "Central Time Zone" },
    { value: "MST", label: "Mountain Time Zone" },
    { value: "PST", label: "Pacific Time Zone" },
]

const APPOINTMENT_MODE_OPTIONS = [
    { value: "in-person", label: "In Person" },
    { value: "telehealth", label: "Telehealth/Virtual" },
    { value: "either", label: "No Preference" },
];

const PAYMENT_METHOD_OPTIONS = [
    { value: "insurance", label: "Insurance" },
    { value: "self-pay", label: "Self Pay" },
    // { value: "eap", label: "Employee Assistance Program (EAP)" },
];

const PAYMENT_METHODS = ["Visa", "Mastercard", "American Express", "Discover", "HSA"];

export function LeadFieldsComponent({ form }: FormComponentProps<IntakeFormData>) {

    const { register, control, formState: { errors } } = form;

    return (
        <div className="space-y-6">

            <h3 className="text-lg font-semibold text-foreground pb-2 border-b border-border">
                Personal Information
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">

                <div className="space-y-2">
                    <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="lead_firstName">First Name *</Label>
                    <Input
                        id="lead_firstName"
                        {...register("lead.firstName")}
                        placeholder="John"
                    />
                    <FieldError error={errors.lead?.firstName} />
                </div>

                <div className="space-y-2">
                    <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="lead_lastName">Last Name *</Label>
                    <Input
                        id="lead_lastName"
                        {...register("lead.lastName")}
                        placeholder="Doe"
                    />
                    <FieldError error={errors.lead?.lastName} />
                </div>

                <div className="space-y-2">
                    <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="lead_preferredName">Preferred Name</Label>
                    <Input
                        id="lead_preferredName"
                        {...register("lead.preferredName")}
                        placeholder="Doe"
                    />
                    <FieldError error={errors.lead?.preferredName} />
                </div>

                <div className="space-y-2">
                    <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="lead_dob">Date of Birth *</Label>
                    <Input
                        id="lead_dob"
                        type="date"
                        className="justify-between"
                        {...register("lead.dob")}
                        placeholder="MM/DD/YYYY"
                    />
                    <FieldError error={errors.lead?.dob} />
                </div>

                <div className="space-y-2">
                    <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="lead_email">Email Address *</Label>
                    <Input
                        id="lead_email"
                        type="email"
                        {...register("lead.email")}
                        placeholder="john@example.com"
                    />
                    <FieldError error={errors.lead?.email} />
                </div>
                <div className="space-y-2">
                    <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="lead_phone">Phone Number *</Label>
                    <Controller
                        name="lead.phone"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <Input
                                id="lead_phone"
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
                    <FieldError error={errors.lead?.phone} />
                </div>

                <div className="space-y-2">
                    <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="lead_birthSex">Birth Sex *</Label>
                    <RadioGroupField
                        form={form}
                        name="lead.birthSex"
                        options={[
                            { value: "male", label: "Male" },
                            { value: "female", label: "Female" },
                        ]}
                    />
                    <FieldError error={errors.lead?.birthSex} />
                </div>

                <div className="space-y-2">
                    <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="lead_genderIdentity">Gender Identity (Optional)</Label>
                    <Input
                        id="lead_genderIdentity"
                        type="text"
                        {...register("lead.genderIdentity")}
                        placeholder="Enter gender identity"
                        maxLength={20}
                    />
                    <FieldError error={errors.lead?.genderIdentity} />
                </div>

                <div className="space-y-2 sm:col-span-2">
                    <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="lead_genderIdentity">Address *</Label>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Input
                                id="lead_address"
                                {...register("lead.address.street")}
                                placeholder="Street address"
                            />
                            <FieldError error={errors.lead?.address?.street} />
                        </div>
                        <div className="space-y-2">
                            <Input
                                id="lead_city"
                                {...register("lead.address.city")}
                                placeholder="City"
                            />
                            <FieldError error={errors.lead?.address?.city} />
                        </div>
                        <div className="space-y-2">
                            <Controller
                                name="lead.address.state"
                                control={control}
                                render={({ field }) => (
                                    <Select onValueChange={field.onChange} defaultValue="" value={field.value}>
                                        <SelectTrigger id="state" className="w-full">
                                            <SelectValue placeholder="Select state" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {STATE_OPTIONS.map((option) => (
                                                <SelectItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            <FieldError error={errors.lead?.address?.state} />
                        </div>
                        <div className="space-y-2">
                            <FormattedFieldComponent
                                form={form}
                                name="lead.address.postalCode"
                                type="text"
                                formatter={formatPostalCode}
                                placeholder="Postal Code"
                                parser={(e) => e.target.value.replace(/\D/g, "").slice(0, 10)}
                            />
                            <FieldError error={errors.lead?.address?.postalCode} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function AdditionalInformationComponent({ form }: FormComponentProps<IntakeFormData>) {
    const { watch, formState: { errors } } = form;

    const dob = watch("lead.dob");
    const hasEmergencyContact = watch("additionalInformation.hasEmergencyContact");
    const source = watch("additionalInformation.source");

    const isReferrer = source === "Referrer";
    const isMinorPatient = isMinor(dob);

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="additionalInformation_source">How did you hear about us?</Label>
                <SelectField
                    form={form}
                    name="additionalInformation.source"
                    placeholder="Select an option"
                    options={REFERRAL_SOURCE_OPTIONS}
                    className="w-full sm:w-1/2"
                />
                <FieldError error={errors.additionalInformation?.source} />
            </div>

            {isReferrer && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2"
                >
                    <h3 className="mt-5 text-md font-semibold text-foreground pb-2 border-b border-border mb-4">
                        Referrer Information
                    </h3>
                    <ReferrerContactFieldsComponent prefix="additionalInformation" form={form} />
                </motion.div>
            )}

            <div className="space-y-2">
                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="additionalInformation_hasEmergencyContact">Do you have an emergency contact? *</Label>
                <RadioGroupField
                    form={form}
                    name="additionalInformation.hasEmergencyContact"
                    options={[
                        { value: true, label: "Yes" },
                        { value: false, label: "No" },
                    ]}
                />
                <FieldError error={errors.additionalInformation?.hasEmergencyContact} />
            </div>

            {hasEmergencyContact ? (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}

                    className="space-y-2"
                >
                    <h3 className="mt-5 text-md font-semibold text-foreground pb-2 border-b border-border mb-4">
                        Emergency Contact Details
                    </h3>
                    <div className="space-y-2">
                        <EmergencyContactFieldsComponent form={form} />
                    </div>
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2"
                >
                    <Alert className="bg-amber-50 border-amber-200 text-amber-800">
                        <AlertTitle className="flex items-center gap-2"> <AlertCircle className="h-4 w-4" /> Recommended</AlertTitle>
                        <AlertDescription>
                            <p>Please note that we recommend that our patients provide the contact information of someone we can reach out to in case of an emergency.</p>
                        </AlertDescription>
                    </Alert>
                </motion.div>
            )}

            {isMinorPatient && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2"
                >
                    <h3 className="mt-5 text-md font-semibold text-foreground pb-2 border-b border-border mb-4">
                        Parent/Guardian Information
                    </h3>
                    <Alert className="bg-blue-50 border-blue-200 text-blue-800">
                        <AlertTitle className="flex items-center gap-2"> <AlertCircle className="h-4 w-4" /> Required</AlertTitle>
                        <AlertDescription>
                            <p>If the patient is under 18, please provide the contact information of at least one parent or legal guardian.</p>
                            <FieldError error={errors.additionalInformation?.guardians} />
                        </AlertDescription>
                    </Alert>
                    <div className="space-y-2">
                        <GuardianContactFieldsComponent form={form} />
                    </div>
                </motion.div>
            )}

        </div>
    )
}

function ServiceInformationComponent({ form }: FormComponentProps<IntakeFormData>) {
    const { register, formState: { errors }, watch } = form;
    const courtRecommended = watch("serviceInformation.courtRecommended");
    const reasons = watch("serviceInformation.reasons");
    const isOther = reasons?.includes("Other");

    return (
        <div className="space-y-6">

            <div className="space-y-2">
                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="serviceInformation_courtRecommended">Court Recommended *</Label>
                <RadioGroupField
                    form={form}
                    name="serviceInformation.courtRecommended"
                    options={[
                        { value: "yes", label: "Yes" },
                        { value: "no", label: "No" },
                    ]}
                />
                <FieldError error={errors.serviceInformation?.courtRecommended} />

                {courtRecommended === "yes" && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-2 mt-4"
                    >
                        <Alert className="bg-amber-50 border-amber-200 text-amber-800">
                            <AlertTitle className="flex items-center gap-2"> <AlertCircle className="h-4 w-4" />Caution</AlertTitle>
                            <AlertDescription>
                                <p>Please note that we may not be equipped to provide the level of care you need. Especially if you have been ordered to attend an intensive program</p>
                            </AlertDescription>
                        </Alert>
                    </motion.div>
                )}
            </div>

            <div className="space-y-2">
                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="serviceInformation_currentConditions">List any diagnosis you may have</Label>
                <Textarea
                    id="serviceInformation_currentConditions"
                    {...register("serviceInformation.currentConditions")}
                    placeholder="List any diagnosis you may have and when/how it was identified"
                    rows={5}
                    maxLength={1000}
                />
                <FieldError error={errors.serviceInformation?.currentConditions} />
            </div>

            <div className="space-y-2">
                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="serviceInformation_currentMedications">List current medications</Label>
                <Textarea
                    id="serviceInformation_currentMedications"
                    {...register("serviceInformation.currentMedications")}
                    placeholder="List your current medications, dosage, and how often you take them"
                    rows={5}
                    maxLength={1000}
                />
                <FieldError error={errors.serviceInformation?.currentMedications} />
            </div>

            <div className="space-y-2">
                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="servicesRequested_reasons">Reasons *</Label>
                <p className="text-sm text-muted-foreground italic">Select all that apply</p>
                <CheckboxField
                    form={form}
                    name="serviceInformation.reasons"
                    options={SERVICES_REQUESTED_OPTIONS}
                />
                <FieldError error={errors.serviceInformation?.reasons} />
            </div>

            <div className="space-y-2">
                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="servicesRequested_description">Describe your needs {isOther && "*"}</Label>
                <Textarea
                    id="servicesRequested_description"
                    {...register("serviceInformation.description")}
                    placeholder="In 1000 characters or less, provide a brief description on what you need and how we can help. Include any medications you want your provider to prescribe"
                    rows={5}
                    maxLength={1000}
                />
                <p className="text-sm text-muted-foreground italic">Brief description of your needs and any medications you need</p>
                <FieldError error={errors.serviceInformation?.description} />
            </div>
        </div>
    )
}

function PaymentInformationComponent({ form }: FormComponentProps<IntakeFormData>) {

    const { register, watch, formState: { errors } } = form;

    const method = watch("paymentInformation.method");

    const IsInsurance = method === "insurance";
    const IsSelfPay = method === "self-pay";
    const IsEAP = method === "eap";

    return (
        <div className="space-y-6">

            <div className="space-y-2">
                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="paymentInformation_method">How do you plan to pay for services? *</Label>
                <RadioGroupField
                    form={form}
                    name="paymentInformation.method"
                    options={PAYMENT_METHOD_OPTIONS}
                />
                <FieldError error={errors.paymentInformation?.method} />
            </div>

            {IsSelfPay && (
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }} className="space-y-6">

                    <h3 className="mt-10 text-md font-semibold text-foreground pb-2 border-b border-border">
                        Self Pay Information
                    </h3>

                    <div className="mt-8">
                        <Card className="bg-card border-border">
                            <CardContent className="p-6">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-primary/10">
                                            <CreditCard className="h-5 w-5 text-primary" aria-hidden="true" />
                                        </div>
                                        <span className="font-medium text-foreground">Payment Methods</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 sm:ml-auto">
                                        {PAYMENT_METHODS.map((method) => (
                                            <span
                                                key={method}
                                                className="text-sm text-muted-foreground"
                                            >
                                                {method}
                                                {method !== PAYMENT_METHODS[PAYMENT_METHODS.length - 1] && (
                                                    <span className="ml-2 text-border">|</span>
                                                )}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </motion.div>
            )}

            {IsEAP && (

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }} className="space-y-6">
                    <h3 className="mt-10 text-md font-semibold text-foreground pb-2 border-b border-border mb-4">
                        EAP Information
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-4">

                        <div className="space-y-2">
                            <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="paymentInformation_eap_employer">Employer *</Label>
                            <Input
                                id="paymentInformation_eap_employer"
                                {...register("paymentInformation.eap.employer")}
                                placeholder="Employer"
                            />
                            <FieldError error={errors.paymentInformation?.eap?.employer} />
                        </div>

                        <div className="space-y-2">
                            <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="paymentInformation_eap_authorizationNumber">Authorization Number *</Label>
                            <Input
                                id="paymentInformation_eap_authorizationNumber"
                                {...register("paymentInformation.eap.authorizationNumber")}
                                placeholder="Authorization Number"
                            />
                            <FieldError error={errors.paymentInformation?.eap?.authorizationNumber} />
                        </div>
                    </div>
                </motion.div>
            )}

            {(IsInsurance || IsEAP) && (
                <InsuranceDetailFieldsComponent prefix="paymentInformation" form={form} />
            )}

        </div>
    )
}

export function AppointmentPreferenceComponent({ form }: FormComponentProps<IntakeFormData>) {

    const { watch, formState: { errors } } = form;

    const mode = watch("appointmentPreference.mode");
    const inPerson = mode === "in-person";

    return (
        <div className="space-y-6 gap-6">

            <div className="space-y-2">
                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="appointmentPreference_mode">How would you like to be seen? *</Label>
                <RadioGroupField
                    form={form}
                    name="appointmentPreference.mode"
                    options={APPOINTMENT_MODE_OPTIONS}
                />
                <FieldError error={errors.appointmentPreference?.mode} />
            </div>

            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-2 mt-4"
            >
                <Alert className="bg-amber-50 border-amber-200 text-amber-800">
                    <AlertTitle className="flex items-center gap-2"> <AlertCircle className="h-4 w-4" />Caution</AlertTitle>
                    <AlertDescription>
                        <p>
                            {inPerson && (
                                <span className="font-bold">Please note that we Office visits are only available in Georgia by appointment only.&nbsp;</span>
                            )}
                            Although we can't guarantee your first choice of appointment time, we will do our best to accommodate your schedule.</p>
                    </AlertDescription>
                </Alert>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="appointmentPreference_when">How soon can you come in? *</Label>
                    <RadioGroupField
                        form={form}
                        name="appointmentPreference.when"
                        options={HOW_SOON_OPTIONS}
                        className="flex flex-col gap-2"
                    />
                    <FieldError error={errors.appointmentPreference?.when} />
                </div>

                <div className="space-y-2">
                    <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="appointmentPreference_dayOfWeek">What day of the week is best for you? *</Label>
                    <CheckboxField
                        form={form}
                        name="appointmentPreference.dayOfWeek"
                        options={[
                            { value: "Monday", label: "Monday" },
                            { value: "Tuesday", label: "Tuesday" },
                            { value: "Wednesday", label: "Wednesday" },
                            { value: "Thursday", label: "Thursday" },
                            { value: "Friday", label: "Friday" },
                        ]}
                        className="flex flex-col gap-2"
                    />
                    <FieldError error={errors.appointmentPreference?.dayOfWeek} />
                </div>

                <div className="space-y-2">
                    <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="appointmentPreference_timeOfDay">What time of the day is best for you? *</Label>
                    <CheckboxField
                        form={form}
                        name="appointmentPreference.timeOfDay"
                        options={[
                            { value: "Morning", label: "Morning" },
                            { value: "Afternoon", label: "Afternoon" },
                            { value: "Evening", label: "Evening" },
                        ]}
                        className="flex flex-col sm:flex-row gap-2 sm:justify-between sm:pr-10 sm:items-center"
                    />
                    <FieldError error={errors.appointmentPreference?.timeOfDay} />
                </div>

                <div className="space-y-2">
                    <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="appointmentPreference_timezone">What is your time zone? *</Label>
                    <SelectField
                        form={form}
                        name="appointmentPreference.timezone"
                        placeholder="Select your timezone"
                        options={TIMEZONE_OPTIONS}
                        className="w-full sm:w-1/2"
                    />
                    <FieldError error={errors.appointmentPreference?.timezone} />
                </div>
            </div>
        </div>
    )
}

function ReviewIntakeComponent({ form }: FormComponentProps<IntakeFormData>) {
    const { getValues } = form;
    const values = getValues();
    const { setStep } = useFormStore();

    const insuranceImages = useFormStore((state) => state.files["paymentInformation.insurance.images"]) || [];

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
                    <ReviewSummaryCard
                        title=""
                        items={[
                            { label: "Name", value: `${values.lead.firstName!} ${values.lead.lastName!}` },
                            { label: "Preferred Name", value: values.lead.preferredName },
                            { label: "Email", value: values.lead.email },
                            { label: "Phone", value: formatPhoneNumber(values.lead.phone!) },
                            { label: "Date of Birth", value: values.lead.dob },
                            { label: "Birth Sex", value: values.lead.birthSex?.toUpperCase() },
                            { label: "Gender Identity", value: values.lead.genderIdentity },
                            { label: "Address", value: formatAddress(values.lead.address) },
                        ].filter(item => item.value)}
                    />
                </SummarySection>

                <SummarySection title="Additional Information" onEdit={() => setStep(1)}>
                    <LabelValue label="Source" value={values.additionalInformation.source} />

                    <div className="mt-4 space-y-6">
                        {values.additionalInformation.referrer && (
                            <ReviewSummaryCard
                                title="REFERRER INFORMATION"
                                items={[
                                    { label: "Name", value: `${values.additionalInformation?.referrer?.name}` },
                                    { label: "Preferred Name", value: values.additionalInformation?.referrer?.specialty },
                                    { label: "Email", value: values.additionalInformation?.referrer?.practiceName },
                                    { label: "Phone", value: formatPhoneNumber(values.additionalInformation?.referrer?.phone) },
                                    { label: "Date of Birth", value: values.additionalInformation?.referrer?.email },
                                    { label: "Birth Sex", value: values.additionalInformation?.referrer?.phone },
                                    { label: "Gender Identity", value: values.additionalInformation?.referrer?.phone },
                                ].filter(item => item.value)}
                            />
                        )}

                        {values.additionalInformation.emergency && (
                            <ReviewSummaryCard
                                title="Emergency Contact"
                                items={[
                                    { label: "Name", value: `${values.additionalInformation?.emergency?.firstName} ${values.additionalInformation?.emergency?.lastName}` },
                                    { label: "Relationship", value: values.additionalInformation?.emergency?.relationship?.toUpperCase() },
                                    { label: "Phone", value: formatPhoneNumber(values.additionalInformation?.emergency?.phone) },
                                    { label: "Email", value: values.additionalInformation?.emergency?.email },
                                ].filter(item => item.value)}
                            />
                        )}

                        {values.additionalInformation.guardians?.map((guardian, index) => (
                            <ReviewSummaryCard
                                key={index}
                                title={`Guardian ${index + 1}`}
                                items={[
                                    { label: "Name", value: `${guardian.firstName} ${guardian.lastName}` },
                                    { label: "Relationship", value: guardian.relationship?.toUpperCase() },
                                    { label: "Phone", value: formatPhoneNumber(guardian.phone!) },
                                    { label: "Email", value: guardian.email },
                                ]}
                            />
                        ))}


                    </div>
                </SummarySection>

                <SummarySection title="Service Information" onEdit={() => setStep(2)}>
                    <ReviewSummaryCard
                        title=""
                        items={[
                            { label: "Court Recommended", value: values.serviceInformation.courtRecommended === "yes" ? "Yes" : "No" },
                            { label: "Current Diagnosis", value: values.serviceInformation.currentConditions },
                            { label: "Current Medications", value: values.serviceInformation.currentMedications },
                            { label: "Reasons", value: values.serviceInformation.reasons.join(", ") },
                            { label: "Describe your needs", value: values.serviceInformation.description },
                        ].filter(item => item.value)}
                    />
                </SummarySection>

                <SummarySection title="Appointment Preference" onEdit={() => setStep(3)}>
                    <ReviewSummaryCard
                        title=""
                        items={[
                            { label: "Mode", value: APPOINTMENT_MODE_OPTIONS.find((option) => option.value === values.appointmentPreference.mode)?.label },
                            { label: "When", value: values.appointmentPreference.when },
                            { label: "Day of Week", value: values.appointmentPreference.dayOfWeek.join(", ") },
                            { label: "Time of Day", value: values.appointmentPreference.timeOfDay.join(", ") },
                            { label: "Time Zone", value: TIMEZONE_OPTIONS.find((option) => option.value === values.appointmentPreference.timezone)?.label },
                        ].filter(item => item.value)}
                    />
                </SummarySection>

                <SummarySection title="Payment Information" onEdit={() => setStep(4)}>
                    <LabelValue label="Method" value={PAYMENT_METHOD_OPTIONS.find((option) => option.value === values.paymentInformation.method)?.label} />

                    {values.paymentInformation.method === "eap" && (
                        <div className="mt-4 space-y-6">
                            <ReviewSummaryCard
                                title="EAP Information"
                                items={[
                                    { label: "Employer", value: values.paymentInformation.eap?.employer },
                                    { label: "Authorization #", value: values.paymentInformation.eap?.authorizationNumber },
                                ]}
                            />
                        </div>
                    )}

                    {(values.paymentInformation.method === "insurance" || values.paymentInformation.method === "eap") && (
                        <div className="mt-4 space-y-6">

                            <ReviewSummaryCard
                                title="Insurance Information"
                                items={[
                                    { label: "Type", value: values.paymentInformation.insurance?.type },
                                    { label: "Carrier", value: values.paymentInformation.insurance?.name },
                                    { label: "Plan", value: values.paymentInformation.insurance?.plan },
                                    { label: "Member ID", value: values.paymentInformation.insurance?.memberId },
                                    { label: "Group #", value: values.paymentInformation.insurance?.groupNumber },
                                    { label: "Subscriber Relationship", value: values.paymentInformation.insurance?.subscriberRelationship?.toUpperCase() },
                                    { label: "Subscriber Name", value: values.paymentInformation.insurance?.subscriber?.name },
                                    { label: "Subscriber DOB", value: values.paymentInformation.insurance?.subscriber?.dob },
                                    { label: "Insurance Card (Front)", value: insuranceImages?.length > 0 ? insuranceImages[0].file.name : undefined },
                                    { label: "Insurance Card (Back)", value: insuranceImages?.length > 1 ? insuranceImages[1].file.name : undefined },
                                ].filter(item => item.value)}
                            />
                        </div>
                    )}
                </SummarySection>
            </div>
        </div>
    )
}

export function StartNowForm() {

    const [source, setSource] = useState("Website");

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const source = searchParams.get("source") || "Website";
        setSource(source);
    }, []);


    const STEPS = [
        {
            id: "personal",
            label: "Personal",
            icon: User,
            schema: LeadSchema,
            name: "lead" as const,
            validate: async (form: UseFormReturn<IntakeFormData>) => {
                const { setValue, trigger } = form;
                const fields = getFields(LeadSchema);
                const fieldsToValidate = fields.map(key =>
                    "lead" + "." + key
                ) as Path<IntakeFormData>[];

                const isValid = await trigger(fieldsToValidate.length > 0 ? fieldsToValidate : undefined);

                const isMinorPatient = isMinor(form.watch("lead.dob"));
                const guardians = form.watch("additionalInformation.guardians");

                setValue("additionalInformation.source", source);
                if (isMinorPatient) {
                    if (!guardians || guardians.length == 0) {
                        console.log("Adding primary patient ******");
                        setValue("additionalInformation.guardians", [{
                            firstName: "", lastName: "", email: "", relationship: undefined, hasLegalDocumentation: true
                        }])
                    }
                }

                return isValid;
            },
            component: LeadFieldsComponent
        },
        {
            id: "additionalInformation",
            label: "Additional",
            icon: Users,
            schema: AdditionalInformationSchema,
            name: "additionalInformation" as const,
            validate: async (form: UseFormReturn<IntakeFormData>) => {
                const { setValue, trigger } = form;

                const isMinorPatient = isMinor(form.watch("lead.dob"));
                const guardians = form.watch("additionalInformation.guardians");
                const hasEmergencyContact = form.watch("additionalInformation.hasEmergencyContact");
                const source = form.watch("additionalInformation.source");

                const isReferrer = source === "Referrer";

                if (!isReferrer) {
                    setValue("additionalInformation.referrer", undefined);
                }

                if (!hasEmergencyContact) setValue("additionalInformation.emergency", undefined);
                if (!isMinorPatient) {
                    setValue("additionalInformation.guardians", undefined);
                }

                const fields = getFields(AdditionalInformationSchema);
                const fieldsToValidate = fields.map(key =>
                    "additionalInformation" + "." + key
                ) as Path<IntakeFormData>[];

                const isValid = await trigger(fieldsToValidate.length > 0 ? fieldsToValidate : undefined);

                if (isMinorPatient && (!guardians || guardians?.length === 0)) {
                    return false;
                }

                return isValid;
            },
            component: AdditionalInformationComponent
        },
        {
            id: "serviceInformation",
            label: "Service",
            icon: PillBottle,
            schema: ServiceInformationSchema,
            name: "serviceInformation" as const,
            validate: async (form: UseFormReturn<IntakeFormData>) => {
                const { setValue, watch, trigger } = form;
                const fields = getFields(ServiceInformationSchema);
                const fieldsToValidate = fields.map(key =>
                    "serviceInformation" + "." + key
                ) as Path<IntakeFormData>[];

                const isValid = await trigger(fieldsToValidate.length > 0 ? fieldsToValidate : undefined);

                const mode = watch("appointmentPreference.mode");
                if (!mode) {
                    setValue("appointmentPreference.mode", "either");
                }

                return isValid;
            },
            component: ServiceInformationComponent
        },
        {
            id: "appointmentPreference",
            label: "Appointment",
            icon: Calendar,
            schema: AppointmentPreferenceSchema,
            name: "appointmentPreference" as const,
            validate: async (form: UseFormReturn<IntakeFormData>) => {
                const { trigger } = form;
                const fields = getFields(AppointmentPreferenceSchema);
                const fieldsToValidate = fields.map(key =>
                    "appointmentPreference" + "." + key
                ) as Path<IntakeFormData>[];

                const isValid = await trigger(fieldsToValidate.length > 0 ? fieldsToValidate : undefined);
                return isValid;
            },
            component: AppointmentPreferenceComponent
        },
        {
            id: "paymentInformation",
            label: "Payment",
            icon: PlugIcon,
            schema: PaymentInformationSchema,
            name: "paymentInformation" as const,
            validate: async (form: UseFormReturn<IntakeFormData>) => {
                const { setValue, watch, getValues } = form;

                const values = getValues();

                const method = watch("paymentInformation.method");
                if (method === "self-pay") {
                    setValue("paymentInformation.insurance", undefined);
                    setValue("paymentInformation.eap", undefined);
                } else {
                    if (!values.paymentInformation.insurance?.images) {
                        setValue("paymentInformation.insurance.images", []);
                    }
                }

                return await validateFields(form, PaymentInformationSchema, "paymentInformation");
            },
            component: PaymentInformationComponent
        },
        {
            id: "review",
            label: "Review",
            icon: ClipboardCheck,
            schema: z.object({}),
            validate: async (_form: UseFormReturn<IntakeFormData>) => {
                return true;
            },
            component: ReviewIntakeComponent
        }
    ]

    const { files, setFiles, currentStep } = useFormStore();

    const onSubmit = async (data: IntakeFormData) => {

        if (currentStep < STEPS.length - 1) {
            return;
        }

        if (data.paymentInformation.method === "insurance") {
            const insuranceImages = files["paymentInformation.insurance.images"] || [];
            for (let i = 0; i < insuranceImages.length; i++) {

                if (insuranceImages[i].status === "done" && insuranceImages[i].docId) {
                    data.paymentInformation.insurance?.images?.push({ docId: insuranceImages[i].docId! });
                    continue;
                }

                const updatedFile: UploadedFile = { ...insuranceImages[i], status: "uploading" };
                setFiles("paymentInformation.insurance.images", [updatedFile]);

                try {
                    const formData = new FormData();
                    formData.append("file", insuranceImages[i].file);
                    formData.append("entityType", "insurance_card");

                    const response = await uploadFile(formData);
                    const updatedFile: UploadedFile = { ...insuranceImages[i], status: "done", docId: response.document.docId };
                    setFiles("paymentInformation.insurance.images", [updatedFile]);
                    data.paymentInformation.insurance?.images?.push({ docId: response.document.docId });
                } catch (error) {
                    console.log("File upload failed", error);
                }
            }
        }

        return await submitIntakeForm(data);
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

                <MultistepForm
                    contactType="intake"
                    schema={IntakeFormSchema}
                    steps={STEPS}
                    onSubmit={onSubmit}
                />

            </CardContent>
        </Card>
    )

}