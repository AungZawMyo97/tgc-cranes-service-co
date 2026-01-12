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
        <nav className={`transition-all duration-300 sticky top-0 z-50 ${scrolled ? 'glass shadow-md py-2' : 'bg-surface py-4'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <a href="#" className="flex items-center gap-2">
                    <div className="bg-primary text-secondary w-10 h-10 flex items-center justify-center font-bold rounded-sm font-heads text-lg">
                        TG
                    </div>
                    <div>
                        <h1 className="text-secondary font-bold tracking-tighter text-2xl leading-none font-heads">THREE GOLDEN CRANES</h1>
                        <p className="text-primary-dark text-xs font-bold uppercase tracking-widest font-sans">Group Service Co. Ltd.</p>
                    </div>
                </a>

                <div className="hidden md:flex gap-8 items-center">
                    <a href="#home" className="font-bold uppercase text-sm tracking-wide hover:text-primary transition-colors">Home</a>
                    <a href="#services" className="font-bold uppercase text-sm tracking-wide hover:text-primary transition-colors">Services</a>
                    <a href="#about" className="font-bold uppercase text-sm tracking-wide hover:text-primary transition-colors">About</a>
                    <a href="#contact" className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-bold uppercase rounded-sm text-secondary bg-primary hover:bg-primary-dark hover:shadow-md transition-all">
                        Get Quote
                    </a>
                </div>

                <button className="md:hidden text-secondary cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {isOpen && (
                <div className="bg-surface border-t border-gray-200 absolute w-full left-0 shadow-xl md:hidden">
                    <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                        <a href="#home" className="font-bold text-lg uppercase hover:text-primary" onClick={() => setIsOpen(false)}>Home</a>
                        <a href="#services" className="font-bold text-lg uppercase hover:text-primary" onClick={() => setIsOpen(false)}>Services</a>
                        <a href="#about" className="font-bold text-lg uppercase hover:text-primary" onClick={() => setIsOpen(false)}>About</a>
                        <a href="#contact" className="w-full text-center px-6 py-3 bg-primary text-secondary font-bold uppercase rounded-sm" onClick={() => setIsOpen(false)}>Contact Us</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
