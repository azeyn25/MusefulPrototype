import { useCallback } from "react";
import Header11 from "../components/Header";
import { useNavigate } from "react-router-dom";
import styles from "./Lesezeichen.module.css";

const Lesezeichen = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/lesezeichen2");
  }, [navigate]);

  return (
    <div className={styles.lesezeichen}>
      <Header11 />
      <img
        className={styles.searchFill0Wght400Grad0OpsIcon}
        alt=""
        src="/search-fill0-wght400-grad0-opsz24-1.svg"
      />
      <img className={styles.navigationIcon} alt="" src="/navigation.svg" />
      <b className={styles.dauerausstellungMuseum}>
        Dauerausstellung - Museum für Kommunikation Berlin
      </b>
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <div className={styles.pacMan}>Pac Man</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <div className={styles.atari}>Atari</div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupInner} />
        <div className={styles.pokmon}>Pokémon</div>
      </div>
      <div className={styles.lesezeichenChild} />
      <b className={styles.lesezeichen1}>Lesezeichen</b>
    </div>
  );
};

export default Lesezeichen;
