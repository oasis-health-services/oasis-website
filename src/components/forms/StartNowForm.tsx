import { Calendar, ClipboardCheck, CreditCard, PillBottle, PlugIcon, Shield, User, UserPlus, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { getFields, MultistepForm, type FormComponentProps } from "./MultistepForm";
import { AdditionalInformationSchema, AppointmentPreferenceSchema, IntakeFormSchema, LeadSchema, PaymentInformationSchema, ServiceInformationSchema, type IntakeFormData } from "@/lib/schema";
import { Controller, type Path, type UseFormReturn } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import FieldError from "../FieldError";
import { formatPhoneNumber, isMinor } from "@/lib/utils";
import { useFormStore } from "@/store";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { SelectField } from "./SelectField";
import { RadioGroupField } from "./RadioGroupField";
import { Textarea } from "../ui/textarea";
import { CheckboxField } from "./CheckboxField";
import { EmergencyContactFieldsComponent, GuardianContactFieldsComponent, ReferrerContactFieldsComponent } from "./ContactFields";
import { InsuranceDetailFieldsComponent } from "./InsuranceFields";
import { motion } from "framer-motion";

const REFERRAL_SOURCE_OPTIONS = [
    { value: "ALMA", label: "ALMA" },
    { value: "BetterHelp", label: "Better Help" },
    { value: "Facebook", label: "Facebook" },
    { value: "Instagram", label: "Instagram" },
    { value: "Insurance", label: "Insurance" },
    { value: "Friend", label: "Friend" },
    { value: "Google Ad", label: "Google Ad" },
    { value: "Google Search", label: "Google Search" },
    { value: "Linked-In", label: "Linked-In" },
    { value: "Mental Health Match", label: "Mental Health Match" },
    { value: "Medical Doctor", label: "Medical Doctor" },
    { value: "Psychology Today", label: "Psychology Today" },
    { value: "Relative", label: "Relative" },
    { value: "Talkspace", label: "Talkspace" },
    { value: "Therapist", label: "Therapist" },
    { value: "Twitter", label: "Twitter" },
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

const PAYMENT_METHODS = ["Visa", "Mastercard", "American Express", "Discover", "HSA"];

export function LeadFields({ form }: FormComponentProps<IntakeFormData>) {

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
                    <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="lead_preferredName">Preferred Name *</Label>
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
                    <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="lead_phone">Phone Number</Label>
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

                <div className="space-y-2 sm:col-span-2">
                    <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="lead_genderIdentity">Address *</Label>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Input
                                id="lead_address"
                                {...register("lead.address.street")}
                                placeholder="Street address"
                            />
                            <FieldError error={errors.lead?.address} />
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
                            <Input
                                id="lead_zip"
                                {...register("lead.address.postalCode")}
                                placeholder="Postal Code"
                            />
                            <FieldError error={errors.lead?.address?.postalCode} />
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="lead_source">How did you hear about us? *</Label>
                    <SelectField
                        form={form}
                        name="lead.source"
                        placeholder="Select an option"
                        options={REFERRAL_SOURCE_OPTIONS}
                    />
                    <FieldError error={errors.lead?.source} />
                </div>


            </div>
        </div>
    )
}

function ClinicalHistoryComponent({ form }: FormComponentProps<IntakeFormData>) {
    const { register, control, getValues, watch, setValue, setError, clearErrors, formState: { errors } } = form;
    return (
        <div className="space-y-6">

            <div className="space-y-2">
                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="clinicalHistory_courtRecommended">Court Recommended *</Label>
                <RadioGroupField
                    form={form}
                    name="clinicalHistory.courtRecommended"
                    options={[
                        { value: true, label: "Yes" },
                        { value: false, label: "No" },
                    ]}
                />
                <FieldError error={errors.clinicalHistory?.courtRecommended} />
            </div>

            <div className="space-y-2">
                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="clinicalHistory_currentConditions">Current Diagnosis and Medications *</Label>
                <Textarea
                    id="clinicalHistory_currentConditions"
                    {...register("clinicalHistory.currentConditions")}
                    placeholder="Current Conditions"
                    rows={5}
                    maxLength={1000}
                />
                <FieldError error={errors.clinicalHistory?.currentConditions} />
            </div>


        </div>
    )
}

function AdditionalInformationComponent({ form }: FormComponentProps<IntakeFormData>) {
    const { watch, formState: { errors } } = form;

    const dob = watch("lead.dob");
    const hasEmergencyContact = watch("additionalInformation.hasEmergencyContact");
    const source = watch("additionalInformation.source");

    const isReferrer = source === "Therapist" || source == "Medical Doctor";
    const isMinorPatient = isMinor(dob);

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="additionalInformation_source">How did you hear about us? *</Label>
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
                    <ReferrerContactFieldsComponent form={form} />
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

            {hasEmergencyContact && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2"
                >
                    <h3 className="mt-5 text-md font-semibold text-foreground pb-2 border-b border-border mb-4">
                        Emergency Contact Details
                    </h3>
                    <div className="space-y-2">
                        <EmergencyContactFieldsComponent form={form} />
                    </div>
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
                    <div className="space-y-2">
                        <GuardianContactFieldsComponent form={form} />
                    </div>
                </motion.div>
            )}

        </div>
    )
}

