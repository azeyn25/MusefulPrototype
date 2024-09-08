import React, { useEffect, useCallback, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import styles from "./Entdecken4.module.css";
import { useTranslation } from "react-i18next";

const Entdecken4 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { result } = location.state || {};
  const { t } = useTranslation();

  // Use state to store firstDetectedName
  const [firstDetectedName, setFirstDetectedName] = useState("");

  useEffect(() => {
    console.log("Result received in Entdecken4:", result);
    // Extract the first detected object's name
    if (result && result.classes.length > 0) {
      const detectedName = result.names[result.classes[0]];
      setFirstDetectedName(detectedName);
    }
  }, [result]);

  const onCloseButtonIconClick = useCallback(() => {
    navigate("/entdecken1");
  }, [navigate]);

  const onCameraButtonIconClick = useCallback(() => {
    navigate("/entdecken2");
  }, [navigate]);

  const onLoginButtonContainerClick = useCallback(() => {
    if (firstDetectedName) {
      navigate("/entdecken6", { state: { detectedName: firstDetectedName } });
    } else {
      // Handle case where firstDetectedName is not available
      console.error("No first detected name available.");
    }
  }, [navigate, firstDetectedName]);

  if (!result) {
    return <div>No result found</div>;
  }

  return (
    <Container fluid className={styles.entdecken5}>
      <Row className="h-100">
        {/* Header */}
        <Col xs={12}>
          <div className={styles.header}>
            <b className={styles.pacMan}>{firstDetectedName}</b>
          </div>
        </Col>
        {/* Main Content */}
        <Card  className={styles.card}>
          <Col xs={12} md={8} className="d-flex justify-content-center align-items-center">
          <div className={styles.scrollableContainer}>
            <div className={styles.text}>
              <div className={styles.pacManJapPakkuman}>
                <p className={styles.pacManJapPakkuman1}>
                {t("steinvonrosette")}
                </p>
              </div>
            </div>

          </div>
          </Col>
        </Card>
        <Card  className={styles.card}>
        <Col xs={12} md={8} className="d-flex justify-content-center align-items-center">            
              <img src="/rosettapic.jpg" alt="Rosetta Stone" className={styles.rosettaPic} />
        </Col>
        </Card>
        </Row>
        <Row className="h-100">
        <Col className=" p-3">
        <div className={styles.buttonContainer}>
            <img src="/camerabutton.svg" alt="Camera" className={styles.cameraButtonIcon} onClick={onCameraButtonIconClick} /> 
            <Button className={styles.loginButton} onClick={onLoginButtonContainerClick}>Chat</Button>
            <img src="/closebutton1.svg" alt="Close" className={styles.closeButtonIcon} onClick={onCloseButtonIconClick} />
            
        </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Entdecken4;
