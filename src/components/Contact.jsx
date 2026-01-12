import { useState } from 'react';
import { Phone, Mail, MapPin, Send, User, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heads text-secondary mb-4 uppercase">Get In Touch</h2>
                    <p className="text-gray-600 max-w-xl mx-auto font-sans">
                        Ready to lift your project to the next level? Reach out to us for quotes, consultations, or service inquiries.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    <div className="flex flex-col gap-6">
                        <div className="p-5 rounded-lg bg-gray-50 border-l-4 border-primary shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-6">
                            <div className="bg-white text-primary p-3 rounded-full shadow-sm">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1 font-heads">Phone</h4>
                                <p className="font-bold text-lg text-secondary font-sans">09-258510401</p>
                            </div>
                        </div>

                        <div className="p-5 rounded-lg bg-gray-50 border-l-4 border-primary shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-6">
                            <div className="bg-white text-primary p-3 rounded-full shadow-sm">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1 font-heads">Email</h4>
                                <p className="font-bold text-lg text-secondary font-sans">goldencranesgroup@gmail.com</p>
                            </div>
                        </div>

                        <div className="p-5 rounded-lg bg-gray-50 border-l-4 border-primary shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-6">
                            <div className="bg-white text-primary p-3 rounded-full shadow-sm">
                                <User size={24} />
                            </div>
                            <div>
                                <h4 className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1 font-heads">Head Engineer</h4>
                                <p className="font-bold text-lg text-secondary font-sans">Aung Lwin Oo</p>
                            </div>
                        </div>

                        <div className="p-5 rounded-lg bg-gray-50 border-l-4 border-primary shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-6">
                            <div className="bg-white text-primary p-3 rounded-full shadow-sm">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1 font-heads">Location</h4>
                                <p className="font-bold text-lg text-secondary font-sans">Yangon, Myanmar</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100">
                        <h3 className="text-2xl font-bold font-heads text-secondary mb-6">Send us a message</h3>

                        {status === 'success' && (
                            <div className="bg-green-100 text-green-800 p-4 rounded mb-6 flex items-center gap-3">
                                <CheckCircle size={20} /> Message sent successfully!
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="bg-red-100 text-red-800 p-4 rounded mb-6 flex items-center gap-3">
                                <AlertCircle size={20} /> Failed to send message. Please try again.
                            </div>
                        )}

                        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide font-heads" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide font-heads" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide font-heads" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all resize-y"
                                    placeholder="How can we help you?"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className={`btn btn-primary w-full flex justify-center items-center gap-2 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 font-bold uppercase tracking-wide py-4 ${status === 'sending' ? 'opacity-75 cursor-not-allowed' : ''}`}
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={20} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
