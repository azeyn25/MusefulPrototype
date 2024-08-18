import PropTypes from "prop-types";
import styles from "./GroupComponent.module.css";

const GroupComponent = ({ className = "" }) => {
  return (
    <div
      className={[styles.arrowDropDown24dpFill0WghParent, className].join(" ")}
    >
      <img
        className={styles.arrowDropDown24dpFill0WghIcon}
        alt=""
        src="/arrow-drop-down-24dp-fill0-wght400-grad0-opsz24-1.svg"
      />
      <div className={styles.groupChild} />
      <div className={styles.generationY}>Generation Y</div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
