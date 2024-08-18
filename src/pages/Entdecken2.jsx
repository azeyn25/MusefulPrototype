import React, { useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Entdecken2.module.css";
import Webcam from "react-webcam";

const Entdecken2 = () => {
  const navigate = useNavigate();
  const webcamRef = useRef(null);

  const onEntdecken3ContainerClick = useCallback(() => {
    navigate("/entdecken4");
  }, [navigate]);

  const onCloseButtonIconClick = useCallback((e) => {
    e.stopPropagation();
    navigate("/entdecken1");
  }, [navigate]);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
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

      const apiResponse = await fetch("http://20.79.185.199:9000/api/detect", requestOptions);
      const result = await apiResponse.json();
      console.log("API Result:", result);

      // Pass the result state to Entdecken4
      navigate("/entdecken4", { state: { result } });
    } catch (error) {
      console.error("Error:", error);
      // You can display an error message to the user here
    }
  }, [webcamRef, navigate]);

  return (
    <div className={styles.entdecken3} onClick={onEntdecken3ContainerClick}>
      <div className={styles.webcamContainer}>
        <Webcam
          className={styles.fullscreenWebcam}
          audio={false}
          height={720}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={1280}
          videoConstraints={videoConstraints}
        />
      </div>
      <div className={styles.header}>
        <b className={styles.dauerausstellung}>Dauerausstellung</b>
      </div>
      <img
        className={styles.closeButtonIcon}
        alt=""
        src="/closebutton.svg"
        onClick={onCloseButtonIconClick}
      />
      <img
        className={styles.frameButtonIcon}
        onClick={capture}
        src="/screenshot.svg"
        alt=""
      />
    </div>
  );
};

export default Entdecken2;
