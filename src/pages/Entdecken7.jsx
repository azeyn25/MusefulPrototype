import React, { useCallback, useContext, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { InputContext } from "./InputContext";
import styles from "./Entdecken7.module.css";

const Entdecken7 = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { inputValue } = useContext(InputContext);
  const { detectedName } = location.state || {};

  const onCloseButtonIconClick = useCallback(() => {
    navigate("/entdecken1");
  }, [navigate]);

  const onCameraButtonIconClick = useCallback(() => {
    navigate("/entdecken2");
  }, [navigate]);

  return (
    <div className={styles.entdecken8}>
      <div className={styles.kiChat}>
        <img className={styles.youIcon} alt="" src="/you-icon.svg" />
        <div className={styles.du}>Du</div>
        <div className={styles.zeigMitEin} ref={inputRef}>{inputValue}</div>
        <img className={styles.aiIcon} alt="" src="/ai-icon.svg" />
        <div className={styles.museful}>Museful</div>
        <div className={styles.gerneHierIst}>
          Thank you for your question.
        </div>
      </div>
      <div className={styles.header}>
        <b className={styles.pacMan}>{detectedName}</b>
      </div>
      <img
        className={styles.sendButtonIcon}
        alt=""
        src="/send-button.svg"
      />
      <img
        className={styles.closeButtonIcon}
        alt=""
        src="/closebutton1.svg"
        onClick={onCloseButtonIconClick}
      />
      <img
        className={styles.cameraButtonIcon}
        alt=""
        src="/camerabutton.svg"
        onClick={onCameraButtonIconClick}
      />
      <div className={styles.chat}></div>
    </div>
  );
};

export default Entdecken7;