function ServiceInformationComponent({ form }: FormComponentProps<IntakeFormData>) {
    const { register, formState: { errors } } = form;
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
            </div>

            <div className="space-y-2">
                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="serviceInformation_currentConditions">Current Diagnosis and Medications</Label>
                <Textarea
                    id="serviceInformation_currentConditions"
                    {...register("serviceInformation.currentConditions")}
                    placeholder="List your any current diagnosis and medications you currently take"
                    rows={5}
                    maxLength={1000}
                />
                <FieldError error={errors.serviceInformation?.currentConditions} />
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
                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="servicesRequested_description">Describe your needs</Label>
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

    const { register, control, getValues, watch, setValue, setError, clearErrors, formState: { errors } } = form;

    const method = watch("paymentInformation.method");
    const source = watch("paymentInformation.source");

    const IsInsurance = method === "insurance";
    const IsSelfPay = method === "self-pay";
    const isReferrer = source === "Therapist" || source == "Medical Doctor";

    return (
        <div className="space-y-6">

            <div className="space-y-2">
                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="paymentInformation_source">How did you hear about us? *</Label>
                <SelectField
                    form={form}
                    name="paymentInformation.source"
                    placeholder="Select an option"
                    options={REFERRAL_SOURCE_OPTIONS}
                    className="w-full sm:w-1/2"
                />
                <FieldError error={errors.paymentInformation?.source} />
            </div>

            {isReferrer && (
                <div>
                    <h3 className="mt-10 text-md font-semibold text-foreground pb-2 border-b border-border">
                        Referrer Information
                    </h3>
                    <ReferrerContactFieldsComponent form={form} />
                </div>
            )}


            <div className="space-y-2">
                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="paymentInformation_method">How do you plan to pay for services? *</Label>
                <RadioGroupField
                    form={form}
                    name="paymentInformation.method"
                    options={[
                        { value: "insurance", label: "Insurance" },
                        { value: "self-pay", label: "Self Pay" },
                    ]}
                />
                <FieldError error={errors.paymentInformation?.method} />
            </div>

            {IsSelfPay && (
                <div>
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
                </div>
            )}

            {IsInsurance && (
                <>
                    {/* <h3 className="mt-10 text-md font-semibold text-foreground pb-2 border-b border-border">
                        Insurance Information
                    </h3> */}

                    <InsuranceDetailFieldsComponent form={form} />

                </>
            )}

        </div>
    )
}

export function AppointmentPreferenceComponent({ form }: FormComponentProps<IntakeFormData>) {

    const { register, control, getValues, watch, setValue, setError, clearErrors, formState: { errors } } = form;

    return (
        <div className="space-y-6">

            <div className="space-y-2">
                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="appointmentPreference_mode">How would you like to be seen? *</Label>
                <RadioGroupField
                    form={form}
                    name="appointmentPreference.mode"
                    value="either"
                    options={[
                        { value: "in-person", label: "In Person" },
                        { value: "telehealth", label: "Telehealth/Virtual" },
                        { value: "either", label: "No Preference" },
                    ]}
                />
                <FieldError error={errors.appointmentPreference?.mode} />
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
                    className="flex flex-col gap-2"
                />
                <FieldError error={errors.appointmentPreference?.timeOfDay} />
            </div>

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
        </div>
    )
}


