import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Entdecken1.module.css";
import { useTranslation } from "react-i18next";

const Entdecken1 = () => {
  const navigate = useNavigate();
  const {t} = useTranslation();


  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/entdecken2");
  }, [navigate]);

  return (
    <div className={styles.entdecken2}>
      <div className={styles.header}>
        <b className={styles.dauerausstellung}>{t("dauerausstellung")}</b>
      </div> 
      
      <div className={styles.mit2000ObjektenContainer}>
        <div className={styles.scrollableContainer}>
        <p className={styles.mit2000Objekten}>
        {t("dauerausstellung1")}
        </p> 
        <br />
        <p className={styles.entdeckenSieEinzigartige}>
          Entdecken Sie einzigartige Objekte wie die sagenumwobene Blaue
          Mauritius, das erste Telefon von Philipp Reis oder die legendäre
          Chiffriermaschine Enigma.
        </p>
        <br />
        <p className={styles.verschickenSieEinen}>
          Verschicken Sie einen Brief mit der Rohrpost, morsen Sie
          ein Telegramm nach Hamburg oder präsentieren Sie die Nachrichten in
          unserem Fernsehstudio. Vom Rauchzeichen über die Rohrpost bis zur
          virtuellen Botschaft: Das Museum für Kommunikation Berlin lässt das
          Thema Kommunikation vielfältig und interaktiv lebendig werden.
        </p>
        </div>
      </div>
      <div className={styles.loginButton} onClick={onLoginButtonContainerClick}>
        <div className={styles.start}>Start</div>
      </div>
    </div>
  );
};

export default Entdecken1;
