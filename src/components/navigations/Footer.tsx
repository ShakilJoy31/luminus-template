"use client";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaShieldAlt, FaAward, FaHeadset } from "react-icons/fa";
import { IoCarSport, IoRibbon } from "react-icons/io5";
import { MdDirectionsCar, MdPayment } from "react-icons/md";
import { GiCarKey, GiMechanicGarage } from "react-icons/gi";
import Paragraph from "../reusable-components/Paragraph";
import Heading from "../reusable-components/Heading";
import Link from "next/link";
import Button from "../reusable-components/Button";
import InputField from "../ui/input";
import Image from "next/image";
import carLogo from '../../../public/Car-logo/Honest-removebg-preview.png';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        {/* Floating Car Icons */}
        <div className="absolute top-20 left-10 animate-float">
          <IoCarSport className="text-6xl text-blue-400" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <MdDirectionsCar className="text-5xl text-purple-400" />
        </div>
        <div className="absolute bottom-40 left-1/4 animate-float" style={{ animationDelay: '4s' }}>
          <GiCarKey className="text-4xl text-cyan-400" />
        </div>
        <div className="absolute bottom-20 right-1/3 animate-float" style={{ animationDelay: '1s' }}>
          <GiMechanicGarage className="text-5xl text-orange-400" />
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-20 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 relative z-10">

        {/* Company Info & Contact */}
        <div className="lg:col-span-2 xl:col-span-2">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Image
                    src={carLogo}
                    alt={'Car Garage Logo'}
                    width={40}
                    height={40}
                    className="w-10 h-10 filter brightness-0 invert"
                  />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30"></div>
              </div>
              <div>
                <Heading className="font-bold text-3xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  CAR GARAGE
                </Heading>
                <Paragraph className="text-blue-200 text-sm font-medium">Drive Your Dreams</Paragraph>
              </div>
            </div>

            <Paragraph className="text-lg mb-8 text-gray-300 leading-relaxed max-w-2xl">
              Your premier destination for luxury and performance vehicles. With over 15 years of excellence, 
              we provide unparalleled service, premium selection, and financing solutions tailored to your needs.
            </Paragraph>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                <FaMapMarkerAlt className="text-white text-lg" />
              </div>
              <div>
                <Heading className="font-bold mb-2 text-white text-sm">VISIT OUR SHOWROOM</Heading>
                <Paragraph className="text-gray-300 text-sm leading-relaxed">
                  123 Automotive Avenue<br />
                  Premium Motors District<br />
                  Metro City, 10001
                </Paragraph>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-green-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center flex-shrink-0">
                <FaPhoneAlt className="text-white text-lg" />
              </div>
              <div>
                <Heading className="font-bold mb-2 text-white text-sm">CALL US NOW</Heading>
                <Paragraph className="text-gray-300 text-sm">
                  <span className="text-2xl font-bold text-white block mb-1">1-800-CAR-GARAGE</span>
                  Mon-Sat: 8AM - 8PM<br />
                  Sun: 10AM - 6PM
                </Paragraph>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-4">
            {[
              { icon: <FaShieldAlt />, text: "5-Year Warranty", color: "from-green-500 to-green-700" },
              { icon: <FaAward />, text: "A+ Rated", color: "from-yellow-500 to-orange-600" },
              { icon: <IoRibbon />, text: "Certified Pre-Owned", color: "from-purple-500 to-purple-700" },
              { icon: <MdPayment />, text: "Flexible Financing", color: "from-blue-500 to-cyan-600" }
            ].map((item, index) => (
              <div key={index} className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${item.color} rounded-full text-white text-xs font-semibold shadow-lg`}>
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <Heading className="font-bold mb-6 text-white text-lg border-l-4 border-blue-500 pl-3 flex items-center gap-2">
            <MdDirectionsCar className="text-blue-400" />
            Vehicle Types
          </Heading>
          <ul className="space-y-3">
            {[
              "Luxury Sedans",
              "Sports Cars",
              "SUVs & Crossovers",
              "Electric Vehicles",
              "Hybrid Cars",
              "Convertibles",
              "Premium Pre-Owned",
              "Certified Vehicles"
            ].map((item, index) => (
              <li key={index} className="group">
                <Link href="#" className="text-sm text-gray-400 hover:text-white cursor-pointer duration-200 flex items-center gap-3 group-hover:translate-x-2 transform transition-all">
                  <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <Heading className="font-bold mb-6 text-white text-lg border-l-4 border-green-500 pl-3 flex items-center gap-2">
            <GiMechanicGarage className="text-green-400" />
            Our Services
          </Heading>
          <ul className="space-y-3">
            {[
              "Test Drive Booking",
              "Vehicle Financing",
              "Insurance Services",
              "Maintenance Packages",
              "Warranty Extension",
              "Vehicle Detailing",
              "Roadside Assistance",
              "Trade-In Evaluation"
            ].map((item, index) => (
              <li key={index} className="group">
                <Link href="#" className="text-sm text-gray-400 hover:text-white cursor-pointer duration-200 flex items-center gap-3 group-hover:translate-x-2 transform transition-all">
                  <div className="w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter & Support */}
        <div className="lg:col-span-2 xl:col-span-1">
          <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-3xl p-6 border border-white/10 backdrop-blur-sm">
            <Heading className="font-bold mb-4 text-white text-lg flex items-center gap-2">
              <FaHeadset className="text-cyan-400" />
              Stay Updated
            </Heading>
            <Paragraph className="text-sm mb-6 text-gray-300">
              Get exclusive deals, new arrivals, and automotive insights delivered to your inbox.
            </Paragraph>

            <div className="space-y-4">
              <InputField
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Subscribe Now
              </Button>
            </div>

            {/* Live Support */}
            <div className="mt-6 p-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl border border-green-500/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                  <FaHeadset className="text-white text-lg" />
                </div>
                <div>
                  <Heading className="font-bold text-white text-sm">LIVE SUPPORT</Heading>
                  <Paragraph className="text-green-300 text-xs">Available 24/7 for urgent assistance</Paragraph>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media & Bottom Bar */}
      <div className="border-t border-white/10 pt-8 pb-6">
        <div className="container mx-auto px-4">
          {/* Social Media */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-6">
            <div className="flex items-center gap-4">
              <Paragraph className="text-gray-400 font-semibold">Follow Our Journey:</Paragraph>
              <div className="flex gap-3">
                {[
                  { icon: <FaInstagram />, color: "hover:bg-pink-600", href: "#" },
                  { icon: <FaFacebookF />, color: "hover:bg-blue-600", href: "#" },
                  { icon: <FaTwitter />, color: "hover:bg-sky-500", href: "#" },
                  { icon: <FaLinkedinIn />, color: "hover:bg-blue-700", href: "#" },
                  { icon: <FaYoutube />, color: "hover:bg-red-600", href: "#" }
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-xl ${social.color}`}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* App Download */}
            <div className="flex items-center gap-4">
              <Paragraph className="text-gray-400 font-semibold">Download Our App:</Paragraph>
              <div className="flex gap-3">
                <button className="bg-black border border-white/20 rounded-2xl px-6 py-3 text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center gap-2">
                    <span>🚗</span>
                    <div className="text-left">
                      <div className="text-xs font-semibold">Get on</div>
                      <div className="text-sm font-bold">App Store</div>
                    </div>
                  </div>
                </button>
                <button className="bg-black border border-white/20 rounded-2xl px-6 py-3 text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center gap-2">
                    <span>🏎️</span>
                    <div className="text-left">
                      <div className="text-xs font-semibold">Get on</div>
                      <div className="text-sm font-bold">Google Play</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Links & Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10">
            <Paragraph className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Car Garage. All rights reserved. • Driving excellence since 2009 🚗
            </Paragraph>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "Privacy Policy", 
                "Terms of Service", 
                "Cookie Policy", 
                "Financing Terms",
                "Warranty Info",
                "Careers"
              ].map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white text-xs font-medium transition-colors duration-200 hover:underline"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50 lg:hidden">
        <button className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 animate-bounce">
          <FaPhoneAlt className="text-lg" />
        </button>
      </div>

      {/* Emergency Roadside Assistance Banner */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <IoCarSport className="text-white text-lg" />
              </div>
              <Paragraph className="text-white font-semibold text-sm">
                24/7 Emergency Roadside Assistance Available
              </Paragraph>
            </div>
            <Button size="sm" variant="secondary" className="whitespace-nowrap">
              Call Now: 1-800-HELP-CAR
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}