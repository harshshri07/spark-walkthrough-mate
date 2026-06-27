import { createFileRoute } from "@tanstack/react-router";
import html from "../estimator.html?raw";

export const Route = createFileRoute("/")({
  component: EstimatorPage,
  head: () => ({
    meta: [
      { title: "Spark Homes Estimator — Field Repair Estimator" },
      {
        name: "description",
        content:
          "Mobile-first repair cost estimator for real estate acquisition agents. 123 line items, OCR, voice notes, deal analyzer, PDF reports.",
      },
      { name: "theme-color", content: "#C2500A" },
    ],
  }),
});

function EstimatorPage() {
  return (
    <iframe
      title="Spark Homes Estimator"
      srcDoc={html}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "none",
      }}
      allow="camera; microphone; clipboard-write"
    />
  );
}
