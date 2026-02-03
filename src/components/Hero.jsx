import React from 'react';
import heroImage from '../assets/hero_abstract_ui.png';

export default function Hero() {
    return (
        <section className="section container hero-split">
            <div className="hero-content animate-fade-in-up">
                <h1 className="mb-lg">
                    Software pensado para<br />
                    negocios reales.
                </h1>
                <p className="mb-xl" style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 0 3rem 0' }}>
                    Diseñamos y construimos sistemas que ordenan procesos, reducen errores y ahorran tiempo.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <a href="#contact" className="btn btn-primary">👉 Agendar una llamada</a>
                    <a href="#services" className="btn btn-secondary">👉 Ver qué hacemos</a>
                </div>
            </div>

            <div className="hero-image-container fade-in-section is-visible">
                <img src={heroImage} alt="Abstract UI" className="hero-image" />
            </div>
        </section>
    );
}
