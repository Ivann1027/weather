export type WeatherData = {
	location: {
		name: string
		country: string
		lacaltime: number
	}
	current: {
		temp_c: number
		condition: {
			text: string
			icon: string
		}
	}
}

export type CityInfo = {
	id: number
	city: string
}

export type PopularCities = CityInfo[]

export enum Theme {
	BLUE = 'linear-gradient(to bottom, #40adce, #69bbd3)',
	ORANGE = 'linear-gradient(to bottom, #f8ce78, #f2a184)',
	DARK = '#2b526f'
}