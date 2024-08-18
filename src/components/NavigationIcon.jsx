import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./NavigationIcon.module.css";

const NavigationIcon = ({
  className = "",
  navigation1,
  propWidth,
  propHeight,
  propPosition,
  propMargin,
  propRight,
  propBottom,
  propLeft,
  propAlignSelf,
  propMaxHeight,
}) => {
  const navigationIconStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
      position: propPosition,
      margin: propMargin,
      right: propRight,
      bottom: propBottom,
      left: propLeft,
      alignSelf: propAlignSelf,
      maxHeight: propMaxHeight,
    };
  }, [
    propWidth,
    propHeight,
    propPosition,
    propMargin,
    propRight,
    propBottom,
    propLeft,
    propAlignSelf,
    propMaxHeight,
  ]);

  return (
    <img
      className={[styles.navigationIcon, className].join(" ")}
      alt=""
      src={navigation1}
      style={navigationIconStyle}
    />
  );
};

NavigationIcon.propTypes = {
  className: PropTypes.string,
  navigation1: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
  propPosition: PropTypes.any,
  propMargin: PropTypes.any,
  propRight: PropTypes.any,
  propBottom: PropTypes.any,
  propLeft: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propMaxHeight: PropTypes.any,
};

export default NavigationIcon;
