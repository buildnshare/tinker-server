import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.APP_PASSWORD);
export const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

export const sendMail = async (data, user) => {
  return await transport.sendMail({
    from: process.env.EMAIL,
    to: data.email,
    subject: data.subject,
    html: data.body,
  });
};
