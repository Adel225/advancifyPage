// src/components/Navigation.tsx

import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
const [isScrolled, setIsScrolled] = useState(false);
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const location = useLocation();
const navigate = useNavigate();

// Effect to handle scroll-based background change
useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
}, []);

// Define our navigation links
const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Use Cases', href: '#use-cases' },
    { label: 'Blog', href: '/blog' }, 
    { label: 'Contact', href: '#contact-form' }
];

// The core navigation logic
const handleNavigate = (href: string) => {
    setIsMobileMenuOpen(false); // Close mobile menu on any navigation click
    
    // If we are already on the homepage, scroll smoothly
    if (location.pathname === '/') {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    } else {
    // If we are on another page (like /blog), navigate to the homepage with the hash
    // The browser will then scroll to the element with that ID
    navigate(`/${href}`);
    }
};

return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    (isScrolled || isMobileMenuOpen) ? 'bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
    }`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        {/* Logo and Brand Name */}
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-3">
            <div className="w-14 h-14 rounded-lg flex items-center justify-center">
            <img src="/image/logo_website.png" alt="Advancify Logo" />
            </div>
            <h2 className="text-xl font-bold text-white">ADVANCIFY</h2>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
            item.label === 'Blog' ? (
                <Link key={item.label} to={item.href} className="text-gray-300 hover:text-white transition-colors duration-300">
                {item.label}
                </Link>
            ) : (
                <button
                key={item.label}
                onClick={() => handleNavigate(item.href)}
                className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                {item.label}
                </button>
            )
            ))}
        </div>

        {/* Mobile Menu Button */}
        <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
            aria-label="Toggle menu"
        >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`transition-all duration-300 ease-in-out md:hidden overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col items-start space-y-4 pt-2 pb-4">
            {navItems.map((item) => (
            item.label === 'Blog' ? (
                <Link key={item.label} to={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 py-2">
                {item.label}
                </Link>
            ) : (
                <button
                key={item.label}
                onClick={() => handleNavigate(item.href)}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 py-2"
                >
                {item.label}
                </button>
            )
            ))}
        </div>
        </div>
    </div>
    </nav>
);
};

export default Navigation;