export default async function handler(req, res) {
	const url = `https://api.open-meteo.com/v1/forecast?latitude=45.5663&longitude=5.9208&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m&daily=weather_code,sunrise,sunset&timeformat=unixtime&timezone=Europe%2FBerlin&forecast_minutely_15=4&models=meteofrance_seamless`;

	const getWeatherData = await fetch(url);
	const data = await getWeatherData.json();

	res.status(200).json(data);
}


