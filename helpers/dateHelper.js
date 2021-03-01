import Moment from 'moment';

export const articleDateFormat = dateTime => {
  const formatedDate = Moment(dateTime).format('Do MMMM YYYY');

  return formatedDate;
};
