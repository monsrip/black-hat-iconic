"use client";

import FlashScreen from "./FlashScreen";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FlashScreen />
      {children}
    </>
  );
}