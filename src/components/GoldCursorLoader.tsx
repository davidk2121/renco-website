"use client";

import dynamic from "next/dynamic";

const GoldCursor = dynamic(() => import("@/components/GoldCursor"), { ssr: false });

export default function GoldCursorLoader() {
  return <GoldCursor />;
}
