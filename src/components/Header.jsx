import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header11 = ({ className = "", lesezeichen }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.headerChild} />
    </div>
  );
};

Header11.propTypes = {
  className: PropTypes.string,
  lesezeichen: PropTypes.string,
};

export default Header11;
