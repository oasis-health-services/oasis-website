import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Upload,
    Loader2,
    AlertCircle,
} from "lucide-react"
import { useState } from "react"
import { DocumentUploadSchema, type DocumentUploadFormData } from "@/lib/schema"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Select } from "@radix-ui/react-select"
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import FieldError from "../FieldError"
import { cn, formatPhoneNumber } from "@/lib/utils"
import { FileUploadZone, type UploadedFile } from "./FileUploadZone"
import { submitDocumentRequest, uploadFile } from "@/api"
import { Textarea } from "../ui/textarea"

const DOCUMENT_TYPE_OPTIONS = [
    { value: "insurance_card", label: "Insurance Card" },
    { value: "medical_records", label: "Medical Records" },
    { value: "identity_card", label: "Identity Card" },
    { value: "proof_of_residence", label: "Proof of Residence" },
    { value: "other", label: "Other" },
]

const DOCUMENT_TYPE_DESCRIPTIONS = {
    "insurance_card": "Upload both sides of your insurance card",
    "medical_records": "Upload your medical records",
    "identity_card": "Upload a state-issued ID card or passport",
    "proof_of_residence": "Upload proof of residence",
    "other": "Upload the document you wish to share with us",
}

const DOCUMENT_UPLOAD_MAX = {
    "insurance_card": 2,
    "medical_records": 5,
    "identity_card": 1,
    "proof_of_residence": 1,
    "other": 5,
}

export function DocumentUploadForm() {

    const [files, setFiles] = useState<UploadedFile[]>([])
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<DocumentUploadFormData>({
        resolver: zodResolver(DocumentUploadSchema),
        defaultValues: {
            contact: {
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
            },
            documents: [],
            message: "",
        },
        mode: "onChange",
        reValidateMode: "onChange",
    });

    const { register, watch, handleSubmit, control, formState: { errors } } = form;
    const documentType = watch("documentType");
    const isOther = documentType === "other";

    async function onSubmit(data: DocumentUploadFormData) {
        setIsSubmitting(true);
        console.log("documents: ", files);
        console.log("request: ", data);

        const entityType = data.documentType === "other" ? data.documentTypeOther || "other" : data.documentType;
        data.documents = [];
        for (let i = 0; i < files.length; i++) {
            setFiles((prev) => prev.map((f, idx) => idx === 1 ? { ...f, status: "uploading" } : f));

            try {
                const formData = new FormData();
                formData.append("file", files[i].file);
                formData.append("entityType", entityType);

                const response = await uploadFile(formData);
                data.documents.push({ docId: response.document.docId });
            } catch (error) {
                console.log("File upload failed", error);
                window.location.href = `/sorry`;
                return;
            }
        }

        try {
            const response = await submitDocumentRequest(data);
            console.log("Request submitted successfully", response);
            if (!response?.success) {
                window.location.href = `/sorry`;
                return;
            }

            const params = new URLSearchParams({
                type: "document-upload",
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
                    <Upload className="h-5 w-5 text-primary" />
                    Secure Document Upload
                </CardTitle>
                <CardDescription>
                    Upload documents our team has requested from you or documents you wish to share with us.
                </CardDescription>
            </CardHeader>
            <CardContent>

                {/* Step 2: Upload Documents */}
                <div className="space-y-6">
                    {/* Verified badge */}
                    {/* <div className="flex items-center gap-2 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                            <p className="text-sm text-foreground">
                                Reference code <span className="font-mono font-medium">{referenceCode.trim().toUpperCase()}</span> verified
                            </p>
                        </div> */}

                    {/* Patient info */}
                    <form onSubmit={handleSubmit(onSubmit)}>
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

                                <div className={cn(`space-y-2`, isOther ? 'w-full' : 'col-span-2 w-1/2')}>
                                    <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="documentType">Document Type *</Label>
                                    <Controller
                                        name="documentType"
                                        control={control}
                                        render={({ field }) => (
                                            <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                                <SelectTrigger id="documentType" className="w-full">
                                                    <SelectValue placeholder="Select document type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {DOCUMENT_TYPE_OPTIONS.map((option) => (
                                                        <SelectItem key={option.value} value={option.value}>
                                                            {option.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                    {documentType && (
                                        <p className="text-sm text-muted-foreground text-italic">
                                            {DOCUMENT_TYPE_DESCRIPTIONS[documentType as keyof typeof DOCUMENT_TYPE_DESCRIPTIONS]}
                                        </p>
                                    )}
                                    <FieldError error={errors.documentType} />
                                </div>

                                {isOther && (
                                    <div>
                                        <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="documentTypeOther">Describe your document *</Label>
                                        <Input
                                            id="documentTypeOther"
                                            {...register("documentTypeOther")}
                                            placeholder="Document Type"
                                        />
                                        <FieldError error={errors.documentTypeOther} />
                                    </div>
                                )}

                                <div className="col-span-2">
                                    <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="message">Message {isOther ? "*" : "(Optional)"}</Label>
                                    <Textarea id="message" {...register("message")} rows={5}
                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                                        placeholder="Provide additional context about the documents you are uploading..."
                                    />
                                    <FieldError error={errors.message} />
                                </div>
                            </div>
                        </div>

                        <FileUploadZone label="Documents" description={DOCUMENT_TYPE_DESCRIPTIONS[documentType as keyof typeof DOCUMENT_TYPE_DESCRIPTIONS]} files={files} setFiles={setFiles} maxFiles={DOCUMENT_UPLOAD_MAX[documentType as keyof typeof DOCUMENT_UPLOAD_MAX]} />

                        {/* Disclaimer */}
                        <div className="flex items-start gap-2 bg-muted/50 rounded-lg p-3 mt-5 mb-5">
                            <AlertCircle className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                By uploading these documents, you confirm that you are authorized to share them with
                                Oasis Health Services for the purpose of your care.
                            </p>
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full cursor-pointer"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Uploading Documents...
                                </>
                            ) : (
                                <>
                                    Upload {files.length > 0 ? `${files.length} Document${files.length > 1 ? "s" : ""}` : "Documents"}
                                </>
                            )}
                        </Button>
                    </form>
                </div>
            </CardContent>
        </Card>
    )
}