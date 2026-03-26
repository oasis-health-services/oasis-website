import React from "react";
import { Edit2 } from "lucide-react";
import { Button } from "../ui/button";

interface ReviewSummaryItem {
    label: string;
    value: string | React.ReactNode;
}

interface ReviewSummaryCardProps {
    title: string;
    onEdit?: () => void;
    items: ReviewSummaryItem[];
}

export function ReviewSummaryCard({ title, onEdit, items }: ReviewSummaryCardProps) {
    return (
        <div className="overflow-hidden bg-card w-full sm:w-2/3">
            {/* Header */}
            {title && (
                <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-semibold tracking-wider text-muted-foreground">{title}</h4>
                    {onEdit && (
                        <>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={onEdit}
                                className="h-8 gap-1 px-2 text-xs font-medium text-muted-foreground hover:text-secondary"
                            >
                                <Edit2 className="h-3 w-3 mr-1" />
                                Edit
                            </Button>
                            <Button variant="ghost" size="sm" onClick={onEdit} className="h-8 px-2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                                <Edit2 className="w-3 h-3 mr-1" /> Edit
                            </Button>
                        </>
                    )}
                </div>
            )}

            {/* Content Table */}
            <div className="">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center transition-colors hover:bg-muted/10"
                    >
                        <span className="text-sm font-medium text-primary/90">
                            {item.label}:
                        </span>
                        <span className="text-sm font-medium text-foreground text-right ml-4">
                            {item.value || <span className="text-muted-foreground italic">Not provided</span>}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
