import React from 'react';

export default function Hero() {
    return (
        <section className="section container" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <h1 className="mb-lg">
                Software pensado para<br />
                negocios reales.
            </h1>
            <p className="mb-xl" style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                Diseñamos y construimos sistemas que ordenan procesos, reducen errores y ahorran tiempo.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a href="#contact" className="btn btn-primary">👉 Agendar una llamada</a>
                <a href="#services" className="btn btn-secondary">👉 Ver qué hacemos</a>
            </div>
        </section>
    );
}
