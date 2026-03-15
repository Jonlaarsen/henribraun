import { Suspense } from "react";
import KontaktContent from "./KontaktContent";

export default function KontaktPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-24" />}>
      <KontaktContent />
    </Suspense>
  );
}
