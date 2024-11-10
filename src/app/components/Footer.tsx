'use client'

export default function Footer() {
    return (
        <footer className="bg-gray-800 dark:bg-gray-900 text-white py-12 transition-colors duration-300">
            <div className="container mx-auto px-6 text-center">
                <p className="text-lg mb-4">&copy; 2024 AR Developers. All rights reserved.</p>
                <div className="flex justify-center space-x-4">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                       className="text-gray-400 hover:text-white transition-colors duration-200">
                        Twitter
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                       className="text-gray-400 hover:text-white transition-colors duration-200">
                        Facebook
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                       className="text-gray-400 hover:text-white transition-colors duration-200">
                        LinkedIn
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                       className="text-gray-400 hover:text-white transition-colors duration-200">
                        Instagram
                    </a>
                </div>
            </div>
        </footer>
    )
}