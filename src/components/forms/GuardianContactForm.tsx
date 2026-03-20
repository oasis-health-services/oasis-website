import { GuardianContactInfoSchema, type GuardianContactFormData } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, get, useFieldArray, useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Loader2, Plus, Trash2, User, Users } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import FieldError from "../FieldError";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { submitGuardianContactForm } from "@/api";
import { formatPhoneNumber } from "@/lib/utils";


// "father", "mother", "guardian", "sibling", "relative", "foster", "other"
const RELATIONSHIP_OPTIONS = [
    { value: "father", label: "Father" },
    { value: "mother", label: "Mother" },
    { value: "guardian", label: "Guardian" },
    { value: "sibling", label: "Sibling" },
    { value: "relative", label: "Relative" },
    { value: "foster", label: "Foster Parent" },
    { value: "other", label: "Other" },
]

export function GuardianContactForm() {

    const [consent, setConsent] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<GuardianContactFormData>({
        resolver: zodResolver(GuardianContactInfoSchema),
        defaultValues: {
            contact: {
                firstName: "",
                lastName: "",
                email: ""
            },
            guardians: [
                {
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    hasLegalDocumentation: false
                }
            ]
        },
        mode: "all",
        reValidateMode: "onChange"
    });

    const { control, setValue, register, handleSubmit, watch, formState: { errors } } = form;
    const { fields: guardians, append: appendGuardian, remove: removeGuardian } = useFieldArray({
        control,
        name: "guardians"
    });

    const addGuardian = () => {
        console.log("Adding guardian");
        appendGuardian({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            relationship: undefined,
            hasLegalDocumentation: false
        });
    };

    const onSubmit = async (data: GuardianContactFormData) => {
        setIsSubmitting(true);
        try {

            const response = await submitGuardianContactForm(data);

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
                                <FieldError error={get(errors, "contact.firstName")} />
                            </div>

                            <div className="space-y-2">
                                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="contact_lastName">Last Name *</Label>
                                <Input id="contact_lastName" {...register("contact.lastName")} placeholder="last name" />
                                <FieldError error={get(errors, "contact.lastName")} />
                            </div>

                            <div className="space-y-2">
                                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="contact_email">Email *</Label>
                                <Input id="contact_email" {...register("contact.email")} placeholder="email address" />
                                <FieldError error={get(errors, "contact.email")} />
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
                                <FieldError error={get(errors, "contact.phone")} />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Guardians */}
                {guardians.map((field, index) => {

                    const guardianRelationship = watch(`guardians.${index}.relationship`);
                    const hasLegalDocumentation = watch(`guardians.${index}.hasLegalDocumentation`);

                    return (
                        <Card key={field.id}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <Users className="h-5 w-5 text-primary" />
                                    {index === 0 ? "Primary Guardian" : `Guardian #${index + 1}`}
                                </CardTitle>
                                {index > 0 && (
                                    <Button type="button" variant="ghost" size="sm"
                                        onClick={() => removeGuardian(index)}
                                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                                    >
                                        <Trash2 className="h-4 w-4 mr-1" />
                                        Remove Guardian
                                    </Button>
                                )}
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor={`guardians.${index}.firstName`} className="block text-sm font-medium text-foreground mb-1.5">First Name *</Label>
                                        <Input id={`guardians.${index}.firstName`} {...register(`guardians.${index}.firstName`)} placeholder="First name" />
                                        <FieldError error={get(errors, `guardians.${index}.firstName`)} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor={`guardians.${index}.lastName`} className="block text-sm font-medium text-foreground mb-1.5">Last Name *</Label>
                                        <Input id={`guardians.${index}.lastName`} {...register(`guardians.${index}.lastName`)} placeholder="Last name" />
                                        <FieldError error={get(errors, `guardians.${index}.lastName`)} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor={`guardians.${index}.email`} className="block text-sm font-medium text-foreground mb-1.5">Email *</Label>
                                        <Input id={`guardians.${index}.email`} {...register(`guardians.${index}.email`)} placeholder="Email" />
                                        <FieldError error={get(errors, `guardians.${index}.email`)} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor={`guardians.${index}.phone`} className="block text-sm font-medium text-foreground mb-1.5">Phone</Label>
                                        <Controller
                                            name={`guardians.${index}.phone`}
                                            control={control}
                                            defaultValue=""
                                            render={({ field }) => (
                                                <Input
                                                    id={`guardians.${index}.phone`}
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
                                        <FieldError error={get(errors, `guardians.${index}.phone`)} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor={`guardians.${index}.relationship`} className="block text-sm font-medium text-foreground mb-1.5">Relationship to Patient *</Label>
                                        <Controller
                                            name={`guardians.${index}.relationship`}
                                            control={control}
                                            render={({ field }) => (
                                                <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                                    <SelectTrigger id="relationship" className="w-full">
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
                                        <FieldError error={get(errors, `guardians.${index}.relationship`)} />
                                    </div>
                                </div>

                                <div className="space-y-3 pt-2 border-t">
                                    <div className="flex items-start gap-3">

                                        <Controller
                                            name={`guardians.${index}.hasLegalDocumentation`}
                                            control={control}
                                            render={({ field }) => (
                                                <Checkbox
                                                    id={`guardians.${index}.hasLegalDocumentation`}
                                                    checked={field.value}
                                                    onCheckedChange={(checked) => {
                                                        field.onChange(checked === true);
                                                    }}
                                                />
                                            )}
                                        />

                                        <div className="grid gap-1">
                                            <Label htmlFor={`guardians.${index}.hasLegalDocumentation`} className="font-normal cursor-pointer">
                                                I have legal documentation supporting this guardianship
                                            </Label>
                                            <p className="text-xs text-muted-foreground">
                                                Court orders, custody agreements, power of attorney, etc.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )

                })}

                {/* Add Guardian Button */}
                <Button
                    type="button"
                    variant="outline"
                    onClick={addGuardian}
                    className="w-full bg-transparent"
                >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Another Guardian
                </Button>

                {/* Consent & Submit */}
                <Card>
                    <CardContent className="pt-6 space-y-4">
                        <div className="flex items-start gap-2 bg-muted p-4 rounded-lg">
                            <Checkbox id="consent" checked={consent}
                                onCheckedChange={(checked) => setConsent(checked === true)}
                            />
                            <div className="grid gap-1">
                                <Label htmlFor="consent" className="text-sm font-normal cursor-pointer gap-2">
                                    I confirm that the information provided is accurate and that I am authorized to
                                    designate the aboe individual(s) as guardian(s) for the patient named. I understand
                                    that supporting documentation may be requested. *
                                </Label>
                            </div>

                        </div>

                        <Button type="submit" size="lg" className="w-full cursor-pointer" disabled={isSubmitting || !consent}>
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-span" />
                                    Submitting...
                                </>
                            ) : ("Submit Guardian Contact(s)")}
                        </Button>

                    </CardContent>
                </Card>
            </div>
        </form>
    )
}