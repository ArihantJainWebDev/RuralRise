import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    // --- Chatbot Section ---
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [chatbotResultData, setChatbotResultData] = useState("result");
    const [chatbotShowResult, setChatbotShowResult] = useState(false);
    const [chatbotLoading, setChatbotLoading] = useState(false);

    // --- Advice Section ---
    const [adviceResultData, setAdviceResultData] = useState("result");
    const [adviceLoading, setAdviceLoading] = useState(false);
    const [adviceShowResult, setAdviceShowResult] = useState(false);

    const delayPara = (index, nextWord, setter) => {
        setTimeout(function () {
            setter(prev => prev + nextWord);
        }, 75 * index);
    };

    const newChat = () => {
        setChatbotLoading(false);
        setChatbotShowResult(false);
    };

    // --- Chatbot onSent ---
    const onChatbotSent = async () => {
        setChatbotResultData("");
        setChatbotLoading(true);
        setChatbotShowResult(true);

        let response;
        if (input.trim() !== "") {
            setPrevPrompt(prev => [...prev, input]);
            setRecentPrompt(input);
            response = await runChat(input);
        }

        let responseArray = response.split("**");
        let newResponse = "";
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i];
            } else {
                newResponse += "<b>" + responseArray[i] + "</b>";
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>");
        let newResponseArray = newResponse2.split(" ");
        for (let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord + " ", setChatbotResultData);
        }

        setChatbotLoading(false);
        setInput("");
    };

    // --- Advice onSent ---
    const onAdviceSent = async (prompt) => {
        setAdviceResultData("");
        setAdviceLoading(true);
        setAdviceShowResult(false); // 👈 Start fresh
      
        const response = await runChat(prompt);
      
        let responseArray = response.split("**");
        let newResponse = "";
        for (let i = 0; i < responseArray.length; i++) {
          if (i === 0 || i % 2 !== 1) {
            newResponse += responseArray[i];
          } else {
            newResponse += "<b>" + responseArray[i] + "</b>";
          }
        }
        let newResponse2 = newResponse.split("*").join("</br>");
        let newResponseArray = newResponse2.split(" ");
        for (let i = 0; i < newResponseArray.length; i++) {
          const nextWord = newResponseArray[i];
          delayPara(i, nextWord + " ", setAdviceResultData);
        }
      
        setAdviceLoading(false);
        setAdviceShowResult(true); // 👈 After done loading, show the result
      };

      const contextValue = {
        // Chatbot states
        input,
        setInput,
        prevPrompt,
        setPrevPrompt,
        recentPrompt,
        setRecentPrompt,
        chatbotResultData,
        chatbotShowResult,
        chatbotLoading,
        onChatbotSent,
        newChat,
      
        // Advice states
        adviceResultData,
        adviceLoading,
        adviceShowResult, // 👈 Add this
        onAdviceSent,
      };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;