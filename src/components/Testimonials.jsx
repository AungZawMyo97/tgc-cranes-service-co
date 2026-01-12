import { Quote, Star } from 'lucide-react';
import testimonialsData from '../data/testimonials.json';

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-heads text-secondary mb-4 uppercase">Client Testimonials</h2>
                    <p className="text-gray-600 max-w-xl mx-auto font-sans">
                        Trusted by industry leaders across Myanmar. Here's what our partners say about our service.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialsData.map((item) => (
                        <div key={item.id} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
                            <div className="flex gap-1 mb-6 text-primary">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-8 italic leading-relaxed flex-grow font-sans">
                                "{item.content}"
                            </p>
                            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                                <div className="p-3 rounded-full bg-gray-50 text-primary">
                                    <Quote size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-secondary font-heads uppercase tracking-wide">{item.name}</h4>
                                    <p className="text-xs text-gray-500 font-sans">{item.role}, {item.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
