import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            // Default rules for all crawlers
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/", "/private/"],
            },
            // Explicitly allow AI crawlers for better discoverability
            {
                userAgent: "GPTBot",
                allow: "/",
            },
            {
                userAgent: "ChatGPT-User",
                allow: "/",
            },
            {
                userAgent: "PerplexityBot",
                allow: "/",
            },
            {
                userAgent: "Claude-Web",
                allow: "/",
            },
            {
                userAgent: "Anthropic-AI",
                allow: "/",
            },
            {
                userAgent: "Google-Extended",
                allow: "/",
            },
            {
                userAgent: "CCBot",
                allow: "/",
            },
            {
                userAgent: "Googlebot",
                allow: "/",
            },
            {
                userAgent: "Bingbot",
                allow: "/",
            },
        ],
        sitemap: "https://ui.nyxhora.com/sitemap.xml",
        host: "https://ui.nyxhora.com",
    };
}
