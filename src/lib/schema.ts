import { z } from "zod";
import { isMinor } from "./utils";

const emptyToUndefined = (value: unknown) => {
    if (typeof value !== "string") return value;
    const trimmed = value.trim();
    return trimmed === "" ? undefined : trimmed;
}

const DobSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in MM-DD-YYYY format");

export const ContactSchema = z.object({
    firstName: z.string({ required_error: "first name is required" }).min(2, { message: "first name must be at least 2 characters" }).max(100, { message: "first name must be at most 100 characters" }),
    lastName: z.string({ required_error: "last name is required" }).min(2, { message: "last name must be at least 2 characters" }).max(100, { message: "last name must be at most 100 characters" }),
    email: z.string({ required_error: "email is required" }).email({ message: "provide a valid email address" }),
    phone: z.preprocess(
        v => (typeof v === "string" && v.trim() === "" ? undefined : v),
        z.string().regex(/^\d{10}$/, "provide a valid phone number").optional()
    ),
    inquiryType: z.enum(["Free Consultation", "Medication Management", "Therapy", "ADHD Treatment", "Genetic Testing",
        "Vitamins & Supplements", "Autism Spectrum Disorder", "Spravato", "RPM",
        "Insurance", "Other"],
        { message: "select an inquiry type" }),
    message: z.string({ required_error: "message is required" }).min(5, { message: "Let us know how we can help" }).max(1000, { message: "Let us know your request in 1000 characters or less" }),
    source: z.string().optional(),
    consent: z.boolean().refine((value) => value === true, { message: "You must consent to Oasis Health Services contacting you regarding your inquiry." }),
}).strict()


