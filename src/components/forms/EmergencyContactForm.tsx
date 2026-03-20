import { EmergencyContactInfoSchema, type EmergencyContactFormData } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Loader2, Phone, User, UserPlus } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import FieldError from "../FieldError";
import { Checkbox } from "../ui/checkbox";
import { formatPhoneNumber } from "@/lib/utils";
import { submitEmergencyContactForm } from "@/api";


const RELATIONSHIP_OPTIONS = [
    { value: "spouse", label: "Spouse" },
    { value: "parent", label: "Parent" },
    { value: "guardian", label: "Guardian" },
    { value: "child", label: "Child" },
    { value: "sibling", label: "Sibling" },
    { value: "relative", label: "Relative" },
    { value: "foster", label: "Foster Parent" },
    { value: "other", label: "Other" },
]

const PERMISSION_OPTIONS = [
    { value: "discuss_treatment", label: "May discuss treatment and progress", description: "We can share general treatment updates with this person" },
    { value: "make_appointments", label: "May make schedule or reschedule appointments", description: "We can schedule or reschedule appointments with this person" },
]

export function EmergencyContactForm() {

    const [consent, setConsent] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<EmergencyContactFormData>({
        resolver: zodResolver(EmergencyContactInfoSchema),
        defaultValues: {
            contact: {
                firstName: "",
                lastName: "",
                email: "",
                phone: ""
            }
        },
        mode: "all",
        reValidateMode: "onChange"
    });

    const { control, register, handleSubmit, formState: { errors } } = form;

    const onSubmit = async (data: EmergencyContactFormData) => {
        setIsSubmitting(true);
        try {

            const response = await submitEmergencyContactForm(data);

            if (!response.success) {
                window.location.href = `/sorry`;
                return;
            }

            const params = new URLSearchParams({
                type: "helpdesk",
                name: data.contact.firstName
            });
            window.location.href = `/thank-you?${params.toString()}`;

        } catch (error) {
            window.location.href = `/sorry`;
        } finally {
            setIsSubmitting(false);
        }
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                            <User className="h-5 w-5 text-primary" />
                            Patient Identification
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                            Please provide the patient's information so we can match this contact to their record.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">

                            <div className="space-y-2">
                                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="contact_firstName">First Name *</Label>
                                <Input id="contact_firstName" {...register("contact.firstName")} placeholder="First name" />
                                <FieldError error={errors.contact?.firstName} />
                            </div>

                            <div className="space-y-2">
                                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="contact_lastName">Last Name *</Label>
                                <Input id="contact_lastName" {...register("contact.lastName")} placeholder="last name" />
                                <FieldError error={errors.contact?.lastName} />
                            </div>

                            <div className="space-y-2">
                                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="contact_email  ">Email *</Label>
                                <Input id="contact_email" {...register("contact.email")} placeholder="email address" />
                                <FieldError error={errors.contact?.email} />
                            </div>

                            <div className="space-y-2">
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
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                            <UserPlus className="h-5 w-5 text-primary" />
                            Emergency Contact Details
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="emergency_firstName">First Name *</Label>
                                <Input id="emergency_firstName" {...register("emergency.firstName")} placeholder="First name" />
                                <FieldError error={errors.emergency?.firstName} />
                            </div>

                            <div className="space-y-2">
                                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="emergency_lastName">Last Name *</Label>
                                <Input id="emergency_lastName" {...register("emergency.lastName")} placeholder="Last name" />
                                <FieldError error={errors.emergency?.lastName} />
                            </div>

                            <div className="space-y-2 sm:col-span-2">
                                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="emergency_relationship">Relationship to Patient *</Label>
                                <Controller
                                    name="emergency.relationship"
                                    control={control}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                            <SelectTrigger id="emergency_relationship" className="w-full sm:w-1/2">
                                                <SelectValue placeholder="Select relationship" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {RELATIONSHIP_OPTIONS.map((option) => (
                                                    <SelectItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                                <FieldError error={errors.emergency?.relationship} />
                            </div>

                            <div className="space-y-2">
                                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="emergency_email">Email *</Label>
                                <Input type="email" id="emergency_email" {...register("emergency.email")} placeholder="Email address" />
                                <FieldError error={errors.emergency?.email} />
                            </div>

                            <div className="space-y-2">
                                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="emergency_phone">Phone</Label>
                                <Controller
                                    name="emergency.phone"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Input
                                            id="emergency_phone"
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
                                <FieldError error={errors.emergency?.phone} />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                            <Phone className="h-5 w-5 text-primary" />
                            Contact Permissions
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                            Select what this contact is authorized to do on your behalf.
                        </p>

                        <div className="space-y-3">
                            {PERMISSION_OPTIONS.map((option, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <Controller
                                        name="emergency.permissions"
                                        control={control}
                                        render={({ field }) => (
                                            <Checkbox
                                                id={`emergency_permissions_${option.value}`}
                                                checked={field.value?.includes(option.value as any)}
                                                onCheckedChange={(checked) => {
                                                    const updatedPermissions = checked
                                                        ? [...field.value, option.value]
                                                        : field.value?.filter((value) => value !== option.value);
                                                    field.onChange(updatedPermissions);
                                                }}
                                            />
                                        )}
                                    />
                                    <div className="grid gap-1">
                                        <Label className="font-normal cursor-pointer" htmlFor={`emergency_permissions_${option.value}`}>{option.label}</Label>
                                        <p className="text-xs text-muted-foreground">{option.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card> */}

                {/* Consent & Submit */}
                <Card>
                    <CardContent className="space-y-4">
                        <div className="flex items-start gap-2 bg-muted p-4 rounded-lg">
                            <Checkbox id="consent" checked={consent}
                                onCheckedChange={(checked) => setConsent(checked === true)}
                            />
                            <div className="grid gap-1">
                                <Label htmlFor="consent" className="text-sm text-muted-foreground font-normal">
                                    I consent to Oasis Health Services contacting this contact in case of an emergency.
                                    I understand my information is protected under{" "}
                                    <a href="/hipaa" className="text-primary hover:underline">HIPAA guidelines</a>.
                                </Label>
                            </div>

                        </div>


                        <Button type="submit" size="lg" className="w-full cursor-pointer" disabled={isSubmitting || !consent}>
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-span" />
                                    Submitting...
                                </>
                            ) : ("Submit Emergency Contact")}
                        </Button>

                    </CardContent>
                </Card>
            </div>
        </form>
    )
}