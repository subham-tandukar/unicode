import React from "react";
import { FaCheck } from "react-icons/fa6";
import { Button } from "../ui/button";

export default function ActionBtn({
  unicode,
  copied,
  handleCopy,
  handleClear,
}) {
  return (
    <div className="flex justify-end items-center gap-2">
      <div className="flex items-center gap-2">
        <Button
          className={`active:scale-95 transition ${
            copied ? "ok-copied" : "ok-gradient"
          }`}
          onClick={handleCopy}
          disabled={!unicode && true}
        >
          {copied ? (
            <>
              Copied <FaCheck className="ml-1" />
            </>
          ) : (
            "Copy"
          )}
        </Button>

        <Button
          variant="destructive"
          className="active:scale-95 transition ok-danger"
          onClick={handleClear}
          disabled={!unicode && true}
        >
          Clear
        </Button>
      </div>
    </div>
  );
}
