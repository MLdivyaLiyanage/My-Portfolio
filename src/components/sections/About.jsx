export const About = () => {
    const education = [
        {
            institution: "National Institute of Business Management(NIBM)",
            degree: "Diploma in Software Engineering",
            period: "2023 - 2024",
            description: "Focused on software development, coding, and foundational knowledge of software engineering.",
            gpa: "GPA: 3.1/4.0"
        },
        {
            institution: "National Institute of Business Management(NIBM)",
            degree: "BSc(Hons) Computing [Higher Diploma in Software Engineering]",
            period: "2024 - Present",
            description: "A comprehensive program focusing on software development, system design, and computing principles, equipping students with the skills to thrive in the tech industry."
        }
    ];

    return (
        <section id="about" className="min-h-screen items-center justify-center py-20">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-8">
                        I have a deep passion for creating intelligent and scalable digital solutions.
                        My focus is on building fast, clean, and impactful web and mobile experiences.
                        Always learning, always building, and always evolving.
                    </p>

                    <div className="education-section">
                        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                            Education
                        </h3>
                        
                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <div 
                                    key={index} 
                                    className="bg-gray-800/50 rounded-lg p-6 border border-white/5 transition-all
                                    hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10 hover:border-white/20
                                    duration-300 ease-in-out cursor-pointer"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-lg font-semibold text-white">{edu.institution}</h4>
                                        <span className="text-sm bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full">
                                            {edu.period}
                                        </span>
                                    </div>
                                    <h5 className="text-blue-300 font-medium mb-2">{edu.degree}</h5>
                                    {edu.gpa && <h5 className="text-blue-300 font-medium mb-2">{edu.gpa}</h5>}
                                    <p className="text-gray-400 text-sm">{edu.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div> 
        </section>
    );
};