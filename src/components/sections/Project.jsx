import { image } from "framer-motion/client";
import { ExternalLink } from "lucide-react"; 
// Assuming you're using Lucide icons
import { Github } from "lucide-react";



const projects = [
    {
        id: 1,
        title: "Hostel Management System",
        description: "A web application for managing hostel operations, including room allocation, billing, and maintenance requests.",
        image: "/projects/project1.webp",
        tags: ["HTML", "CSS", "PHP", "MySQL"],
        githubUrl: "https://youtu.be/v-hL3sks2qI?list=RDv-hL3sks2qI",  
    },
    {
        id: 2,
        title: "Hostel Management System",
        description: "A web application for managing hostel operations, including room allocation, billing, and maintenance requests.",
        image: "/projects/project1.webp",
        tags: ["HTML", "CSS", "PHP", "MySQL"],
        githubUrl: "#",  
    },
    {
        id: 3,
        title: "Hostel Management System",
        description: "A web application for managing hostel operations, including room allocation, billing, and maintenance requests.",
        image: "/projects/project1.webp",
        tags: ["HTML", "CSS", "PHP", "MySQL"],
        githubUrl: "#",  
    },
    {
        id: 4,
        title: "Hostel Management System",
        description: "A web application for managing hostel operations, including room allocation, billing, and maintenance requests.",
        image: "/projects/project1.webp",
        tags: ["HTML", "CSS", "PHP", "MySQL"],
        githubUrl: "#",  
    },
    {
        id: 5,
        title: "Hostel Management System",
        description: "A web application for managing hostel operations, including room allocation, billing, and maintenance requests.",
        image: "/projects/project1.webp",
        tags: ["HTML", "CSS", "PHP", "MySQL"],
        githubUrl: "#",  
    },
]

export const Project = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                {""}
                Featured <span className="text-primary">Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project showcases my skills in web development and design.
                    Click on the links to view the live demos or the source code on GitHub.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, key) => (
                            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">

                                <div className="h-48 overflow-hidden">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary text-secondary-foreground">{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold md-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex jusify-between items-center">
                                    
                                    <a href={project.githubUrl} 
                                    target="_blank"
                                    className="text-fireground/80 hover:text-primary transition-color duration-300">
                                        <Github size={20}/></a>
                                </div>
                            </div>
                        ))}
                    </div>
        </div>
    </section>
};