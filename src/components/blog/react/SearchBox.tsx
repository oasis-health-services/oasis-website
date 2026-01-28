"use client";

import React from "react"

import { useState, useRef, useEffect } from "react";
import { Search, FileText, FolderOpen, Tag, ArrowRight, X } from "lucide-react";
import { searchContent, type SearchResult, type Category } from "../../../lib/data";

const typeIcons = {
  article: FileText,
  category: FolderOpen,
  subcategory: FolderOpen,
  tag: Tag,
};

const typeLabels = {
  article: "Article",
  category: "Category",
  subcategory: "Topic",
  tag: "Tag",
};

interface SearchBoxProps {
  categories: Category[];
}

export function SearchBox({ categories }: SearchBoxProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length >= 2) {
      const searchResults = searchContent(query, categories, 8);
      setResults(searchResults);
      setIsOpen(true);
      setSelectedIndex(-1);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query, categories]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!isOpen || results.length === 0) {
      if (e.key === "Enter" && query.length >= 2) {
        window.location.href = `/search?q=${encodeURIComponent(query)}`;
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0 && results[selectedIndex]) {
          window.location.href = results[selectedIndex].url;
        } else {
          window.location.href = `/search?q=${encodeURIComponent(query)}`;
        }
        break;
      case "Escape":
        setIsOpen(false);
        setSelectedIndex(-1);
        break;
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim().length > 0) {
      window.location.href = `/search?q=${encodeURIComponent(query.trim())}`;
    } else {
      window.location.href = "/search";
    }
  }

  function clearSearch() {
    setQuery("");
    setResults([]);
    setIsOpen(false);
    inputRef.current?.focus();
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => query.length >= 2 && setIsOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder="Search for topics, resources, or articles..."
            className="h-12 w-full rounded-lg border border-border bg-card pl-12 pr-10 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            autoComplete="off"
          />
          {query && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <button
          type="submit"
          className="w-full sm:w-auto h-12 rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Explore
        </button>
      </form>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50 sm:right-auto sm:w-[calc(100%-6rem)]">
          <div className="max-h-[400px] overflow-y-auto">
            {results.map((result, index) => {
              const Icon = typeIcons[result.type];
              return (
                <a
                  key={`${result.type}-${result.url}`}
                  href={result.url}
                  className={`flex items-start gap-3 px-4 py-3 hover:bg-muted/50 transition-colors ${index === selectedIndex ? "bg-muted/50" : ""
                    }`}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <div className="mt-0.5 flex-shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground truncate">
                        {result.title}
                      </span>
                      <span className="text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground flex-shrink-0">
                        {typeLabels[result.type]}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-1 mt-0.5">
                      {result.description}
                    </p>
                    {result.category && (
                      <p className="text-xs text-muted-foreground/70 mt-0.5">
                        in {result.category}
                      </p>
                    )}
                  </div>
                </a>
              );
            })}
          </div>
          <a
            href={`/search?q=${encodeURIComponent(query)}`}
            className="flex items-center justify-center gap-2 px-4 py-3 border-t border-border text-sm text-primary hover:bg-muted/50 transition-colors"
          >
            View all results for "{query}"
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      )}

      {/* No Results State */}
      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg p-6 text-center z-50 sm:right-auto sm:w-[calc(100%-6rem)]">
          <Search className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
          <p className="text-muted-foreground">No results found for "{query}"</p>
          <p className="text-sm text-muted-foreground/70 mt-1">
            Try different keywords or browse our categories
          </p>
        </div>
      )}
    </div>
  );
}

export default SearchBox;
