import React, { useState, useEffect } from 'react';
import logo from '../assets/codemind_logo.png';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Quiénes somos', href: '#about' },
        { name: 'Servicios', href: '#services' },
        { name: 'Proceso', href: '#process' },
        { name: 'Nosotros', href: '#why-us' },
    ];

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#" className="logo-link">
                    <img src={logo} alt="Codemind Studios" className="logo-img" />
                </a>

                {/* Desktop Menu */}
                <nav className="desktop-nav">
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="nav-link">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                    <a href="#contact" className="btn btn-primary btn-sm">Hablemos</a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>

                {/* Mobile Menu */}
                <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
                    <ul className="mobile-nav-list">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="mobile-nav-link"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="#contact"
                                className="btn btn-primary "
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Hablemos
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
