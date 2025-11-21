import React from 'react';
import { LOCATIONS, CONTACT_EMAIL } from '../constants';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-600">
          Have a query about a product or need a bulk quote? We are here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" placeholder="Doe" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" placeholder="john@university.edu" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none bg-white">
                <option>Product Inquiry</option>
                <option>Bulk Order Quote</option>
                <option>Technical Support</option>
                <option>Partnership</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" placeholder="I need a quote for 50 borosil beakers..."></textarea>
            </div>

            <button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-lg transition-colors flex justify-center items-center">
              Send Message <Send className="ml-2 h-5 w-5" />
            </button>
          </form>
        </div>

        {/* Locations Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Locations</h2>
            <p className="text-gray-600 mb-8">
              We have a strong distribution network with offices and warehouses in 4 major cities to ensure timely delivery across India.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {LOCATIONS.map((loc) => (
              <div key={loc.id} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-brand-300 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{loc.city}</h3>
                  {loc.city.includes('HQ') && (
                    <span className="bg-brand-100 text-brand-800 text-xs px-2 py-1 rounded font-semibold">Head Office</span>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex items-start text-gray-600 text-sm">
                    <MapPin className="h-5 w-5 mr-3 text-brand-500 flex-shrink-0" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Phone className="h-5 w-5 mr-3 text-brand-500 flex-shrink-0" />
                    <span>{loc.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Mail className="h-5 w-5 mr-3 text-brand-500 flex-shrink-0" />
                    <span>{loc.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-brand-50 border border-brand-100 rounded-xl p-6 mt-8">
            <h3 className="font-semibold text-brand-800 mb-2">General Support</h3>
            <p className="text-brand-600 text-sm">
              For immediate assistance regarding orders, please email us at <span className="font-bold">{CONTACT_EMAIL}</span>. Our support team is available Mon-Sat, 9 AM - 6 PM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
