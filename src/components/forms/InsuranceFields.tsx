import type { FormComponentProps } from "./MultistepForm";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import FieldError from "../FieldError";
import { Controller, get, type FieldValues, type Path } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectValue, SelectTrigger } from "../ui/select";
import { motion } from "framer-motion";
import { FileUploadZone, type UploadedFile } from "./FileUploadZone";
import { useFormStore } from "@/store";
import { formatPhoneNumber } from "@/lib/utils";

export function InsuranceContactFieldsComponent<T extends FieldValues>({ form }: FormComponentProps<T>) {

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
                        {...register("contact.firstName" as Path<T>)}
                        placeholder="John"
                    />
                    <FieldError error={get(errors, "contact.firstName")} />
                </div>

                <div className="space-y-2">
                    <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="contact_lastName">Last Name *</Label>
                    <Input
                        id="contact_lastName"
                        {...register("contact.lastName" as Path<T>)}
                        placeholder="Doe"
                    />
                    <FieldError error={get(errors, "contact.lastName")} />
                </div>

                <div className="space-y-2">
                    <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="contact_email">Email Address *</Label>
                    <Input
                        id="contact_email"
                        type="email"
                        {...register("contact.email" as Path<T>)}
                        placeholder="john@example.com"
                    />
                    <FieldError error={get(errors, "contact.email")} />
                </div>
                <div className="space-y-2">
                    <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="contact_phone">Phone Number</Label>
                    <Controller
                        name={`contact.phone` as Path<T>}
                        control={control}
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
                        {...register("contact.dob" as Path<T>)}
                        placeholder="MM/DD/YYYY"
                    />
                    <FieldError error={get(errors, "contact.dob")} />
                </div>
            </div>
        </div>
    )
}

export function InsuranceDetailFieldsComponent<T extends FieldValues>({ prefix, form }: FormComponentProps<T>) {

    const { register, watch, control, formState: { errors } } = form;
    const setFiles = useFormStore((state) => state.setFiles);

    const _prefix = prefix ? `${prefix}.` : "";

    const subscriberRelationship = watch(`${_prefix}insurance.subscriberRelationship` as Path<T>);
    const showSubscriberFields = subscriberRelationship && subscriberRelationship !== "self";

    const insuranceImages = useFormStore((state) => state.files[`${_prefix}insurance.images`]) || [];

    const setInsuranceImages: React.Dispatch<React.SetStateAction<UploadedFile[]>> = (value) => {
        const newFiles = typeof value === "function" ? value(insuranceImages) : value;
        setFiles(`${_prefix}insurance.images`, newFiles);
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
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>

            <div className="space-y-6">

                <h3 className="mt-10 text-md font-semibold text-foreground pb-2 border-b border-border">
                    Insurance Information
                </h3>

                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2 w-full">
                        <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor={`${prefix}_insuranceType`}>Type *</Label>
                        <Controller
                            name={`${_prefix}insurance.type` as Path<T>}
                            control={control}
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} defaultValue="" value={field.value}>
                                    <SelectTrigger id={`${prefix}_insuranceType`} className="w-full">
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
                        <FieldError error={get(errors, `${_prefix}insurance.type`)} />
                    </div>
                    <div className="space-y-2 w-full">
                        <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor={`${prefix}_insuranceName`}>Carrier *</Label>
                        <Controller
                            name={`${_prefix}insurance.name` as Path<T>}
                            control={control}
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} defaultValue="" value={field.value}>
                                    <SelectTrigger id={`${prefix}_insuranceName`} className="w-full">
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
                        <FieldError error={get(errors, `${_prefix}insurance.name`)} />
                    </div>

                    <div className="space-y-2 w-full">
                        <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor={`${prefix}_insurancePlan`}>Plan Name</Label>
                        <Input
                            id={`${prefix}_insurancePlan`}
                            {...register(`${_prefix}insurance.plan` as Path<T>)}
                            placeholder="Plan name"
                        />
                        <FieldError error={get(errors, `${_prefix}insurance.plan`)} />
                    </div>

                    <div className="space-y-2 w-full">
                        <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor={`${prefix}_insuranceMemberId`}>Member ID *</Label>
                        <Input
                            id={`${prefix}_insuranceMemberId`}
                            {...register(`${_prefix}insurance.memberId` as Path<T>)}
                            placeholder="1234567890"
                        />
                        <FieldError error={get(errors, `${_prefix}insurance.memberId`)} />
                    </div>
                    <div className="space-y-2 w-full">
                        <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor={`${prefix}_insuranceGroupNumber`}>Policy/Group Number</Label>
                        <Input
                            id={`${prefix}_insuranceGroupNumber`}
                            {...register(`${_prefix}insurance.groupNumber` as Path<T>)}
                            placeholder="1234567890"
                        />
                        <FieldError error={get(errors, `${_prefix}insurance.groupNumber`)} />
                    </div>
                    <div className="space-y-2 w-full">
                        <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor={`${prefix}_subscriberRelationship`}>What is your relationship to the subscriber? *</Label>
                        <Controller
                            name={`${_prefix}insurance.subscriberRelationship` as Path<T>}
                            control={control}
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} defaultValue="self" value={field.value}>
                                    <SelectTrigger id={`${prefix}_subscriberRelationship`} className="w-full align-left">
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
                        <FieldError error={get(errors, `${_prefix}insurance.subscriberRelationship`)} />
                    </div>

                </div>
            </div>

            {showSubscriberFields && (
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }} className="space-y-6">

                    <h3 className="mt-10 text-md font-semibold text-foreground pb-2 border-b border-border">
                        Subscriber Information
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2 w-full">
                            <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor={`${prefix}_subscriberName`}>Subscriber Name *</Label>
                            <Input
                                id={`${prefix}_subscriberName`}
                                {...register(`${_prefix}insurance.subscriber.name` as Path<T>)}
                                placeholder="John Doe"
                            />
                            <FieldError error={get(errors, `${_prefix}insurance.subscriber.name`)} />
                        </div>
                        <div className="space-y-2 w-full">
                            <Label className="block text-sm font-medium text-foreground mb-1.5" htmlFor={`${prefix}_subscriberDob`}>Subscriber Date of Birth *</Label>
                            <Input
                                id={`${prefix}_subscriberDob`}
                                type="date"
                                {...register(`${_prefix}insurance.subscriber.dob` as Path<T>)}
                                placeholder="MM/DD/YYYY"
                            />
                            <FieldError error={get(errors, `${_prefix}insurance.subscriber.dob`)} />
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
                </div>

            </div>
        </motion.div>
    )
}