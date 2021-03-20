import { parseISO, format } from 'date-fns'

export default function Date({ dateString, dateFormat = 'do LLLL yyyy' }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, dateFormat)}</time>
}
