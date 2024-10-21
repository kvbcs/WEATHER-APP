import { getWeekDay, getTime, getAMPM } from "../services/helpers";
import styles from "./DateAndTime.module.css";

export const DateAndTime = ({ weatherData, unitSystem }) => {
	return (
		<div className={styles.wrapper}>
			<h2>
				{`${getWeekDay(weatherData)}, ${getTime(
					unitSystem,
					7200,
					weatherData.current.time
				)} ${getAMPM(unitSystem, 7200, weatherData.current.time)}`}
			</h2>
		</div>
	);
};
