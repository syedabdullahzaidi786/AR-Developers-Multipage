'use client'

import { Globe, Code, Smartphone, Laptop, Users, MessageSquare } from 'lucide-react'

export default function Services() {
    const services = [
        {
            icon: <Globe className="h-12 w-12 text-blue-600 dark:text-blue-400"/>,
            title: 'Web Design',
            description: 'Create stunning, responsive websites that captivate your audience.'
        },
        {
            icon: <Code className="h-12 w-12 text-blue-600 dark:text-blue-400"/>,
            title: 'Web Development',
            description: 'Build robust, scalable web applications using cutting-edge technologies.'
        },
        {
            icon: <Smartphone className="h-12 w-12 text-blue-600 dark:text-blue-400"/>,
            title: 'Mobile App Development',
            description: 'Develop innovative mobile apps for iOS and Android platforms.'
        },
        {
            icon: <Laptop className="h-12 w-12 text-blue-600 dark:text-blue-400"/>,
            title: 'Custom Software',
            description: 'Tailor-made software solutions to meet your unique business needs.'
        },
        {
            icon: <Users className="h-12 w-12 text-blue-600 dark:text-blue-400"/>,
            title: 'UI/UX Design',
            description: 'Create intuitive and engaging user interfaces and experiences.'
        },
        {
            icon: <MessageSquare className="h-12 w-12 text-blue-600 dark:text-blue-400"/>,
            title: 'Consultation',
            description: 'Expert advice on digital strategy and technology implementation.'
        },
    ]

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-gray-200 animate-on-scroll">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <div key={index}
                             className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 animate-on-scroll">
                            <div className="flex justify-center mb-6">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-center mb-4 text-gray-800 dark:text-gray-200">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-center">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}