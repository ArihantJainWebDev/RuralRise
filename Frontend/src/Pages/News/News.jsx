import React, { useEffect, useState } from 'react';
import './News.css';
import { motion } from 'framer-motion';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [overlayUrl, setOverlayUrl] = useState(null);
  const [iframeLoading, setIframeLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  const fetchNews = async () => {
    try {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=3d87bc6452dc4a09a1f6a2e09b6b752b`);
      const data = await response.json();
      setNews(data.articles);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  };

  const openOverlay = (url) => {
    setOverlayUrl(url);
    setIframeLoading(true);
    setShowLoader(true);

    setTimeout(() => {
      setShowLoader(false);
    }, 2000);
  };

  const closeOverlay = () => {
    setOverlayUrl(null);
    setIframeLoading(true);
  };

  const handleIframeLoad = () => {
    setIframeLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="news-page">
        <h1>Top Headlines</h1>
        <p>Stay updated with the latest news from around the world.</p>
        {loading ? (
          <p>Loading news...</p>
        ) : (
          <div className="news-list">
            {news.map((article, index) => (
              <div key={index} className="news-card">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                {article.urlToImage && <img src={article.urlToImage} alt="news" />}
                <p><strong>Source:</strong> {article.source.name}</p>
                <p><strong>Published At:</strong> {new Date(article.publishedAt).toLocaleString()}</p>
                <p><strong>Author:</strong> {article.author || 'Unknown'}</p>
                <button onClick={() => openOverlay(article.url)}>Read More</button>
              </div>
            ))}
          </div>
        )}
        {overlayUrl && (
          <div className="overlay">
            <button className="close-btn" onClick={closeOverlay}>✖ Close</button>
            <div className="overlay-content">
              {showLoader ? (
                <div className="loader">Loading...</div>
              ) : (
                <iframe
                  src={overlayUrl}
                  title="News Detail"
                  frameBorder="0"
                  onLoad={handleIframeLoad}
                  width="100%"
                  height="100%"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default News;