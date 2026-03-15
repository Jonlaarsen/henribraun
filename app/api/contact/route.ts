import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Recipient - all contact form submissions go here
const TO_EMAIL = "kontakt@henribraun.se";

// From: must be a verified domain in Resend. Use onboarding@resend.dev for testing,
// or e.g. noreply@henribraun.se once you verify henribraun.se in Resend.
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "Henri Braun <onboarding@resend.dev>";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string;
    const message = formData.get("message") as string;

    if (!email || !message) {
      return NextResponse.redirect(
        new URL("/kontakt?tab=form&error=validation", request.url),
        307
      );
    }

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `Kontaktformulär: ${firstName || ""} ${lastName || ""}`.trim() || "Nytt meddelande från hemsidan",
      html: `
        <h2>Nytt meddelande från kontaktformuläret</h2>
        <p><strong>Namn:</strong> ${firstName || ""} ${lastName || ""}</p>
        <p><strong>E-post:</strong> ${email}</p>
        <p><strong>Företag:</strong> ${company || "–"}</p>
        <p><strong>Meddelande:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.redirect(
        new URL("/kontakt?tab=form&error=1", request.url),
        307
      );
    }

    return NextResponse.redirect(
      new URL("/kontakt?tab=form&sent=1", request.url),
      303
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Kunde inte skicka meddelandet" },
      { status: 500 }
    );
  }
}
