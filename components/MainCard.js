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
				src={`/icons/01d.svg`} //Précédemment iconName
				alt="Icône météo"
			/>
			<h1 className={styles.temperature}>
				{unitSystem == "metric"
					? Math.round(weatherData.hourly.temperature_2m[0])
					: Math.round(ctoF(weatherData.hourly.temperature_2m[0]))}
				°{unitSystem == "metric" ? "C" : "F"}
			</h1>
			<p>
				Ressenti {""}
				{unitSystem == "metric"
					? Math.round(weatherData.hourly.apparent_temperature[0])
					: Math.round(
							ctoF(weatherData.hourly.apparent_temperature[0])
					  )}
				°{unitSystem == "metric" ? "C" : "F"}
			</p>
		</div>
	);
};
