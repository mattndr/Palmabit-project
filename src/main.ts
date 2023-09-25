import { dataLoaderService, loadDataFromFile } from 'data-loader';
import { emailSenderService, sendEmailWithNodemailer } from 'email-sender';
import { checkIsBirthday } from './utilities/checkIsBirthday';
import { Employee } from './interfaces/Employee';
import * as dotenv from 'dotenv';
dotenv.config();

export const birthdayService = async () => {
  try {
    const employees: Employee[] = await dataLoaderService(
      loadDataFromFile,
      `${process.env['DATA_PATH']}/employees.txt`
    );

    employees.forEach((em) => {
      if (checkIsBirthday(new Date(em.birthDate).toISOString())) {
        emailSenderService(sendEmailWithNodemailer, {
          from: '"My Company" <my@company.com>',
          to: em.email,
          subject: `Happy Birthday ${em.firstName}!`,
          text: 'The whole team wishes you the happiest of birthdays and a great year!',
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

birthdayService();
