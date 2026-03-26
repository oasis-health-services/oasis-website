import { Controller, type FieldValues, type Path, type UseFormReturn } from "react-hook-form";

import { Input } from "../ui/input";
import type { InputHTMLAttributes } from "react";

{/* <Controller
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
                    /> */}

export function FormattedFieldComponent<T extends FieldValues, K extends Path<T>>({
    form, name, type, formatter, placeholder, className = "space-y-2", parser = (e: React.ChangeEvent<HTMLInputElement>) => e.target.value, maxLength }: {
        form: UseFormReturn<T>,
        name: K,
        type: InputHTMLAttributes<HTMLInputElement>["inputMode"],
        formatter: (value: any) => string,
        placeholder: string,
        className?: string
        parser: (e: React.ChangeEvent<HTMLInputElement>) => string,
        maxLength?: number
    }) {

    const { control } = form;

    return (
        <div className={className}>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Input
                        id={name}
                        placeholder={placeholder}
                        inputMode={type}
                        value={formatter(field.value || "")}
                        onChange={(e) => {
                            const value = parser(e);
                            field.onChange(value);
                        }}
                        onBlur={field.onBlur}
                        ref={field.ref}
                        type={type}
                        maxLength={maxLength}
                    />
                )}
            />
        </div>
    )
}
