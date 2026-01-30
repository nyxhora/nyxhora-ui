import { redirect } from "next/navigation";

// Redirect /components to /docs which has the full documentation with sidebar
export default function ComponentsPage() {
    redirect("/docs");
}
