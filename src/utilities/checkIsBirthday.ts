import moment from 'moment';

const checkIsBirthday = (inputDate: string, currentDate?) => {
  try {
    if (!currentDate) currentDate = moment();
    return (
      (moment(inputDate).isLeapYear() && moment(inputDate).month() > 1
        ? moment(inputDate).dayOfYear() - 1
        : moment(inputDate).dayOfYear()) ===
      (moment(currentDate).isLeapYear() && moment(currentDate).month() > 1
        ? moment(currentDate).dayOfYear() - 1
        : moment(currentDate).dayOfYear())
    );
  } catch (err) {
    console.log(err);
  }
};

export { checkIsBirthday };
