'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Moon, Sun } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
    const [darkMode, setDarkMode] = useState(false)
    const pathname = usePathname()

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        if (darkMode) {
            document.documentElement.classList.remove('dark')
            updateThemeColor('#ffffff') // Light mode color
        } else {
            document.documentElement.classList.add('dark')
            updateThemeColor('#131b29') // Dark mode color
        }
    }

    const updateThemeColor = (color: string) => {
        const themeColorMeta = document.querySelector('meta[name="theme-color"]')
        if (themeColorMeta) {
            themeColorMeta.setAttribute('content', color)
        } else {
            const meta = document.createElement('meta')
            meta.name = 'theme-color'
            meta.content = color
            document.head.appendChild(meta)
        }
    }

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Team', path: '/team' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Internship', path: '/internship' },
        { name: 'Contact', path: '/contact' },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-70 shadow-sm z-50 backdrop-blur-md transition-colors duration-300">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-2 bg-blue-600 flex items-center justify-center">
                            <Image
                                src="/logo.png?height=48&width=48"
                                alt="AR Developers Logo"
                                width={48}
                                height={48}
                                className="object-cover"
                            />
                        </div>
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">AR Developers</div>
                    </Link>
                    <div className="hidden md:flex space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`text-sm font-medium transition-all duration-200 px-3 py-2 rounded-md ${
                                    pathname === item.path
                                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                                        : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <Button
                        onClick={toggleDarkMode}
                        className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                        {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>
                </div>
            </nav>
        </header>
    )
}