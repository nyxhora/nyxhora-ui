import React from "react";
import { Spotlight } from "@/registry/ui/spotlight";
import { GradientBackground } from "@/registry/ui/gradient-background";
import Footer from "@/registry/ui/footer";

export default function CookiesPolicy() {
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
                                Cookies Policy
                            </h1>
                            <p className="text-lg text-zinc-400">
                                Last updated: {new Date().toLocaleDateString()}
                            </p>
                        </div>

                        <div className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-300">
                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-white">1. What Are Cookies</h2>
                                <p>
                                    Cookies are small text files that are placed on your computer or mobile device by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-white">2. How We Use Cookies</h2>
                                <p>
                                    We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly.</li>
                                    <li><strong>Analytics Cookies:</strong> These allow us to understand how visitors interact with our website.</li>
                                    <li><strong>Functionality Cookies:</strong> These enable the website to provide enhanced functionality and personalization.</li>
                                </ul>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-white">3. Disabling Cookies</h2>
                                <p>
                                    You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Therefore, it is recommended that you do not disable cookies.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-white">4. More Information</h2>
                                <p>
                                    Hopefully that has clarified things for you. If there is something that you aren't sure whether you need or not, it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.
                                </p>
                                <p>
                                    However, if you are still looking for more information then you can contact us via email: support@nyxhora.com
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
