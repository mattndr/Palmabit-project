import { emailSenderService } from './emailSenderService';
import { MailOptions } from './interfaces/mailOptions';

describe('emailSender', () => {
  it('should call the implemented function that send an email', () => {
    const sendEmail = jest.fn();
    const mailOptions = {} as MailOptions;
    emailSenderService(sendEmail, mailOptions);
    expect(sendEmail).toBeCalledWith(mailOptions);
  });
});
