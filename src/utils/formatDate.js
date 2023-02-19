import {DateTime} from 'luxon';
import {Settings} from 'luxon';

Settings.defaultLocale = 'en';

function formatPostDate(stringDate) {
  if (!stringDate) return 'just now';

  const date = DateTime.fromISO(stringDate);
  const {days} = date.diffNow('days'); //diff in days between "date" and now
  let formatedDate;

  if (days > -1) {
    formatedDate = date.toRelative();
  } else if (days <= -1 && days > -2) {
    formatedDate = `yesterday at ${date.toLocaleString(DateTime.TIME_SIMPLE)}`;
  } else if (days <= -2 && days > -366) {
    formatedDate = `${date.toLocaleString({
      day: 'numeric',
      month: 'long',
    })} at ${date.toLocaleString(DateTime.TIME_SIMPLE)}`;
  } else {
    formatedDate = `${date.toLocaleString(
      DateTime.DATE_FULL
    )} at ${date.toLocaleString(DateTime.TIME_SIMPLE)}`;
  }
  return formatedDate;
}
export {formatPostDate};
