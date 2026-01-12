import { User } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heads text-secondary mb-4 uppercase">About Our Company</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center shadow-inner">
                        <div className="flex flex-col items-center text-gray-400">
                            <User size={80} className="mb-4 opacity-50" />
                            <span className="font-heads text-lg uppercase tracking-wider">Team Activity Photo</span>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-6 font-heads text-secondary">Excellence in Heavy Machinery</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed font-sans">
                            Three Golden Cranes Group Service Co. Ltd. has been a trusted partner in the construction and engineering sector.
                            We specialize in providing top-quality crane services, ensuring safety and efficiency in every project.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed font-sans">
                            Under the expert leadership of our <strong className="text-primary font-bold">Head Engineer</strong>,
                            our team is dedicated to delivering precision and reliability. With years of experience, we handle complex lifting
                            operations with professional expertise.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="border-l-4 border-primary pl-4">
                                <h4 className="text-primary text-3xl font-bold mb-1 font-heads">15+</h4>
                                <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">Years Experience</p>
                            </div>
                            <div className="border-l-4 border-primary pl-4">
                                <h4 className="text-primary text-3xl font-bold mb-1 font-heads">100%</h4>
                                <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">Safety Record</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
