"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../reusable-components/Button";
import Image from "next/image";
import carImage from "../../../public/Car-Image/car-banner (1).png"
import carImage2 from "../../../public/Car-Image/car-banner (1).png"
import carImage3 from "../../../public/Car-Image/car-banner (1).png"

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const heroSlides = [
        {
            title: "Drive Your Dream Car Today",
            subtitle: "2024 Luxury Collection",
            description: "Experience the ultimate driving pleasure with our premium selection of luxury vehicles. Exclusive deals available now.",
            image: carImage.src,
            cta: "Explore Collection",
            stats: "50+ New Models",
            bgGradient: "from-blue-900/90 via-purple-900/80 to-black/90"
        },
        {
            title: "Premium Pre-Owned Vehicles",
            subtitle: "Certified & Inspected",
            description: "Quality used cars with full certification and warranty. Save up to 40% compared to new models.",
            image: carImage2.src,
            cta: "View Inventory",
            stats: "200+ Certified Cars",
            bgGradient: "from-gray-900/90 via-blue-900/80 to-black/90"
        },
        {
            title: "Electric Revolution",
            subtitle: "Future of Driving",
            description: "Join the electric movement with our latest EV models. Zero emissions, maximum performance.",
            image: carImage3.src,
            cta: "Discover EVs",
            stats: "30+ Electric Models",
            bgGradient: "from-green-900/90 via-teal-900/80 to-black/90"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative overflow-hidden">
            {/* Background Slides */}
            {heroSlides.map((slide, index) => (
                <motion.div
                    key={index}
                    className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: currentSlide === index ? 1 : 0 }}
                    transition={{ duration: 1 }}>
                    <div className="absolute inset-0 bg-black/40"></div>
                </motion.div>
            ))}

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 h-full flex ">
                <div className="grid lg:grid-cols-2 gap-12 mt-8 mb-16 w-full pb-4">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white"
                    >
                        {heroSlides.map((slide, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                                transition={{ duration: 0.5 }}
                                className={`absolute ${currentSlide === index ? 'relative' : 'hidden'}`}
                            >
                                <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
                                    {slide.subtitle}
                                </span>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                                    {slide.title}
                                </h1>
                                <p className="text-xl mb-8 text-gray-200 max-w-2xl">
                                    {slide.description}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                    <Button size="lg" variant="primary">
                                        {slide.cta}
                                    </Button>
                                    <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                                        Schedule Test Drive
                                    </Button>
                                </div>
                                <div className="flex items-center space-x-6">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                        <span className="font-semibold">{slide.stats}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                                        <span className="font-semibold">24/7 Support</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Car Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        {heroSlides.map((slide, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                animate={{
                                    opacity: currentSlide === index ? 1 : 0,
                                    scale: currentSlide === index ? 1 : 0.8,
                                    y: currentSlide === index ? 0 : 50
                                }}
                                transition={{ duration: 0.7 }}
                                className={`absolute ${currentSlide === index ? 'relative' : 'hidden'}`}
                            >
                                <div className="relative">
                                    {/* Car placeholder with elegant design */}
                                    <div className="w-full h-96 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                                        <div className="text-center text-white/80">
                                            <Image
                                                src={slide.image}
                                                alt="Car Garage Logo"
                                                fill
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Floating elements */}
                                    <div className="absolute -top-4 -right-0 bg-orange-500 text-white px-4 py-2 rounded-full font-bold shadow-2xl">
                                        Hot Deal
                                    </div>
                                    <div className="absolute -bottom-4 -left-0 bg-white text-gray-900 px-4 py-2 rounded-full font-bold shadow-2xl">
                                        $1,500 OFF
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                                ? 'bg-white w-8'
                                : 'bg-white/50 hover:bg-white/80'
                            }`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 right-8 z-20">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-white/70 text-sm flex items-center space-x-2"
                >
                    <span>Scroll</span>
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;