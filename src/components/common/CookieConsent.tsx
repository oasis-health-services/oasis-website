import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, ShieldCheck, ExternalLink, ChevronLeft } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'oasis-cookie-consent';

type View = 'main' | 'customize';
type Preferences = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
};

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [view, setView] = useState<View>('main');
  const [prefs, setPrefs] = useState<Preferences>({
    essential: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (preferences: Preferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({
      preferences,
      date: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    const allOn = { essential: true, analytics: true, marketing: true };
    setPrefs(allOn);
    saveConsent(allOn);
  };

  const handleRejectAll = () => {
    const essentialOnly = { essential: true, analytics: false, marketing: false };
    setPrefs(essentialOnly);
    saveConsent(essentialOnly);
  };

  const togglePref = (key: keyof Preferences) => {
    if (key === 'essential') return;
    setPrefs(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          className="fixed bottom-6 right-6 z-[9999] w-[calc(100%-3rem)] md:w-[440px]"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/70 p-6 shadow-2xl backdrop-blur-xl dark:bg-black/60 dark:border-white/10 dark:shadow-white/5">
            <AnimatePresence mode="wait">
              {view === 'main' ? (
                <motion.div
                  key="main"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="relative flex flex-col gap-6"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Cookie size={28} />
                    </div>
                    <button
                      onClick={() => setIsVisible(false)}
                      className="rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold tracking-tight text-foreground">
                      Your Privacy Matters
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground/90">
                      We use cookies to enhance your experience, analyze our traffic, and provide personalized mental health care insights.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-medium uppercase tracking-widest text-primary/70">
                    <a href="/policies" className="hover:text-primary flex items-center gap-1 transition-colors">
                      Privacy <ExternalLink size={10} />
                    </a>
                    <a href="/terms-and-conditions" className="hover:text-primary flex items-center gap-1 transition-colors">
                      Terms <ExternalLink size={10} />
                    </a>
                    <a href="/hipaa" className="hover:text-primary flex items-center gap-1 transition-colors">
                      HIPAA <ExternalLink size={10} />
                    </a>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <button
                      onClick={handleRejectAll}
                      className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground transition-all hover:bg-muted"
                    >
                      Reject All
                    </button>
                    <button
                      onClick={handleAcceptAll}
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90"
                    >
                      <ShieldCheck size={18} />
                      Accept All
                    </button>
                    <button
                      onClick={() => setView('customize')}
                      className="sm:col-span-2 text-center text-xs font-medium text-muted-foreground hover:text-foreground transition-colors py-1"
                    >
                      Customize My Settings
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="customize"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="relative flex flex-col gap-6"
                >
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setView('main')}
                      className="rounded-full p-1.5 text-muted-foreground hover:bg-muted transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <h3 className="font-serif text-xl font-bold text-foreground">Preferences</h3>
                  </div>

                  <div className="space-y-4">
                    <PreferenceToggle
                      label="Essential Cookies"
                      description="Required for basic site functionality and security."
                      enabled={prefs.essential}
                      locked={true}
                    />
                    <PreferenceToggle
                      label="Analytics"
                      description="Helps us understand how visitors interact with the site."
                      enabled={prefs.analytics}
                      onClick={() => togglePref('analytics')}
                    />
                    <PreferenceToggle
                      label="Marketing"
                      description="Used to deliver relevant information and services to you."
                      enabled={prefs.marketing}
                      onClick={() => togglePref('marketing')}
                    />
                  </div>

                  <button
                    onClick={() => saveConsent(prefs)}
                    className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90"
                  >
                    Save My Preferences
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const PreferenceToggle = ({ label, description, enabled, onClick, locked = false }: any) => (
  <div className="flex items-start justify-between gap-4 py-2">
    <div className="flex-1">
      <p className="text-sm font-semibold text-foreground">{label}</p>
      <p className="text-xs text-muted-foreground leading-tight mt-0.5">{description}</p>
    </div>
    <button
      onClick={onClick}
      disabled={locked}
      className={`relative h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${enabled ? 'bg-primary' : 'bg-muted'
        } ${locked ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${enabled ? 'translate-x-6' : 'translate-x-1'
          } mt-1`}
      />
    </button>
  </div>
);

export default CookieConsent;
