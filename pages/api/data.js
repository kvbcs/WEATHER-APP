export default async function handler(req, res) {
	const url = `https://api.open-meteo.com/v1/forecast?latitude=45.5663&longitude=5.9208&current=temperature_2m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,visibility,wind_speed_10m,wind_direction_10m&daily=sunrise,sunset&timeformat=unixtime&timezone=Europe%2FBerlin`;

	const getWeatherData = await fetch(url);
	const data = await getWeatherData.json();

	res.status(200).json(data);
}
