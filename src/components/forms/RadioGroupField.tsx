import { Controller, type FieldValues, type Path, type UseFormReturn } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

export function RadioGroupField<T extends FieldValues, K extends Path<T>>({
    form, name, options, className = "flex flex-row items-center gap-6", value }: {
        form: UseFormReturn<T>,
        name: K,
        options: { value: string | boolean | number, label: string }[],
        className?: string,
        value?: string | boolean | number
    }) {

    const { control } = form;
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <RadioGroup
                    onValueChange={(val) => {
                        const option = options.find(o => String(o.value) === val);
                        if (option) {
                            field.onChange(option.value);
                        } else {
                            field.onChange(val);
                        }
                    }}
                    defaultValue={value !== undefined ? String(value) : undefined}
                    value={field.value !== undefined ? String(field.value) : ""}
                    className={className}
                >
                    {options.map((option, index) => (
                        <div className="flex items-center space-x-2" key={index}>
                            <RadioGroupItem key={String(option.value)} value={String(option.value)} id={String(option.value)} />
                            <Label htmlFor={String(option.value)}>{option.label}</Label>
                        </div>
                    ))}
                </RadioGroup>
            )}
        />
    )
}