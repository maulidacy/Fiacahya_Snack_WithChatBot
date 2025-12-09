// src/components/chatbot/assistant-root.tsx
"use client";

import dynamic from "next/dynamic";

const ProductionAssistant = dynamic(
  () =>
    import("./production-assistant").then(
      (m) => m.ProductionAssistant
    ),
  {
    ssr: false, // hanya di-render di client
  }
);

export function AssistantRoot() {
  return <ProductionAssistant />;
}
