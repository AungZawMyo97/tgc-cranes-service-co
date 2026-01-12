import { useState } from 'react';
import { Phone, Mail, MapPin, Send, User, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

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
        <section id="contact" className="section bg-white">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Ready to lift your project to the next level? Reach out to us for quotes, consultations, or service inquiries.
                    </p>
                </div>

                <div className="grid grid-cols-1 md-grid-cols-2 gap-xl">

                    {/* Contact Info Cards */}
                    <div className="contact-info flex flex-col gap-md">
                        <div className="contact-card p-4 rounded-lg bg-surface border-left-primary shadow-sm hover-shadow transition">
                            <div className="flex items-center gap-md">
                                <div className="icon-box bg-white text-primary p-3 rounded-full shadow-sm">
                                    <Phone size={28} />
                                </div>
                                <div>
                                    <h4 className="mb-0 text-sm text-light uppercase tracking-wide">Phone</h4>
                                    <p className="font-bold text-lg">09-258510401</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-card p-4 rounded-lg bg-surface border-left-primary shadow-sm hover-shadow transition">
                            <div className="flex items-center gap-md">
                                <div className="icon-box bg-white text-primary p-3 rounded-full shadow-sm">
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <h4 className="mb-0 text-sm text-light uppercase tracking-wide">Email</h4>
                                    <p className="font-bold text-lg">goldencranesgroup@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-card p-4 rounded-lg bg-surface border-left-primary shadow-sm hover-shadow transition">
                            <div className="flex items-center gap-md">
                                <div className="icon-box bg-white text-primary p-3 rounded-full shadow-sm">
                                    <User size={28} />
                                </div>
                                <div>
                                    <h4 className="mb-0 text-sm text-light uppercase tracking-wide">Head Engineer</h4>
                                    <p className="font-bold text-lg">Aung Lwin Oo</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-card p-4 rounded-lg bg-surface border-left-primary shadow-sm hover-shadow transition">
                            <div className="flex items-center gap-md">
                                <div className="icon-box bg-white text-primary p-3 rounded-full shadow-sm">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <h4 className="mb-0 text-sm text-light uppercase tracking-wide">Location</h4>
                                    <p className="font-bold text-lg">Yangon, Myanmar</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form bg-white p-8 rounded-lg shadow-lg border">
                        <h3 className="mb-6 text-primary">Send us a message</h3>
                        {status === 'success' && (
                            <div className="bg-green-100 text-green-800 p-4 rounded mb-4 flex items-center gap-sm">
                                <CheckCircle size={20} /> Message sent successfully!
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="bg-red-100 text-red-800 p-4 rounded mb-4 flex items-center gap-sm">
                                <AlertCircle size={20} /> Failed to send message. Please try again.
                            </div>
                        )}

                        <form className="flex flex-col gap-md" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="form-input w-full p-3 rounded border bg-surface"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-input w-full p-3 rounded border bg-surface"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="form-input w-full p-3 rounded border bg-surface"
                                    placeholder="How can we help you?"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className={`btn btn-primary w-full flex justify-center items-center gap-sm shadow-md ${status === 'sending' ? 'opacity-75 cursor-not-allowed' : ''}`}
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={18} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
            <style>{`
        .uppercase { text-transform: uppercase; }
        .tracking-wide { letter-spacing: 0.05em; }
        .p-3 { padding: 0.75rem; }
        .p-4 { padding: 1.2rem; }
        .p-8 { padding: 2rem; }
        .rounded-full { border-radius: 9999px; }
        .rounded-lg { border-radius: var(--radius-lg); }
        .border { border: 1px solid var(--color-border); }
        .w-full { width: 100%; }
        .form-input:focus { outline: 2px solid var(--color-primary); border-color: transparent; }
        .gap-xl { gap: 2.5rem; }
        .shadow-sm { box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .shadow-md { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
        .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
        .hover-shadow:hover { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); transform: translateY(-2px); }
        .transition { transition: all 0.3s ease; }
        .border-left-primary { border-left: 4px solid var(--color-primary); }
        .bg-white { background-color: #ffffff; }
        .bg-green-100 { background-color: #d1fae5; }
        .text-green-800 { color: #065f46; }
        .bg-red-100 { background-color: #fee2e2; }
        .text-red-800 { color: #991b1b; }
        .opacity-75 { opacity: 0.75; }
        .cursor-not-allowed { cursor: not-allowed; }
      `}</style>
        </section>
    );
};

export default Contact;
