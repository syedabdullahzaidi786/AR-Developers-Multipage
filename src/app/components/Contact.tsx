'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Mail } from 'lucide-react'

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        const form = e.currentTarget;
        const formData = new FormData(form);

        formData.append("access_key", "1ab22179-6769-41d9-9aeb-c93315b1491f");
        formData.append("from_name", "AR Dev Web Form");

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setIsSubmitted(true);
                form.reset();
            } else {
                throw new Error(data.message || 'Form submission failed');
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-gray-200 animate-on-scroll">Contact Us</h2>
                <div className="max-w-lg mx-auto animate-on-scroll">
                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                                <Input id="name" name="name" type="text" required placeholder="John Doe"
                                       className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Email</label>
                                <Input id="email" name="email" type="email" required placeholder="john@example.com"
                                       className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                                <Input id="subject" name="subject" type="text" placeholder="How can we help you?"
                                       className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Message</label>
                                <Textarea id="message" name="message" required placeholder="Tell us more about your project..."
                                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" rows={4}/>
                            </div>

                            <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}}/>
                            {error && <p className="text-red-500 text-sm">{error}</p>}

                            <Button type="submit" className="w-full bg-blue-600 text-white dark:bg-blue-500 dark:text-gray-900 hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors duration-200 text-lg py-3 rounded-full flex items-center justify-center">
                                {isSubmitting ? 'Sending...' : 'Send Message'} <Mail className="ml-2 h-5 w-5"/>
                            </Button>
                        </form>
                    ) : (
                        <div className="text-center py-16 space-y-4 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                            <CheckCircle className="w-16 h-16 text-green-500 mx-auto"/>
                            <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">Thank You!</h3>
                            <p className="text-gray-600 dark:text-gray-300">Your message has been sent successfully.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}