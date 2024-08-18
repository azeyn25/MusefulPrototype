import GroupComponent from "../components/GroupComponent1";
import styles from "./Onboarding2.module.css";

const Onboarding2 = () => {
  return (
    <div className={styles.onboarding5}>
      <img className={styles.onboarding5Child} alt="" src="/vector-1.svg" />
      <GroupComponent
        wanderer="Wanderer"
        footprintFILL0Wght400GRAD="/footprint-fill0-wght400-grad0-opsz24-1.svg"
        duBistSchnellUnterwegsUnd="Du bist schnell unterwegs und möchtest knappe  Informationen erhalten und nicht allzu viel Zeit im Museum verbringen."
      />
      <div className={styles.willkommen}>Willkommen!</div>
      <div className={styles.wieVielInteresse}>Wie viel Interesse hast Du?</div>
      <div className={styles.status}>
        <div className={styles.statusChild} />
        <div className={styles.statusItem} />
        <div className={styles.statusInner} />
        <div className={styles.rectangleDiv} />
      </div>
      <div className={styles.status1}>
        <div className={styles.statusChild1} />
        <div className={styles.statusChild2} />
        <div className={styles.statusChild3} />
        <div className={styles.statusChild4} />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.muser}>Muser</div>
        <div className={styles.duBistAngetrieben}>
          Du bist angetrieben durch deine endlose Neugier. Du möchtest einen
          tieferen Einblick bekommen.
        </div>
      </div>
    </div>
  );
};

export default Onboarding2;
