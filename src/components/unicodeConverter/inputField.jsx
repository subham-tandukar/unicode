import React from "react";
import styles from "./ok.module.scss";
import { MdOutlineSwapHoriz } from "react-icons/md";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export default function InputField({
  roman,
  setRoman,
  romanRef,
  maxChars,
  unicode,
  unicodeRef,
}) {
  return (
    <div className="flex gap-3">
      <div>
        <div>
          <Label htmlFor="roman" className="ok-label">
            Type Romanized Nepali
          </Label>
          <Textarea
            id="roman"
            placeholder="Type here..."
            value={roman}
            cols="62"
            rows="7"
            onChange={(e) => setRoman(e.target.value)}
            ref={romanRef}
            className={`rounded-t-none border-t-0  ${
              roman.length >= maxChars ? "!border-[#fd2929]" : ""
            }`}
          />
        </div>

        {/* Character count */}
        <div className="flex justify-between gap-2 flex-wrap">
          <p
            className={`text-muted-foreground text-sm  ${
              roman.length >= maxChars ? "text-ok-red" : ""
            }`}
          >
            {roman.length} / {maxChars} character
            {roman.length > 1 ? "s" : ""}
          </p>

          {roman.length >= maxChars && (
            <p className="text-ok-red text-sm">Maximum limit reached!</p>
          )}
        </div>
        {/* Character count */}
      </div>

      <div className={styles["translate-icon"]}>
        <div>
          <MdOutlineSwapHoriz color="#fff" />
        </div>
      </div>

      <div>
        <Label htmlFor="unicode" className="ok-label danger">
          Nepali Unicode
        </Label>
        <Textarea
          className="rounded-t-none border-t-0 "
          value={unicode}
          ref={unicodeRef}
          readOnly
          cols="62"
          rows="7"
        ></Textarea>
      </div>
    </div>
  );
}
