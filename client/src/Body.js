import React from 'react';
import worker from './components/worker.png';

const Body = () => {
    return (
    <main className="cuerpo">
        <section className="hero">
            <div className="hero-image">
                <img src={worker} alt="Main" />
            </div>
        </section>
    </main>
    );
};

export default Body;