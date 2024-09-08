import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Row, Col, Container } from "react-bootstrap";
import styles from "./Onboarding3.module.css";
import AppContext from './AppContext';
import { useTranslation } from "react-i18next";

const Onboarding3 = () => {
  const { setSliderValue, setSelectedSlider } = useContext(AppContext);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleCardClick = (value) => {
    setSliderValue(value);
    setSelectedSlider(value);
    navigate("/onboarding1");
  };

  const cardsData = [
    {
      title: t("scholar"),
      text: t("angetrieben"),
      imageSrc: "/eye-tracking-fill0-wght400-grad0-opsz24-1.svg",
      value: "Scholar",
    },
    {
      title: t("wanderer"),
      text: t("schnell"),
      imageSrc: "/footprint-fill0-wght400-grad0-opsz24-1.svg",
      value: "Wanderer",
    },
    {
      title: t("muser"),
      text: t("wissen"),
      imageSrc: "/psychology-alt-fill0-wght400-grad0-opsz24-1-1.svg",
      value: "Muser",
    },
  ];

  return (
    <div className={styles.onboarding6}>
      <Container>
        <div className={styles.willkommen}>{t("welcome")}</div>
        <div className={styles.wieVielInteresse}>{t("interest")}</div>
        {/* Scrollable Container */}
        <div className={styles.scrollableContainer}>
          <Row className="justify-content-center">
            {cardsData.map((card, index) => (
              <Col key={index} xs={12} md={6} lg={4} className="mb-4">
                <Card
                  className={styles.card}
                  onClick={() => handleCardClick(card.value)}
                >
                  <Card.Img
                    variant="top"
                    src={card.imageSrc}
                    className={styles.cardImage}
                  />
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Onboarding3;
