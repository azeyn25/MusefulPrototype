import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styles from "./Onboarding5.module.css"; // Assuming your CSS is named Onboarding5.module.css

const Onboarding5 = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onOnboarding1ContainerClick = useCallback(() => {
    navigate("/onboarding11");
  }, [navigate]);

  return (
    <Container
      fluid
      className={`${styles.onboarding1} d-flex flex-column`}
      onClick={onOnboarding1ContainerClick}
    >
      <Row className="justify-content-center align-items-center flex-grow-1 text-center">
        <Col xs={12} className={styles.musefulContainer}>
          <b className={styles.museful}>Museful</b>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center flex-grow-1 text-center">
        <Col xs={12} md={8} lg={6} className={styles.onboarding1Content}>
          <div className={styles.deinePersonalisierteMuseumse}>
            {t("greeting")}
          </div>
          <div className={styles.erlebeUndInteragiere}>
            {t("explanation")}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Onboarding5;
