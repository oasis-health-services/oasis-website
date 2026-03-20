import { Controller, type FieldValues, type Path, type UseFormReturn } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

export function CheckboxField<T extends FieldValues, K extends Path<T>>({
    form, name, options, className = "grid sm:grid-cols-4 gap-2" }:
    {
        form: UseFormReturn<T>,
        name: K,
        options: { value: string, label: string }[],
        className?: string
    }) {

    const { control } = form;

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => {

                const selectedValues: string[] = Array.isArray(field.value) ? field.value : [];

                return (
                    <div className={className}>
                        {options.map((option, index) => (
                            <div className="flex items-center space-x-2" key={index}>
                                <Checkbox
                                    id={option.value}
                                    checked={selectedValues.includes(option.value)}
                                    onCheckedChange={(checked) => {
                                        if (checked) {
                                            field.onChange([...selectedValues, option.value]);
                                        } else {
                                            field.onChange(selectedValues.filter((value: string) => value !== option.value));
                                        }
                                    }}
                                />
                                <Label className="block text-sm font-medium text-foreground" htmlFor={option.value}>{option.label}</Label>
                            </div>
                        ))}
                    </div>
                )
            }}
        />
    )
}