const Footer = () => {
    return (
        <footer className="bg-secondary text-white py-8">
            <div className="container">
                <div className="flex flex-col md-flex-row justify-between items-center gap-md text-center md-text-left">
                    <div>
                        <h3 className="text-gray-400 text-lg font-bold mb-2">TGC Cranes Service Co.ltd.</h3>
                    </div>

                    <div className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </div>
                </div>
            </div>
            <style>{`
          .py-8 { padding-top: 2rem; padding-bottom: 2rem; }
          .text-white { color: #ffffff !important; }
          .text-gray-400 { color: #9CA3AF; }
          .md-text-left { text-align: left; }
          @media (min-width: 768px) {
             .md-text-left { text-align: left; }
          }
        `}</style>
        </footer>
    );
};

export default Footer;
