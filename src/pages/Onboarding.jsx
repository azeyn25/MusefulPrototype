import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from './AppContext';
import { Container, Row, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styles from "./Onboarding.module.css";

const Onboarding = () => {
  const { setLanguage } = useContext(AppContext);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLanguageClick = (language) => {
    setLanguage(language);
    navigate("/onboarding51");
  };

  return (
    <Container fluid className={`${styles.onboarding4} d-flex flex-column justify-content-center align-items-center`}>
      <Row className="justify-content-center text-center mb-4">
        <Col xs={12} md={8} lg={6}>
          <div className={styles.willkommen}>{t("welcome")}</div>
          <div className={styles.welcheSpracheSprichst}>
            {t("whatlanguage")}
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={12} md={8} lg={6} className="d-flex flex-column align-items-center">
          <Button
            className={`${styles.languageButton}`}
            onClick={() => handleLanguageClick("de")}
          >
            
            Deutsch
          </Button>
        </Col>
        <Col xs={12} md={8} lg={6} className="d-flex flex-column align-items-center">
          <Button
            className={`${styles.languageButton}`}
            onClick={() => handleLanguageClick("en")}
          >
            English
          </Button>
        </Col>
        <Col xs={12} md={8} lg={6} className="d-flex flex-column align-items-center">
          <Button
            className={`${styles.languageButton}`}
            onClick={() => handleLanguageClick("ch")}
          >
            中國人
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Onboarding;