export const InsuranceSchema = z.object({
    name: z.string({ required_error: "Select your carrier" }).min(2, { message: "Select your carrier" }).max(100, { message: "Select your carrier" }),
    type: z.string({ required_error: "Select your insurance type" }).min(2, { message: "Select your insurance type" }).max(50, { message: "Select your insurance type" }),
    plan: z.string().max(100).optional(),
    memberId: z.string().min(8, { message: "Enter a valid ID" }).max(20, { message: "Enter a valid ID" }),
    groupNumber: z.string().max(20).optional(),
    subscriberRelationship: z.enum(["self", "spouse", "child", "other"]),
    subscriber: z.object({
        name: z.preprocess(emptyToUndefined, z.string().optional()),
        dob: z.preprocess(emptyToUndefined, DobSchema.optional()),
    }).optional(),
    images: z.array(z.object({ docId: z.string() })).optional()
}).transform((data) => {

    const subscriber = data.subscriber;
    const hasSubscriberData = !!subscriber?.name || !!subscriber?.dob;

    return {
        ...data,
        subscriber:
            data.subscriberRelationship === "self" || !hasSubscriberData
                ? undefined : subscriber
    }
}).superRefine((data, ctx) => {

    if (data.subscriberRelationship === "self") {
        return;
    }

    if (!data.subscriber) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Subscriber information is required`,
            path: ["subscriber"],
        });
    }

    if (!data.subscriber?.name) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["subscriber", "name"],
            message: "Subscriber name is required",
        });
    }

    if (!data.subscriber?.dob) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["subscriber", "dob"],
            message: "Subscriber DOB is required",
        });
    }
})

export const InsuranceContactSchema = z.object({
    firstName: z.string({ required_error: "first name is required" }).min(2, { message: "first name must be at least 2 characters" }).max(100, { message: "first name must be at most 100 characters" }),
    lastName: z.string({ required_error: "last name is required" }).min(2, { message: "last name must be at least 2 characters" }).max(100, { message: "last name must be at most 100 characters" }),
    email: z.string({ required_error: "email is required" }).email({ message: "provide a valid email address" }),
    phone: z.preprocess(
        v => (typeof v === "string" && v.trim() === "" ? undefined : v),
        z.string().regex(/^\d{10}$/, "provide a valid phone number").optional()
    ),
    dob: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
}).strict();

export const VerifyInsuranceSchema = z.object({
    contact: InsuranceContactSchema,
    insurance: InsuranceSchema,
    //    consent: z.boolean().refine((value) => value === true, { message: "You must consent to Oasis Health Services contacting you regarding your inquiry." }),
}).strict()

export const CollaborationSchema = z.object({
    name: z.string({ required_error: "name is required" }).min(2, "name is required").max(100, "name must be at most 100 characters"),
    credentials: z.string({ required_error: "credentials is required" }).max(100, "credentials must be at most 100 characters"),
    practiceName: z.string({ required_error: "We would love to know your practice name" }).min(2, "Please provide a valid practice name must be at least 2 characters").max(100, "practice name must be at most 100 characters"),
    email: z.string({ required_error: "email is required" }).email("provide a valid email address"),
    phone: z.preprocess(
        v => (typeof v === "string" && v.trim() === "" ? undefined : v),
        z.string().regex(/^\d{10}$/, "provide a valid phone number").optional()
    ),
    specialty: z.string({ required_error: "Select your specialty" }).min(1, "Select your specialty").max(50, "Select your specialty"),
    partnershipInterests: z.array(z.string()).min(1, "Select at least one partnership interest").max(5, "Select at most 5 partnership interests"),
    estimatedReferrals: z.string().optional(),
    message: z.string().max(1000, "Limit your information to 1000 characters"),
    consent: z.boolean().refine((value) => value === true, { message: "You must consent to Oasis Health Services contacting you regarding your inquiry." }),
}).strict()

export const ReferralSchema = z.object({
    provider: z.object({
        name: z.string({ required_error: "name is required" }).min(2, "name must be at least 2 characters").max(100, "name must be at most 100 characters"),
        npi: z.string().max(10, "Provide a valid NPI").optional(),
        practiceName: z.string({ required_error: "practice name is required" }).min(2, "practice name must be at least 2 characters").max(100, "practice name must be at most 100 characters"),
        email: z.string({ required_error: "email is required" }).email("provide a valid email address"),
        phone: z.string({ required_error: "phone number is required" }).regex(/^\d{10}$/, "provide a valid phone number"),
        fax: z.preprocess(
            v => (typeof v === "string" && v.trim() === "" ? undefined : v),
            z.string().regex(/^\d{10}$/, "provide a valid fax number").optional()
        )
    }),
    patient: z.object({
        firstName: z.string({ required_error: "first name is required" }).min(2, "first name must be at least 2 characters").max(100, "first name must be at most 100 characters"),
        lastName: z.string({ required_error: "last name is required" }).min(2, "last name must be at least 2 characters").max(100, "last name must be at most 100 characters"),
        dob: z.string({ required_error: "date of birth is required" }).regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
        phone: z.string({ required_error: "phone number is required" }).regex(/^\d{10}$/, "provide a valid phone number"),
        email: z.string({ required_error: "email is required" }).email("provide a valid email address"),
        insurance: z.string().optional(),
        address: z.string().max(100, "address must be at most 100 characters").optional(),
    }),
    referralReason: z.array(z.string()).min(1, "Select at least one referral reason"),
    urgency: z.enum(["routine", "urgent", "expedited"], { message: "Select one of routine, urgent, or expedited" }),
    appointmentPreference: z.enum(["none", "in-person", "telehealth"]),
    clinicalNotes: z.string({ required_error: "Provide some clinical notes about the patient" }).min(5, "Provide some clinical notes about the patient").max(1000, "clinical notes must be at most 1000 characters"),
    currentMedications: z.string().max(1000, "current medications must be at most 1000 characters").optional(),
    //    consent: z.boolean().refine((value) => value === true, { message: "You must consent to Oasis Health Services contacting you regarding your inquiry." }),
}).strict();

export const INQUIRY_OPTIONS = [
    { value: "Free Consultation", label: "Free Consultation" },
    { value: "Medication Management", label: "Medication Management" },
    { value: "Therapy", label: "Therapy & Counseling" },
    { value: "ADHD Treatment", label: "ADHD Treatment" },
    { value: "Genetic Testing", label: "Genetic Testing" },
    { value: "Vitamins & Supplements", label: "Vitamins & Supplements" },
    { value: "Autism Spectrum Disorder", label: "Autism Spectrum Disorder" },
    { value: "Spravato", label: "Spravato (esketamine)" },
    { value: "RPM", label: "Remote Patient Monitoring (RPM)" },
    { value: "Insurance", label: "Insurance Questions" },
    { value: "Other", label: "General Inquiries" },
];

export type VerifyInsuranceFormData = z.infer<typeof VerifyInsuranceSchema>;

export const LeadSchema = z.object({
    firstName: z.string({ required_error: "first name is required" })
        .min(2, { message: "Enter a valid first name" })
        .max(35, { message: "first name must be at most 35 characters" }),
    lastName: z.string({ required_error: "last name is required" })
        .min(2, { message: "Enter a valid last name" })
        .max(35, { message: "last name must be at most 35 characters" }),
    preferredName: z.string().max(35, "preferred name must be at most 35 characters").optional(),
    email: z.string({ required_error: "email is required" }).email({ message: "provide a valid email address" }),
    phone: z.string().regex(/^\d{10}$/, "provide a valid phone number"),
    dob: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Enter a valid date of birth"),
    birthSex: z.enum(["male", "female"], { message: "Select your birth sex" }),
    genderIdentity: z.string().optional(),
    //    address: z.string().max(100, "address must be at most 100 characters").optional(),
    address: z.object({
        street: z.string({ required_error: "street address is required" })
            .min(5, "a valid street address is required")
            .max(50, "street address must not exceed 50 characters"),
        city: z.string({ required_error: "city is required" })
            .min(5, "a valid city is required")
            .max(50, "city must not exceed 50 characters"),
        state: z.enum(["AZ", "CA", "FL", "GA", "MD", "MA", "NJ", "NY", "VA", "WA"], { message: "Select your state of residence" }),
        postalCode: z.string({ required_error: "postal code is required" })
            .min(5, "a valid postal code is required")
            .max(10, "Postal code must not exceed 10 characters"),
    }),
}).strict();

export const ServiceInformationSchema = z.object({
    courtRecommended: z.enum(["yes", "no"], { required_error: "This field is required" }),
    currentConditions: z.string().max(1000, "current conditions must be at most 1000 characters").optional(),
    currentMedications: z.string().max(1000, "current medications must be at most 1000 characters").optional(),
    reasons: z.array(z.string(), { required_error: "Select at least one reason" }).min(1, "Select at least one reason"),
    description: z.string().max(1000, "description must be at most 1000 characters").optional(),
}).strict().superRefine((data, ctx) => {

    if (data.reasons.includes("Other") && (!data.description || data.description.trim() === "")) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Please describe how we can help you",
            path: ["description"],
        });
    }
});

export const AppointmentPreferenceSchema = z.object({
    mode: z.enum(["in-person", "telehealth", "either"]),
    dayOfWeek: z.array(z.enum(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]), { required_error: "Select at least one day" }).min(1, "Select at least one day"),
    timeOfDay: z.array(z.enum(["Morning", "Afternoon", "Evening"]), { required_error: "Select at least one time" }).min(1, "Select at least one time"),
    timezone: z.enum(["CST", "EST", "MST", "PST"]),
    when: z.enum(["This Week", "1-2 Weeks", "2-4 Weeks", "4 Weeks or More"], { required_error: "Select when you would like to be seen" }),
}).strict();

export const EAPSchema = z.object({
    employer: z.string({ required_error: "Employer is required" }).min(2, "Provide a valid employer name").max(35, "Employer name must not exceed 35 characters"),
    authorizationNumber: z.string({ required_error: "Authorization Number is required" }).min(2, "Provide a valid authorization number").max(35, "Authorization Number must not exceed 35 characters"),
}).strict();

export const PaymentInformationSchema = z.object({
    method: z.enum(["insurance", "self-pay", "eap"]),
    insurance: InsuranceSchema.optional(),
    eap: EAPSchema.optional(),
}).strict().superRefine((data, ctx) => {

    const isInsurance = data.method === "insurance";
    const isEAP = data.method === "eap";

    if (isInsurance || isEAP) {
        if (!data.insurance) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["paymentInformation", "insurance"],
                message: "insurance information is required"
            });
        }

        if (isEAP && !data.eap) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["paymentInformation", "eap"],
                message: "EAP information is required"
            });
        }
    }
})

export const GenericContactSchema = z.object({
    firstName: z.string({ required_error: "first name is required" }).min(2, { message: "provide a valid name" }).max(100, { message: "provide a valid name" }),
    lastName: z.string({ required_error: "last name is required" }).min(2, { message: "provide a valid name" }).max(100, { message: "provide a valid name" }),
    email: z.string({ required_error: "email is required" }).email({ message: "provide a valid email address" }),
    phone: z.preprocess(
        v => (typeof v === "string" && v.trim() === "" ? undefined : v),
        z.string().regex(/^\d{10}$/, "provide a valid phone number").optional()
    ),
}).strict();

export const DocumentUploadSchema = z.object({
    contact: GenericContactSchema,
    documentType: z.enum(["insurance_card", "medical_records", "identity_card", "proof_of_residence", "other"], {
        message: "Select a document type"
    }),
    documentTypeOther: z.string().max(100, "Document type must be at most 100 characters").optional(),
    message: z.string().max(1000, "Note must be at most 1000 characters").optional(),
    documents: z.array(z.object({ docId: z.string() })),
}).strict().superRefine((data, ctx) => {
    if (data.documentType === "other") {

        if (!data.documentTypeOther) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["documentTypeOther"],
                message: "Document type must be specified"
            });
        }

        if (!data.message) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["message"],
                message: "Let us know how we can help you"
            });
        }
    }
});

export const HelpdeskInquirySchema = z.object({
    contact: GenericContactSchema,
    preferredContactMethod: z.enum(["email", "phone", "sms"]),
    inquiryType: z.enum(["general", "billing", "technical", "pharmacy_issue", "medical_records", "prescription_refill", "appointment_request"]),
    subject: z.string().min(5, { message: "Let us know the reason for your inquiry" }).max(100, "Subject must be at most 100 characters"),
    message: z.string().min(5, { message: "Let us know how we can help you" }).max(1000, "Note must be at most 1000 characters").optional(),
    documents: z.array(z.object({ docId: z.string() })).optional(),
}).strict();

export const EmergencyContactSchema = z.object({
    firstName: z.string({ required_error: "first name is required" }).min(2, { message: "provide a valid name" }).max(35, { message: "provide a valid name" }),
    lastName: z.string({ required_error: "last name is required" }).min(2, { message: "provide a valid name" }).max(35, { message: "provide a valid name" }),
    email: z.string({ required_error: "email is required" }).email({ message: "provide a valid email address" }),
    phone: z.preprocess(
        v => (typeof v === "string" && v.trim() === "" ? undefined : v),
        z.string().regex(/^\d{10}$/, "provide a valid phone number").optional()
    ),
    relationship: z.enum(["spouse", "father", "mother", "guardian", "child", "sibling", "relative", "foster", "other"], { message: "Select a relationship" }),
    // permissions: z.array(z.enum(["discuss_treatment", "make_appointments"]))
});

export const EmergencyContactInfoSchema = z.object({
    contact: z.object({
        firstName: z.string({ required_error: "first name is required" }).min(2, { message: "provide a valid name" }).max(35, { message: "provide a valid name" }),
        lastName: z.string({ required_error: "last name is required" }).min(2, { message: "provide a valid name" }).max(35, { message: "provide a valid name" }),
        email: z.string({ required_error: "email is required" }).email({ message: "provide a valid email address" }),
        phone: z.preprocess(
            v => (typeof v === "string" && v.trim() === "" ? undefined : v),
            z.string().regex(/^\d{10}$/, "provide a valid phone number").optional()
        ),
    }),
    emergency: EmergencyContactSchema
}).strict()

export const GuardianContactSchema = z.object({
    firstName: z.string({ required_error: "first name is required" }).min(2, { message: "provide a valid name" }).max(35, { message: "provide a valid name" }),
    lastName: z.string({ required_error: "last name is required" }).min(2, { message: "provide a valid name" }).max(35, { message: "provide a valid name" }),
    email: z.string({ required_error: "email is required" }).email({ message: "provide a valid email address" }),
    phone: z.preprocess(
        v => (typeof v === "string" && v.trim() === "" ? undefined : v),
        z.string().regex(/^\d{10}$/, "provide a valid phone number").optional()
    ),
    relationship: z.preprocess(
        v => (typeof v === "string" && v.trim() === "" ? undefined : v),
        z.enum(["father", "mother", "guardian", "sibling", "relative", "foster", "other"]).optional()
    ),
    hasLegalDocumentation: z.boolean().default(false)
});

export const GuardianContactInfoSchema = z.object({
    contact: z.object({
        firstName: z.string({ required_error: "first name is required" }).min(2, { message: "provide a valid name" }).max(35, { message: "provide a valid name" }),
        lastName: z.string({ required_error: "last name is required" }).min(2, { message: "provide a valid name" }).max(35, { message: "provide a valid name" }),
        email: z.string({ required_error: "email is required" }).email({ message: "provide a valid email address" }),
        phone: z.preprocess(
            v => (typeof v === "string" && v.trim() === "" ? undefined : v),
            z.string().regex(/^\d{10}$/, "provide a valid phone number").optional()
        ),
    }),
    guardians: z.array(
        GuardianContactSchema
    ).min(1),
}).strict();


export const AdditionalInformationSchema = z.object({
    hasEmergencyContact: z.boolean({ required_error: "Please indicate if you have an emergency contact" }),
    emergency: EmergencyContactSchema.optional(),
    guardians: z.array(GuardianContactSchema).optional(),
    source: z.string().optional(),
    referrer: z.object({
        name: z.string().min(2, { message: "provide a valid name" }).max(35, { message: "provide a valid name" }),
        specialty: z.string().max(35, { message: "provide a valid specialty" }),
        practiceName: z.string().min(2, { message: "provide a valid practice name" }).max(35, { message: "provide a valid practice name" }),
        phone: z.preprocess(
            v => (typeof v === "string" && v.trim() === "" ? undefined : v),
            z.string().regex(/^\d{10}$/, "provide a valid phone number").optional()
        ),
        email: z.string().email(),
    }).optional(),
}).strict();


export const IntakeFormSchema = z.object({
    lead: LeadSchema,
    additionalInformation: AdditionalInformationSchema,
    //    clinicalHistory: ClinicalHistorySchema,
    serviceInformation: ServiceInformationSchema,
    appointmentPreference: AppointmentPreferenceSchema,
    paymentInformation: PaymentInformationSchema,
}).strict().superRefine((data, ctx) => {

    const minor = isMinor(data.lead.dob);
    if (minor && (!data.additionalInformation.guardians || data.additionalInformation.guardians.length === 0)) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Provide at least one guardian",
            path: ["additionalInformation", "guardians"],
        });
    }

    // if (data.additionalInformation.hasEmergencyContact && !data.additionalInformation.emergency) {
    //     ctx.addIssue({
    //         code: z.ZodIssueCode.custom,
    //         message: "Emergency contact is required",
    //         path: ["additionalInformation", "emergency"],
    //     });
    // }

    // if (data.additionalInformation.hasEmergencyContact && data.additionalInformation.emergency) {
    //     ctx.addIssue({
    //         code: z.ZodIssueCode.custom,
    //         message: "Emergency contact is required",
    //         path: ["additionalInformation", "emergency"],
    //     });
    // }
});


export const ContactRequestSchema = z.object({
    contact: z.object({
        firstName: z.string({ required_error: "first name is required" }).min(2, { message: "provide a valid name" }).max(35, { message: "provide a valid name" }),
        lastName: z.string({ required_error: "last name is required" }).min(2, { message: "provide a valid name" }).max(35, { message: "provide a valid name" }),
        email: z.string({ required_error: "email is required" }).email({ message: "provide a valid email address" }),
        phone: z.preprocess(
            v => (typeof v === "string" && v.trim() === "" ? undefined : v),
            z.string().regex(/^\d{10}$/, "provide a valid phone number").optional()
        ),
    }),
    inquiryType: z.enum(["Free Consultation", "Medication Management", "Therapy", "ADHD Treatment", "Genetic Testing",
        "Vitamins & Supplements", "Autism Spectrum Disorder", "Spravato", "RPM",
        "Insurance", "Other"],
        { message: "select an inquiry type" }),
    message: z.string().min(5, { message: "Let us know how we can help you" }).max(1000, "Note must be at most 1000 characters"),
}).strict()


export const ProviderSchema = z.object({
    type: z.literal("provider"),
    firstName: z.string({ required_error: "first name is required" }).min(2, { message: "provide a valid name" }).max(35, { message: "provide a valid name" }),
    lastName: z.string({ required_error: "last name is required" }).min(2, { message: "provide a valid name" }).max(35, { message: "provide a valid name" }),
    email: z.string({ required_error: "email is required" }).email({ message: "provide a valid email address" }),
    phone: z.preprocess(
        v => (typeof v === "string" && v.trim() === "" ? undefined : v),
        z.string().regex(/^\d{10}$/, "provide a valid phone number").optional()
    ),
    npi: z.string().max(10).optional(),
    practiceName: z.string().min(5).max(100).optional(),
    specialty: z.string().min(5).max(100),
    credentials: z.string().max(100).optional(),
    fax: z.preprocess(
        v => (typeof v === "string" && v.trim() === "" ? undefined : v),
        z.string().regex(/^\d{10}$/, "provide a valid phone number").optional()
    ),
}).strict()

export const CollaborationRequestSchema = z.object({
    provider: ProviderSchema,
    partnershipInterests: z.array(z.string()).min(1, { message: "select at least one partnership interest" }).max(5, { message: "select at most five partnership interests" }),
    estimatedReferrals: z.string().optional(),
    message: z.string().min(5, { message: "Let us know how we can help you" }).max(1000, "Note must be at most 1000 characters"),
}).strict()

export const ReferralRequestSchema = z.object({
    provider: ProviderSchema,
    lead: LeadSchema,
    insurance: InsuranceSchema,
    referralReason: z.array(z.string()).min(1, { message: "select at least one referral reason" }).max(5, { message: "select at most five referral reasons" }),
    urgency: z.enum(["routine", "urgent", "expedited"], { message: "select an urgency level" }),
    appointmentPreference: z.enum(["none", "in-person", "telehealth"], { message: "select an appointment preference" }),
    clinicalNotes: z.string().min(5, { message: "Let us know how we can help you" }).max(1000, "Note must be at most 1000 characters"),
    currentMedications: z.string().max(1000).optional()
}).strict()




export type LeadFormData = z.infer<typeof LeadSchema>;
//export type ClinicalHistoryFormData = z.infer<typeof ClinicalHistorySchema>;
export type ServiceInformationFormData = z.infer<typeof ServiceInformationSchema>;
export type AppointmentPreferenceFormData = z.infer<typeof AppointmentPreferenceSchema>;
export type InsuranceFormData = z.infer<typeof InsuranceSchema>;
export type IntakeFormData = z.infer<typeof IntakeFormSchema>;
export type DocumentUploadFormData = z.infer<typeof DocumentUploadSchema>;
export type HelpdeskInquiryFormData = z.infer<typeof HelpdeskInquirySchema>;

export type EmergencyContactFormData = z.infer<typeof EmergencyContactInfoSchema>;
export type GuardianContactFormData = z.infer<typeof GuardianContactInfoSchema>;

export type HelpdeskInquiryType = "general" | "billing" | "technical" | "pharmacy_issue" | "medical_records" | "prescription_refill" | "appointment_request";
