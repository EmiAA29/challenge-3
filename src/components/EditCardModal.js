import React, { useState, useEffect } from 'react';
import './EditCardModal.css';

const EditCardModal = ({ show, handleClose, cardData, handleSave }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [video, setVideo] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (cardData) {
      setTitle(cardData.title);
      setCategory(cardData.category);
      setImage(cardData.image);
      setVideo(cardData.video);
      setDescription(cardData.description);
    }
  }, [cardData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave({ ...cardData, title, category, image, video, description });
    handleClose();
  };

  const handleClear = () => {
    setTitle('');
    setCategory('');
    setImage('');
    setVideo('');
    setDescription('');
  };

  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close" onClick={handleClose}></button>
        <form onSubmit={handleSubmit}>
          <h2>EDITAR CARD:</h2>
          <div>
            <label>Título</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <label>Categoría</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="innovation">Innovación</option>
            </select>
          </div>
          <div>
            <label>Imagen</label>
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
          </div>
          <div>
            <label>Video</label>
            <input type="text" value={video} onChange={(e) => setVideo(e.target.value)} />
          </div>
          <div>
            <label>Descripción</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          <button type="submit">GUARDAR</button>
          <button type="button" onClick={handleClear}>LIMPIAR</button>
        </form>
      </div>
    </div> 
  );
};

export default EditCardModal;
