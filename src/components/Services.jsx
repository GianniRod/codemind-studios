import React from 'react';

export default function Services() {
    const services = [
        {
            icon: '🧩',
            title: 'Software a medida',
            desc: 'Sistemas internos adaptados a tu forma de trabajar.'
        },
        {
            icon: '⚙️',
            title: 'Automatización de procesos',
            desc: 'Menos tareas repetitivas, menos errores, más tiempo.'
        },
        {
            icon: '📄',
            title: 'Gestión y generación de documentos',
            desc: 'Plantillas inteligentes, datos centralizados, flujos claros.'
        },
        {
            icon: '📊',
            title: 'Herramientas internas y backoffice',
            desc: 'CRMs simples, paneles de control y sistemas administrativos.'
        },
        {
            icon: '🚀',
            title: 'MVPs y productos digitales',
            desc: 'Versiones funcionales para validar ideas rápido y bien.'
        }
    ];

    return (
        <section id="services" className="section container">
            <h2 className="mb-xl text-center">Qué hacemos</h2>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                {services.map((service, index) => (
                    <div key={index} style={{ padding: '2rem', border: '1px solid var(--border-light)', borderRadius: '12px', transition: 'transform 0.2s', backgroundColor: '#fff' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{service.icon}</div>
                        <h3 className="mb-sm">{service.title}</h3>
                        <p>{service.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
