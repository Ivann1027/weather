const currentDate: Date = new Date()

const gettingDate = () => {
	// Получаем день недели
	const daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	const dayOfWeek: string = daysOfWeek[currentDate.getDay()]

	// Получаем число месяца с окончанием
	const dayOfMonth: number = currentDate.getDate()
	let daySuffix: string

	if (dayOfMonth % 10 === 1 && dayOfMonth !== 11) {
		daySuffix = 'st'
	} else if (dayOfMonth % 10 === 2 && dayOfMonth !== 12) {
		daySuffix = 'nd'
	} else if (dayOfMonth % 10 === 3 && dayOfMonth !== 13) {
		daySuffix = 'rd'
	} else {
		daySuffix = 'th'
	}

	// Получаем название месяца
	const months: string[] = ['january', 'fenruary', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
	const month: string = months[currentDate.getMonth()]

	// Форматируем дату в нужный формат
	const formattedDate: string = `${dayOfWeek}, ${dayOfMonth}${daySuffix} ${month}`

	return formattedDate
}

const gettingTime = () => {
	// Получаем часы и минуты
	let hours: number = currentDate.getHours()
	const minutes: number = currentDate.getMinutes()
	let amOrPm: string

	// Определяем am или pm
	if (hours >= 12) {
		amOrPm = 'pm'
		hours %= 12      // Преобразуем часы в 12-часовой формат
	} else {
		amOrPm = 'am'
	}

	// Форматируем часы и минуты в нужный формат
	const formattedHours: string = hours.toString().padStart(2, '0')
	const formattedMinutes: string = minutes.toString().padStart(2, '0')

	// Формируем время в требуемом формате
	const formattedTime: string = `${formattedHours}:${formattedMinutes}${amOrPm}`

	return formattedTime
}

export { gettingDate, gettingTime }