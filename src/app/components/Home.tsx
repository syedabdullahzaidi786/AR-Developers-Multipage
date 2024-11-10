'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-6 text-center animate-on-scroll">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-gray-600 to-gray-900 dark:from-gray-300 dark:to-gray-100 text-transparent bg-clip-text">
                    Crafting Digital Experiences
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10">Innovative Web
                    Design & Software Development</p>
                <Link href="/contact">
                    <Button
                        className="bg-blue-600 text-white dark:bg-blue-500 dark:text-gray-900 hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors duration-200 text-lg px-8 py-3 rounded-full"
                    >
                        Get Started <ArrowRight className="ml-2 h-5 w-5"/>
                    </Button>
                </Link>
            </div>
        </section>
    )
}