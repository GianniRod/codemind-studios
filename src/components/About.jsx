import React from 'react';

export default function About() {
  return (
    <section className="section container">
      <div className="text-center mb-xl">
        <h2 className="mb-md">Pensar antes de codear.</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="mb-md">
            En Codemind Studios construimos software a medida para estudios, pymes y emprendedores que necesitan soluciones claras, no complejidad innecesaria.
          </p>
          <p className="mb-md">
            Trabajamos con foco en el problema real del negocio, usando tecnología moderna para entregar sistemas funcionales, mantenibles y listos para usarse desde el primer día.
          </p>
          <p style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
            No vendemos horas. Vendemos soluciones bien pensadas.
          </p>
        </div>
      </div>
    </section>
  );
}
