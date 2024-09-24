import React from "react";

export default function MainLayout({ children }) {
  return (
    <>
      <div className="ok-site-content ok-section-b">
        <div className="ok-container">{children}</div>
      </div>
    </>
  );
}
