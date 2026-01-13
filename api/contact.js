/* global process */ // ✅ fixes: "process is not defined"

import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;

// Optional: fail fast if missing key (helps debugging)
if (!RESEND_API_KEY) {
  console.warn("Missing RESEND_API_KEY. Add it to Vercel Env Vars and local .env");
}

const resend = new Resend(RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, company, message } = req.body || {};

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Please fill in name, email, and message." });
    }

    await resend.emails.send({
    
  from: "ADAM Co. <onboarding@resend.dev>",


  to: ["viernesjozel18@gmail.com"],

      // ✅ reply goes directly to the customer
      replyTo: email,

      subject: `New Inquiry — ${name}`,
      text: `Name: ${name}
Email: ${email}
Company: ${company || "-"}
Message:
${message}`,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Resend send error:", err);
    return res.status(500).json({ error: "Failed to send" });
  }
}
