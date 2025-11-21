import React, { useState } from 'react';
import { Menu, X, FlaskConical, Search, ShoppingCart, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
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
    window.scrollTo(0, 0);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md font-sans">
      {/* Top Bar - Dealer Style */}
      <div className="bg-brand-900 text-white py-2 text-xs sm:text-sm transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center space-y-1 sm:space-y-0">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a href="tel:+912228001234" className="flex items-center hover:text-brand-200 transition-colors"><Phone className="h-3 w-3 mr-1.5" /> +91 22 2800 1234</a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center hover:text-brand-200 transition-colors"><Mail className="h-3 w-3 mr-1.5" /> {CONTACT_EMAIL}</a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden sm:flex items-center text-brand-100"><MapPin className="h-3 w-3 mr-1" /> Pan India Delivery</span>
            <span className="bg-white/10 border border-white/20 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-medium">ISO 9001:2015</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center cursor-pointer group" onClick={() => handleNav('home')}>
            <div className="bg-brand-50 p-2.5 rounded-xl group-hover:bg-brand-100 transition-colors">
              <FlaskConical className="h-8 w-8 text-brand-600" />
            </div>
            <div className="ml-3 flex flex-col justify-center">
              <span className="text-xl md:text-2xl font-bold text-gray-900 leading-none tracking-tight">{COMPANY_NAME}</span>
              <span className="text-[10px] md:text-xs text-brand-600 font-semibold uppercase tracking-widest mt-1">Scientific Solutions</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`${
                  currentPage === item.id 
                    ? 'text-brand-700 bg-brand-50 font-semibold' 
                    : 'text-gray-600 hover:text-brand-600 hover:bg-gray-50 font-medium'
                } px-4 py-2 rounded-lg text-sm transition-all duration-200`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200">
              <button 
                onClick={() => handleNav('catalog')} 
                className="p-2.5 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-brand-600"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              <button 
                onClick={() => handleNav('contact')}
                className="hidden lg:flex bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-sm hover:shadow transition-all items-center"
              >
                Get Quote
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[116px] z-40 bg-slate-900/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <div className="bg-white border-t border-gray-100 shadow-xl absolute w-full left-0" onClick={e => e.stopPropagation()}>
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`flex items-center justify-between w-full text-left px-4 py-4 rounded-xl text-base font-medium transition-colors ${
                    currentPage === item.id 
                      ? 'bg-brand-50 text-brand-700' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                  <ChevronRight className={`h-4 w-4 ${currentPage === item.id ? 'text-brand-500' : 'text-gray-300'}`} />
                </button>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-100">
                <button 
                  onClick={() => handleNav('contact')}
                  className="w-full bg-brand-600 text-white py-3.5 rounded-xl font-semibold shadow-sm"
                >
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;