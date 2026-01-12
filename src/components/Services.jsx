import { Truck, Wrench, FileText } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Truck size={40} />,
            title: "Crane Rental Services",
            description: "A wide fleet of cranes available for short-term and long-term projects. Reliable machinery for all your lifting needs."
        },
        {
            icon: <Wrench size={40} />,
            title: "Maintenance & Repair",
            description: "Professional maintenance services to ensure your heavy machinery operates at peak performance and safety standards."
        },
        {
            icon: <FileText size={40} />,
            title: "Engineering Consultation",
            description: "Expert advice from our Head Engineer on lift planning, site assessment, and safety protocols."
        }
    ];

    return (
        <section id="services" className="section bg-surface">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title">Our Services</h2>
                    <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Comprehensive lifting and engineering solutions tailored to your project requirements.
                    </p>
                </div>

                <div className="grid grid-cols-1 md-grid-cols-3 gap-lg">
                    {services.map((service, index) => (
                        <div key={index} className="service-card bg-white p-6 rounded-lg shadow-sm hover-shadow transition">
                            <div className="icon-wrapper text-primary mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                            <p className="text-secondary text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .p-6 { padding: 1.5rem; }
        .rounded-lg { border-radius: var(--radius-lg); }
        .shadow-sm { box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .hover-shadow:hover { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); transform: translateY(-2px); }
        .transition { transition: all 0.3s ease; }
        .text-xl { font-size: 1.25rem; }
        .leading-relaxed { line-height: 1.625; }
      `}</style>
        </section>
    );
};

export default Services;
