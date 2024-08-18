import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Onboarding11.module.css";
import { useTranslation } from "react-i18next";

const Onboarding11 = () => {
  const navigate = useNavigate();
  const {t} = useTranslation();

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/onboarding");
  }, [navigate]);

  return (
    <div className={styles.onboarding2}>
      <img className={styles.onboarding2Child} alt="" src="/vector-1.svg" />
      <div className={styles.willkommen}>{t("welcome")}</div>
      <div className={styles.bevorEsLosgeht}>
      {t("questions")}
      </div>
      <div className={styles.loginButton} onClick={onLoginButtonContainerClick}>
        <div className={styles.losGehts}>{t("losgehts")}</div>
      </div>
      <img
        className={styles.monaLisaSvgrepoCom1Icon}
        alt=""
        src="/monalisasvgrepocom-1.svg"
      />
    </div>
  );
};

export default Onboarding11;
