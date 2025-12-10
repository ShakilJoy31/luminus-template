"use client";
import { motion } from "framer-motion";
import Button from "../reusable-components/Button";
import carProduct1 from "../../../public/Car-Image/car-product (1).jpg"
import carProduct2 from "../../../public/Car-Image/car-product (2).jpg"
import carProduct3 from "../../../public/Car-Image/car-product (3).jpg"
import carProduct4 from "../../../public/Car-Image/car-product (4).jpg"

import Image from "next/image";


const FeaturedVehicles = () => {
    const featuredCars = [
        {
            id: 1,
            name: "2024 BMW M3",
            price: "$72,500",
            originalPrice: "$78,000",
            image: carProduct1.src,
            type: "Sedan",
            fuel: "Petrol",
            transmission: "Automatic",
            features: ["AWD", "Leather", "Premium Sound", "Sunroof"],
            mileage: "12,000 mi",
            isHot: true,
            discount: "$5,500 OFF",
        },
        {
            id: 2,
            name: "2024 Tesla Model Y",
            price: "$54,990",
            originalPrice: "$58,990",
            image: carProduct2.src,
            type: "SUV",
            fuel: "Electric",
            transmission: "Automatic",
            features: ["Autopilot", "Glass Roof", "Premium Interior", "Supercharging"],
            mileage: "8,000 mi",
            isNew: true,
        },
        {
            id: 3,
            name: "Mercedes Benz C300",
            price: "$45,300",
            originalPrice: "$48,500",
            image: carProduct3.src,
            type: "Sedan",
            fuel: "Hybrid",
            transmission: "Automatic",
            features: ["MBUX", "Panoramic Roof", "Burmester Sound", "LED Lights"],
            mileage: "15,000 mi",
            isCertified: true,
        },
        {
            id: 4,
            name: "2024 Audi Q5",
            price: "$51,200",
            originalPrice: "$54,800",
            image: carProduct4.src,
            type: "SUV",
            fuel: "Petrol",
            transmission: "Automatic",
            features: ["Quattro", "Virtual Cockpit", "Sport Seats", "Tow Package"],
            mileage: "10,500 mi",
            isHot: true,
            discount: "$3,600 OFF",
        },
        {
            id: 5,
            name: "2024 Lexus RX 350",
            price: "$57,800",
            originalPrice: "$61,000",
            image: carProduct1.src,
            type: "SUV",
            fuel: "Hybrid",
            transmission: "Automatic",
            features: ["Mark Levinson Audio", "Heated Seats", "Panoramic Roof", "Adaptive Cruise"],
            mileage: "9,200 mi",
            isCertified: true,
        },
        {
            id: 6,
            name: "2024 Porsche 911 Carrera",
            price: "$110,000",
            originalPrice: "$115,000",
            image: carProduct2.src,
            type: "Coupe",
            fuel: "Petrol",
            transmission: "Automatic",
            features: ["Sport Chrono", "BOSE Audio", "Adaptive Suspension", "Leather Interior"],
            mileage: "5,000 mi",
            isHot: true,
            discount: "$5,000 OFF",
        },
        {
            id: 7,
            name: "2024 Ford Mustang Mach-E",
            price: "$47,500",
            originalPrice: "$49,500",
            image: carProduct3.src,
            type: "SUV",
            fuel: "Electric",
            transmission: "Automatic",
            features: ["BlueCruise", "Glass Roof", "Performance Pack", "Fast Charging"],
            mileage: "6,000 mi",
            isNew: true,
        },
        {
            id: 8,
            name: "2024 Toyota Camry Hybrid",
            price: "$32,800",
            originalPrice: "$35,000",
            image: carProduct4.src,
            type: "Sedan",
            fuel: "Hybrid",
            transmission: "Automatic",
            features: ["Safety Sense", "Apple CarPlay", "Heated Seats", "Blind Spot Monitor"],
            mileage: "12,500 mi",
            isCertified: true,
        },
        {
            id: 9,
            name: "2024 Honda Accord",
            price: "$29,900",
            originalPrice: "$31,500",
            image: carProduct1.src,
            type: "Sedan",
            fuel: "Petrol",
            transmission: "Automatic",
            features: ["Honda Sensing", "Smart Entry", "Power Seats", "LED Headlights"],
            mileage: "14,000 mi",
            isHot: true,
            discount: "$1,600 OFF",
        },
        {
            id: 10,
            name: "2024 Chevrolet Corvette Stingray",
            price: "$69,500",
            originalPrice: "$72,000",
            image: carProduct2.src,
            type: "Coupe",
            fuel: "Petrol",
            transmission: "Automatic",
            features: ["Z51 Package", "Performance Exhaust", "Leather Interior", "Navigation"],
            mileage: "7,800 mi",
            isNew: true,
        },
        {
            id: 11,
            name: "2024 Kia EV6",
            price: "$46,500",
            originalPrice: "$49,000",
            image: carProduct3.src,
            type: "SUV",
            fuel: "Electric",
            transmission: "Automatic",
            features: ["GT-Line Package", "Panoramic Display", "Wireless Charging", "V2L"],
            mileage: "6,500 mi",
            isCertified: true,
        },
        {
            id: 12,
            name: "2024 Jaguar F-Pace",
            price: "$62,300",
            originalPrice: "$65,500",
            image: carProduct4.src,
            type: "SUV",
            fuel: "Petrol",
            transmission: "Automatic",
            features: ["Meridian Sound", "Adaptive Dynamics", "Heated Steering", "Panoramic Sunroof"],
            mileage: "11,000 mi",
            isHot: true,
            discount: "$3,200 OFF",
        },
    ];


    return (
        <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-semibold text-sm mb-4">
                        Featured Inventory
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Our Premium Vehicles
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover our hand-picked collection of luxury and performance vehicles, each meticulously inspected and ready for delivery.
                    </p>
                </motion.div>

                {/* Vehicles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredCars.map((car, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                                {/* Badges */}
                                <div className="absolute top-4 left-4 z-10 flex flex-col space-y-2">
                                    {car.isHot && (
                                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                            Hot Deal
                                        </span>
                                    )}
                                    {car.isNew && (
                                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                            New
                                        </span>
                                    )}
                                    {car.isCertified && (
                                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                            Certified
                                        </span>
                                    )}
                                </div>

                                {/* Discount */}
                                {car.discount && (
                                    <span className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                        {car.discount}
                                    </span>
                                )}

                                {/* Car Image Placeholder */}
                                <div className="w-full h-full flex items-center ">
                                    <Image
                                        src={car.image}
                                        alt="Car Garage Logo"
                                        fill
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                            </div>

                            {/* Content */}
                            <div className="p-2">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {car.name}
                                </h3>

                                {/* Price */}
                                <div className="flex items-center space-x-2 mb-2">
                                    <span className="text-xl font-bold text-gray-900">{car.price}</span>
                                    {car.originalPrice && (
                                        <span className="text-lg text-gray-500 line-through">{car.originalPrice}</span>
                                    )}
                                </div>

                                {/* Specifications */}
                                <div className="grid grid-cols-2 gap-2 mb-2">
                                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                                        <span>🚗</span>
                                        <span>{car.type}</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                                        <span>⛽</span>
                                        <span>{car.fuel}</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                                        <span>⚙️</span>
                                        <span>{car.transmission}</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                                        <span>📊</span>
                                        <span>{car.mileage}</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {car.features.slice(0, 3).map((feature, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                    {car.features.length > 3 && (
                                        <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-lg text-xs">
                                            +{car.features.length - 3} more
                                        </span>
                                    )}
                                </div>


                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <Button size="lg" variant="primary">
                        View Full Inventory
                    </Button>
                    <p className="text-gray-600 mt-4">
                        🚀 150+ vehicles available • 💰 Financing options • 🛡️ Warranty included
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedVehicles;