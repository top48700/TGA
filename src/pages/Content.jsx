import { useState } from 'react';
import '../components/css/Service.css';
import { useTranslation } from 'react-i18next';

function Content() {
    const [selectedCard, setSelectedCard] = useState(null);
      const { t } = useTranslation('service');
      const rawArticles = t('articles', { returnObjects: true });
      const articles = Array.isArray(rawArticles) ? rawArticles : [];
    
      const handleOpen = (index) => setSelectedCard(index);
      const handleClose = () => setSelectedCard(null);
    
      return (
        <>
          <div className="serv-title">
            <h1>บริการของเรา</h1>
          </div>
    
          <section>
            <div className="knowledge-grid">
              {articles.map((item, index) => (
                <div
                  className="article-card"
                  key={index}
                  onClick={() => handleOpen(index)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="article-image"
                  />
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <span className="learn-more">{t('learnMore')}</span>
                </div>
              ))}
    
              {selectedCard !== null && (
                <div className="modal-overlay" onClick={handleClose}>
                  <div
                    className="modal-box"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button className="close-btn" onClick={handleClose}>
                      {t('close')}
                    </button>
                    <img
                      src={articles[selectedCard].image}
                      alt={articles[selectedCard].title}
                    />
                    <h2>{articles[selectedCard].title}</h2>
                    <div className="article-detail">
                      {Array.isArray(articles[selectedCard].detail)
                        ? articles[selectedCard].detail.map((line, i) => (
                            <p key={i}>{line}</p>
                          ))
                        : articles[selectedCard].detail
                            .split('\n')
                            .map((line, i) => <p key={i}>{line.trim()}</p>)}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </>
    )
} export default Content;