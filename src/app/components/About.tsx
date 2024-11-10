'use client'

import Image from 'next/image'

export default function About() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200 animate-on-scroll">About Us</h2>
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-10 md:mb-0 animate-on-scroll">
                        <Image
                            src="/placeholder.png"
                            alt="About AR Developers"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-2xl"
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-12 animate-on-scroll">
                        <p className="text-lg mb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                            AR Developers is a cutting-edge web design and software development agency. We
                            combine creativity with technical expertise to deliver outstanding digital solutions for businesses of
                            all sizes.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            Our team of skilled professionals is passionate about creating beautiful,
                            functional, and user-friendly websites and applications that help our clients succeed in the digital world.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}