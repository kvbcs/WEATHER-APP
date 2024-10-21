import { degToCompass } from "../services/converters";
import {
	getTime,
	getAMPM,
	getVisibility,
	getWindSpeed,
} from "../services/helpers";
import { MetricsCard } from "./MetricsCard";
import styles from "./MetricsBox.module.css";

export const MetricsBox = ({ weatherData, unitSystem }) => {
	return (
		<div className={styles.wrapper}>
			<MetricsCard
				title={"Humidity"}
				iconSrc={"/icons/humidity.png"}
				metric={weatherData.current.relative_humidity_2m}
				unit={"%"}
			/>
			<MetricsCard
				title={"Wind speed"}
				iconSrc={"/icons/wind.png"}
				metric={getWindSpeed(
					unitSystem,
					weatherData.current.wind_speed_10m
				)}
				unit={unitSystem == "metric" ? "m/s" : "m/h"}
			/>
			<MetricsCard
				title={"Wind direction"}
				iconSrc={"/icons/compass.png"}
				metric={degToCompass(weatherData.current.wind_direction_10m)}
			/>
			<MetricsCard
				title={"Visibility"}
				iconSrc={"/icons/binocular.png"}
				metric={getVisibility(unitSystem, weatherData.visibility)}
				unit={unitSystem == "metric" ? "km" : "miles"}
			/>
			<MetricsCard
				title={"Sunrise"}
				iconSrc={"/icons/sunrise.png"}
				metric={getTime(
					unitSystem,
					weatherData.daily.sunrise[0],
					weatherData.timezone
				)}
				unit={getAMPM(
					unitSystem,
					weatherData.daily.sunrise[0],
					weatherData.timezone
				)}
			/>
			<MetricsCard
				title={"Sunset"}
				iconSrc={"/icons/sunset.png"}
				metric={getTime(
					unitSystem,
					weatherData.daily.sunset[0],
					weatherData.timezone
				)}
				unit={getAMPM(
					unitSystem,
					weatherData.daily.sunset[0],
					weatherData.timezone
				)}
			/>
		</div>
	);
};
