import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Entdecken1.module.css";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Button } from "react-bootstrap";

const Entdecken1 = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/entdecken2");
  }, [navigate]);

  return (
    <Container fluid className={styles.entdecken2}>
      <Row className="mb-4">
        <Col className="d-flex justify-content-center">
          <div className={styles.header}>
            <b className={styles.dauerausstellung}>{t("dauerausstellung")}</b>
          </div>
        </Col>
      </Row>
      
      <Row className="mb-4 mt-4">
        <Col xs={12} md={8} lg={6} className="d-flex flex-column">
          <div className={styles.scrollableContainer}>
            <p className={styles.mit2000Objekten}>{t("dauerausstellung1")}</p>
            <p className={styles.entdeckenSieEinzigartige}>
              {t("dauerausstellung2")}
            </p>
            <p className={styles.verschickenSieEinen}>
            {t("dauerausstellung3")}
            </p>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center align-items-center h-100">
        <Col xs={12} md={8} lg={6} className="d-flex flex-column align-items-center">
          <Button className={`${styles.loginButton} btn`} onClick={onLoginButtonContainerClick}>
            <div className={styles.start}>Start</div>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Entdecken1;
