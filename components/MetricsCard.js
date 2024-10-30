import Image from "next/image";
import styles from "./MetricsCard.module.css";

export const MetricsCard = ({ title, iconSrc, metric, unit }) => {
  return (
    <div className={styles.wrapper}>
      <p>{title}</p>
      <div className={styles.content}>
        <Image width={100} height={100} src={iconSrc} alt="Icône météo" />
        <div>
          <h1>{metric}</h1>
          <p>{unit}</p>
        </div>
      </div>
    </div>
  );
};
