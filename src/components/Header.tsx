    // src/components/Header.tsx - UPDATED AND FIXED

    const Header = () => {
        const scrollToSection = (sectionId: string) => {
        // We remove the '#' from the ID to find the element
        const section = document.getElementById(sectionId.substring(1));
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        };
    
        return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                {/* Logo and Brand */}
                <div className="flex items-center space-x-3">
                <div className="w-14 h-14 rounded-lg backdrop-blur-sm flex items-center justify-center">
                    <img 
                    src="/image/logo_website.png" 
                    alt="Advancify Logo"
                    />
                </div>
                <h2 className="text-xl font-bold text-white">
                    ADVANCIFY
                </h2>
                </div>
    
                {/* Navigation with onClick handlers */}
                <nav className="hidden md:flex items-center space-x-8">
                <a 
                    href="#services" 
                    onClick={(e) => { e.preventDefault(); scrollToSection("#services"); }}
                    className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                    Services
                </a>
                <a 
                    href="#use-cases" 
                    onClick={(e) => { e.preventDefault(); scrollToSection("#use-cases"); }}
                    className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                    Use Cases
                </a>
                <a 
                    href="#contact-form" 
                    onClick={(e) => { e.preventDefault(); scrollToSection("#contact-form"); }}
                    className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer" 
                >
                    Contact
                </a>
                </nav>
            </div>
            </div>
        </header>
        );
    };
    
    export default Header;
    