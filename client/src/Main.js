import React from 'react';
import './Main.css';
import imagenIndex from './components/img_index_A.png';

const Main = () => {
  return (
    <main className="main-content">
      <section className="hero">
      <img src={imagenIndex} alt="" className="centered-image" />
        <h1>TRABAJADORES A TU ALCANCE</h1>
        <h2>CONECTANDO PERSONAS</h2>
        <p>
          Ofrecemos una plataforma intuitiva y capaz que eficiente la búsqueda,
          selección y contratación de obreros calificados para diversas tareas.
        </p>
        <button className="discover-button">DESCÚBRELO</button>
      </section>
    </main>
  );
};

export default Main;