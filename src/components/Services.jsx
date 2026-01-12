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
        <section id="services" className="py-20 bg-surface">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-heads text-secondary mb-4 uppercase">Our Services</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto font-sans">
                        Comprehensive lifting and engineering solutions tailored to your project requirements.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                            <div className="text-primary mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-heads text-secondary">{service.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed font-sans">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
