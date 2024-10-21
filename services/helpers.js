import {
	unixToLocalTime,
	kmToMiles,
	mpsToMph,
	timeTo12HourFormat,
} from "./converters";

export const getWindSpeed = (unitSystem, windInMps) =>
	unitSystem == "metric" ? windInMps : mpsToMph(windInMps);

export const getVisibility = (unitSystem, visibilityInMeters) =>
	unitSystem == "metric"
		? (visibilityInMeters / 1000).toFixed(1)
		: kmToMiles(visibilityInMeters / 1000);

export const getTime = (unitSystem, currentTime, timezone) =>
	unitSystem == "metric"
		? unixToLocalTime(currentTime, timezone)
		: timeTo12HourFormat(unixToLocalTime(currentTime, timezone));

export const getAMPM = (unitSystem, currentTime, timezone) =>
	unitSystem === "imperial"
		? unixToLocalTime(currentTime, timezone).split(":")[0] >= 12
			? "PM"
			: "AM"
		: "";

export const getWeekDay = (weatherData) => {
	const weekday = [
		"Dimanche",
		"Lundi",
		"Mardi",
		"Mercredi",
		"Jeudi",
		"Vendredi",
		"Samedi",
	];
	return weekday[
		new Date(
			(weatherData.utc_offset_seconds + weatherData.current.time) * 1000
		).getUTCDay()
	];
};
