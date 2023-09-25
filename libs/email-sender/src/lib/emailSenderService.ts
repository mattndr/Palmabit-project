import { MailOptions } from './interfaces/mailOptions';

const emailSenderService = (sendEmail: any, mailOptions: MailOptions) => {
  sendEmail(mailOptions);
};

export { emailSenderService };
