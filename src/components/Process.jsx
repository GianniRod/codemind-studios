import React from 'react';

export default function Process() {
    const steps = [
        {
            num: '1',
            title: 'Entendemos el problema',
            desc: 'Analizamos el flujo real de trabajo, no supuestos.'
        },
        {
            num: '2',
            title: 'Diseñamos la solución justa',
            desc: 'Sin sobreingeniería. Lo que hace falta, nada más.'
        },
        {
            num: '3',
            title: 'Construimos rápido y con criterio',
            desc: 'Tecnología moderna para reducir tiempos y costos.'
        },
        {
            num: '4',
            title: 'Entregamos y acompañamos',
            desc: 'El sistema queda funcionando y con soporte.'
        }
    ];

    return (
        <section id="process" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 className="mb-xl text-center fade-in-section is-visible">Nuestro enfoque</h2>
                <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                    {steps.map((step, index) => (
                        <div key={index} className="fade-in-section is-visible" style={{ position: 'relative', paddingLeft: '1rem', transitionDelay: `${index * 0.1}s` }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-secondary)', opacity: 0.3, display: 'block', marginBottom: '0.5rem' }}>
                                {step.num.padStart(2, '0')}
                            </span>
                            <h3 className="mb-sm">{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
