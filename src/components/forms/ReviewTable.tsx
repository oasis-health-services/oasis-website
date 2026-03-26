import React from "react";
import { Edit2 } from "lucide-react";
import { Button } from "../ui/button";
import { SummarySection } from "./MultistepForm";
import { motion } from "framer-motion";

interface Column<T> {
    header: string;
    key?: string;
    render?: (item: T) => React.ReactNode;
}

interface ReviewTableProps<T> {
    title: string;
    onEdit?: () => void;
    columns: Column<T>[];
    data: T | T[] | undefined | null;
    emptyMessage?: string;
}

export function ReviewTable<T extends Record<string, any>>({ 
    title, 
    onEdit, 
    columns, 
    data,
    emptyMessage = "No information provided"
}: ReviewTableProps<T>) {

    if (!data || (Array.isArray(data) && data.length === 0)) {
        return (
            <SummarySection title={title} onEdit={onEdit || (() => {})}>
                <p className="text-sm text-muted-foreground italic">{emptyMessage}</p>
            </SummarySection>
        );
    }

    const items = Array.isArray(data) ? data : [data];

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
                <h3 className="text-md font-semibold text-foreground">{title}</h3>
                {onEdit && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={onEdit}
                        className="h-8 w-8 p-0 text-muted-foreground hover:text-primary"
                    >
                        <Edit2 className="h-4 w-4" />
                    </Button>
                )}
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-hidden rounded-lg border border-border bg-card">
                <table className="w-full text-left text-sm">
                    <thead className="bg-muted/50 text-muted-foreground font-medium border-b">
                        <tr>
                            {columns.map((col, i) => (
                                <th key={i} className="px-4 py-3 first:pl-6 last:pr-6">
                                    {col.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {items.map((item, rowIndex) => (
                            <motion.tr 
                                key={rowIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: rowIndex * 0.05 }}
                                className="group hover:bg-muted/30 transition-colors"
                            >
                                {columns.map((col, colIndex) => (
                                    <td key={colIndex} className="px-4 py-3 first:pl-6 last:pr-6 align-top">
                                        <div className="text-foreground font-medium">
                                            {col.render ? col.render(item) : (col.key ? item[col.key] : null)}
                                        </div>
                                    </td>
                                ))}
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
                {items.map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="rounded-lg border border-border bg-card p-4 shadow-sm"
                    >
                        {Array.isArray(data) && (
                            <div className="mb-3 text-xs font-bold uppercase tracking-wider text-primary/70">
                                {title} # {index + 1}
                            </div>
                        )}
                        <div className="space-y-2">
                            {columns.map((col, i) => (
                                <div key={i} className="flex flex-col gap-1 border-b border-border/40 pb-2 last:border-0 last:pb-0">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                                        {col.header}
                                    </span>
                                    <div className="text-sm font-medium text-foreground">
                                        {col.render ? col.render(item) : (col.key ? item[col.key] : null)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
