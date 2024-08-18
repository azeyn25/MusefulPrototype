import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from './AppContext';
import styles from "./Onboarding.module.css";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const Onboarding = () => {
  const { setLanguage } = useContext(AppContext);
  const navigate = useNavigate();
  const {t} = useTranslation();

  const handleLanguageClick = (language) => {
    setLanguage(language);
    i18n.changeLanguage(language);
    navigate("/onboarding51");
  };

  return (
    <div className={styles.onboarding4}>
      <div className={styles.rectangleParent} onClick={() => handleLanguageClick("de")}>
        <div className={styles.groupChild} />
        <div className={styles.deutsch}>Deutsch</div>
      </div>
      <div className={styles.rectangleGroup} onClick={() => handleLanguageClick("en")}>
        <div className={styles.groupItem} />
        <div className={styles.englisch}>English</div>
      </div>
      <div className={styles.rectangleContainer} onClick={() => handleLanguageClick("ch")}>
        <div className={styles.groupInner} />
        <div className={styles.spanisch}>中國人</div>
      </div>
      <div className={styles.willkommen}>{t("welcome")}</div>
      <div className={styles.welcheSpracheSprichst}>
      {t("whatlanguage")}
      </div>
      <div className={styles.status}>
        <div className={styles.statusChild} />
        <div className={styles.statusItem} />
        <div className={styles.statusInner} />
        <div className={styles.statusChild1} />
      </div>
    </div>
  );
};

export default Onboarding;
