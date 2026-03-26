import { Controller, get, useFieldArray, type ArrayPath, type FieldValues, type Path } from "react-hook-form";
import type { FormComponentProps } from "./MultistepForm";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import FieldError from "../FieldError";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { formatPhoneNumber } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Plus, Trash2, Users } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

const GUARDIAN_RELATIONSHIP_OPTIONS = [
    { value: "father", label: "Father" },
    { value: "mother", label: "Mother" },
    { value: "guardian", label: "Guardian" },
    { value: "sibling", label: "Sibling" },
    { value: "relative", label: "Relative" },
    { value: "foster", label: "Foster Parent" },
    { value: "other", label: "Other" },
]

const RELATIONSHIP_OPTIONS = [
    { value: "Self", label: "Self" },
    { value: "Spouse", label: "Spouse" },
    { value: "Child", label: "Child" },
    { value: "Parent", label: "Parent" },
    { value: "Sibling", label: "Sibling" },
    { value: "Friend", label: "Friend" },
    { value: "Other", label: "Other" },
];

export function EmergencyContactFieldsComponent<T extends FieldValues>({ form, prefix = "additionalInformation" }: FormComponentProps<T>) {

    const { register, control, formState: { errors } } = form;
    const _prefix = prefix ? `${prefix}.` : '';

    return (
        <div className="grid sm:grid-cols-2 gap-4">

            <div className="space-y-2 sm:col-span-2">
                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="emergency_relationship">Relationship to Patient *</Label>
                <Controller
                    name={`${_prefix}emergency.relationship` as Path<T>}
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
                <FieldError error={get(errors, `${_prefix}emergency.relationship`)} />
            </div>

            <div className="space-y-2">
                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="emergency_firstName">First Name *</Label>
                <Input id="emergency_firstName" {...register(`${_prefix}emergency.firstName` as Path<T>)} placeholder="First name" />
                <FieldError error={get(errors, `${_prefix}emergency.firstName`)} />
            </div>

            <div className="space-y-2">
                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="emergency_lastName">Last Name *</Label>
                <Input id="emergency_lastName" {...register(`${_prefix}.emergency.lastName` as Path<T>)} placeholder="Last name" />
                <FieldError error={get(errors, `${_prefix}emergency.lastName`)} />
            </div>

            <div className="space-y-2">
                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="emergency_email">Email *</Label>
                <Input type="email" id="emergency_email" {...register(`${_prefix}emergency.email` as Path<T>)} placeholder="Email address" />
                <FieldError error={get(errors, `${_prefix}emergency.email`)} />
            </div>

            <div className="space-y-2">
                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="emergency_phone">Phone</Label>
                <Controller
                    name={`${_prefix}emergency.phone` as Path<T>}
                    control={control}
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
                <FieldError error={get(errors, `${_prefix}emergency.phone`)} />
            </div>
        </div>
    )
}

