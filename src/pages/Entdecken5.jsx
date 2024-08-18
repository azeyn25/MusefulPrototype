import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Entdecken5.module.css";

const Entdecken = () => {
  const navigate = useNavigate();

  const onCloseButtonIconClick = useCallback(() => {
    navigate("/entdecken8");
  }, [navigate]);

  return (
    <div className={styles.entdecken9}>
      <img className={styles.videoIcon} alt="" src="/video@2x.png" />
      <div className={styles.header} />
      <b className={styles.pacMan}>Pac Man</b>
      <img
        className={styles.closeButtonIcon}
        alt=""
        src="/closebutton1.svg"
        onClick={onCloseButtonIconClick}
      />
    </div>
  );
};

export default Entdecken;
