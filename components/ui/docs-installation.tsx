import { promises as fs } from "fs"
import path from "path"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/ui/tabs"
import { ComponentSource } from "@/registry/ui/component-source"
import { InstallationCommand } from "./installation-command"

interface RegistryItem {
  name: string
  registryDependencies?: string[]
  files?: Array<{ path: string; type: string }>
}

interface Registry {
  items: RegistryItem[]
}

const DocsInstallation = async ({ name }: { name: string }) => {
  // Read registry.json
  const registryPath = path.join(process.cwd(), "registry.json")
  let registry: Registry | null = null
  try {
    const fileContent = await fs.readFile(registryPath, "utf8")
    registry = JSON.parse(fileContent)
  } catch (error) {
    console.error("Error reading registry.json", error)
    return <div>Error loading installation instructions.</div>
  }

  const item = registry?.items.find((item) => item.name === name)

  if (!item) {
    return <div>Component not found in registry.</div>
  }

  // Prepare dependencies (exclude local utils/components if convention is to only lists external deps for install command, 
  // but usually registryDependencies includes everything. We typically want to `npm install` external libs.
  // The user's screenshot uses `npm install radix-ui` which is an external lib.
  // registry.json has `@/lib/utils`. That shouldn't be npm installed.
  // We should filter out dependencies starting with `@/`.
  const externalDependencies = item.registryDependencies?.filter(dep => !dep.startsWith("@/")) || []

  // For file source, if multiple files, currently only handling the first one or we could map them.
  // The screenshot implies "Copy and paste the following code into your project" and shows one file.
  const filePath = item.files?.[0]?.path

  return (
    <section>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Installation</h2>
        <Tabs defaultValue="cmd" className="bg-transparent">
          <TabsList className="space-x-3 bg-background border-b-2 border-border rounded" >
            <TabsTrigger value="cmd">Cmd</TabsTrigger>
            <TabsTrigger value="manual">Manual</TabsTrigger>
          </TabsList>
          <div className="py-6">

            <TabsContent value="cmd">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Use the CLI to add this component to your project.
                </p>
                <InstallationCommand dependencies={[name]} fornyxhora={true} />
              </div>
            </TabsContent>
            <TabsContent value="manual">
              <div className="space-y-6">
                {externalDependencies.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-800 text-xs font-medium text-zinc-100 ring-1 ring-inset ring-zinc-700">1</span>
                      <h3 className="font-medium">Install the following dependencies:</h3>
                    </div>
                    <InstallationCommand dependencies={externalDependencies} />
                  </div>
                )}

                {filePath && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-800 text-xs font-medium text-zinc-100 ring-1 ring-inset ring-zinc-700">
                        {externalDependencies.length > 0 ? 2 : 1}
                      </span>
                      <h3 className="font-medium">Copy and paste the following code into your project.</h3>
                    </div>
                    <ComponentSource filePath={filePath} />
                  </div>
                )}

                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-800 text-xs font-medium text-zinc-100 ring-1 ring-inset ring-zinc-700">
                      {externalDependencies.length > 0 ? (filePath ? 3 : 2) : (filePath ? 2 : 1)}
                    </span>
                    <h3 className="font-medium">Update the import paths to match your project setup.</h3>
                  </div>
                </div>

              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default DocsInstallation;