export function GuardianContactFieldsComponent<T extends FieldValues>({ form, prefix = "additionalInformation" }: FormComponentProps<T>) {

    const _prefix = prefix ? `${prefix}.` : '';
    const { register, control, formState: { errors } } = form;
    const { fields: guardians, append: appendGuardian, remove: removeGuardian } = useFieldArray({
        control,
        name: `${_prefix}guardians` as ArrayPath<T>
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
        } as any);
    };

    return (

        <div className="space-y-6">
            <div className="space-y-4">
                {guardians.map((field, index) => {

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

                                    <div className="space-y-2 sm:col-span-2">
                                        <Label htmlFor={`guardians.${index}.relationship`} className="block text-sm font-medium text-foreground mb-1.5">Relationship to Patient *</Label>
                                        <Controller
                                            name={`${_prefix}guardians.${index}.relationship` as Path<T>}
                                            control={control}
                                            render={({ field }) => (
                                                <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                                    <SelectTrigger id="relationship" className="w-full sm:w-1/2">
                                                        <SelectValue placeholder="Select relationship" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {GUARDIAN_RELATIONSHIP_OPTIONS.map((option) => (
                                                            <SelectItem key={option.value} value={option.value}>
                                                                {option.label}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                        <FieldError error={get(errors, `${_prefix}guardians.${index}.relationship`)} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor={`guardians.${index}.firstName`} className="block text-sm font-medium text-foreground mb-1.5">First Name *</Label>
                                        <Input id={`guardians.${index}.firstName`} {...register(`${_prefix}guardians.${index}.firstName` as Path<T>)} placeholder="First name" />
                                        <FieldError error={get(errors, `${_prefix}guardians.${index}.firstName`)} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor={`guardians.${index}.lastName`} className="block text-sm font-medium text-foreground mb-1.5">Last Name *</Label>
                                        <Input id={`guardians.${index}.lastName`} {...register(`additionalInformation.guardians.${index}.lastName` as Path<T>)} placeholder="Last name" />
                                        <FieldError error={get(errors, `${_prefix}guardians.${index}.lastName`)} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor={`guardians.${index}.email`} className="block text-sm font-medium text-foreground mb-1.5">Email *</Label>
                                        <Input id={`guardians.${index}.email`} {...register(`additionalInformation.guardians.${index}.email` as Path<T>)} placeholder="Email" />
                                        <FieldError error={get(errors, `${_prefix}guardians.${index}.email`)} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor={`guardians.${index}.phone`} className="block text-sm font-medium text-foreground mb-1.5">Phone</Label>
                                        <Controller
                                            name={`${_prefix}guardians.${index}.phone` as Path<T>}
                                            control={control}
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
                                        <FieldError error={get(errors, `${_prefix}guardians.${index}.phone`)} />
                                    </div>
                                </div>

                                <div className="space-y-3 pt-2 border-t">
                                    <div className="flex items-start gap-3">

                                        <Controller
                                            name={`${_prefix}guardians.${index}.hasLegalDocumentation` as Path<T>}
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
            </div>

            <Button
                type="button"
                variant="outline"
                onClick={addGuardian}
                className="w-full bg-transparent"
            >
                <Plus className="h-4 w-4 mr-2" />
                Add Another Guardian
            </Button>
        </div>
    )
}

export function ReferrerContactFieldsComponent<T extends FieldValues>({ form, prefix = "additionalInformation" }: FormComponentProps<T>) {

    const _prefix = prefix ? `${prefix}.` : '';
    const { register, control, formState: { errors } } = form;

    //    const isReferrer = referrer === "Referrer";

    return (
        <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor={`${prefix}_referrer_name`}>Name *</Label>
                <Input id={`${prefix}_referrer_name`} {...register(`${_prefix}referrer.name` as Path<T>)} placeholder="Name" maxLength={35} />
                <FieldError error={get(errors, `${_prefix}referrer.name`)} />
            </div>

            <div className="space-y-2">
                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor={`${prefix}_referrer_specialty`}>Specialty *</Label>
                <Input type="text" id={`${prefix}_referrer_specialty`} {...register(`${_prefix}referrer.specialty` as Path<T>)} placeholder="Specialty" maxLength={35} />

                <FieldError error={get(errors, `${_prefix}referrer.specialty`)} />
            </div>

            <div className="space-y-2">
                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor={`${prefix}_referrer_practiceName`}>Practice Name *</Label>
                <Input id={`${prefix}_referrer_practiceName`} {...register(`${_prefix}referrer.practiceName` as Path<T>)} placeholder="Practice Name" maxLength={35} />
                <FieldError error={get(errors, `${_prefix}referrer.practiceName`)} />
            </div>

            <div className="space-y-2">
                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor={`${prefix}_referrer_email`}>Email *</Label>
                <Input type="email" id={`${prefix}_referrer_email`} {...register(`${_prefix}referrer.email` as Path<T>)} placeholder="Email address" />
                <FieldError error={get(errors, `${_prefix}referrer.email`)} />
            </div>

            <div className="space-y-2">
                <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor={`${prefix}_referrer_phone`}>Phone</Label>
                <Controller
                    name={`${_prefix}referrer.phone` as Path<T>}
                    control={control}
                    render={({ field }) => (
                        <Input
                            id="referrer_phone"
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
                <FieldError error={get(errors, `${_prefix}referrer.phone`)} />
            </div>
        </div>
    )
}