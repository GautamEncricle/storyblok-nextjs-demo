import React from "react";

const FallbackComponent = () => {
  return (
    <div style={{ padding: "1rem", border: "1px solid red", color: "red", textAlign: "center" }}>
      <p>Component not found or missing 'blok' property.</p>
    </div>
  );
};

export default FallbackComponent;
