import { MetadataRoute } from "next";
import { getAllDocsItems } from "@/lib/docs-config";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://ui.nyxhora.com";
    const currentDate = new Date();

    const allDocs = getAllDocsItems();

    // Component documentation pages - high priority
    const docUrls = allDocs.map((item) => ({
        url: `${baseUrl}${item.href}`,
        lastModified: currentDate,
        changeFrequency: "weekly" as const,
        priority: item.href === "/docs" ? 0.9 : 0.8,
    }));

    // Root/home page - highest priority
    const rootUrl = {
        url: `${baseUrl}`,
        lastModified: currentDate,
        changeFrequency: "daily" as const,
        priority: 1.0,
    };

    // Static pages - medium priority
    const staticPages = [
        { path: "/templates", priority: 0.7 },
        { path: "/blocks", priority: 0.7 },
        { path: "/components", priority: 0.9 },
        { path: "/playground", priority: 0.6 },
        { path: "/privacy", priority: 0.3 },
        { path: "/terms", priority: 0.3 },
        { path: "/cookies", priority: 0.3 },
    ].map((page) => ({
        url: `${baseUrl}${page.path}`,
        lastModified: currentDate,
        changeFrequency: "monthly" as const,
        priority: page.priority,
    }));

    // Remove potential duplicates
    const uniqueUrls = new Map();
    [rootUrl, ...staticPages, ...docUrls].forEach(item => uniqueUrls.set(item.url, item));

    return Array.from(uniqueUrls.values());
}
