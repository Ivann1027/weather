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