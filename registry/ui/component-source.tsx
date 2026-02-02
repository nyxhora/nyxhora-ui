import { promises as fs } from "fs" // turbo
import path from "path"
import { FullCodeBlock } from "@/components/ui/docs-documentation"

export async function ComponentSource({ filePath }: { filePath: string }) {
    const fullPath = path.join(process.cwd(), filePath)
    let code = ""

    try {
        code = await fs.readFile(fullPath, "utf8")
    } catch (error) {
        code = `Error reading file: ${filePath}\n${error}`
    }

    const filename = path.basename(filePath)
    const filepathtoshow = `components/ui/${filename}`

    return <FullCodeBlock code={code} language="tsx" filename={filename} filepath={filepathtoshow} />
}
