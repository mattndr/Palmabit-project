import { MailOptions } from './interfaces/mailOptions';
import { sendEmailWithNodemailer } from './sendEmailWithNodemailer';
import nodemailer from 'nodemailer';

const sendMailMock = jest.fn((mailoptions, callback) => null);

jest.mock('nodemailer', () => ({
  createTransport: jest.fn().mockImplementation(() => ({
    sendMail: sendMailMock,
  })),
}));

describe('sendEmailWithNodemailer', () => {
  const mailOptions = {};
  it('should send an email', () => {
    sendEmailWithNodemailer(mailOptions as MailOptions);
    expect(sendMailMock).toBeCalled();
  });
});
