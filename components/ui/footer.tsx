"use client";

import Link from "next/link";
import { Twitter, ExternalLink, Linkedin } from "lucide-react";
const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full border-t bg-background px-6 py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex flex-col space-y-4">
                            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                                Nyxhora
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Your Complete Digital Workspace
                            </p>
                            <div className="flex space-x-4">
                                <Link
                                    href="https://twitter.com/@nyxhora"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    <Twitter size={20} />
                                </Link>
                                <Link
                                    href="https://discord.gg/qR3xTWWB"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    {/* Discord Icon Replacement to generic SVG or Lucide if available, keeping SVG for now */}
                                    <svg
                                        role="img"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 fill-current"
                                    >
                                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                                    </svg>
                                </Link>
                                <Link
                                    href="https://instagram.com/nyxhora_"
                                    target="_blank"
                                    className="text-muted-foreground hover:text-pink-600"
                                >
                                    {/* Instagram */}
                                    <svg
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        className="w-5 h-5"
                                    >
                                        <path d="M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z" />
                                        <path d="M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z" />
                                        <circle cx="15.156" cy="4.858" r="1.237" />
                                    </svg>
                                </Link>
                                <a
                                    href="https://www.linkedin.com/company/107792893"
                                    className="text-muted-foreground hover:text-blue-600"
                                >
                                    <Linkedin size={20} />
                                    <span className="sr-only">LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div className="col-span-1">
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                            Product
                        </h3>
                        <ul className="space-y-3">
                            {["Features", "Pricing"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`https://www.nyxhora.com/${item.toLowerCase()}`}
                                        className="text-sm text-muted-foreground hover:text-foreground"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="https://www.nyxhora.com/tools"
                                    className="text-sm text-muted-foreground hover:text-foreground"
                                >
                                    Free Tools
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.nyxhora.com/faces"
                                    className="text-sm text-muted-foreground hover:text-foreground"
                                >
                                    Avatar Creator
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.nyxhora.com/market"
                                    className="text-sm text-muted-foreground hover:text-foreground"
                                >
                                    Templates
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.nyxhora.com/blog"
                                    className="text-sm text-muted-foreground hover:text-foreground"
                                >
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="col-span-1">
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {["About", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`https://www.nyxhora.com/${item.toLowerCase()}`}
                                        className="text-sm text-muted-foreground hover:text-foreground"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="https://github.com/shekharP1536/nyxhoraui"
                                    target="_blank"
                                    className="text-sm text-muted-foreground hover:text-foreground flex items-center"
                                >
                                    GitHub
                                    <ExternalLink size={14} className="ml-1" />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div className="col-span-1">
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="https://ui.nyxhora.com/docs"
                                    target="_blank"
                                    className="text-sm text-muted-foreground hover:text-foreground flex items-center"
                                >
                                    Documentation
                                    <ExternalLink size={14} className="ml-1" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/faq"
                                    className="text-sm text-muted-foreground hover:text-foreground"
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://discord.gg/qR3xTWWB"
                                    target="_blank"
                                    className="text-sm text-muted-foreground hover:text-foreground flex items-center"
                                >
                                    Community
                                    <ExternalLink size={14} className="ml-1" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section with Copyright */}
                <div className="mt-8 pt-6 border-t border-border">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-muted-foreground">
                            © {year} Nyxhora. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link
                                href="https://www.nyxhora.com/privacy"
                                className="text-xs text-muted-foreground hover:text-foreground"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="https://www.nyxhora.com/terms"
                                className="text-xs text-muted-foreground hover:text-foreground"
                            >
                                Terms of Service
                            </Link>
                            <Link
                                href="https://www.nyxhora.com/cookies"
                                className="text-xs text-muted-foreground hover:text-foreground"
                            >
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
