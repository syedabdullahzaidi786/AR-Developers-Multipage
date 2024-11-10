'use client'

import { useState, useEffect } from 'react'

export default function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    const testimonials = [
        { quote: "AR Developers transformed our online presence. Their expertise and creativity are unmatched!", author: "Star Campus" },
        { quote: "Working with AR Developers was a game-changer for our business. Highly recommended!", author: "Darul Ilm Foundation" },
        { quote: "The team at AR Developers is professional, innovative, and delivers results. We couldn't be happier!", author: "Pakistan Children Academy" },
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
        }, 2000)

        return () => clearInterval(timer)
    }, [testimonials.length])

    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-gray-200 animate-on-scroll">What Our Clients Say</h2>
                <div className="max-w-4xl mx-auto relative">
                    <div className="flex justify-center mb-4">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentTestimonial(index)}
                                className={`h-3 w-3 mx-1 rounded-full transition-all duration-300 ${
                                    index === currentTestimonial ? 'bg-white scale-125' : 'bg-blue-300 scale-100'
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                    <div className="overflow-hidden">
                        <div className="flex transition-all duration-500 ease-in-out"
                             style={{transform: `translateX(-${currentTestimonial * 100}%)`}}>
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="w-full flex-shrink-0">
                                    <div
                                        className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg animate-on-scroll mx-2">
                                        <p className="text-lg mb-6 text-gray-600 dark:text-gray-300 italic">{testimonial.quote}</p>
                                        <p className="font-semibold  text-gray-800 dark:text-gray-200">- {testimonial.author}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}