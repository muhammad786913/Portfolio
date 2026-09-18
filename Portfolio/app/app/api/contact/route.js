import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Please fill all fields." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["muhammadrashid786114786@gmail.com"],
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,

      html: `
        <h2>New Portfolio Contact Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    if (error) {
      return Response.json(
        { error: "Email could not be sent." },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Email sent successfully!",
    });

  } catch (error) {
    return Response.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}