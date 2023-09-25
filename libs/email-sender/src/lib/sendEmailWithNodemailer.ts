import nodemailer from 'nodemailer';
import { MailOptions } from './interfaces/mailOptions';
import * as dotenv from 'dotenv';
dotenv.config();

const sendEmailWithNodemailer = (mailOptions: MailOptions) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env['NODEMAILER_HOST'],
      port: parseInt(process.env['NODEMAILER_PORT'] || '', 10),
      auth: {
        user: process.env['NODEMAILER_AUTH_USER'],
        pass: process.env['NODEMAILER_AUTH_PASS'],
      },
    });

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log(`Email sent to ${mailOptions.to} [${info.response}]`);
      }
    });
  } catch (err) {
    console.log(err);
    return;
  }
};

export { sendEmailWithNodemailer };
