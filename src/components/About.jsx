import { User } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section bg-white">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title">About Our Company</h2>
                    <div className="w-16 h-1 bg-primary mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md-grid-cols-2 gap-lg items-center">
                    <div className="about-image bg-surface rounded-lg h-64 flex items-center justify-center">
                        {/* Placeholder for About Image */}
                        <User size={64} className="text-light" />
                    </div>

                    <div className="about-content">
                        <h3 className="mb-4">Excellence in Heavy Machinery</h3>
                        <p className="text-secondary mb-4">
                            Three Golden Cranes Group Service Co.ltd. has been a trusted partner in the construction and engineering sector.
                            We specialize in providing top-quality crane services, ensuring safety and efficiency in every project.
                        </p>
                        <p className="text-secondary mb-6">
                            Under the expert leadership of our <strong className="text-primary">Head Engineer</strong>,
                            our team is dedicated to delivering precision and reliability. With years of experience, we handle complex lifting
                            operations with professional expertise.
                        </p>

                        <div className="stats grid grid-cols-2 gap-md">
                            <div className="stat-item">
                                <h4 className="text-primary text-2xl font-bold mb-0">15+</h4>
                                <p className="text-sm text-light">Years Experience</p>
                            </div>
                            <div className="stat-item">
                                <h4 className="text-primary text-2xl font-bold mb-0">100%</h4>
                                <p className="text-sm text-light">Safety Record</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
        .w-16 { width: 4rem; }
        .h-1 { height: 0.25rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .text-2xl { font-size: 1.5rem; }
        .mb-5 { margin-bottom: 3rem; }
        .h-64 { height: 16rem; }
      `}</style>
        </section>
    );
};

export default About;
