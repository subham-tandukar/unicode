import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";

export default function FilterBtn({ isSmart, setIsSmart, setIsHtml }) {
  const [selectedValue, setSelectedValue] = useState("normal");

  useEffect(() => {
    selectedValue === "html" ? setIsHtml(true) : setIsHtml(false);
  }, [selectedValue]);

  return (
    <div className="flex justify-start items-center gap-2 mb-3 pt-3">
      <div className="flex items-center gap-2">
        <div>
          <Select value={selectedValue} onValueChange={setSelectedValue}>
            <SelectTrigger className="w-[230px] bg-white">
              <SelectValue value="normal" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem
                  value="normal"
                  className={`${
                    selectedValue === "normal" ? "!bg-ok-blue text-white" : ""
                  }`}
                >
                  Normal Readable Unicode
                </SelectItem>
                <SelectItem
                  value="html"
                  className={`${
                    selectedValue === "html" ? "!bg-ok-blue text-white" : ""
                  }`}
                >
                  HTML Encoded Unicode
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div>
          <input
            type="checkbox"
            id="smartConverter"
            checked={isSmart}
            onChange={() => setIsSmart(!isSmart)}
            className="mr-1 cursor-pointer"
          />
          <Label htmlFor="smartConverter" className="cursor-pointer">
            Smart Converter
          </Label>
        </div>
      </div>
    </div>
  );
}
