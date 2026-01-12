const Footer = () => {
    return (
        <footer className="bg-secondary text-white py-12 border-t border-gray-700">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-primary text-xl font-bold mb-4 uppercase tracking-wider font-heads">Three Golden Cranes</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 font-sans">
                        Professional crane services, maintenance, and heavy engineering solutions.
                        Safety and reliability are our core values.
                    </p>
                </div>

                <div>
                    <h4 className="text-white text-lg font-bold mb-4 uppercase font-heads">Quick Links</h4>
                    <ul className="flex flex-col gap-2 text-gray-400 text-sm font-sans">
                        <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
                        <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                        <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                        <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white text-lg font-bold mb-4 uppercase font-heads">Contact</h4>
                    <p className="text-gray-400 text-sm mb-2 font-sans">Yangon, Myanmar</p>
                    <p className="text-gray-400 text-sm mb-2 font-sans">info@threegoldencranes.com</p>
                    <p className="text-primary text-lg font-bold font-heads">+95 9 123 456 789</p>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-700 text-center text-xs text-gray-500 font-sans">
                &copy; {new Date().getFullYear()} Three Golden Cranes Group Service Co. Ltd. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

