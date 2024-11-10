'use client'

import { Button } from "@/components/ui/button"
import { UserPlus, Code, Award } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Internship() {
    const opportunities = [
        {title: 'Frontend Developer', icon: '/frontend-icon.png'},
        {title: 'Backend Developer', icon: '/backend-icon.png'},
        {title: 'MERN Stack Developer', icon: '/mern-icon.png'},
        {title: 'Full Stack Developer', icon: '/fullstack-icon.png'},
        {title: 'Python Developer', icon: '/python-icon.png'},
        {title: 'WordPress Developer', icon: '/wordpress-icon.png'},
    ]

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-gray-200 animate-on-scroll">Internship Program</h2>
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-lg mb-10 text-gray-600 dark:text-gray-400 animate-on-scroll">
                        Join our internship program to gain hands-on experience in web development and design.
                        Work on real projects, learn from industry experts, and kickstart your career in tech.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                        {opportunities.map((opportunity, index) => (
                            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg animate-on-scroll">
                                <Image
                                    src={opportunity.icon}
                                    alt={opportunity.title}
                                    width={64}
                                    height={64}
                                    className="mx-auto mb-4"
                                />
                                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">{opportunity.title}</h3>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 animate-on-scroll">
                        <Link
                            href="https://docs.google.com/forms/d/e/1FAIpQLSd2PuoiNIiWJfcJXhrzI2og584StRHsDdef8u3Gm8hg5uJFtQ/viewform?usp=sf_link"
                            passHref>
                            <Button
                                className="bg-blue-600 text-white dark:bg-blue-500 dark:text-gray-900 hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors duration-200 text-lg px-6 py-3 rounded-full">
                                <UserPlus className="mr-2 h-5 w-5"/> Apply for Internship
                            </Button>
                        </Link>
                        <Link
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdojeUYELm_wSiDA_dzBFwX78AF-eyvyHZzK9zIMgxRoEqOIg/closedform"
                            passHref>
                            <Button
                                className="bg-green-600 text-white dark:bg-green-500 dark:text-gray-900 hover:bg-green-700 dark:hover:bg-green-400 transition-colors duration-200 text-lg px-6 py-3 rounded-full">
                                <Code className="mr-2 h-5 w-5"/> Submit Project
                            </Button>
                        </Link>
                        <Link href="https://ardevelopers.great-site.net/certgen" passHref>
                            <Button
                                className="bg-yellow-600 text-white dark:bg-yellow-500 dark:text-gray-900 hover:bg-yellow-700 dark:hover:bg-yellow-400 transition-colors duration-200 text-lg px-6 py-3 rounded-full">
                                <Award className="mr-2 h-5 w-5"/> Get Certificate
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}