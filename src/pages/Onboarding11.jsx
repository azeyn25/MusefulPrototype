import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styles from "./Onboarding11.module.css";

const Onboarding11 = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onLoginButtonClick = useCallback(() => {
    navigate("/onboarding");
  }, [navigate]);

  return (
    <Container
      fluid
      className={`${styles.onboarding2} d-flex flex-column justify-content-center align-items-center`}
    >
      <Row className="justify-content-center text-center mb-4">
        <Col xs={12} md={8} lg={6}>
          <div className={styles.willkommen}>{t("welcome")}</div>
          <div className={styles.bevorEsLosgeht}>
            {t("questions")}
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center mb-4">
        <Col xs={12} className="d-flex justify-content-center">
          <img
            className={styles.monaLisaSvgrepoCom1Icon}
            alt=""
            src="/monalisasvgrepocom-1.svg"
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} className="d-flex justify-content-center">
          <Button
            className={`${styles.loginButton}`}
            onClick={onLoginButtonClick}
          >
            <div className={styles.losGehts}>{t("losgehts")}</div>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Onboarding11;
