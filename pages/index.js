import { useState, useEffect } from "react";

import { MainCard } from "../components/MainCard";
import { ContentBox } from "../components/ContentBox";
import { Header } from "../components/Header";
import { DateAndTime } from "../components/DateAndTime";
import { Search } from "../components/Search";
import { MetricsBox } from "../components/MetricsBox";
import { UnitSwitch } from "../components/UnitSwitch";
import { LoadingScreen } from "../components/LoadingScreen";
import { ErrorScreen } from "../components/ErrorScreen";

import styles from "../styles/Home.module.css";

export const App = () => {
	const [cityInput, setCityInput] = useState("");
	const [triggerFetch, setTriggerFetch] = useState(true);
	const [weatherData, setWeatherData] = useState();
	const [unitSystem, setUnitSystem] = useState("metric");

	useEffect(() => {
		const getData = async () => {
			const res = await fetch("api/data", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ cityInput }),
			});
			const data = await res.json();
			console.log(data);

			setWeatherData({ ...data });
			setCityInput("Chambéry");
		};
		getData();
	}, [triggerFetch]);

	const changeSystem = () =>
		unitSystem == "metric"
			? setUnitSystem("imperial")
			: setUnitSystem("metric");

	return weatherData && !weatherData.message ? (
		<div className={styles.wrapper}>
			<MainCard
				city={cityInput}
				country={weatherData.country}
				// description={weatherData.weather[0].description}
				iconName={weatherData.hourly.weather_code[0]}
				unitSystem={unitSystem}
				weatherData={weatherData}
			/>
			<ContentBox>
				<Header>
					<DateAndTime
						weatherData={weatherData}
						unitSystem={unitSystem}
					/>
				</Header>
				<MetricsBox weatherData={weatherData} unitSystem={unitSystem} />
				<UnitSwitch onClick={changeSystem} unitSystem={unitSystem} />
			</ContentBox>
		</div>
	) : weatherData && weatherData.message ? (
		<ErrorScreen errorMessage="City not found, try again!">
			<Search
				onFocus={(e) => (e.target.value = "")}
				onChange={(e) => setCityInput(e.target.value)}
				onKeyDown={(e) =>
					e.keyCode === 13 && setTriggerFetch(!triggerFetch)
				}
			/>
		</ErrorScreen>
	) : (
		<LoadingScreen loadingMessage="Chargement des données..." />
	);
};

export default App;
