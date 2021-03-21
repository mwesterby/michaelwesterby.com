import { parseISO, format } from 'date-fns';

export default function Date({ dateString, dateFormat = 'do LLLL yyyy' }: { dateString: string, dateFormat?: string }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, dateFormat)}</time>;
}

Date.defaultProps = {
  dateFormat: 'do LLLL yyyy',
};
