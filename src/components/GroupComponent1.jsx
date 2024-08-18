import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent1.module.css";

const GroupComponent = ({
  className = "",
  wanderer,
  footprintFILL0Wght400GRAD,
  duBistSchnellUnterwegsUnd,
  propHeight,
  propWidth,
}) => {
  const footprintFILL0Wght400GRAD0IconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.groupChild} />
      <div className={styles.wanderer}>{wanderer}</div>
      <div className={styles.duBistSchnell}>{duBistSchnellUnterwegsUnd}</div>
      <img
        className={styles.footprintFill0Wght400Grad0Icon}
        alt=""
        src={footprintFILL0Wght400GRAD}
        style={footprintFILL0Wght400GRAD0IconStyle}
      />
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  wanderer: PropTypes.string,
  footprintFILL0Wght400GRAD: PropTypes.string,
  duBistSchnellUnterwegsUnd: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
};

export default GroupComponent;
