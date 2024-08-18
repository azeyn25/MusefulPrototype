import React, { useEffect, useCallback, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Entdecken4.module.css";

const Entdecken4 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { result } = location.state || {};

  // Use state to store firstDetectedName
  const [firstDetectedName, setFirstDetectedName] = useState("");

  useEffect(() => {
    console.log("Result received in Entdecken4:", result);
    // Extract the first detected object's name
    if (result && result.classes.length > 0) {
      const detectedName = result.names[result.classes[0]];
      setFirstDetectedName(detectedName);
    }
  }, [result]);

  const onCloseButtonIconClick = useCallback(() => {
    navigate("/entdecken1");
  }, [navigate]);

  const onCameraButtonIconClick = useCallback(() => {
    navigate("/entdecken2");
  }, [navigate]);

  const onLoginButtonContainerClick = useCallback(() => {
    if (firstDetectedName) {
      navigate("/entdecken6", { state: { detectedName: firstDetectedName } });
    } else {
      // Handle case where firstDetectedName is not available
      console.error("No first detected name available.");
    }
  }, [navigate, firstDetectedName]);

  if (!result) {
    return <div>No result found</div>;
  }

  return (
    <div className={styles.entdecken5}>
      <div className={styles.scrollableContainer}>
        <div className={styles.text}>
          <div className={styles.pacManJapPakkuman}>
            <div className={styles.textChild}>
              <p className={styles.pacManJapPakkuman1}>
                Der Stein von Rosette oder Stein von Rosetta, auch kurz Rosetta-Stein (arabisch حجر رشيد, DMG Ḥaǧar Rašīd, französisch pierre de Rosette, englisch Rosetta Stone) ist das Fragment einer Stele aus Memphis (Ägypten) aus Granodiorit und enthält ein mehrsprachiges Synodaldekret von 196 v. Chr. aus der Zeit der altgriechisch-makedonisch-ptolemäischen Dynastie, erstellt im Auftrag des Königs Ptolemaios V. Epiphanes, eines Nachfolgers von Alexander dem Großen. Der Stein von Rosette war entscheidend für die Entschlüsselung der ägyptischen Hieroglyphen.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.text2}>
          {/* Replace the text with an image */}
          <img src="/rosettapic.jpg" alt="Rosetta Stone" className={styles.rosettaPic} />
        </div>
      </div>
      <div className={styles.header}>
        {/* Display the first detected object's name dynamically */}
        <b className={styles.pacMan}>{firstDetectedName}</b>
      </div>
      <img
        className={styles.closeButtonIcon}
        alt=""
        src="/closebutton1.svg"
        onClick={onCloseButtonIconClick}
      />
      <img
        className={styles.cameraButtonIcon}
        alt=""
        src="/camerabutton.svg"
        onClick={onCameraButtonIconClick}
      />
      <div className={styles.loginButton} onClick={onLoginButtonContainerClick}>
        <div className={styles.chat}>Chat</div>
      </div>
    </div>
  );
};

export default Entdecken4;
