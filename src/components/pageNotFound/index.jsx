import Image from "next/image";
import React from "react";

export default function PageNotFound() {
  return (
    <div className="ok-not-found">
      <Image
        className="mx-auto w-auto h-auto"
        width={900}
        height={500}
        src="/img/404.png"
        alt="Page not found"
      />
    </div>
  );
}
