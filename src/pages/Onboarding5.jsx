import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Onboarding5.module.css";
import { useTranslation } from "react-i18next";

const Onboarding5 = () => {
  const navigate = useNavigate();
  const {t} = useTranslation();

  const onOnboarding1ContainerClick = useCallback(() => {
    navigate("/onboarding11");
  }, [navigate]);

  return (
    <div className={styles.onboarding1} onClick={onOnboarding1ContainerClick}>
      <img className={styles.onboarding1Child} alt="" src="/vector-1.svg" />
      <div className={styles.deinePersonalisierteMuseumse}>
        {t("greeting")}
      </div>
      <div className={styles.erlebeUndInteragiere}>
        {t("explanation")}
      </div>
      <b className={styles.museful}>Museful</b>
    </div>
  );
};

export default Onboarding5;
