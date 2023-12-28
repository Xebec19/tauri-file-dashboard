import { ChevronsUpDown, File, Folder } from "lucide-react";
import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "../../components/ui/collapsible";

export default function Discovery() {
  return (
    <div className="w-full px-2 space-y-8">
      <h1 className="text-xl">Discovery</h1>

      <Collapsible className="space-y-2 w-full">
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold flex items-center">
            <Folder className="w-4 h-4 mr-2" />
            Documents
          </h4>
          <CollapsibleTrigger asChild>
            <ChevronsUpDown className="w-4 h-4" />
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2 pl-6">
          <div className="flex items-center">
            <File className="w-4 h-4 mr-2" />
            Report.pdf
          </div>
          <div className="flex items-center">
            <File className="w-4 h-4 mr-2" />
            Sales.xlsx
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible className="space-y-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold flex items-center">
            <Folder className="w-4 h-4 mr-2" />
            Images
          </h4>
          <CollapsibleTrigger asChild>
            <ChevronsUpDown className="w-4 h-4" />
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2 pl-6">
          <div className="flex items-center">
            <File className="w-4 h-4 mr-2" />
            Photo.jpg
          </div>
          <div className="flex items-center">
            <File className="w-4 h-4 mr-2" />
            Logo.png
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible className="space-y-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold flex items-center">
            <Folder className="w-4 h-4 mr-2" />
            Videos
          </h4>
          <CollapsibleTrigger asChild>
            <ChevronsUpDown className="w-4 h-4" />
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2 pl-6">
          <div className="flex items-center">
            <File className="w-4 h-4 mr-2" />
            Presentation.mp4
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
