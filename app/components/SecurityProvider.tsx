"use client";

import { useEffect } from "react";

export default function SecurityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // 🚫 Disable Right Click
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();

    // 🚫 Disable Copy, Inspect, DevTools Keys
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && ["c", "u", "s", "p"].includes(e.key.toLowerCase())) ||
        (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(e.key.toLowerCase()))
      ) {
        e.preventDefault();
      }
    };

    // 🚫 Detect DevTools Open
    const detectDevTools = () => {
      const threshold = 160;
      if (
        window.outerWidth - window.innerWidth > threshold ||
        window.outerHeight - window.innerHeight > threshold
      ) {
        document.body.innerHTML =
          "<h1 style='text-align:center;margin-top:20%;'>Access Denied</h1>";
      }
    };

    const devToolsInterval = setInterval(detectDevTools, 1000);

    // 🚫 Blur on Tab Switch (screen recording trick)
    const handleBlur = () => {
      document.body.style.filter = "blur(12px)";
    };

    const handleFocus = () => {
      document.body.style.filter = "none";
    };

    // 🚫 Disable Text Selection
    document.body.style.userSelect = "none";

    // 🚫 Block Drag
    const handleDragStart = (e: DragEvent) => e.preventDefault();

    // Attach Events
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("dragstart", handleDragStart);
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("dragstart", handleDragStart);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
      clearInterval(devToolsInterval);
    };
  }, []);

  return <>{children}</>;
}