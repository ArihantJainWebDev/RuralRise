import React, { useContext, useState } from 'react';
import './Chatbot.css';
import { Context } from '../../context/Context';

const Chatbot = () => {
  const { onSent, showResult, loading, resultData, setInput, input, recentPrompt } = useContext(Context);
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <button onClick={() => setShowChat(true)} className="floating-chat-btn">
        Chat with AI<img src="./src/assets/icons/chatbot_4814778.png"/>
      </button>

      {/* AI Chat Overlay */}
      {showChat && (
        <div className="chat-overlay">
          <div className="aipage-container">
            <button className="close-chat-btn" onClick={() => setShowChat(false)}>✖️</button>

            {!showResult ? (
              <>
                <div className="chatbot-before">
                  <img src="./src/assets/icons/chatbot_4814778.png" alt="chatbot icon" />
                  <p>Chat with AI</p>
                </div>
              </>
            ) : (
              <>
                <div className="result">
                  <div className="result-title">
                    <p>{recentPrompt}</p>
                    <img src="./src/assets/icons/userava.png" alt="user icon" />
                  </div>
                  <div className="result-data">
                    <img src="./src/assets/icons/botava.png" alt="gemini icon" />
                    {loading ? (
                      <div className="loader">
                        <hr />
                        <hr />
                        <hr />
                      </div>
                    ) : (
                      <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                    )}
                  </div>
                </div>
              </>
            )}

            <div className="aipage-ask">
              <div className="aipage-input">
                <input
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                  type="text"
                  placeholder='Ask your doubt here...'
                />
                <img onClick={() => onSent()} src="./src/assets/icons/searcbtn3.png" alt="send-button" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;