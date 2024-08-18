import React, { useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import styles from "./Onboarding3.module.css";
import AppContext from './AppContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";


const Onboarding3 = () => {
  const { sliderValue, setSliderValue, setSelectedSlider } = useContext(AppContext);
  const navigate = useNavigate();
  const {t} = useTranslation();

  const handleSliderChange = useCallback((newIndex) => {
    let value;
    switch (newIndex) {
      case 0:
        value = "Wanderer";
        break;
      case 1:
        value = "Muser";
        break;
      case 2:
        value = "Scholar";
        break;
      default:
        value = "Wanderer";
        break;
    }
    setSliderValue(value);
    setSelectedSlider(value);
  }, [setSliderValue, setSelectedSlider]);

  const navigateToOnboarding1 = useCallback(() => {
    navigate("/onboarding1");
  }, [navigate]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: sliderValue === "Wanderer" ? 0 : sliderValue === "Muser" ? 1 : 2,
    afterChange: handleSliderChange
  };

  return (
    <div className={styles.onboarding6}>
      <div className={styles.willkommen}>{t("welcome")}</div>
      <div className={styles.wieVielInteresse}>{t("interest")}</div>

      <Slider {...settings}>
        <div className={styles.slide} onClick={navigateToOnboarding1}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.muser}>{t("scholar")}</div>
            <div className={styles.duBistAngetrieben}>
            {t("angetrieben")}
            </div>
            <img className={styles.footprintFill0Wght400Grad0Icon} alt="" src="/eye-tracking-fill0-wght400-grad0-opsz24-1.svg" />
          </div>
        </div>
        <div className={styles.slide} onClick={navigateToOnboarding1}>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupItem} />
            <div className={styles.wanderer}>{t("wanderer")}</div>
            <div className={styles.duBistSchnell}>
            {t("schnell")}
            </div>
            <img className={styles.footprintFill0Wght400Grad0Icon} alt="" src="/footprint-fill0-wght400-grad0-opsz24-1.svg" />
          </div>
        </div>
        <div className={styles.slide} onClick={navigateToOnboarding1}>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupInner} />
            <div className={styles.scholar}>{t("muser")}</div>
            <div className={styles.wissenIstDer}>
            {t("wissen")}
            </div>
            <img className={styles.psychologyFill0Wght400Grad0Icon} alt="" src="/psychology-alt-fill0-wght400-grad0-opsz24-1-1.svg" />
          </div>
        </div>
      </Slider>
      <div className={styles.status}>
        <div className={styles.statusChild} />
        <div className={styles.statusItem} />
        <div className={styles.statusInner} />
        <div className={styles.rectangleDiv} />
      </div>
    </div>
  );
};

export default Onboarding3;
