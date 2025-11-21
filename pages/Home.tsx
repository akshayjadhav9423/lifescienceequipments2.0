import React from 'react';
import { ArrowRight, CheckCircle, Truck, ShieldCheck, Beaker, Award, PhoneCall } from 'lucide-react';
import { BRANDS, PRODUCTS } from '../constants';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  // Get some featured products
  const featuredProducts = PRODUCTS.slice(0, 4);

  // Duplicate brands for continuous scroll effect
  const scrollingBrands = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-900 to-brand-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          {/* Overlay Pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" 
            alt="Laboratory Background" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex items-center">
          <div className="md:w-3/4 lg:w-2/3">
            <div className="inline-block bg-brand-500/20 border border-brand-400/30 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
              <span className="text-brand-200 text-sm font-semibold tracking-wide uppercase">Authorized Distributor</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Equipping Science for a <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-200 to-blue-100">Better Tomorrow</span>
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl leading-relaxed">
              India's premier supplier of Laboratory Glassware, Research Chemicals, and Precision Instruments. We connect world-class brands with your laboratory needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('catalog')}
                className="bg-brand-600 hover:bg-brand-500 text-white font-semibold py-4 px-8 rounded-lg shadow-lg shadow-brand-900/50 transition-all hover:translate-y-[-2px] flex items-center justify-center"
              >
                Browse Catalog <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white font-semibold py-4 px-8 rounded-lg transition-all flex items-center justify-center"
              >
                <PhoneCall className="mr-2 h-5 w-5" /> Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats / Features Bar */}
      <div className="bg-white border-b border-gray-100 relative z-10 -mt-8 mx-4 md:mx-8 rounded-xl shadow-xl max-w-7xl xl:mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8">
          <div className="flex items-center space-x-4 border-r border-gray-100 last:border-0">
            <div className="p-3 bg-green-50 rounded-full">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="font-bold text-gray-900">Authentic</p>
              <p className="text-xs text-gray-500">100% Genuine Products</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 border-r border-gray-100 last:border-0">
            <div className="p-3 bg-blue-50 rounded-full">
              <Truck className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="font-bold text-gray-900">Fast Delivery</p>
              <p className="text-xs text-gray-500">Pan-India Network</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 border-r border-gray-100 last:border-0">
            <div className="p-3 bg-purple-50 rounded-full">
              <ShieldCheck className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="font-bold text-gray-900">Secure</p>
              <p className="text-xs text-gray-500">Safe Packaging</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-orange-50 rounded-full">
              <Award className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <p className="font-bold text-gray-900">Certified</p>
              <p className="text-xs text-gray-500">ISO 9001:2015</p>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Marquee Section */}
      <div className="py-12 bg-gray-50 overflow-hidden border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Trusted By Leading Institutions</span>
        </div>
        <div className="relative flex overflow-x-hidden">
          <div className="py-4 animate-scroll whitespace-nowrap flex space-x-16">
            {scrollingBrands.map((brand, index) => (
              <span key={`${brand}-${index}`} className="text-2xl font-bold text-gray-400 hover:text-brand-700 transition-colors cursor-default">
                {brand}
              </span>
            ))}
          </div>
          <div className="absolute top-0 py-4 animate-scroll whitespace-nowrap flex space-x-16" aria-hidden="true">
            {scrollingBrands.map((brand, index) => (
              <span key={`${brand}-${index}-copy`} className="text-2xl font-bold text-gray-400 hover:text-brand-700 transition-colors cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We stock a comprehensive range of laboratory supplies to support educational, research, and industrial applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Glassware', desc: 'Beakers, Flasks, Test Tubes', img: 'https://images.unsplash.com/photo-1582719471384-15233e025389?q=80&w=500' },
              { title: 'Chemicals', desc: 'Reagents, Solvents, Acids', img: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=500' },
              { title: 'Instruments', desc: 'Microscopes, pH Meters, Stirrers', img: 'https://images.unsplash.com/photo-1581093450065-08a8d4202e06?q=80&w=500' },
              { title: 'Plasticware', desc: 'Pipettes, Tips, Containers', img: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=500' }
            ].map((cat, idx) => (
              <div key={cat.title} className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer" onClick={() => onNavigate('catalog')}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                  <h3 className="text-2xl font-bold text-white mb-1">{cat.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">{cat.desc}</p>
                  <span className="text-brand-300 font-medium text-sm flex items-center">
                    View Products <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products Grid (Small) */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
             <div>
               <h2 className="text-3xl font-bold text-gray-900">Best Sellers</h2>
               <p className="text-gray-500 mt-2">Top rated products by our customers</p>
             </div>
             <button onClick={() => onNavigate('catalog')} className="text-brand-600 font-semibold hover:text-brand-800 flex items-center">
               View All Catalog <ArrowRight className="ml-2 h-4 w-4" />
             </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-gray-100 p-4">
                 <div className="h-48 bg-gray-100 rounded-md overflow-hidden mb-4 relative">
                    <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                    <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-xs font-bold text-gray-800 shadow-sm">
                      {product.brand}
                    </div>
                 </div>
                 <h3 className="font-bold text-gray-900 mb-1 line-clamp-1">{product.name}</h3>
                 <p className="text-xs text-gray-500 mb-3">{product.category}</p>
                 <div className="flex justify-between items-center">
                   <span className="text-brand-700 font-bold">₹{product.price.toLocaleString()}</span>
                   <button className="text-xs bg-gray-900 text-white px-3 py-1.5 rounded hover:bg-brand-600 transition-colors">
                     View
                   </button>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-brand-900 py-20 relative overflow-hidden">
         <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-800 rounded-full opacity-50 blur-3xl"></div>
         <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-900 rounded-full opacity-50 blur-3xl"></div>
         
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Looking for bulk institutional supply?</h2>
          <p className="text-brand-100 mb-10 text-lg max-w-3xl mx-auto">
            We specialize in setting up complete laboratories for colleges, schools, and research institutes. Get a custom quote tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <button 
                onClick={() => onNavigate('contact')}
                className="bg-white text-brand-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-lg transition-colors"
              >
                Request Bulk Quote
              </button>
              <button 
                onClick={() => onNavigate('about')}
                className="bg-transparent border border-brand-400 text-white hover:bg-brand-800 font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Learn About Us
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;