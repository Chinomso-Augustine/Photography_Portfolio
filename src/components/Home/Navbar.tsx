import { useState } from "react";
import { Menu, X } from 'lucide-react'; // if installed
import { href, Link } from "react-router-dom"

function Navbar() {
    // State for mobile menu toggle
    const [isOpen, setIsOpen] = useState(false);

    // Navigation links
    const navItems = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/ContactForm" }
    ];

    return (
        <nav className="fixed w-full z-50 bg-purple-900 text-white shadow-md ">
            <div className="flex items-center justify-between h-16 px-6">

                {/* Desktop nav links - hidden on small screens */}
                <div className="hidden md:flex items-center space-x-4">
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.href}
                            className="text-white px-4 py-2 rounded-lg hover:bg-purple-800/80 transition"
                        >
                            {item.label}
                        </Link>
                    ))}

                </div>

                {/* Hamburger toggle - shown only on small screens */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>
            </div>

            {/* Mobile nav menu - shown when isOpen is true */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center space-y-3 pb-4 pt-2">
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.href}
                            className="inline-flex items-center justify-center bg-purple-800 w-[140px] h-12 text-white text-lg hover:bg-purple-700 transition rounded-2xl"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

            )}

        </nav>
    );
}

export default Navbar;
