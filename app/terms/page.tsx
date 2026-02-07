import React from "react";
import { Spotlight } from "@/registry/ui/spotlight";
import { GradientBackground } from "@/registry/ui/gradient-background";
import Footer from "@/registry/ui/footer";

export default function TermsAndConditions() {
    return (
        <div className="relative min-h-screen flex flex-col bg-background overflow-x-hidden selection:bg-purple-500/30 selection:text-purple-200">
            <main className="flex-1 w-full relative">
                <div className="absolute inset-0 pointer-events-none">
                    <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
                    <GradientBackground position="right" intensity="medium" />
                </div>

                <div className="container mx-auto px-4 md:px-6 pt-32 pb-20 relative z-10">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="space-y-4 text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                                Terms and Conditions
                            </h1>
                            <p className="text-lg text-zinc-400">
                                Last updated: {new Date().toLocaleDateString()}
                            </p>
                        </div>

                        <div className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-300">
                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-white">1. Agreement to Terms</h2>
                                <p>
                                    By accessing or using our website, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you disagree with any part of the terms, then you may not access the service.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-white">2. Intellectual Property</h2>
                                <p>
                                    The Service and its original content, features and functionality are and will remain the exclusive property of Nyxhora UI and its licensors. The Service is protected by copyright, trademark, and other laws of both the country and foreign countries.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-white">3. User Accounts</h2>
                                <p>
                                    When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                                </p>
                                <p>
                                    You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-white">4. Termination</h2>
                                <p>
                                    We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                                </p>
                                <p>
                                    All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-white">5. Governing Law</h2>
                                <p>
                                    These Terms shall be governed and construed in accordance with the laws of the country, without regard to its conflict of law provisions.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-white">6. Contact Us</h2>
                                <p>
                                    If you have any questions about these Terms, please contact us at: support@nyxhora.com
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
