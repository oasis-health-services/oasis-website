import { Controller, type FieldValues, type Path, type UseFormReturn } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export function SelectField<T extends FieldValues, K extends Path<T>>({
    form, name, placeholder, options, className = "w-full" }:
    {
        form: UseFormReturn<T>,
        name: K,
        placeholder: string,
        options: { value: string, label: string }[],
        className?: string
    }) {

    const { control } = form;
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue="" value={field.value}>
                    <SelectTrigger id={name as string} className={className}>
                        <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                        {options.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            )}
        />
    )
}