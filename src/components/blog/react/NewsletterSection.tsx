'use client';

import React from "react"

import { useState } from "react";
import { Mail, Check } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <Mail className="h-7 w-7 text-primary" />
          </div>

          <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
            Stay Connected With Oasis
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Join our newsletter for gentle reminders, helpful resources, and
            updates from our community. We respect your inbox — no spam, ever.
          </p>

          {subscribed ? (
            <div className="mt-8 flex items-center justify-center gap-3 rounded-xl bg-primary/10 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Check className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">
                  Welcome to the Oasis community!
                </p>
                <p className="text-sm text-muted-foreground">
                  Check your inbox for a confirmation email.
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 flex-1 rounded-lg border border-input bg-card px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                className="h-12 rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-muted-foreground">
            By subscribing, you agree to our Privacy Policy. Unsubscribe
            anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
