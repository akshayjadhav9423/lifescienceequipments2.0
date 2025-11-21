import React from 'react';
import { ArrowRight, CheckCircle, Truck, ShieldCheck, Beaker } from 'lucide-react';
import { BRANDS, PRODUCTS } from '../constants';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  // Get some featured products
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative bg-brand-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/id/1066/1920/1080" 
            alt="Laboratory Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Premium Laboratory <br/> <span className="text-brand-300">Equipment & Supplies</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl">
              Your one-stop destination for high-quality glassware, chemicals, and instruments. 
              Authorized distributor for top global brands serving research, education, and industry across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('catalog')}
                className="bg-brand-500 hover:bg-brand-600 text-white font-semibold py-3 px-8 rounded-lg transition-all flex items-center justify-center"
              >
                Explore Catalog <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-brand-900 text-white font-semibold py-3 px-8 rounded-lg transition-all"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats / Features Bar */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <div>
                <p className="font-bold text-gray-900">1000+ Products</p>
                <p className="text-sm text-gray-500">Extensive inventory</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Truck className="h-8 w-8 text-blue-500" />
              <div>
                <p className="font-bold text-gray-900">Pan India Delivery</p>
                <p className="text-sm text-gray-500">Fast & Secure Shipping</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <ShieldCheck className="h-8 w-8 text-purple-500" />
              <div>
                <p className="font-bold text-gray-900">Authorized Dealer</p>
                <p className="text-sm text-gray-500">100% Genuine Products</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Beaker className="h-8 w-8 text-orange-500" />
              <div>
                <p className="font-bold text-gray-900">ISO Certified</p>
                <p className="text-sm text-gray-500">Quality Assured</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories Preview */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Product Range</h2>
            <p className="mt-4 text-gray-600">Comprehensive solutions for every laboratory need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Glassware', 'Chemicals', 'Instruments', 'Plasticware'].map((cat, idx) => (
              <div key={cat} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer" onClick={() => onNavigate('catalog')}>
                <div className="h-48 overflow-hidden">
                  <img 
                    src={`https://picsum.photos/id/${idx + 310}/400/300`} 
                    alt={cat} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{cat}</h3>
                  <p className="text-sm text-gray-500 mb-4">High-grade {cat.toLowerCase()} for precise analysis.</p>
                  <span className="text-brand-600 font-medium text-sm group-hover:underline">View Products &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Brands */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Trusted Brands We Distribute</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {BRANDS.map((brand) => (
              <div key={brand} className="text-xl md:text-2xl font-bold text-gray-400 hover:text-brand-600 cursor-default select-none">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-brand-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to setup your lab?</h2>
          <p className="text-brand-100 mb-8 max-w-2xl mx-auto">
            Whether you are a university, a research institute, or an industrial plant, we have the supply chain to support your innovation.
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-white text-brand-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-lg transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
