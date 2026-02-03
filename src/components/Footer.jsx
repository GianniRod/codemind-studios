import React from 'react';

export default function Footer() {
    return (
        <footer id="contact" className="section" style={{ borderTop: '1px solid var(--border-light)', paddingBottom: '3rem' }}>
            <div className="container text-center">
                <div className="mb-xl fade-in-section is-visible" style={{ maxWidth: '600px', margin: '0 auto 4rem auto' }}>
                    <h2 className="mb-md">¿Tenés un proceso que hoy vive en Word, Excel o WhatsApp?</h2>
                    <p className="mb-lg">Hablemos y veamos cómo convertirlo en un sistema claro y funcional.</p>
                    <a href="#contact" className="btn btn-primary">👉 Agendar una llamada</a>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', borderTop: '1px solid var(--border-light)', paddingTop: '2rem' }}>
                    <img src="/codemind-logo.svg" alt="Codemind Studios" style={{ height: '32px', display: 'none' }} /> {/* Logo placeholder */}
                    <div style={{ fontWeight: 'bold' }}>Codemind Studios</div>
                    <p style={{ fontSize: '0.875rem' }}>&copy; {new Date().getFullYear()} Codemind Studios. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
