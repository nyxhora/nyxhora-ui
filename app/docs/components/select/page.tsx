import { generateComponentMetadata, generateComponentFAQSchema, getDefaultComponentFAQs, generateBreadcrumbSchema } from "@/lib/seo-config";
import { DocsHeader, DocsPreview } from "@/components/ui/docs-documentation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/registry/ui/select";
import DocsInstallation from "@/components/ui/docs-installation";

export const metadata = generateComponentMetadata({
    name: "Select",
    description: "Displays a list of options for the user to pick from—triggered by a button.",
    category: "Form",
});


export default function SelectDocsPage() {
    const faqSchema = generateComponentFAQSchema("Select", getDefaultComponentFAQs("Select"));
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://ui.nyxhora.com" },
        { name: "Docs", url: "https://ui.nyxhora.com/docs" },
        { name: "Components", url: "https://ui.nyxhora.com/docs/components" },
        { name: "Select", url: "https://ui.nyxhora.com/docs/components/select" },
    ]);

    
  return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="space-y-10">
      <DocsHeader
        title="Select"
        description="Displays a list of options for the user to pick from—triggered by a button."
      />

      <DocsPreview
        title="Default"
        previewCode={
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        }
        code={`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>`}
      />
      <DocsInstallation name={"select"} />

      <DocsPreview
        title="Groups"
        previewCode={
          <Select>
            <SelectTrigger className="w-full max-w-48">
              <SelectValue placeholder="Select a region" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Asia</SelectLabel>
                <SelectItem value="apple">India</SelectItem>
                <SelectItem value="banana">China</SelectItem>
                <SelectItem value="blueberry">Japan</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Europe</SelectLabel>
                <SelectItem value="carrot">Germany</SelectItem>
                <SelectItem value="broccoli">France</SelectItem>
                <SelectItem value="spinach">Italy</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>North America</SelectLabel>
                <SelectItem value="carrot">Canada</SelectItem>
                <SelectItem value="broccoli">United States</SelectItem>
                <SelectItem value="spinach">Mexico</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        }
        code={`
            <Select>
  <SelectTrigger className="w-full max-w-48">
    <SelectValue placeholder="Select a region" />
    </SelectTrigger>
    <SelectContent>
            
            `}
      />
      <DocsPreview
        title="Scrollable"
        previewCode={
          <Select>
            <SelectTrigger className="w-full max-w-64">
              <SelectValue placeholder="Select a timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>North America</SelectLabel>
                <SelectItem value="est">Eastern Standard Time</SelectItem>
                <SelectItem value="cst">Central Standard Time</SelectItem>
                <SelectItem value="mst">Mountain Standard Time</SelectItem>
                <SelectItem value="pst">Pacific Standard Time</SelectItem>
                <SelectItem value="akst">Alaska Standard Time</SelectItem>
                <SelectItem value="hst">Hawaii Standard Time</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Europe & Africa</SelectLabel>
                <SelectItem value="gmt">Greenwich Mean Time</SelectItem>
                <SelectItem value="cet">Central European Time</SelectItem>
                <SelectItem value="eet">Eastern European Time</SelectItem>
                <SelectItem value="west">
                  Western European Summer Time
                </SelectItem>
                <SelectItem value="cat">Central Africa Time</SelectItem>
                <SelectItem value="eat">East Africa Time</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Asia</SelectLabel>
                <SelectItem value="msk">Moscow Time</SelectItem>
                <SelectItem value="ist">India Standard Time</SelectItem>
                <SelectItem value="cst_china">China Standard Time</SelectItem>
                <SelectItem value="jst">Japan Standard Time</SelectItem>
                <SelectItem value="kst">Korea Standard Time</SelectItem>
                <SelectItem value="ist_indonesia">
                  Indonesia Central Standard Time
                </SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Australia & Pacific</SelectLabel>
                <SelectItem value="awst">
                  Australian Western Standard Time
                </SelectItem>
                <SelectItem value="acst">
                  Australian Central Standard Time
                </SelectItem>
                <SelectItem value="aest">
                  Australian Eastern Standard Time
                </SelectItem>
                <SelectItem value="nzst">New Zealand Standard Time</SelectItem>
                <SelectItem value="fjt">Fiji Time</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>South America</SelectLabel>
                <SelectItem value="art">Argentina Time</SelectItem>
                <SelectItem value="bot">Bolivia Time</SelectItem>
                <SelectItem value="brt">Brasilia Time</SelectItem>
                <SelectItem value="clt">Chile Standard Time</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        }
        code={`<Select>
      <SelectTrigger className="w-full max-w-64">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value="est">Eastern Standard Time</SelectItem>
          <SelectItem value="cst">Central Standard Time</SelectItem>
          <SelectItem value="mst">Mountain Standard Time</SelectItem>
          <SelectItem value="pst">Pacific Standard Time</SelectItem>
          <SelectItem value="akst">Alaska Standard Time</SelectItem>
          <SelectItem value="hst">Hawaii Standard Time</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Europe & Africa</SelectLabel>
          <SelectItem value="gmt">Greenwich Mean Time</SelectItem>
          <SelectItem value="cet">Central European Time</SelectItem>
          <SelectItem value="eet">Eastern European Time</SelectItem>
          <SelectItem value="west">Western European Summer Time</SelectItem>
          <SelectItem value="cat">Central Africa Time</SelectItem>
          <SelectItem value="eat">East Africa Time</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          <SelectItem value="msk">Moscow Time</SelectItem>
          <SelectItem value="ist">India Standard Time</SelectItem>
          <SelectItem value="cst_china">China Standard Time</SelectItem>
          <SelectItem value="jst">Japan Standard Time</SelectItem>
          <SelectItem value="kst">Korea Standard Time</SelectItem>
          <SelectItem value="ist_indonesia">
            Indonesia Central Standard Time
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Australia & Pacific</SelectLabel>
          <SelectItem value="awst">Australian Western Standard Time</SelectItem>
          <SelectItem value="acst">Australian Central Standard Time</SelectItem>
          <SelectItem value="aest">Australian Eastern Standard Time</SelectItem>
          <SelectItem value="nzst">New Zealand Standard Time</SelectItem>
          <SelectItem value="fjt">Fiji Time</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>South America</SelectLabel>
          <SelectItem value="art">Argentina Time</SelectItem>
          <SelectItem value="bot">Bolivia Time</SelectItem>
          <SelectItem value="brt">Brasilia Time</SelectItem>
          <SelectItem value="clt">Chile Standard Time</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>`}
      />
    </div>
        </>
    );
}
