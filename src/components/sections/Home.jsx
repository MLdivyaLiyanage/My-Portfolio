import React from 'react';

export const Home = () => {
    return (
        <section 
            id="home" 
            className="min-h-screen flex items-center py-16 md:py-24 relative overflow-hidden"
        >
            {/* Container with proper max-width and padding */}
            <div className="container mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-16">
                    {/* Text content with better typography */}
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
                        
                        {/* Button group with better spacing */}
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
                        </div>
                    </div>

                    {/* Professional image container */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md">
                            <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-gray-800/50 shadow-2xl">
                                {/* Replace with your professional headshot */}
                                <img 
                                    src="src/assets\profile.jpg" 
                                    alt="Divya - Professional Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                            {/* Decorative elements */}
                            <div className="absolute -z-10 top-0 -right-4 w-32 h-32 bg-purple-600/20 rounded-full blur-xl"></div>
                            <div className="absolute -z-10 bottom-8 -left-6 w-24 h-24 bg-blue-600/20 rounded-full blur-xl"></div>
                            
                            {/* Optional tech stack badges floating around the image */}
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