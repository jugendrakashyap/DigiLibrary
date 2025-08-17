import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  auth: {
    user: process.env.BREVO_EMAIL,   // Your Brevo login email
    pass: process.env.BREVO_SMTP_KEY // Your Brevo SMTP key
  }
});

/**
 * Send an email
 * @param {string} to - Receiver's email address
 * @param {string} subject - Email subject
 * @param {string} html - HTML content for the email
 */
export const sendEmail = async (to, subject, html) => {
  try {
    await transporter.sendMail({
      from: `"Support" <${process.env.BREVO_EMAIL}>`,
      to,
      subject,
      html
    });
    console.log(`✅ Email sent to ${to}`);
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    throw new Error("Email sending failed");
  }
}


//kartikeyrox22@gmail.com
