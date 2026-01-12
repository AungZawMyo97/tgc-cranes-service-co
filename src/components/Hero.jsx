import { ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="flex flex-col md:flex-row min-h-[90vh] bg-navy">
            <div className="w-full md:w-1/2 relative bg-gray-200 min-h-[400px] md:min-h-auto">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                    <div className="text-secondary opacity-50 font-bold text-2xl uppercase tracking-widest text-center">
                        [Placeholder Image] <br />
                        <span className="text-sm normal-case font-sans">Yellow Crane Machinery</span>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 bg-navy text-white flex flex-col justify-center px-8 md:px-16 py-12 relative overflow-hidden">

                <div className="hidden md:block absolute left-0 top-1/3 w-16 h-1 bg-red z-10 transform -translate-x-1/2"></div>

                <div className="max-w-xl relative z-20">
                    <h1 className="font-serif font-bold leading-[1.1] tracking-[-0.01em] text-[clamp(3rem,5vw,5rem)] text-primary mb-6">
                        Strategy. Strength. <br />
                        Safety.
                    </h1>

                    <p className="text-gray-300 text-xl font-sans mb-10 leading-relaxed font-light">
                        Three Golden Cranes gets the job done.
                    </p>

                    <a href="#contact" className="inline-flex items-center text-secondary font-semibold text-lg hover:text-red transition-colors group">
                        <span className="bg-primary text-secondary p-1 mr-3 rounded-sm group-hover:bg-red group-hover:text-white transition-colors">
                            <ChevronRight size={20} strokeWidth={3} />
                        </span>
                        Start your quote now.
                    </a>
                </div>

                <div className="absolute bottom-0 right-0 w-24 h-24 bg-red"></div>

                <div className="absolute top-1/2 right-0 w-full h-[1px] bg-white opacity-10 pointer-events-none"></div>
            </div>
        </section>
    );
};

export default Hero;
