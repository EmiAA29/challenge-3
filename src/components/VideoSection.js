import React from 'react';
import './VideoSection.css';

const VideoSection = () => {
  return (
    <div className="video-section">
      <div className="video-text">
        <h1 className="category-title">FRONT END</h1>
        <h2>Challenge React</h2>
        <p>
          Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte
          en la resolución de un problema para poder aplicar todos los conocimientos adquiridos
          en la formación React.
        </p>
      </div>
      <div className="video-image">
        <img src="../public/img/pensar-programador.jpg" alt="¿Qué significa pensar como programador?" />
      </div>
    </div>
  );
};

export default VideoSection;
