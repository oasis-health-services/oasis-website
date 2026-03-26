import { HelpdeskInquirySchema, type HelpdeskInquiryFormData, type HelpdeskInquiryType } from "@/lib/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { DynamicIcon } from "../DynamicIcon"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import FieldError from "../FieldError"
import { Textarea } from "../ui/textarea"
import { AlertCircle, Loader2 } from "lucide-react"
import { Button } from "../ui/button"
import { FileUploadZone, type UploadedFile } from "./FileUploadZone"
import { submitHelpdeskRequest, uploadFile } from "@/api"
import { formatPhoneNumber } from "@/lib/utils"

const PREFERRED_CONTACT_METHODS = [
    { value: "email", label: "Email" },
    { value: "phone", label: "Phone Call" },
    { value: "sms", label: "Text Message" }
]

export interface HelpCategoryConfig {
    id: string
    title: string
    description: string
    icon: string
    inquiryType: HelpdeskInquiryType
    subjectPlaceholder: string
    messagePlaceholder: string
    extraFields?: React.ReactNode
    apiEndpoint: string
    thankYouType: string
    response: { time: string, note: string }
}

export function HelpdeskRequestForm({ config }: { config: HelpCategoryConfig }) {

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [files, setFiles] = useState<UploadedFile[]>([])

    const form = useForm<HelpdeskInquiryFormData>({
        resolver: zodResolver(HelpdeskInquirySchema),
        defaultValues: {
            contact: {
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
            },
            preferredContactMethod: "email",
            inquiryType: config.inquiryType,
            subject: "",
            message: "",
            documents: []
        },
        mode: "onChange",
        reValidateMode: "onChange"
    });

    const { register, handleSubmit, control, formState: { errors } } = form;
    async function onSubmit(data: HelpdeskInquiryFormData) {
        setIsSubmitting(true);
        console.log("documents: ", files);
        console.log("request: ", data);

        data.documents = [];
        for (let i = 0; i < files.length; i++) {
            setFiles((prev) => prev.map((f, idx) => idx === 1 ? { ...f, status: "uploading" } : f));

            try {
                const formData = new FormData();
                formData.append("file", files[i].file);
                formData.append("entityType", config.inquiryType);

                const response = await uploadFile(formData);
                data.documents.push({ docId: response.document.docId });
            } catch (error) {
                console.log("File upload failed", error);
            }
        }

        try {
            const response = await submitHelpdeskRequest(data);
            console.log("Request submitted successfully", response);
            if (!response?.success) {
                window.location.href = `/sorry`;
                return;
            }

            const params = new URLSearchParams({
                type: config.thankYouType,
                name: data.contact.firstName
            });
            window.location.href = `/thank-you?${params.toString()}`;

        } catch (error) {
            //console.error("error", error);
            //console.log("Request submission failed", error);
            window.location.href = `/sorry`;
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Card className="bg-card border-border">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <DynamicIcon name={config.icon} className="h-5 w-5 text-primary" />
                    {config.title}
                </CardTitle>
                <CardDescription>{config.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Identity Verification */}
                    <div>
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">Your Information</h3>
                        <div className="grid sm:grid-cols-2 gap-4">

                            <div>
                                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="contact_firstName">First Name *</Label>
                                <Input
                                    id="contact_firstName"
                                    {...register("contact.firstName")}
                                    placeholder="John"
                                />
                                <FieldError error={errors.contact?.firstName} />
                            </div>

                            <div>
                                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="contact_firstName">Last Name *</Label>
                                <Input
                                    id="lastName"
                                    {...register("contact.lastName")}
                                    placeholder="Doe"
                                />
                                <FieldError error={errors.contact?.lastName} />
                            </div>

                            <div>
                                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="contact_email">Email *</Label>
                                <Input
                                    id="contact_email"
                                    {...register("contact.email")}
                                    placeholder="email@example.com"
                                />
                                <FieldError error={errors.contact?.email} />
                            </div>

                            <div>
                                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="contact_phone">Phone</Label>
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
                                <FieldError error={errors.contact?.phone} />
                            </div>

                            <div className={`space-y-2 w-full`}>
                                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="documentType">Preferred Contact *</Label>
                                <Controller
                                    name="preferredContactMethod"
                                    control={control}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                            <SelectTrigger id="documentType" className="w-full">
                                                <SelectValue placeholder="Select contact type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {PREFERRED_CONTACT_METHODS.map((option) => (
                                                    <SelectItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                                <FieldError error={errors.preferredContactMethod} />
                            </div>

                            <div className="col-span-2">
                                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="subject">Subject *</Label>
                                <Input
                                    id="subject"
                                    {...register("subject")}
                                    placeholder={config.subjectPlaceholder}
                                />
                                <FieldError error={errors.subject} />
                            </div>

                            <div className="col-span-2">
                                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="message">Message *</Label>
                                <Textarea id="message" {...register("message")} rows={5}
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                                    placeholder={config.messagePlaceholder}
                                />
                                <FieldError error={errors.message} />
                            </div>

                        </div>

                        <FileUploadZone label="Attachments" description="Upload up to 5 relevant documents (optional)" files={files} setFiles={setFiles} maxFiles={5} />

                        {/* Disclaimer */}
                        <div className="flex items-start gap-2 bg-muted/50 rounded-lg p-3 mt-5 mb-5">
                            <AlertCircle className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                This form is for non-emergency requests only. If you are in crisis or experiencing a medical emergency,
                                please call 911 or the 988 Suicide & Crisis Lifeline immediately.
                            </p>
                        </div>

                        <Button type="submit" disabled={isSubmitting} className="w-full cursor-pointer">
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Submitting Request...
                                </>
                            ) : (
                                "Submit Request"
                            )}
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}