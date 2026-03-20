import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Upload,
    ArrowLeft,
    Shield,
    Lock,
    FileCheck,
    Phone,
} from "lucide-react"
import { contact } from "@/lib/contact";
import { DocumentUploadForm } from "@/components/forms/DocumentUploadForm";
import { motion } from "framer-motion"

export function HeroSection() {
    return (
        <section className="bg-secondary py-12 lg:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-7xl px-6 lg:px-8"
            >
                <a href="/resources/help-center" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Help Center
                </a>
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Upload className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h1 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                            Secure Document Upload
                        </h1>
                        <p className="mt-2 text-muted-foreground text-pretty leading-relaxed max-w-2xl">
                            Use this form to securely send documents our team has requested from you or documents you wish to share with us.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export function MainSection() {
    return (
        <section className="py-12 lg:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-3 lg:gap-12">
                    {/* Upload Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-2"
                    >
                        <DocumentUploadForm />
                    </motion.div>

                    {/* Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-8 lg:mt-0 space-y-6"
                    >
                        {/* Security Info */}
                        <Card className="bg-card border-border">
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-foreground flex items-center gap-2 mb-4">
                                    <Shield className="h-4 w-4 text-primary" />
                                    Your Privacy is Protected
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                        <Lock className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                        <span>All uploads are encrypted in transit and at rest</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                        <Shield className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                        <span>HIPAA-compliant document handling</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                        <FileCheck className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                        <span>Documents are only accessible by authorized staff</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* No Reference Code */}
                        <Card className="bg-primary/5 border-primary/20">
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-foreground mb-2">No Reference Code?</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    If you need to send documents but do not have a reference code, contact our office
                                    and we will provide one, or submit a general help request.
                                </p>
                                <div className="space-y-2">
                                    <Button variant="outline" className="bg-transparent w-full" asChild>
                                        <a href={`tel:${contact.phoneUrl}`}>
                                            <Phone className="mr-2 h-4 w-4" />
                                            {contact.phone}
                                        </a>
                                    </Button>
                                    <Button variant="outline" className="bg-transparent w-full" asChild>
                                        <a href="/help-center/request/general">
                                            Submit a Help Request
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Crisis Warning */}
                        {/* <Card className="bg-red-50 border-red-200">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-semibold text-red-800 text-sm mb-1">Not for Emergencies</h3>
                                    </div>
                                </div>
                            </CardContent>
                        </Card> */}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default {
    HeroSection,
    MainSection,
};
