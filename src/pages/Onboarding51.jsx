import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import styles from "./Onboarding51.module.css";
import AppContext from './AppContext';
import { useTranslation } from "react-i18next";

const Onboarding51 = () => {
  const { age, setAge } = useContext(AppContext);
  const navigate = useNavigate();
  const {t} = useTranslation();

  const handleIncreaseAge = () => {
    setAge((prevAge) => (prevAge < 99 ? prevAge + 1 : prevAge));
  };

  const handleDecreaseAge = () => {
    setAge((prevAge) => (prevAge > 6 ? prevAge - 1 : prevAge));
  };

  const weitergehts = () => {
    navigate("/onboarding3");
  };

  return (
    <div className={styles.onboarding9}>
      <img className={styles.onboarding9Child} alt="" src="/vector-1.svg" />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.parent}>
          <div className={styles.div}>{age}</div>
          <img
            className={styles.groupItem}
            alt=""
            src="/polygon-2.svg"
            onClick={handleDecreaseAge}
          />
          <img
            className={styles.groupInner}
            alt=""
            src="/polygon-1.svg"
            onClick={handleIncreaseAge}
          />
        </div>
      </div>
      <div className={styles.willkommen}>{t("welcome")}</div>
      <div className={styles.wieAltBist}>{t("howold")}</div>
      <div className={styles.loginButton}>
        <div className={styles.losGehts} onClick={weitergehts}>{t("buttonweiter")}</div>
      </div>
      <div className={styles.status}>
        <div className={styles.statusChild} />
        <div className={styles.statusItem} />
        <div className={styles.statusInner} />
        <div className={styles.rectangleDiv} />
      </div>
    </div>
  );
};

export default Onboarding51;
