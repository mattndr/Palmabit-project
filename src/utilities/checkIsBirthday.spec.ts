import { checkIsBirthday } from './checkIsBirthday';
describe('checkIsBirthday', () => {
  it("should check if the current day is the user's birthday", () => {
    const isBirthday = checkIsBirthday(
      new Date('1982/09/26').toISOString(),
      new Date('2020/09/26').toISOString()
    );
    expect(isBirthday).toBe(true);
  });
  it('should handle leap year case', () => {
    const isBirthday = checkIsBirthday(
      new Date('2000/02/29').toISOString(),
      new Date('2003/03/01').toISOString()
    );
    expect(isBirthday).toBe(true);
  });
});
