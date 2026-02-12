import { z } from "zod";


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
    consent: z.boolean().refine((value) => value === true, { message: "You must consent to Oasis Health Services contacting you regarding your inquiry." }),
}).strict()

export const VerifyInsuranceSchema = z.object({
    firstName: z.string().min(2).max(100),
    lastName: z.string().min(2).max(100),
    email: z.string().email(),
    phone: z.string().regex(/^\d{10}$/, "Invalid phone format"),
    dob: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
    insuranceName: z.string().min(2).max(100),
    memberId: z.string().min(2).max(10),
    consent: z.boolean().refine((value) => value === true, { message: "You must consent to Oasis Health Services contacting you regarding your inquiry." }),
}).strict();

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
    // consent: z.boolean().refine((value) => value === true, { message: "You must consent to Oasis Health Services contacting you regarding your inquiry." }),
}).strict()

export const ReferralSchema = z.object({
    provider: z.object({
        name: z.string({ required_error: "name is required" }).min(2, "name must be at least 2 characters").max(100, "name must be at most 100 characters"),
        npi: z.string().max(10, "Provide a valid NPI").optional(),
        practiceName: z.string({ required_error: "practice name is required" }).min(2, "practice name must be at least 2 characters").max(100, "practice name must be at most 100 characters"),
        email: z.string({ required_error: "email is required" }).email("provide a valid email address"),
        phone: z.string({ required_error: "phone number is required" }).regex(/^\d{10}$/, "provide a valid phone number"),
        //        fax: z.string().regex(/^\d{10}$/, "provide a valid fax number").optional()
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
    consent: z.boolean().refine((value) => value === true, { message: "You must consent to Oasis Health Services contacting you regarding your inquiry." }),
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