import { Quote, Star } from 'lucide-react';
import testimonialsData from '../data/testimonials.json';

const Testimonials = () => {
    return (
        <section id="testimonials" className="section bg-surface">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title">Client Testimonials</h2>
                    <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Trusted by industry leaders across Myanmar. Here's what our partners say about our service.
                    </p>
                </div>

                <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-lg">
                    {testimonialsData.map((item) => (
                        <div key={item.id} className="testimonial-card bg-white p-6 rounded-lg shadow-sm hover-shadow transition">
                            <div className="flex gap-sm mb-4 text-primary">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-secondary mb-6 italic" style={{ fontSize: '0.95rem' }}>
                                "{item.content}"
                            </p>
                            <div className="flex items-center gap-md mt-auto">
                                <div className="quote-icon p-2 rounded-full bg-surface text-primary">
                                    <Quote size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm mb-0">{item.name}</h4>
                                    <p className="text-xs text-light">{item.role}, {item.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                .p-6 { padding: 1.5rem; }
                .italic { font-style: italic; }
                .mt-auto { margin-top: auto; }
                .lg-grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
                @media (min-width: 1024px) {
                   .lg-grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
