import moment from 'moment'

const timeFormatter = (date: Date) => moment(date).format('h:mm A')

export default timeFormatter
