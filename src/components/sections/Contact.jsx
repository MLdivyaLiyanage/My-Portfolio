import { useState } from "react";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const showSuccessAlert = () => {
        Swal.fire({
            title: 'Success!',
            text: 'Your message has been sent successfully!',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#6366f1',
            background: '#1f2937',
            color: '#fff',
            iconColor: '#10b981'
        });
    };

    const showErrorAlert = () => {
        Swal.fire({
            title: 'Error!',
            text: 'Oops! Something went wrong. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#6366f1',
            background: '#1f2937',
            color: '#fff',
            iconColor: '#ef4444'
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,    
            e.target,
            import.meta.env.VITE_PUBLIC_KEY
        )
        .then((result) => {
            showSuccessAlert();
            setFormData({ name: "", email: "", message: "" });
        })
        .catch(() => {
            showErrorAlert();
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-gradient-to-b from-secondary/20 to-secondary/10 backdrop-blur-sm">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-4xl md:text-3xl font-bold mb-6 text-center">
                    <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                        Get In <span className="text-indigo-500">Touch</span>
                    </span>
                </h2>

                <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
                    Have a project in mind or want to collaborate? Feel free to reach out to me.
                    I'm always open to discussing new ideas, projects, or opportunities to work together.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    <div className="space-y-10">
                        <h3 className="text-2xl font-bold mb-8 text-white">Contact Information</h3>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="p-3 rounded-full bg-primary/10 ring-1 ring-primary/20">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Email</h4>
                                    <a href="mailto:divyaMliyanage@gmail.com" className="text-gray-400 hover:text-primary transition-colors duration-300">
                                        divyaMliyanage@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="p-3 rounded-full bg-primary/10 ring-1 ring-primary/20">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Phone</h4>
                                    <a href="tel:+94765298197" className="text-gray-400 hover:text-primary transition-colors duration-300">
                                        +94 765 298 197
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="p-3 rounded-full bg-primary/10 ring-1 ring-primary/20">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Location</h4>
                                    <span className="text-gray-400">
                                        No 164 A1, Arambawella Road, Galle
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-10">
                            <h4 className="font-semibold mb-6 text-white text-center">Connect with Me</h4>
                            <div className="flex gap-6 justify-center">
                                <a href="https://www.linkedin.com/in/divya-liyanage-9224a2319/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300 p-2 rounded-full hover:bg-primary/10">
                                    <Linkedin className="h-6 w-6"/>
                                </a>
                                <a href="https://www.instagram.com/diwya.thekid_?igsh=MWFwbzJhbXZzODBmeA==" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300 p-2 rounded-full hover:bg-primary/10">
                                    <Instagram className="h-6 w-6"/>
                                </a>
                                <a href="https://www.facebook.com/share/zasXmKxF6pGwxmn7/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300 p-2 rounded-full hover:bg-primary/10">
                                    <Facebook className="h-6 w-6"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-900/50 p-8 rounded-xl shadow-lg ring-1 ring-gray-800 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold mb-8 text-white">Send a Message</h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-3 text-gray-300">Your Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    value={formData.name}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                    placeholder="Divya Liyanage"
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-3 text-gray-300">Your Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    value={formData.email}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                    placeholder="divya@gmail.com"
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-3 text-gray-300">Your Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows={4}
                                    required 
                                    value={formData.message}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                                    placeholder="Hi, I'd like to talk about..."
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                />
                            </div>

                            <button 
                                type="submit" 
                                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    'Sending...'
                                ) : (
                                    <>
                                        <Send size={18} />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}