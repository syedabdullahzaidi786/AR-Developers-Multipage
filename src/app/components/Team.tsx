'use client'

import Image from 'next/image'

export default function Team() {
    const teamMembers = [
        {name: 'Syed Abdullah', role: 'Cheif Executive Officer', image: '/abdullah.png'},
        {name: 'Rajab Raza', role: 'Founder & Chairperson', image: '/rajab.png'},
    ]

    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-gray-200 animate-on-scroll">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <div key={index}
                             className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg text-center transition-all duration-300 hover:scale-105 animate-on-scroll">
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={300}
                                height={300}
                                className="rounded-full mx-auto mb-6 border-4 border-blue-100 dark:border-blue-900"
                            />
                            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{member.name}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}