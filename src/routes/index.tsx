import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Spark Homes Estimator" },
      { name: "description", content: "Field repair cost estimator for real estate acquisition agents." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/estimator.html");
  }, []);
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F1F5F9] text-[#111827]">
      <p>Loading Spark Homes Estimator…</p>
    </div>
  );
}
