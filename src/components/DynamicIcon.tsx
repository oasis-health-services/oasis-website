import React from 'react';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

export type IconName = keyof typeof LucideIcons;

interface DynamicIconProps extends LucideProps {
    name: string;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
    const Icon = (LucideIcons as any)[name];

    if (!Icon) {
        console.warn(`Icon "${name}" not found in lucide-react`);
        return null;
    }

    return <Icon {...props} />;
}
