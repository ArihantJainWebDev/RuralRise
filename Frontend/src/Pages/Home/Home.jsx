import React, { useContext, useState, useEffect } from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import { Context } from '../../context/Context';

const Home = () => {
  const { onAdviceSent, adviceResultData, adviceLoading, adviceShowResult } = useContext(Context);
  const [isAdviceLoading, setIsAdviceLoading] = useState(false);

  const advicePrompts = [
    "Give me a short motivational advice. Give the answer with English and Hindi separated by a line break.",
    "Tell me a tip to stay positive. Give the answer with English and Hindi separated by a line break.",
    "Share a quick advice for success. Give the answer with English and Hindi separated by a line break.",
    "One short life advice please. Give the answer with English and Hindi separated by a line break.",
    "Share one important advice for personal growth. Give the answer with English and Hindi separated by a line break.",
    "Give me a short piece of advice for rural entrepreneurs. Give the answer with English and Hindi separated by a line break.",
    "Tell me a quick tip for improving productivity. Give the answer with English and Hindi separated by a line break.",
    "Share a short piece of advice for overcoming challenges. Give the answer with English and Hindi separated by a line break.",
    "Give me a short piece of advice for effective communication. Give the answer with English and Hindi separated by a line break."
  ];

  const handleGetAdvice = () => {
    setIsAdviceLoading(true);
    const randomPrompt = advicePrompts[Math.floor(Math.random() * advicePrompts.length)];
    onAdviceSent(randomPrompt);
  };

  useEffect(() => {
    handleGetAdvice();
  }, []);

  useEffect(() => {
    if (adviceShowResult) {
      setIsAdviceLoading(false);
    }
  }, [adviceShowResult]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="home-page">
        <div className="advice-section">
          <section>
            <div className="intro-card">
              <h1>Welcome to Rural Rise!</h1>
              <ul>
                <li><b>Resources:</b> Access valuable tools and resources for rural development.</li>
                <li><b>Marketplace:</b> Connect with local markets and businesses for better opportunities.</li>
                <li><b>Community Support:</b> Get advice and assistance to boost rural entrepreneurship.</li>
                <li><b>Events:</b> Stay informed about upcoming events and workshops for rural empowerment.</li>
                <li><b>Guidance:</b> Receive expert tips and advice for improving productivity and business growth.</li>
                <li><b>Tech Updates:</b> Learn about the latest technological advancements for rural areas.</li>
                <li><b>Success Stories:</b> Get inspired by success stories from rural entrepreneurs.</li>
              </ul>
            </div>

            <div className="advice-card">
              <h2>Random Advice</h2>

              {adviceLoading ? (
                <p>Loading<span className="dots">...</span></p>
              ) : adviceShowResult ? (
                <div className="result-card">
                  <div className="result-text" dangerouslySetInnerHTML={{ __html: adviceResultData }} />
                </div>
              ) : (
                <p>Click the button to get a random piece of advice!</p>
              )}

              <button
                onClick={handleGetAdvice}
                disabled={adviceLoading}
              >
                {adviceLoading ? "Fetching..." : "Get New Advice"}
              </button>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;