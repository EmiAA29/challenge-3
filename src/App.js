import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import VideoSection from './components/VideoSection';
import Section from './components/Section';
import Footer from './components/Footer';
import EditCardModal from './components/EditCardModal';
import NewVideoForm from './components/NewVideoForm';
import './App.css';

const frontEndCards = [
  { id: 1, title: '¿Qué es JavaScript?', category: 'frontend', image: '/public/img/que-es-javascript.jpg', video: 'url-del-video', description: 'Esta es la descripción...' },
  { id: 2, title: 'Equipo Front End', category: 'frontend', image: '/public/img/front-end.jpg', video: 'url-del-video', description: 'Esta es la descripción...' },
  { id: 3, title: 'Cuándo usar let, var y const', category: 'frontend', image: '/public/img/variables.jpg', video: 'url-del-video', description: 'Esta es la descripción...' }
];

const backEndCards = [
  { id: 4, title: 'Spring Framework', category: 'backend', image: '/public/img/agil.jpg', video: 'url-del-video', description: 'Esta es la descripción...' },
  { id: 5, title: '¿Qué es SQL y NoSQL?', category: 'backend', image: '/public/img/sql.jpg', video: 'url-del-video', description: 'Esta es la descripción...' },
  { id: 6, title: 'Conoce los Enum en Java', category: 'backend', image: '/public/img/enum-java.jpg', video: 'url-del-video', description: 'Esta es la descripción...' }
];

const innovationCards = [
  { id: 7, title: '¿Qué son las soft skills?', category: 'innovation', image: '/public/img/skills.jpg', video: 'url-del-video', description: 'Esta es la descripción...' },
  { id: 8, title: 'Las 7 soft skills más deseadas', category: 'innovation', image: '/public/img/scrum.jpg', video: 'url-del-video', description: 'Esta es la descripción...' },
  { id: 9, title: '¿Qué son las metodologías ágiles?', category: 'innovation', image: '/public/img/metodologias.jpg', video: 'url-del-video', description: 'Esta es la descripción...' }
];

const App = () => {
  const [cards, setCards] = useState([...frontEndCards, ...backEndCards, ...innovationCards]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleEdit = (card) => {
    setSelectedCard(card);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedCard(null);
  };

  const handleSave = (updatedCard) => {
    setCards(cards.map(card => (card.id === updatedCard.id ? updatedCard : card)));
  };

  const handleDelete = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  const handleAddVideo = (newCard) => {
    const newCardWithId = { ...newCard, id: cards.length + 1 };
    setCards([...cards, newCardWithId]);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <VideoSection />
              <Section title="Front End" cards={cards.filter(card => card.category === 'frontend')} onEdit={handleEdit} onDelete={handleDelete} />
              <Section title="Back End" cards={cards.filter(card => card.category === 'backend')} onEdit={handleEdit} onDelete={handleDelete} />
              <Section title="Innovación y Gestión" cards={cards.filter(card => card.category === 'innovation')} onEdit={handleEdit} onDelete={handleDelete} />
            </>
          } />
          <Route path="/new-video" element={<NewVideoForm handleAddVideo={handleAddVideo} />} />
        </Routes>
        <Footer />
        <EditCardModal show={isModalOpen} handleClose={handleClose} cardData={selectedCard} handleSave={handleSave} />
      </div>
    </Router>
  );
};

export default App;
