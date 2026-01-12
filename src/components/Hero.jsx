import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="hero section relative overflow-hidden">
            <div className="bg-pattern absolute inset-0 -z-10"></div>

            <div className="container grid grid-cols-1 md-grid-cols-2 gap-lg items-center">
                <div className="hero-content">
                    <span className="badge bg-surface text-primary rounded-full px-3 py-1 text-sm font-semibold mb-2 inline-block">
                        Professional Crane Services
                    </span>
                    <h1 className="hero-title mb-4">
                        Reliable Lifting Solutions for <span className="text-primary">Heavy Engineering</span>
                    </h1>
                    <p className="hero-text text-lg text-secondary mb-6" style={{ maxWidth: '500px' }}>
                        Three Golden Cranes Group provides top-tier crane services, maintenance, and consultation.
                    </p>
                    <div className="flex gap-md">
                        <a href="#contact" className="btn btn-primary flex items-center gap-sm">
                            Get a Quote <ArrowRight size={18} />
                        </a>
                        <a href="#services" className="btn btn-outline">Our Services</a>
                    </div>
                </div>

                {/* Placeholder for Hero Image or abstract graphic */}
                <div className="hero-image-container flex justify-center">
                    <div className="image-placeholder bg-surface rounded-lg shadow-lg" style={{ width: '100%', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span className="text-light">Professional Industry Image</span>
                    </div>
                </div>
            </div>

            <style>{`
        .hero { min-height: 80vh; display: flex; align-items: center; background: linear-gradient(to bottom, #F9FAFB, #FFFFFF); }
        .badge { background: #EBF5FF; padding: 0.25rem 0.75rem; border-radius: 9999px; }
        .hero-title { font-size: 2.5rem; line-height: 1.1; color: #111827; }
        @media (min-width: 768px) {
          .hero-title { font-size: 3.5rem; }
          .md-grid-cols-2 { grid-template-columns: 1fr 1fr; }
        }
        .text-light { color: #9CA3AF; }
        .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
      `}</style>
        </section>
    );
};

export default Hero;
