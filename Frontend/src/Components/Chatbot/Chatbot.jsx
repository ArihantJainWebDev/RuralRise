import React, { useState, useContext } from 'react';
import './Chatbot.css';
import { Context } from '../../context/Context';

const Chatbot = () => {
  const {
    input,
    setInput,
    chatbotResultData,
    chatbotLoading,
    chatbotShowResult,
    onChatbotSent,
    recentPrompt,
  } = useContext(Context);
  
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <button onClick={() => setShowChat(true)} className="floating-chat-btn">
        Chat with AI
        <img src="./src/assets/icons/chatbot_4814778.png" alt="chatbot icon" />
      </button>

      {/* AI Chat Overlay */}
      {showChat && (
        <div className="chat-overlay">
          <div className="aipage-container">
            <div className="aipage-header">
            <h2>Your AI agent!</h2>
            <button className="close-chat-btn" onClick={() => setShowChat(false)}>✖️</button>
            </div>

            {!chatbotShowResult ? (  // <-- updated
              <div className="chatbot-before">
                <img src="./src/assets/icons/chatbot_4814778.png" alt="chatbot icon" />
                <p>Chat with AI</p>
              </div>
            ) : (
              <div className="result">
                <div className="result-title">
                  <p>{recentPrompt}</p>
                  <img src="./src/assets/icons/userava.png" alt="user icon" />
                </div>
                <div className="result-data">
                  <img src="./src/assets/icons/botava.png" alt="gemini icon" />
                  {chatbotLoading ? (  // <-- updated
                    <div className="loader">
                      <hr />
                      <hr />
                      <hr />
                    </div>
                  ) : (
                    <p dangerouslySetInnerHTML={{ __html: chatbotResultData }}></p>  // <-- updated
                  )}
                </div>
              </div>
            )}

            <div className="aipage-ask">
              <div className="aipage-input">
                <input
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                  type="text"
                  placeholder="Ask your doubt here..."
                />
                <img 
                  onClick={() => onChatbotSent()}  // <-- updated
                  src="./src/assets/icons/searcbtn3.png" 
                  alt="send-button" 
                  className='send-button'
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;