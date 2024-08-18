import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Entdecken3.module.css";
import Webcam from "react-webcam";
import { useLocation } from "react-router-dom";

const Entdecken3 = () => {
  const navigate = useNavigate();

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/entdecken4");
  }, [navigate]);

  const onCloseButtonIconClick = useCallback(() => {
    navigate("/entdecken1");
  }, [navigate]);

  const onLoginButtonContainerClick1 = useCallback(() => {
    navigate("/entdecken7");
  }, [navigate]);

  const location = useLocation();
  const { result } = location.state || {};

  if (!result) {
    return <div>No result found</div>;
  }


  return (
    <div className={styles.entdecken4}>
      <div className={styles.header}>
        <b className={styles.dauerausstellung}>Dauerausstellung</b>
      </div>
      <div className={styles.webcamContainer}>
        <Webcam className={styles.fullscreenWebcam} />
      </div>
      <div className={styles.loginButton} onClick={onLoginButtonContainerClick}>
        <div className={styles.info}>Info</div>
      </div>
      <img
        className={styles.closeButtonIcon}
        alt=""
        src="/closebutton.svg"
        onClick={onCloseButtonIconClick}
      />
      <div
        className={styles.loginButton1}
        onClick={onLoginButtonContainerClick1}
      >
        <div className={styles.chat}>Chat</div>
      </div>
    </div>
  );
};

export default Entdecken3;
