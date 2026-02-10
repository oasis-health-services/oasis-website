'use client';

import React from "react"

import { useState } from "react";
import { ChevronRight, Heart, HandHelping, Sparkles, Users, FileText, Megaphone } from "lucide-react";
import type { Category } from "../../../lib/data";
import { cn } from "../../../lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  HandHelping,
  Sparkles,
  Users,
  FileText,
  Megaphone,
};

interface CategoriesSectionProps {
  categories: Category[];
}

export function CategoriesSection({ categories }: CategoriesSectionProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id);
  const active = categories.find((c) => c.id === activeCategory) || categories[0];

  if (!active) return null;

  const Icon = iconMap[active.iconName] || Heart;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
            Explore Our Resource Library
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Whether you're seeking answers for yourself or supporting someone
            you love, we're here to help guide the way.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0 lg:flex-wrap lg:justify-center">
          {categories.map((category) => {
            const CatIcon = iconMap[category.iconName] || Heart;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all shrink-0",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground hover:bg-muted border border-border"
                )}
              >
                <CatIcon className="h-4 w-4" />
                <span className="hidden sm:inline">{category.title.split(" ").slice(0, 2).join(" ")}</span>
                <span className="sm:hidden">{category.title.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active category content */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Description card */}
          <div className={cn("rounded-2xl border p-8 transition-all", active.bgColor)}>
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-white/80 p-3">
                <Icon className={cn("h-8 w-8", active.color)} />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  {active.title}
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {active.description}
                </p>
              </div>
            </div>
            <a
              href={`/blog/category/${active.slug}`}
              className="mt-6 inline-flex items-center rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
            >
              Explore All Articles
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          {/* Topics grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {active.items.map((item) => (
              <a
                key={item.slug}
                href={`/blog/category/${active.slug}/${item.slug}`}
                className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 text-left transition-all hover:border-primary/30 hover:bg-muted"
              >
                <span className="font-medium text-foreground">{item.name}</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
