"use client";
import React, { useEffect, useRef, useState } from "react";
import LimitDialog from "./limitDialog";
import InputField from "./inputField";
import ActionBtn from "./actionBtn";
import useUnicodeConverter from "@/helper/useUnicodeConverter";
import PageInfo from "../pageInfo";
import FilterBtn from "./filterBtn";

export default function UnicodeConverter() {
  const [roman, setRoman] = useState("");
  const [unicode, setUnicode] = useState("");

  const [copied, setCopied] = useState(false);
  const [isSmart, setIsSmart] = useState(true);
  const [isHtml, setIsHtml] = useState(false);

  const maxChars = 1500; // Maximum character limit
  const [isLimitExceed, setIsLimitExceed] = useState(false);

  const unicodeRef = useRef(null);
  const romanRef = useRef(null);

  useEffect(() => {
    useUnicodeConverter(roman, setUnicode, isSmart, isHtml, setIsLimitExceed);
  }, [roman, isSmart, isHtml]);

  const handleCopy = () => {
    navigator.clipboard.writeText(unicode);
    if (unicodeRef.current) {
      unicodeRef.current.select(); // Select the unicode text
    }

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleClear = () => {
    setRoman("");
    setUnicode("");
    if (romanRef.current) {
      romanRef.current.focus();
    }
  };

  return (
    <div className="ok-unicode">
      <div className="ok-card">
        <PageInfo
          heading="Nepali Unicode"
          content="Nepali Unicode refers to a standardized system of encoding Nepali script
          (Devanagari) characters so that they can be displayed and processed
          consistently across digital platforms. Unicode provides a unique code
          for every character, regardless of platform, program, or language,
          enabling the correct rendering and use of the Nepali language on
          computers, smartphones, and websites."
        />

        <FilterBtn
          isSmart={isSmart}
          setIsSmart={setIsSmart}
          setIsHtml={setIsHtml}
        />

        <InputField
          roman={roman}
          setRoman={setRoman}
          romanRef={romanRef}
          maxChars={maxChars}
          unicode={unicode}
          unicodeRef={unicodeRef}
        />

        <ActionBtn
          unicode={unicode}
          copied={copied}
          handleCopy={handleCopy}
          handleClear={handleClear}
        />
      </div>

      <LimitDialog
        isLimitExceed={isLimitExceed}
        setIsLimitExceed={setIsLimitExceed}
      />
    </div>
  );
}
