"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiSearch, 
  FiUser, 
  FiHeart, 
  FiPhone, 
  FiMapPin, 
  FiClock,
  FiMenu,
  FiX
} from "react-icons/fi";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import carLogo from "../../../public/Car-logo/Honest-removebg-preview.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePill, setActivePill] = useState("Home");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navigationPills = [
    { id: "new-cars", label: "New Cars", href: "/new-cars", icon: "🚗" },
    { id: "used-cars", label: "Used Cars", href: "/used-cars", icon: "🚙" },
    { id: "services", label: "Services", href: "/services", icon: "🔧" },
    { id: "financing", label: "Financing", href: "/financing", icon: "💰" },
    { id: "parts", label: "Parts & Gear", href: "/parts", icon: "⚙️" },
    { id: "deals", label: "Hot Deals", href: "/deals", icon: "🔥", highlight: true },
  ];

  const quickActions = [
    { label: "Book Service", icon: "🔧", color: "from-blue-500 to-blue-700" },
    { label: "Test Drive", icon: "🎯", color: "from-green-500 to-green-700" },
    { label: "Get Quote", icon: "💎", color: "from-purple-500 to-purple-700" },
    { label: "Trade-In", icon: "🔄", color: "from-orange-500 to-orange-700" },
  ];

  const brandPills = [
    { name: "BMW", logo: "BMW", color: "bg-blue-100 text-blue-800" },
    { name: "Mercedes", logo: "MB", color: "bg-gray-100 text-gray-800" },
    { name: "Audi", logo: "AUDI", color: "bg-red-100 text-red-800" },
    { name: "Toyota", logo: "TOY", color: "bg-white text-red-600 border" },
    { name: "Tesla", logo: "T", color: "bg-red-600 text-white" },
    { name: "View All", logo: "+12", color: "bg-gray-800 text-white" },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full">
                <FiClock className="text-green-400 animate-spin" style={{ animationDuration: '2s' }} />
                <span>Open Now: 8AM - 8PM</span>
              </div>
              <div className="hidden lg:flex items-center space-x-2">
                <FiPhone className="text-blue-300" />
                <span className="font-semibold">1-800-CAR-GARAGE</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-2 md:mt-0">
              <span className="text-green-400 flex items-center space-x-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
                <span>50+ Cars Available</span>
              </span>
              <button className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-all duration-200 text-xs">
                Free Inspection
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50" 
          : "bg-transparent"
      }`}>
        <div className="container mx-auto px-4">
          {/* Main Navbar */}
          <div className="flex items-center justify-between py-2">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <div 
                onClick={() => router.push('/')}
                className="flex items-center space-x-3 group cursor-pointer"
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-300 group-hover:scale-105">
                    <Image 
                      src={carLogo}
                      alt="Car Garage Logo"
                      width={40}
                      height={40}
                      className="w-8 h-8 filter brightness-0 invert"
                    />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                </div>
                <div className="hidden md:block">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                    Car Garage
                  </h1>
                  <p className="text-xs text-gray-600 font-medium">Drive Your Dreams</p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation Pills */}
            <div className="hidden xl:flex items-center space-x-2">
              {navigationPills.map((pill) => (
                <Link
                  key={pill.id}
                  href={pill.href}
                  className={`relative group ${
                    activePill === pill.id 
                      ? "transform scale-105" 
                      : "hover:scale-105"
                  } transition-all duration-300`}
                  onClick={() => setActivePill(pill.id)}
                >
                  <div className={`
                    flex items-center space-x-2 px-4 py-3 rounded-2xl font-semibold text-sm transition-all duration-300
                    ${pill.highlight 
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg hover:shadow-xl' 
                      : activePill === pill.id
                        ? 'bg-white text-blue-600 shadow-2xl border border-blue-200'
                        : 'bg-white/80 text-gray-700 hover:text-blue-600 hover:bg-white hover:shadow-lg backdrop-blur-sm'
                    }
                  `}>
                    <span className="text-base">{pill.icon}</span>
                    <span>{pill.label}</span>
                  </div>
                  
                  {/* Active indicator */}
                  {activePill === pill.id && !pill.highlight && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full animate-ping"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              {/* Search Button */}
              <div className="relative" ref={searchRef}>
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="w-12 h-12 bg-white rounded-2xl shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 group border border-gray-200"
                >
                  <FiSearch className={`text-gray-600 group-hover:text-blue-600 transition-colors duration-200 ${
                    isSearchOpen ? "text-blue-600" : ""
                  }`} />
                </button>

                {/* Search Expanded */}
                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: 10 }}
                      className="absolute top-full right-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4"
                    >
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search cars, services, parts..."
                          className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                        />
                        <FiSearch className="absolute right-3 top-3 text-gray-400" />
                      </div>
                      <div className="mt-3 space-y-2">
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Quick Search</div>
                        <div className="flex flex-wrap gap-2">
                          {["SUV", "Sedan", "Electric", "Luxury", "Under $30k"].map((term) => (
                            <button
                              key={term}
                              className="px-3 py-1 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 rounded-full text-xs transition-colors duration-200"
                            >
                              {term}
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Favorite Button */}
              <button className="w-12 h-12 bg-white rounded-2xl shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 group relative border border-gray-200">
                <FiHeart className="text-gray-600 group-hover:text-red-500 transition-colors duration-200" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-lg">
                  3
                </span>
              </button>

              {/* Profile Button */}
              <button className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 group">
                <FiUser className="text-white text-lg" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="xl:hidden w-12 h-12 bg-white rounded-2xl shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 border border-gray-200"
              >
                {isMenuOpen ? <FiX className="text-gray-600" /> : <FiMenu className="text-gray-600" />}
              </button>
            </div>
          </div>

          {/* Brand Pills & Quick Actions */}
          <AnimatePresence>
            {!isScrolled && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="hidden lg:flex items-center justify-between py-2 border-t border-gray-200/50"
              >
                {/* Brand Pills */}
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-semibold text-gray-600">Popular Brands:</span>
                  <div className="flex space-x-2">
                    {brandPills.map((brand) => (
                      <button
                        key={brand.name}
                        className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg ${brand.color}`}
                      >
                        {brand.logo}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex items-center space-x-3">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      className={`group flex items-center space-x-2 px-4 py-2 rounded-xl text-white font-semibold text-sm bg-gradient-to-r ${action.color} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                    >
                      <span>{action.icon}</span>
                      <span>{action.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50"
            >
              <div className="container mx-auto px-4 py-6">
                {/* Navigation Pills */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {navigationPills.map((pill) => (
                    <Link
                      key={pill.id}
                      href={pill.href}
                      onClick={() => {
                        setActivePill(pill.id);
                        setIsMenuOpen(false);
                      }}
                      className={`
                        flex items-center space-x-2 p-4 rounded-2xl font-semibold text-sm transition-all duration-300
                        ${pill.highlight 
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg' 
                          : activePill === pill.id
                            ? 'bg-blue-50 text-blue-600 border border-blue-200'
                            : 'bg-gray-50 text-gray-700 hover:bg-white hover:shadow-lg'
                        }
                      `}
                    >
                      <span className="text-lg">{pill.icon}</span>
                      <span>{pill.label}</span>
                    </Link>
                  ))}
                </div>

                {/* Quick Actions Mobile */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {quickActions.map((action) => (
                    <button
                      key={action.label}
                      className={`flex items-center space-x-2 p-3 rounded-xl text-white font-semibold text-sm bg-gradient-to-r ${action.color} shadow-lg`}
                    >
                      <span>{action.icon}</span>
                      <span className="text-xs">{action.label}</span>
                    </button>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 border border-blue-200">
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="flex items-center space-x-2 text-blue-700">
                      <FiPhone />
                      <span className="font-semibold">1-800-CAR-GARAGE</span>
                    </div>
                    <div className="flex items-center space-x-2 text-purple-700">
                      <FiMapPin />
                      <span>Find Dealership</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <button className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 animate-bounce">
          <FiPhone className="text-xl" />
        </button>
      </div>
    </>
  );
}