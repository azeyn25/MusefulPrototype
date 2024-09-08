import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap"; // Import Bootstrap components
import styles from "./Onboarding51.module.css";
import AppContext from './AppContext';
import { useTranslation } from "react-i18next";

const Onboarding51 = () => {
  const { age, setAge } = useContext(AppContext);
  const navigate = useNavigate();
  const { t } = useTranslation();

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
    <Container fluid className={`${styles.onboarding9} d-flex flex-column justify-content-center align-items-center`}>
      <Row className="justify-content-center text-center mb-4">
        <Col xs={12} md={8} lg={6}>
          <div className={styles.willkommen}>{t("welcome")}</div>
          <div className={styles.wieAltBist}>{t("howold")}</div>
        </Col>
      </Row>
      <Row className="justify-content-center mb-4">
        <Col xs={12} md={8} lg={6} className="d-flex flex-column align-items-center">
          <div className={`${styles.rectangleParent} `}>
            <div className={styles.ageWrapper}>
              <Button className={`${styles.controlButton} ${styles.decreaseButton}`} onClick={handleDecreaseAge}>
                <img src="/polygon-2.svg" alt="Decrease" />
              </Button>
              <div className={styles.div}>{age}</div>
              <Button className={`${styles.controlButton} ${styles.increaseButton}`} onClick={handleIncreaseAge}>
                <img src="/polygon-1.svg" alt="Increase" />
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} className="d-flex justify-content-center">
          <Button
            className={`${styles.loginButton} d-flex justify-content-center align-items-center`}
            onClick={weitergehts}
          >
            {t("buttonweiter")}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Onboarding51;
