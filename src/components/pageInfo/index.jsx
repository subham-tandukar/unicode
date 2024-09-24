import React from "react";

export default function PageInfo({ heading, content }) {
  return (
    <>
      <h2 className="ok-heading">{heading}</h2>
      <p className="ok-content">{content}</p>
    </>
  );
}
