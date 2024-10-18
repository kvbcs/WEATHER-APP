export default async function handler(req, res) {
	const { cityInput } = req.body;
	const { latitudeData } = 45.5663;
	const { longitudeData } = 5.9208;

	const getWeatherData = await fetch(
		`https://api.open-meteo.com/v1/forecast?latitude=45.5663&longitude=5.9208&hourly=temperature_2m&models=meteofrance_seamless`
	);
	const data = await getWeatherData.json();

	res.status(200).json(data);
}
