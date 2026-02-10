'use client';

import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import type { Category } from "../../../lib/data";
import { cn } from "../../../lib/utils";

interface HeaderProps {
  categories: Category[];
}

export function Header({ categories }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navigation = categories.slice(0, 4).map((cat) => ({
    name: cat.title.split(" ").slice(0, 2).join(" "),
    href: `/category/${cat.slug}`,
    items: cat.items.slice(0, 6).map((item) => ({
      name: item.name,
      href: `/category/${cat.slug}/${item.slug}`,
    })),
  }));

  // Add Resources and Community without dropdowns
  if (categories[4]) {
    navigation.push({ name: "Resources", href: `/category/${categories[4].slug}`, items: [] });
  }
  if (categories[5]) {
    navigation.push({ name: "Community", href: `/category/${categories[5].slug}`, items: [] });
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6 text-primary-foreground"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c-1.5 0-3 .5-4 1.5C6.5 5.5 5 8 5 11c0 4 3 7 7 9 4-2 7-5 7-9 0-3-1.5-5.5-3-6.5-1-.9-2.5-1.5-4-1.5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4m0 0v4m0-4h4m-4 0H8"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-semibold text-foreground leading-tight">
              Oasis
            </span>
            <span className="text-xs text-muted-foreground leading-tight">
              Support & Resource Center
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {navigation.map((item) =>
            item.items && item.items.length > 0 ? (
              <div key={item.name} className="relative">
                <button
                  onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                  className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
                >
                  {item.name}
                  <ChevronDown className={cn("h-4 w-4 transition-transform", openDropdown === item.name && "rotate-180")} />
                </button>
                {openDropdown === item.name && (
                  <div className="absolute left-0 top-full mt-1 w-56 rounded-lg border border-border bg-card p-1 shadow-lg">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem.href}
                        href={subItem.href}
                        className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                      >
                        {subItem.name}
                      </a>
                    ))}
                    <a
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-primary hover:bg-muted transition-colors"
                    >
                      View All
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
              >
                {item.name}
              </a>
            )
          )}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <a
            href="/tags"
            className="hidden sm:flex h-10 w-10 items-center justify-center rounded-lg text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </a>
          <a
            href="#"
            className="hidden sm:flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get Support
          </a>

          {/* Mobile menu button */}
          <button
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg text-foreground hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border">
          <div className="space-y-1 px-4 py-4">
            {navigation.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
                {item.items && item.items.length > 0 && (
                  <div className="ml-4 space-y-1">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem.href}
                        href={subItem.href}
                        className="block rounded-lg px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <a
                href="/tags"
                className="flex items-center justify-start w-full rounded-lg border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Search className="mr-2 h-4 w-4" />
                Search
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-full rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get Support
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
