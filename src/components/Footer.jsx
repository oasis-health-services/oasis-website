import { Phone, Mail, MapPin } from "lucide-react"
import { SiFacebook, SiInstagram, SiLinkedin, SiTwitter } from "simple-icons/icons"
import OptimizedImage from "./OptimizedImage"

const socialLinks = [
    { name: "Facebook", href: "https://facebook.com/oasishealthservices", icon: SiFacebook },
    { name: "Instagram", href: "https://instagram.com/oasishealthservices", icon: SiInstagram },
    { name: "LinkedIn", href: "https://linkedin.com/company/oasishealthservices", icon: SiLinkedin },
    { name: "X", href: "https://x.com/OasisHealthSer1", icon: SiTwitter }
]

const footerNavigation = {
    services: [
        { name: "Medication Management", href: "/services/medication-management" },
        { name: "Therapy & Counseling", href: "/services/therapy-and-counseling" },
        { name: "Telehealth Services", href: "/services/telehealth" },
        { name: "ADHD Testing & Management", href: "/services/adhd-testing-and-management" },
        { name: "All Services", href: "/services" }
    ],
    conditions: [
        { name: "Anxiety Disorders", href: "/about/conditions/anxiety-disorders" },
        { name: "Mood Disorders", href: "/about/conditions/mood-disorders" },
        { name: "Neurodevelopmental Disorders", href: "/about/conditions/neurodevelopmental-disorders" },
        { name: "Trauma & PTSD", href: "/about/conditions/trauma-stress-disorders" },
        { name: "All Conditions", href: "/about/conditions" }
    ],
    company: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/about/our-team" },
        { name: "Resource Center", href: "/resources" },
        { name: "Contact", href: "/contact" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/policies" },
        { name: "Terms of Service", href: "/terms-and-conditions" },
        { name: "HIPAA Notice", href: "/hipaa" },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-foreground text-background" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>

            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-6">

                        <a href="/" className="inline-block mb-4">
                            <OptimizedImage
                                src="/images/oasis-logo-white.png"
                                alt="Oasis Health Services Logo"
                                className="h-12 w-auto"
                                priority={true}
                            />
                        </a>
                        <p className="text-sm leading-relaxed opacity-80 max-w-xs">
                            A trusted oasis of healing where individuals and families find balance, resilience, and hope through compassionate, integrative care.
                        </p>

                        {/* Social Media Links */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center opacity-70 hover:opacity-100 hover:bg-primary hover:text-primary-foreground transition-all"
                                    aria-label={`Follow us on ${item.name}`}
                                >
                                    <item.icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>

                        <div className="space-y-3">
                            <a href="tel:+15093816035" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity">
                                <Phone className="h-4 w-4" />
                                <span>(509) 381-6035</span>
                            </a>
                            <a href="mailto:support@oasishealthservices.com" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity">
                                <Mail className="h-4 w-4" />
                                <span>support@oasishealthservices.com</span>
                            </a>
                            <div className="flex items-start gap-2 text-sm opacity-80">
                                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                                <address className="not-italic">
                                    11285 Elkins Road, Unit J6<br />
                                    Roswell, GA 30076
                                </address>
                            </div>
                        </div>

                        {/* LegitScript Certification */}
                        <div className="pt-4 mt-4 border-t border-background/20">

                            <a
                                title="Verify LegitScript Approval for www.oasishealthservices.com"
                                href="https://www.legitscript.com/websites/?checker_keywords=oasishealthservices.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://static.legitscript.com/seals/15660777.png"
                                    alt="Verify Approval for www.oasishealthservices.com"
                                    width="73"
                                    height="79"
                                />
                            </a>
                            <p className="text-xs opacity-60 mt-2">
                                LegitScript Certified
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold">Services</h3>
                                <ul role="list" className="mt-4 space-y-3">
                                    {footerNavigation.services.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold">Conditions</h3>
                                <ul role="list" className="mt-4 space-y-3">
                                    {footerNavigation.conditions.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold">Company</h3>
                                <ul role="list" className="mt-4 space-y-3">
                                    {footerNavigation.company.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold">Legal</h3>
                                <ul role="list" className="mt-4 space-y-3">
                                    {footerNavigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-background/20 pt-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <p className="text-xs opacity-60">
                            &copy; {new Date().getFullYear()} Oasis Health Services. All rights reserved.
                        </p>
                        <p className="text-xs opacity-60">
                            If you are experiencing a medical or psychiatric emergency, call or text <strong>988</strong> immediately.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}