import React from 'react';
import { Puzzle, MonitorCog, FileText, BarChart3, Rocket } from 'lucide-react';

export default function Services() {
    const services = [
        {
            icon: <Puzzle size={48} strokeWidth={1} />,
            title: 'Software a medida',
            desc: 'Sistemas internos adaptados a tu forma de trabajar.'
        },
        {
            icon: <MonitorCog size={48} strokeWidth={1} />,
            title: 'Automatización de procesos',
            desc: 'Menos tareas repetitivas, menos errores, más tiempo.'
        },
        {
            icon: <FileText size={48} strokeWidth={1} />,
            title: 'Gestión y generación de documentos',
            desc: 'Plantillas inteligentes, datos centralizados, flujos claros.'
        },
        {
            icon: <BarChart3 size={48} strokeWidth={1} />,
            title: 'Herramientas internas y backoffice',
            desc: 'CRMs simples, paneles de control y sistemas administrativos.'
        },
        {
            icon: <Rocket size={48} strokeWidth={1} />,
            title: 'MVPs y productos digitales',
            desc: 'Versiones funcionales para validar ideas rápido y bien.'
        }
    ];

    return (
        <section id="services" className="section container">
            <h2 className="mb-xl text-center animate-fade-in-up">Qué hacemos</h2>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                {services.map((service, index) => (
                    <div key={index} className="card-hover fade-in-section is-visible" style={{ padding: '2rem', border: '1px solid var(--border-light)', borderRadius: '12px', transition: 'all 0.3s ease', backgroundColor: '#fff', animationDelay: `${index * 0.1}s` }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{service.icon}</div>
                        <h3 className="mb-sm">{service.title}</h3>
                        <p>{service.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
