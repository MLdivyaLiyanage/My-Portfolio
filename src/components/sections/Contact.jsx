import { useState } from "react";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from 'emailjs-com';

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,    
            e.target,
            import.meta.env.VITE_PUBLIC_KEY
        )
        .then((result) => {
            alert("Message Sent!");
            setFormData({ name: "", email: "", message: "" });
        })
        .catch(() => alert("Oops! Something went wrong. Please try again."));
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Get In <span className="text-indigo-500">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out to me.
                    I'm always open to discussing new ideas, projects, or opportunities to work together.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:divyaMliyanage@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        divyaMliyanage@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:+94765298197" className="text-muted-foreground hover:text-primary transition-colors">
                                        +94 765 298 197
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <span className="text-muted-foreground">
                                        No 164 A1, Arambawella Road, Galle
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4 text-center">Connect with Me</h4>
                            <div className="flex gap-4 justify-center">
                                <a href="https://www.linkedin.com/in/divya-liyanage-9224a2319/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                    <Linkedin className="h-6 w-6"/>
                                </a>
                                <a href="https://www.instagram.com/diwya.thekid_?igsh=MWFwbzJhbXZzODBmeA==" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                    <Instagram className="h-6 w-6"/>
                                </a>
                                <a href="https://www.facebook.com/share/zasXmKxF6pGwxmn7/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                    <Facebook className="h-6 w-6"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-sm">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    value={formData.name}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Divya Liyanage"
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    value={formData.email}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="divya@gmail.com"
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows={4}
                                    required 
                                    value={formData.message}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hi, I'd like to talk about..."
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                />
                            </div>

                            <button 
                                type="submit" 
                                className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 transition-colors font-medium"
                            >
                                <Send size={16} />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}