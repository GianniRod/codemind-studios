import React from 'react';
import { CheckCircle2, User } from 'lucide-react';

export default function WhyUs() {
    return (
        <section id="why-us" className="section container">
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                <div className="fade-in-section is-visible">
                    <h2 className="mb-lg">Por qué Codemind</h2>
                    <ul style={{ fontSize: '1.125rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            'Software pensado, no improvisado',
                            'Entregas rápidas y funcionales',
                            'Costos más bajos que desarrollo tradicional',
                            'Comunicación clara y directa',
                            'Foco en negocio, no en buzzwords'
                        ].map((item, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <CheckCircle2 size={20} color="var(--text-primary)" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="mb-lg">Trabajamos con</h2>
                    <ul style={{ fontSize: '1.125rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            'Escribanías',
                            'Estudios profesionales',
                            'Pymes',
                            'Emprendedores',
                            'Startups en etapa temprana'
                        ].map((item, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <User size={20} color="var(--text-primary)" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
