import React from "react";
import { Spotlight } from "@/registry/ui/spotlight";
import { GradientBackground } from "@/registry/ui/gradient-background";
import Footer from "@/registry/ui/footer";

export default function PrivacyPolicy() {
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
                                Privacy Policy
                            </h1>
                            <p className="text-lg text-zinc-400">
                                Last updated: {new Date().toLocaleDateString()}
                            </p>
                        </div>

                        <div className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-300">
                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
                                <p>
                                    Welcome to Nyxhora UI. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-white">2. Data We Collect</h2>
                                <p>
                                    We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                                    <li><strong>Contact Data</strong> includes email address and telephone number.</li>
                                    <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                                </ul>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-white">3. How We Use Your Data</h2>
                                <p>
                                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                                    <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                                    <li>Where we need to comply with a legal or regulatory obligation.</li>
                                </ul>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-white">4. Data Security</h2>
                                <p>
                                    We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-white">5. Contact Us</h2>
                                <p>
                                    If you have any questions about this privacy policy or our privacy practices, please contact us at: support@nyxhora.com
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
