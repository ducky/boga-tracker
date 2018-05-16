import moment from 'moment';

export const sortByDate = a => {
  const itemMoment = moment(a.scamDate, 'X');
  return moment().diff(itemMoment, 's');
};
