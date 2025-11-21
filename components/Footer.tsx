import React from 'react';
import { FlaskConical, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_NAME, GSTIN, ISO_CERT, CONTACT_EMAIL } from '../constants';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <FlaskConical className="h-8 w-8 text-brand-500" />
              <span className="ml-2 text-xl font-bold">{COMPANY_NAME}</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Your trusted partner for scientific excellence. Distributing quality laboratory solutions across India since 1995.
            </p>
            <div className="text-gray-500 text-xs space-y-1">
              <p>GSTIN: {GSTIN}</p>
              <p>{ISO_CERT}</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('home')} className="text-gray-400 hover:text-white text-sm">Home</button></li>
              <li><button onClick={() => onNavigate('catalog')} className="text-gray-400 hover:text-white text-sm">All Products</button></li>
              <li><button onClick={() => onNavigate('about')} className="text-gray-400 hover:text-white text-sm">About Us</button></li>
              <li><button onClick={() => onNavigate('contact')} className="text-gray-400 hover:text-white text-sm">Contact</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Product Categories</h3>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('catalog')} className="text-gray-400 hover:text-white text-sm">Glassware</button></li>
              <li><button onClick={() => onNavigate('catalog')} className="text-gray-400 hover:text-white text-sm">Chemicals</button></li>
              <li><button onClick={() => onNavigate('catalog')} className="text-gray-400 hover:text-white text-sm">Instruments</button></li>
              <li><button onClick={() => onNavigate('catalog')} className="text-gray-400 hover:text-white text-sm">Plasticware</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-400 text-sm">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-brand-500" />
                <span>Headquarters: Mumbai, Maharashtra</span>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Phone className="h-5 w-5 mr-2 text-brand-500" />
                <span>+91 22 2800 1234</span>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Mail className="h-5 w-5 mr-2 text-brand-500" />
                <span>{CONTACT_EMAIL}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
