import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Onboarding1.module.css";
import AppContext from './AppContext';
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Button } from "react-bootstrap";

const languageMapping = {
  de: "Deutsch",
  en: "English",
  zh: "中國人",
};

const Onboarding1 = () => {
  const { sliderValue, language, age } = useContext(AppContext);
  const navigate = useNavigate();
  const { t } = useTranslation();

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
    <Container fluid className={`${styles.onboarding8} d-flex flex-column justify-content-center align-items-center`}>
      <Row className="justify-content-center text-center mb-4 ">
        <div className={styles.soZusammenfassend}>{t("zusammenfassend")}</div>
      </Row>       
      <Row className="justify-content-center  row-spacing">
        <Col xs={12} md={8} lg={6} className="d-flex align-items-center">
          <img className={styles.language24dpFill0Wght400GrIcon} alt="" src="/language-24dp-fill0-wght400-grad0-opsz24-1.svg" />
          <div className={styles.languageTextWrapper}>
            <div className={styles.duSprichst}>{t("dusprichst")}</div>
            <b className={styles.deutsch}>{languageMapping[language] || language}</b>
          </div>
        </Col>
      </Row>  
      <Row className="justify-content-center  row-spacing">
        <Col xs={12} md={8} lg={6} className="d-flex align-items-center">
          <img className={styles.groupChild} alt="" src="/groups_new.svg" />
          <div className={styles.duBistContainer}>
            <div className={styles.duBist1}>{t("dubist")}</div>
            <div className={styles.duBist}>{age}</div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center  row-spacing">
        <Col xs={12} md={8} lg={6} className="d-flex align-items-center">
          <img className={styles.groupInner} alt="" src={getIconScr()} />
          <div className={styles.duBistContainer}>
            <div className={styles.duBist1}>{t("dubist")}</div>
            <div className={styles.muserWrapper}>
              <b className={styles.muser}>{sliderValue}</b>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center mb-4">
        <Button className={styles.loginButton} onClick={onLoginButtonClick}>
          <div className={styles.jetztStarten}>{t("jetztstarten")}</div>
        </Button>
      </Row>
    </Container>
  );
};

export default Onboarding1;
