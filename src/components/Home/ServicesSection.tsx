"use client";
import { motion } from "framer-motion";
import Button from "../reusable-components/Button";

const ServicesSection = () => {
  const services = [
    {
      icon: "🔧",
      title: "Professional Maintenance",
      description: "Complete vehicle maintenance and servicing by certified technicians using genuine parts.",
      features: ["Oil Change", "Brake Service", "Engine Tune-up", "Filter Replacement"],
      price: "From $99",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: "🚗",
      title: "Test Drive Experience",
      description: "Schedule a personalized test drive with any vehicle in our inventory. Experience the drive before you decide.",
      features: ["Flexible Scheduling", "Home Delivery", "Extended Test Drives", "Expert Guidance"],
      price: "Free",
      color: "from-green-500 to-green-700"
    },
    {
      icon: "💰",
      title: "Financing Solutions",
      description: "Get approved for auto loans with competitive rates. We work with multiple lenders to find your best deal.",
      features: ["Instant Approval", "Low Rates", "Flexible Terms", "No Credit Check Options"],
      price: "Rates from 2.9%",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: "🛡️",
      title: "Extended Warranty",
      description: "Comprehensive warranty coverage that protects your investment beyond the factory warranty.",
      features: ["Bumper-to-Bumper", "Roadside Assistance", "Rental Coverage", "Transferable"],
      price: "From $1,299",
      color: "from-orange-500 to-orange-700"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full font-semibold text-sm mb-4 backdrop-blur-sm">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Complete Automotive Care
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From purchase to maintenance, we provide comprehensive services to ensure your vehicle experience is exceptional.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 h-full border border-white/20 hover:border-white/40 transition-all duration-300">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-lg font-bold text-white">{service.price}</span>
                  <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                    Learn More
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact us today to schedule a service, test drive, or financing consultation. Our team is here to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary">
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                Call Now: 1-800-CAR-HELP
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;