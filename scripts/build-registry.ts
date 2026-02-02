import fs from "fs";
import path from "path";

// 1. Configuration
const COMPONENT_DIR = path.join(process.cwd(), "components/ui");
const OUTPUT_DIR = path.join(process.cwd(), "public/r");

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function buildRegistry() {
  const files = fs.readdirSync(COMPONENT_DIR);

  const registryItems = files
    .filter((file) => file.endsWith(".tsx"))
    .map((file) => {
      const name = file.replace(".tsx", "");
      const filePath = path.join(COMPONENT_DIR, file);
      const content = fs.readFileSync(filePath, "utf8");

      // 2. Define the JSON structure for each component
      const registryItem = {
        name: name,
        type: "registry:ui",
        files: [
          {
            path: `ui/${file}`,
            content: content,
            type: "registry:component",
          },
        ],
        // You can add logic here to detect dependencies from the code
        dependencies: ["lucide-react"], 
      };

      // 3. Save the individual JSON file (e.g., public/r/button.json)
      fs.writeFileSync(
        path.join(OUTPUT_DIR, `${name}.json`),
        JSON.stringify(registryItem, null, 2)
      );

      return {
        name: name,
        path: `r/${name}.json`,
      };
    });

  // 4. Create the main index (registry.json)
  const index = {
    name: "nyxhoraui",
    items: registryItems,
  };

  fs.writeFileSync(
    path.join(process.cwd(), "public/registry.json"),
    JSON.stringify(index, null, 2)
  );

  console.log(`✅ Success! Generated ${registryItems.length} components.`);
}

buildRegistry();