import Header11 from "../components/Header";
import NavigationIcon from "../components/NavigationIcon";
import styles from "./Lesezeichen1.module.css";

const Lesezeichen1 = () => {
  return (
    <div className={styles.lesezeichen2}>
      <Header11 />
      <img
        className={styles.searchFill0Wght400Grad0OpsIcon}
        alt=""
        src="/search-fill0-wght400-grad0-opsz24-1.svg"
      />
      <NavigationIcon
        navigation1="/navigation.svg"
        propWidth="430px"
        propHeight="67px"
        propPosition="absolute"
        propMargin="unset"
        propRight="unset"
        propBottom="unset"
        propLeft="0px"
        propAlignSelf="unset"
        propMaxHeight="unset"
      />
      <b className={styles.pacMan}>Pac Man</b>
      <b className={styles.hereAreYour}>Here are your saved bookmarks.</b>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.info}>Info</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <div className={styles.video}>Video</div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupInner} />
        <div className={styles.chat}>Chat</div>
      </div>
      <div className={styles.lesezeichen2Child} />
    </div>
  );
};

export default Lesezeichen1;
