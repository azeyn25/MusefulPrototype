import GroupComponent from "../components/GroupComponent1";
import styles from "./Onboarding4.module.css";

const Onboarding4 = () => {
  return (
    <div className={styles.onboarding7}>
      <img className={styles.onboarding7Child} alt="" src="/vector-1.svg" />
      <GroupComponent
        wanderer="Scholar"
        duBistSchnellUnterwegsUnd="Wissen ist der Schlüssel. Du möchtest alle Informationen zu der Ausstellung erhalten."
      />
      <div className={styles.willkommen}>Willkommen!</div>
      <div className={styles.wieVielInteresse}>Wie viel Interesse hast Du?</div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.wanderer}>Wanderer</div>
        <div className={styles.duBistSchnell}>
          Du bist schnell unterwegs und möchtest knappe Informationen erhalten
          und nicht allzu viel Zeit im Museum verbringen.
        </div>
        <img
          className={styles.footprintFill0Wght400Grad0Icon}
          alt=""
          src="/footprint-fill0-wght400-grad0-opsz24-1.svg"
        />
      </div>
      <img
        className={styles.psychologyAltFill0Wght400GIcon}
        alt=""
        src="/psychology-alt-fill0-wght400-grad0-opsz24-1-1.svg"
      />
      <div className={styles.status}>
        <div className={styles.statusChild} />
        <div className={styles.statusItem} />
        <div className={styles.statusInner} />
        <div className={styles.rectangleDiv} />
      </div>
    </div>
  );
};

export default Onboarding4;
