import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Onboarding1.module.css";
import AppContext from './AppContext';
import { useTranslation } from "react-i18next";

const languageMapping = {
  de: "Deutsch",
  en: "English",
  zh: "中國人",
};

const Onboarding1 = () => {
  const { sliderValue, language, age } = useContext(AppContext);
  const navigate = useNavigate();
  const {t} = useTranslation();

  const getIconScr = () => {
    switch (sliderValue) {
      case "Muser":
        return "/psychology-alt-fill0-wght400-grad0-opsz24-1-1.svg";
      case "Scholar":
        return "/eye-tracking-fill0-wght400-grad0-opsz24-1.svg";
      case "Wanderer":
        return "/footprint-fill0-wght400-grad0-opsz24-1.svg";
      default:
        return "/psychology-alt-fill0-wght400-grad0-opsz24-1-1.svg";
    }
  };

  const onLoginButtonClick = () => {
    navigate("/entdecken1");
  };

  return (
    <div className={styles.onboarding8}>
      <div className={styles.loginButton} onClick={onLoginButtonClick}>
        <div className={styles.jetztStarten}>{t("jetztstarten")}</div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.groupWrapper}>
          <div className={styles.groupContainer}>
            <div className={styles.duBistWrapper}>
              <div className={styles.duBist1}>{t("dubist")}</div>
              <div className={styles.duBist}>{age}</div>
            </div>
            <div className={styles.generationAlphaWrapper}>
              <b className={styles.generationAlpha}></b>
            </div>
          </div>
        </div>
        <img className={styles.groupChild} alt="" src="/group-26.svg" />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.groupFrame}>
          <div className={styles.groupParent1}>
            <div className={styles.duSprichstWrapper}>
              <div className={styles.duSprichst}>{t("dusprichst")}</div>
            </div>
            <div className={styles.deutschWrapper}>
              <b className={styles.deutsch}>{languageMapping[language] || language}</b>
            </div>
          </div>
        </div>
        <img className={styles.groupItem} alt="" src="/group-261.svg" />
      </div>
      <div className={styles.groupParent2}>
        <div className={styles.groupWrapper1}>
          <div className={styles.groupParent3}>
            <div className={styles.duBistContainer}>
              <div className={styles.duBist1}>{t("dubist")}</div>
            </div>
            <div className={styles.muserWrapper}>
              <b className={styles.muser}>{sliderValue}</b>
            </div>
          </div>
        </div>
        <img className={styles.groupInner} alt="" src={getIconScr()} />
      </div>
      <div className={styles.soZusammenfassend}>{t("zusammenfassend")}</div>
      <img className={styles.language24dpFill0Wght400GrIcon} alt="" src="/language-24dp-fill0-wght400-grad0-opsz24-1.svg" />
      <div className={styles.eyeTrackingFill0Wght400Gra} />
    </div>
  );
};

export default Onboarding1;
