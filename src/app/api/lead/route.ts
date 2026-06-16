import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const data = await req.json();

  const { name, phone, email, zip, projectType, timeline, budget } = data;

  await resend.emails.send({
    from: "RENCO Website <leads@renco.co>",
    to: "david@renco.co",
    subject: `New Lead: ${name} — ${projectType}`,
    html: `
      <h2>New Estimate Request</h2>
      <table style="border-collapse:collapse;width:100%;font-family:sans-serif;">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #ddd">${phone || "—"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${email || "—"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">ZIP / City</td><td style="padding:8px;border:1px solid #ddd">${zip}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Project</td><td style="padding:8px;border:1px solid #ddd">${projectType}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Timeline</td><td style="padding:8px;border:1px solid #ddd">${timeline}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Budget</td><td style="padding:8px;border:1px solid #ddd">${budget}</td></tr>
      </table>
    `,
  });

  return NextResponse.json({ ok: true });
}
