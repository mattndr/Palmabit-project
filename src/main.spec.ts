import { dataLoaderService } from 'data-loader';
import { emailSenderService } from 'email-sender';
import { birthdayService } from './main';

jest.mock('data-loader', () => ({
  dataLoaderService: jest
    .fn()
    .mockImplementation(() => [
      { lastName: '', firstName: '', birthDate: new Date(), email: '' },
    ]),
}));

jest.mock('email-sender', () => ({
  emailSenderService: jest.fn(),
}));

describe('Main', () => {
  it('should call expected services', async () => {
    await birthdayService();
    expect(dataLoaderService).toBeCalled();
    expect(emailSenderService).toBeCalled();
  });
});
