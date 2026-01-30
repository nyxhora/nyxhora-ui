import { MetadataRoute } from "next";
import { getAllDocsItems } from "@/lib/docs-config";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://ui.nyxhora.com";

    const allDocs = getAllDocsItems();

    const docUrls = allDocs.map((item) => ({
        url: `${baseUrl}${item.href}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    const rootUrl = {
        url: `${baseUrl}`,
        lastModified: new Date(),
        changeFrequency: "daily" as const,
        priority: 1.0,
    };

    // Remove potential duplicates if any (e.g. if docs config has the root url accidentally)
    const uniqueUrls = new Map();
    [rootUrl, ...docUrls].forEach(item => uniqueUrls.set(item.url, item));

    return Array.from(uniqueUrls.values());
}
