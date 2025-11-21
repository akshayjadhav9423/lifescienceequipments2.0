import React, { useState } from 'react';
import { Menu, X, FlaskConical, Search, ShoppingCart, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_NAME, CONTACT_EMAIL } from '../constants';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Products', id: 'catalog' },
    { label: 'About Us', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar - Dealer Style */}
      <div className="bg-brand-900 text-white py-2 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center space-y-1 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><Phone className="h-3 w-3 mr-1" /> +91 22 2800 1234</span>
            <span className="flex items-center"><Mail className="h-3 w-3 mr-1" /> {CONTACT_EMAIL}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden sm:flex items-center"><MapPin className="h-3 w-3 mr-1" /> Pan India Delivery</span>
            <span className="bg-brand-700 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">ISO 9001:2015</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => handleNav('home')}>
            <div className="bg-brand-50 p-2 rounded-lg">
              <FlaskConical className="h-7 w-7 text-brand-700" />
            </div>
            <div className="ml-3 flex flex-col justify-center">
              <span className="text-xl font-bold text-gray-900 leading-none">{COMPANY_NAME}</span>
              <span className="text-[10px] text-gray-500 font-medium uppercase tracking-widest">Lab Solutions Partner</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`${
                  currentPage === item.id 
                    ? 'text-brand-700 font-bold' 
                    : 'text-gray-600 hover:text-brand-600 font-medium'
                } px-1 py-2 text-sm transition-colors relative group`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-700 transform transition-transform duration-200 ${currentPage === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </button>
            ))}
            <div className="flex items-center space-x-4 border-l pl-6 border-gray-200">
              <button onClick={() => handleNav('catalog')} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-brand-600">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-brand-600 relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] h-4 w-4 flex items-center justify-center rounded-full">0</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium ${
                  currentPage === item.id 
                    ? 'bg-brand-50 text-brand-700' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;