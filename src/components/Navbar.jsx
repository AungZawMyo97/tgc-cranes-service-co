import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar sticky-top transition-all ${scrolled ? 'bg-white shadow-md' : 'bg-white shadow-sm'}`}>
            <div className="container flex justify-between items-center" style={{ padding: '0.5rem 1rem' }}>
                <a href="#" className="logo flex items-center gap-sm">
                    <img src="/Logo.png" alt="Three Golden Cranes Group" style={{ height: '50px', objectFit: 'contain' }} />
                    <div className="logo-text hidden md-block">
                        <h1 className="text-primary font-bold" style={{ fontSize: '1.25rem', margin: 0, lineHeight: 1.2 }}>Three Golden Cranes</h1>
                        <p className="text-secondary text-xs font-medium" style={{ margin: 0 }}>Group Service Co.ltd.</p>
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md-flex gap-lg items-center">
                    <a href="#home" className="nav-link hover-primary">Home</a>
                    <a href="#services" className="nav-link hover-primary">Services</a>
                    <a href="#about" className="nav-link hover-primary">About</a>
                    <a href="#contact" className="btn btn-primary">Contact Us</a>
                </div>

                {/* Mobile Menu Button */}
                <button className="md-hidden btn-icon" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="mobile-menu bg-white border-top fade-in">
                    <div className="container flex flex-col gap-md" style={{ padding: '1rem' }}>
                        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                        <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
                        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                        <a href="#contact" className="text-primary font-bold" onClick={() => setIsOpen(false)}>Contact Us</a>
                    </div>
                </div>
            )}

            <style>{`
        .navbar { transition: all 0.3s ease; }
        .sticky-top { position: sticky; top: 0; z-index: 1000; }
        .shadow-sm { box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
        .shadow-md { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
        .hover-primary:hover { color: var(--color-primary); }
        .md-hidden { display: block; }
        .hidden { display: none; }
        .md-flex { display: none; }
        .btn-icon { background: none; border: none; cursor: pointer; color: var(--color-secondary); }
        .border-top { border-top: 1px solid var(--color-border); }
        .bg-white { background-color: #ffffff; }

        @media (min-width: 768px) {
          .md-hidden { display: none; }
          .md-flex { display: flex; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
