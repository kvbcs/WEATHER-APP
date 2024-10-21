import Image from "next/image";
import { ctoF } from "../services/converters";
import styles from "./MainCard.module.css";

export const MainCard = ({ city, iconName, unitSystem, weatherData }) => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.location}>{city}, France</h1>
			{/* <p className={styles.description}>{description}</p> */}
			<Image
				width={300}
				height={300}
				src={`/icons/${iconName}.svg`}
				alt="weatherIcon"
			/>
			<h1 className={styles.temperature}>
				{unitSystem == "metric"
					? Math.round(weatherData.current.temperature_2m)
					: Math.round(ctoF(weatherData.current.temperature_2m))}
				°{unitSystem == "metric" ? "C" : "F"}
			</h1>
			<p>
				Feels like{" "}
				{unitSystem == "metric"
					? Math.round(weatherData.current.apparent_temperature)
					: Math.round(
							ctoF(weatherData.current.apparent_temperature)
					  )}
				°{unitSystem == "metric" ? "C" : "F"}
			</p>
		</div>
	);
};
