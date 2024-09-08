import React, { useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Entdecken2.module.css";
import Webcam from "react-webcam";
import { useTranslation } from "react-i18next";

const Entdecken2 = () => {
  const navigate = useNavigate();
  const webcamRef = useRef(null);
  const { t } = useTranslation();

  const onEntdecken3ContainerClick = useCallback(() => {
    navigate("/entdecken4");
  }, [navigate]);

  const onCloseButtonIconClick = useCallback((e) => {
    e.stopPropagation();
    navigate("/entdecken1");
  }, [navigate]);

  const videoConstraints = {
    width: 720,
    height: 1280,
    facingMode: { exact: "environment" },
  };

  const capture = useCallback(async () => {
    try {
      const imageSrc = webcamRef.current.getScreenshot();

      if (!imageSrc) {
        throw new Error("Failed to capture image");
      }

      const imageResponse = await fetch(imageSrc);
      const blob = await imageResponse.blob();
      const formdata = new FormData();
      const file = new File([blob], "screenshot.jpg", { type: "image/jpeg" });
      formdata.append("image", file);

      const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
      };

      const apiResponse = await fetch("https://museful.de:9000/api/detect", requestOptions);
      const result = await apiResponse.json();
      console.log("API Result:", result);

      navigate("/entdecken4", { state: { result } });
    } catch (error) {
      console.error("Error:", error);
      // Handle error state or message here
    }
  }, [webcamRef, navigate]);

  return (
    <Container fluid className={styles.entdecken2} onClick={onEntdecken3ContainerClick}>
      <Row noGutters className="h-100">
        <Col className="p-0 position-relative d-flex justify-content-center align-items-center">
          <div className={styles.webcamContainer}>
            <Webcam
              className={styles.portraitWebcam}
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
            <div className={styles.buttonContainer1}>
              <img
                className={styles.frameButtonIcon}
                onClick={capture}
                src="/screenshot.svg"
                alt="Capture"
              />
              </div>
              <div className={styles.buttonContainer2}>
              <img
                className={styles.closeButtonIcon}
                alt="Close"
                src="/closebutton.svg"
                onClick={onCloseButtonIconClick}
              />
            </div>
          </div>
          <div className={styles.header}>
            <b className={styles.dauerausstellung}>{t("dauerausstellung")}</b>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Entdecken2;
