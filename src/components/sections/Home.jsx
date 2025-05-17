import React from 'react';
// Option 1: Import from assets (best for small files)
import cvPdf from '../../assets/Divya Kalani.pdf'; // Renamed file without spaces

// Option 2: Public folder alternative (uncomment if using public folder)
// const cvPdf = '/files/Divya_Kalani.pdf'; // When file is in public/files/

export const Home = () => {
    const handleDownloadCV = () => {
        // Method that works for both development and production
        const link = document.createElement('a');
        link.href = cvPdf;
        link.download = 'Divya_Kalani_CV.pdf'; // Downloaded filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section 
            id="home" 
            className="min-h-screen flex items-center py-16 md:py-24 relative overflow-hidden"
        >
            <div className="container mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-16">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                                Hi, I'm Divya
                            </span>
                        </h1>
                        
                        <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            <span className="font-semibold text-white">Full Stack Developer & Software Engineer</span> from Sri Lanka.
                            I specialize in building modern web and mobile applications using React, Node.js, 
                            and Flutter to solve real-world problems through clean, efficient code.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                            <a 
                                href="#projects" 
                                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                View Projects
                            </a>
                            <a 
                                href="#contact" 
                                className="inline-flex items-center justify-center border border-gray-700 hover:border-blue-400 text-blue-400 font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-gray-800/50"
                            >
                                Contact Me
                            </a>
                            <button 
                                onClick={handleDownloadCV}
                                className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-700"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download CV
                            </button>
                        </div>
                    </div>

                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md">
                            <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-gray-800/50 shadow-2xl">
                                <img 
                                    src="src/assets/profile.jpg" 
                                    alt="Divya - Professional Profile"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            
                            <div className="absolute -z-10 top-0 -right-4 w-32 h-32 bg-purple-600/20 rounded-full blur-xl"></div>
                            <div className="absolute -z-10 bottom-8 -left-6 w-24 h-24 bg-blue-600/20 rounded-full blur-xl"></div>
                            
                            <div className="absolute -bottom-6 -left-6 bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-700">
                                <span className="text-sm font-medium text-blue-400">Undergraduate Student</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};