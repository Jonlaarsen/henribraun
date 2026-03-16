import { Suspense } from "react";
import KontaktContent from "./KontaktContent";

export const metadata = {
  title: "Kontakta Oss Idag | Kostnadsfri Rådgivning | Digital Marknadsföring",
  description:
    "Har du frågor om digital marknadsföring eller vill öka din digitala synlighet? Kontakta oss idag och boka ett kostnadsfritt möte med professionell rådgivning inom digital marknadsföring. Vi ser fram att höra från dig.",
};

export default function KontaktPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-24" />}>
      <KontaktContent />
    </Suspense>
  );
}
