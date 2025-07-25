// // src/components/Header.tsx

// import { Link, useLocation } from 'react-router-dom'; // <-- 1. Import useLocation

// const Header = () => {
//     // 2. Get the current location to check the pathname
//     const location = useLocation();
//     const onHomePage = location.pathname === '/';

//     // This function is now only for smooth scrolling on the home page
//     const scrollToSection = (sectionId: string) => {
//     // If we're not on the homepage, this won't do anything,
//     // and the browser's default anchor link behavior will take over.
//     const section = document.getElementById(sectionId);
//     if (section) {
//         section.scrollIntoView({ behavior: 'smooth' });
//     }
//     };

//     return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-white/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//             {/* Logo and Brand */}
//             <div className="flex items-center space-x-3">
//             <Link to="/" className="flex items-center space-x-3">
//                 <div className="w-14 h-14 rounded-lg backdrop-blur-sm flex items-center justify-center">
//                 <img 
//                     src="/image/logo_website.png" 
//                     alt="Advancify Logo"
//                 />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">
//                 ADVANCIFY
//                 </h2>
//             </Link>
//             </div>

//             {/* Navigation */}
//             <nav className="hidden md:flex items-center space-x-8">
//             {/* 3. Update the href and onClick for each navigation link */}
//             <a 
//                 href={onHomePage ? "#services" : "/#services"}
//                 onClick={(e) => { if (onHomePage) { e.preventDefault(); scrollToSection("services"); }}}
//                 className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
//             >
//                 Services
//             </a>
//             <a 
//                 href={onHomePage ? "#use-cases" : "/#use-cases"}
//                 onClick={(e) => { if (onHomePage) { e.preventDefault(); scrollToSection("use-cases"); }}}
//                 className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
//             >
//                 Use Cases
//             </a>
//             <Link 
//                 to="/blog"
//                 className="text-gray-300 hover:text-white transition-colors duration-300"
//             >
//                 Blog
//             </Link>
//             <a 
//                 href={onHomePage ? "#contact-form" : "/#contact-form"}
//                 onClick={(e) => { if (onHomePage) { e.preventDefault(); scrollToSection("contact-form"); }}}
//                 className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer" 
//             >
//                 Contact
//             </a>
//             </nav>
//         </div>
//         </div>
//     </header>
//     );
// };

// export default Header;