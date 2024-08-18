import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavigationIcon from "../components/NavigationIcon";
import styles from "./Entdecken.module.css";

const Entdecken = () => {
  const navigate = useNavigate();

  const onDauerausstellungImageClick = useCallback(() => {
    navigate("/entdecken1");
  }, [navigate]);

  return (
    <div className={styles.entdecken1}>
      <div className={styles.scrollableContainer}>
      <img
        className={styles.klimaXAusstellungIcon}
        alt=""
        src="/klima-x-ausstellung1@2x.png"
      />
      <img
        className={styles.newRealitiesAusstellung}
        alt=""
        src="/new-realities-ausstellung1@2x.png"
      />
      <img
        className={styles.dauerausstellungIcon}
        alt=""
        src="/dauerausstellung1@2x.png"
        onClick={onDauerausstellungImageClick}
      />
       <img
        className={styles.dauerausstellungIcon}
        alt=""
        src="/dauerausstellung1@2x.png"
        onClick={onDauerausstellungImageClick}
      />
      </div>
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <b className={styles.entdecken}>Entdecken</b>
      </div>
      <img
        className={styles.searchFill0Wght400Grad0OpsIcon}
        alt=""
        src="/search-fill0-wght400-grad0-opsz24-1.svg"
      />
      <NavigationIcon navigation1="/navigation.svg" />
    </div>
  );
};

export default Entdecken;