export function StartNowForm() {
    const STEPS = [
        {
            id: "personal",
            label: "Personal",
            icon: User,
            schema: LeadSchema,
            name: "lead" as const,
            validate: async (form: UseFormReturn<IntakeFormData>) => {
                const { trigger } = form;
                const fields = getFields(LeadSchema);
                const fieldsToValidate = fields.map(key =>
                    "lead" + "." + key
                ) as Path<IntakeFormData>[];

                const isValid = await trigger(fieldsToValidate.length > 0 ? fieldsToValidate : undefined);
                return isValid;
            },
            component: LeadFields
        },
        {
            id: "additionalInformation",
            label: "Additional",
            icon: Users,
            schema: AdditionalInformationSchema,
            name: "additionalInformation" as const,
            validate: async (form: UseFormReturn<IntakeFormData>) => {
                const { trigger } = form;
                const fields = getFields(AdditionalInformationSchema);
                const fieldsToValidate = fields.map(key =>
                    "additionalInformation" + "." + key
                ) as Path<IntakeFormData>[];

                const isValid = await trigger(fieldsToValidate.length > 0 ? fieldsToValidate : undefined);
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
                const { trigger, clearErrors, formState: { errors } } = form;
                const fields = getFields(ServiceInformationSchema);
                const fieldsToValidate = fields.map(key =>
                    "serviceInformation" + "." + key
                ) as Path<IntakeFormData>[];

                console.log("Fields to validate: ", fieldsToValidate);
                const isValid = await trigger(fieldsToValidate.length > 0 ? fieldsToValidate : undefined);
                console.log("IsValid: " + isValid + " " + JSON.stringify(errors));
                if (!isValid) {
                    // clearErrors(fieldsToValidate as Path<IntakeFormData>[]);
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
                const { trigger, clearErrors, formState: { errors } } = form;
                const fields = getFields(AppointmentPreferenceSchema);
                const fieldsToValidate = fields.map(key =>
                    "appointmentPreference" + "." + key
                ) as Path<IntakeFormData>[];

                console.log("Fields to validate: ", fieldsToValidate);
                const isValid = await trigger(fieldsToValidate.length > 0 ? fieldsToValidate : undefined);
                console.log("IsValid: " + isValid + " " + JSON.stringify(errors));
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

                return true;
            },
            component: PaymentInformationComponent
        }
        // {
        //     id: "insurance",
        //     label: "Insurance Information",
        //     icon: Shield,
        //     schema: InsuranceSchema,
        //     name: "insurance" as const,
        //     validate: async (form: UseFormReturn<IntakeFormData>) => {
        //         const { trigger, clearErrors } = form;
        //         const fields = getFields(InsuranceSchema);
        //         const fieldsToValidate = fields.map(key =>
        //             "insurance" + "." + key
        //         ) as Path<IntakeFormData>[];

        //         const isValid = await trigger(fieldsToValidate.length > 0 ? fieldsToValidate : undefined);
        //         if (!isValid) {
        //             clearErrors(fieldsToValidate as Path<IntakeFormData>[]);
        //         }
        //         return isValid;
        //     },
        //     component: InsuranceDetailFields
        // },
        // {
        //     id: "review",
        //     label: "Review",
        //     icon: ClipboardCheck,
        //     schema: z.object({}),
        //     validate: async (form: UseFormReturn<IntakeFormData>) => {
        //         return true;
        //     },
        //     component: ReviewInsurance
        // }
    ]

    const { files, setFiles } = useFormStore();

    const onSubmit = async (data: IntakeFormData) => {
        const insuranceImages = files["insurance.images"] || [];
        //        const backFiles = files["insurance.images.back"] || [];

        // data.insurance.images = [];
        // for (let i = 0; i < insuranceImages.length; i++) {

        //     const updatedFile: UploadedFile = { ...insuranceImages[i], status: "uploading" };
        //     setFiles("insurance.images", [updatedFile]);

        //     try {
        //         const formData = new FormData();
        //         formData.append("file", insuranceImages[i].file);
        //         formData.append("entityType", "insurance_card");

        //         const response = await uploadFile(formData);
        //         const updatedFile: UploadedFile = { ...insuranceImages[i], status: "done", fileId: response.document.docId };
        //         setFiles("insurance.images", [updatedFile]);
        //         data.insurance.images.push({ docId: response.document.docId });
        //     } catch (error) {
        //         console.log("File upload failed", error);
        //     }
        // }

        // return await verifyInsurance(data);
        return true;
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
                    contactType="verifyInsurance"
                    schema={IntakeFormSchema}
                    //                    defaultValues={{
                    // lead: {
                    //     firstName: "",
                    //     lastName: "",
                    //     preferredName: "",
                    //     email: "",
                    //     phone: "",
                    //     dob: "",
                    // },
                    // insurance: {
                    //     name: "",
                    //     type: "primary",
                    //     memberId: "",
                    //     subscriberRelationship: "self",
                    //     subscriber: undefined,
                    // },
                    //                  }}
                    steps={STEPS}
                    onSubmit={onSubmit}
                />

            </CardContent>
        </Card>
    )

}