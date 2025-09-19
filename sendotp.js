import nodemailer from "nodemailer";

// Use environment variables for security
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // use TLS
  auth: {
    user: process.env.SMTP_EMAIL, // your email
    pass: process.env.SMTP_PASSWORD // app password
  }
});

export async function sendOtpEmail(to, otp) {
  const mailOptions = {
    from: `"ECEverse" <${process.env.SMTP_EMAIL}>`,
    to: to,
    subject: "Your OTP for ECEverse",
    text: `Your OTP is: ${otp}. It expires in 5 minutes.`
  };

  await transporter.sendMail(mailOptions);
}
