import { createPortal } from "react-dom";

export default function Modal() {
  return createPortal(
    <div
      style={{
        position: "fixed",
        top: "20px",
        left: "250px",
        transform: "translateX(-50%)",
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        zIndex: 9999
      }}
    >
      <h1>Welcome Portal</h1>
    </div>,
    document.getElementById("portalRoot")
  );
}

0