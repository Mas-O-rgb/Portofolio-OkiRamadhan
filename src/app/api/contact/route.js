import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, subject, message, website } = await request.json();

    // Honeypot sederhana untuk bot.
    if (website) {
      return Response.json({ success: true });
    }

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "Semua kolom wajib diisi." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: [process.env.CONTACT_RECIPIENT_EMAIL],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Pesan baru dari portofolio

Nama: ${name}
Email: ${email}
Subjek: ${subject}

Pesan:
${message}`,
    });

    if (error) {
      return Response.json(
        { error: "Pesan gagal dikirim." },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Terjadi kesalahan pada server." },
      { status: 500 }
    );
  }
}