import React, { useState } from 'react';
import './NewVideoForm.css';

const NewVideoForm = ({ handleAddVideo }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    image: '',
    video: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddVideo(formData);
    setFormData({
      title: '',
      category: '',
      image: '',
      video: '',
      description: ''
    });
  };

  const resetForm = () => {
    setFormData({
      title: '',
      category: '',
      image: '',
      video: '',
      description: ''
    });
  };

  return (
    <div className="new-video-form">
      <h1>Nuevo Video</h1>
      <p>Complete el formulario para crear una nueva tarjeta de video</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Título del video"
          />
        </div>
        <div className="form-group">
          <label>Categoría</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Escoja una categoría</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="innovation">Innovación y Gestión</option>
          </select>
        </div>
        <div className="form-group">
          <label>Imagen</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Link de la imagen"
          />
        </div>
        <div className="form-group">
          <label>Video</label>
          <input
            type="text"
            name="video"
            value={formData.video}
            onChange={handleChange}
            placeholder="Link del video"
          />
        </div>
        <div className="form-group">
          <label>Descripción</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="¿De qué se trata este video?"
          />
        </div>
        <div className="form-buttons">
          <button type="submit">GUARDAR</button>
          <button type="button" onClick={resetForm}>LIMPIAR</button>
        </div>
      </form>
    </div>
  );
};

export default NewVideoForm;
