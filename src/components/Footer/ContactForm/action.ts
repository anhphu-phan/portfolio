"use server";

import * as z from "zod";
import * as nodeMailer from "nodemailer";
import { OAuth2Client } from "google-auth-library";

import formSchema from "./validator";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import Mail from "nodemailer/lib/mailer";

const oauth2Client = new OAuth2Client(
  process.env.GOOGLE_MAILER_CLIENT_ID,
  process.env.GOOGLE_MAILER_CLIENT_SECRET,
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_MAILER_REFRESH_TOKEN,
});

export default async function submit(values: z.infer<typeof formSchema>) {
  "use server";

  const accessToken = (await oauth2Client.getAccessToken()).token;

  const transport = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.ADMIN_EMAIL_ADDRESS,
      clientId: process.env.GOOGLE_MAILER_CLIENT_ID,
      clientSecret: process.env.GOOGLE_MAILER_CLIENT_SECRET,
      refreshToken: process.env.GOOGLE_MAILER_REFRESH_TOKEN,
      accessToken: accessToken || "",
    },
  });

  const mailOptions: Mail.Options = {
    to: "anhphuphan29@gmail.com",
    subject: "Contact Form",
    html: `<div><p>Name: ${values.name}</p><p>Email: ${values.email}</p><p>Message: ${values.message}</p></div>`,
    replyTo: values.email,
  };

  try {
    await transport.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      throw error;
    }
  }
}
