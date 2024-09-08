import React, { useContext, useCallback, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { InputContext } from "./InputContext";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Entdecken6.module.css";

const Entdecken6 = () => {
  const { inputValue, setInputValue } = useContext(InputContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { detectedName } = location.state || {};

  const [conversation, setConversation] = useState([]);

  const sendMessage = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      prompt: inputValue,
      chat_id: detectedName,
      object_name: "rosetta",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch("https://museful.de:9001/api/chat", requestOptions);
      const result = await response.text();

      setConversation((prevConversation) => [
        ...prevConversation,
        { question: inputValue, response: result },
      ]);

      setInputValue(""); // Clear the input field
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const onSendButtonIconClick = useCallback(() => {
    console.log("Input Value:", inputValue);
    sendMessage();
  }, [inputValue, detectedName, sendMessage]);

  const onCloseButtonIconClick = useCallback(() => {
    navigate("/entdecken1");
  }, [navigate]);

  const onCameraButtonIconClick = useCallback(() => {
    navigate("/entdecken2");
  }, [navigate]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Container fluid className={styles.entdecken7}>
      <Row className="h-100">
        {/* Header */}
        <Col xs={12}>
          <div className={styles.header}>
            <b className={styles.dauerausstellung}>{detectedName}</b>
          </div>
        </Col>

        {/* Conversation */}
        <Col xs={12} className="d-flex flex-column">
          <div className={styles.conversation}>
            {conversation.map((entry, index) => (
              <div key={index}>
                <div className={styles.chatLineyou}>
                  <div className={styles.itsyou}>
                    <div className={styles.du}>Du</div>
                    <img className={styles.youIcon} alt="" src="/you-icon.svg" />
                  </div>
                  <div className={styles.zeigMir}>{entry.question}</div>
                </div>

                <div className={styles.chatLinemuseful}>
                  <div className={styles.itsmuseful}>
                    <img className={styles.aiIcon} alt="" src="/ai-icon.svg" />
                    <div className={styles.museful}>Museful</div>
                  </div>
                  <div className={styles.answer}>{entry.response}</div>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <Row className="h-100">
        <Col xs={12} className="d-flex flex-column p-3">

          <div className={styles.chat}>            
            <div className={styles.buttons}>
              <img
                className={styles.closeButtonIcon}
                alt=""
                src="/closebutton1.svg"
                onClick={onCloseButtonIconClick}
              />
              </div>
              <div className={styles.buttons2}>
              <img
                className={styles.cameraButtonIcon}
                alt=""
                src="/camerabutton.svg"
                onClick={onCameraButtonIconClick}
              />
              </div>
            <input
              className={styles.chatInput}
              type="text"
              placeholder="Type your message..."
              value={inputValue}
              onChange={handleInputChange}
            />
            <img
              className={styles.sendButtonIcon}
              alt=""
              src="/send-button.svg"
              onClick={onSendButtonIconClick}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Entdecken6;
