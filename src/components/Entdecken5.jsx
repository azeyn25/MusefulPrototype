import PropTypes from "prop-types";
import styles from "./Entdecken5.module.css";

const Entdecken5 = ({ className = "" }) => {
  return (
    <div className={[styles.entdecken6, className].join(" ")}>
      <div className={styles.textParent}>
        <div className={styles.text}>
          <div className={styles.textChild} />
        </div>
        <b className={styles.thisInformationHasContainer}>
          <p className={styles.thisInformationHas}>
            This information has been saved
          </p>
          <p className={styles.toYourBookmarks}>to your bookmarks.</p>
        </b>
        <div className={styles.mationHasBeenContainer}>
          <p className={styles.mationHasBeen}>mation has been saved</p>
        </div>
      </div>
      <div className={styles.loginButton}>
        <div className={styles.dontShowAgain}>Don’t show again</div>
      </div>
      <div className={styles.loginButton1}>
        <div className={styles.ok}>Ok</div>
      </div>
    </div>
  );
};

Entdecken5.propTypes = {
  className: PropTypes.string,
};

export default Entdecken5;
