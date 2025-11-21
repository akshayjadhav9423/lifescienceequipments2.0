import React from 'react';
import { ArrowRight, CheckCircle, Truck, ShieldCheck, Beaker, Award, PhoneCall, Users, Globe } from 'lucide-react';
import { BRANDS, PRODUCTS } from '../constants';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const featuredProducts = PRODUCTS.slice(0, 4);
  const scrollingBrands = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <div className="w-full font-sans overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          {/* Darker overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-brand-900/80 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" 
            alt="Laboratory Background" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 lg:py-40">
          <div className="md:w-3/4 lg:w-2/3 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-brand-500/10 border border-brand-500/20 rounded-full px-3 py-1 mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              <span className="text-brand-200 text-xs font-bold tracking-wide uppercase">Authorized Distributor</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Equipping Science <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-200 to-blue-400">For The Future</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed font-light">
              Your trusted partner for premium laboratory glassware, research chemicals, and precision instruments. Serving educational and industrial institutions across India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('catalog')}
                className="bg-brand-600 hover:bg-brand-500 text-white font-semibold py-4 px-8 rounded-lg shadow-lg shadow-brand-900/50 transition-all hover:-translate-y-1 flex items-center justify-center group"
              >
                Explore Catalog <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-white/5 hover:bg-white/10 border border-white/20 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-lg transition-all hover:-translate-y-1 flex items-center justify-center"
              >
                <PhoneCall className="mr-2 h-5 w-5" /> Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats / Features Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 border-x border-gray-100">
            <div className="p-6 md:p-8 flex flex-col items-center text-center group hover:bg-gray-50 transition-colors">
              <div className="p-3 bg-green-50 rounded-full mb-3 group-hover:scale-110 transition-transform">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <p className="font-bold text-gray-900">Authentic</p>
              <p className="text-xs text-gray-500 mt-1">100% Genuine Products</p>
            </div>
            <div className="p-6 md:p-8 flex flex-col items-center text-center group hover:bg-gray-50 transition-colors">
              <div className="p-3 bg-blue-50 rounded-full mb-3 group-hover:scale-110 transition-transform">
                <Truck className="h-6 w-6 text-blue-600" />
              </div>
              <p className="font-bold text-gray-900">Fast Delivery</p>
              <p className="text-xs text-gray-500 mt-1">Pan-India Network</p>
            </div>
            <div className="p-6 md:p-8 flex flex-col items-center text-center group hover:bg-gray-50 transition-colors">
              <div className="p-3 bg-purple-50 rounded-full mb-3 group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-6 w-6 text-purple-600" />
              </div>
              <p className="font-bold text-gray-900">Secure</p>
              <p className="text-xs text-gray-500 mt-1">Safe Packaging</p>
            </div>
            <div className="p-6 md:p-8 flex flex-col items-center text-center group hover:bg-gray-50 transition-colors">
              <div className="p-3 bg-orange-50 rounded-full mb-3 group-hover:scale-110 transition-transform">
                <Award className="h-6 w-6 text-orange-600" />
              </div>
              <p className="font-bold text-gray-900">Certified</p>
              <p className="text-xs text-gray-500 mt-1">ISO 9001:2015</p>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Marquee Section */}
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
            <span className="text-sm font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-4 py-1 rounded-full">Our Partners</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4">Trusted Brands We Distribute</h2>
        </div>
        
        <div className="relative flex overflow-x-hidden mask-linear-gradient">
          <div className="py-4 animate-scroll whitespace-nowrap flex space-x-16 md:space-x-24 px-8">
            {scrollingBrands.map((brand, index) => (
              <span key={`${brand}-${index}`} className="text-2xl md:text-4xl font-bold text-gray-300 hover:text-brand-600 transition-colors cursor-default select-none flex items-center">
                {brand}
              </span>
            ))}
          </div>
          <div className="absolute top-0 py-4 animate-scroll whitespace-nowrap flex space-x-16 md:space-x-24 px-8" aria-hidden="true">
            {scrollingBrands.map((brand, index) => (
              <span key={`${brand}-${index}-copy`} className="text-2xl md:text-4xl font-bold text-gray-300 hover:text-brand-600 transition-colors cursor-default select-none flex items-center">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Categories Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Product Range</h2>
            <div className="w-20 h-1.5 bg-brand-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              From high-precision instruments to daily consumables, we stock everything your laboratory needs to function efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Glassware', desc: 'Beakers, Flasks, Pipettes', img: 'https://images.unsplash.com/photo-1582719471384-15233e025389?q=80&w=500' },
              { title: 'Chemicals', desc: 'Reagents, Solvents, Acids', img: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=500' },
              { title: 'Instruments', desc: 'Microscopes, Centrifuges', img: 'https://images.unsplash.com/photo-1581093450065-08a8d4202e06?q=80&w=500' },
              { title: 'Plasticware', desc: 'Tips, Tubes, Containers', img: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=500' }
            ].map((cat, idx) => (
              <div 
                key={cat.title} 
                className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer h-96" 
                onClick={() => onNavigate('catalog')}
              >
                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/40 transition-colors z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20"></div>
                
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                <div className="absolute bottom-0 left-0 p-8 z-30 w-full transform transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:-translate-y-2 transition-transform">{cat.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 delay-75">
                    {cat.desc}
                  </p>
                  <span className="inline-flex items-center text-brand-300 font-semibold text-sm opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 delay-100">
                    View Products <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Best Sellers Preview */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
             <div>
               <h2 className="text-3xl font-bold text-gray-900">Best Selling Products</h2>
               <p className="text-gray-500 mt-2">Top rated items frequently ordered by laboratories</p>
             </div>
             <button 
               onClick={() => onNavigate('catalog')} 
               className="text-brand-600 font-semibold hover:text-brand-800 flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 hover:border-brand-300 transition-all"
             >
               View Full Catalog <ArrowRight className="ml-2 h-4 w-4" />
             </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 p-4 group">
                 <div className="h-48 bg-gray-100 rounded-lg overflow-hidden mb-4 relative">
                    <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover mix-blend-multiply" />
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-gray-800 shadow-sm border border-gray-100">
                      {product.brand}
                    </div>
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">Out of Stock</span>
                      </div>
                    )}
                 </div>
                 <div className="space-y-2">
                   <p className="text-xs font-semibold text-brand-600 uppercase tracking-wide">{product.category}</p>
                   <h3 className="font-bold text-gray-900 line-clamp-2 h-12 group-hover:text-brand-700 transition-colors">{product.name}</h3>
                   <div className="pt-2 flex justify-between items-center border-t border-gray-50">
                     <span className="text-lg font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                     <button 
                       onClick={() => onNavigate('contact')}
                       className="text-xs bg-gray-900 text-white px-3 py-1.5 rounded-md hover:bg-brand-600 transition-colors"
                     >
                       Inquire
                     </button>
                   </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About / Why Choose Us Split */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Leading Labs Choose Us</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  With over two decades of experience in the scientific supply industry, we understand the critical nature of your work. We ensure that your research never stops due to lack of supplies.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                     <div className="flex-shrink-0 p-2 bg-brand-100 rounded-lg text-brand-600 mt-1">
                        <Globe className="h-6 w-6" />
                     </div>
                     <div className="ml-4">
                        <h3 className="text-xl font-semibold text-gray-900">Global Sourcing</h3>
                        <p className="text-gray-500 mt-1">Direct partnerships with international manufacturers to bring you the best.</p>
                     </div>
                  </div>
                  <div className="flex items-start">
                     <div className="flex-shrink-0 p-2 bg-brand-100 rounded-lg text-brand-600 mt-1">
                        <Users className="h-6 w-6" />
                     </div>
                     <div className="ml-4">
                        <h3 className="text-xl font-semibold text-gray-900">Expert Consultation</h3>
                        <p className="text-gray-500 mt-1">Our team consists of chemistry and biology majors who understand your needs.</p>
                     </div>
                  </div>
                </div>

                <button 
                  onClick={() => onNavigate('about')}
                  className="mt-10 text-brand-600 font-bold hover:text-brand-800 flex items-center group"
                >
                  Read More About Us <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
             </div>
             <div className="order-1 lg:order-2 relative">
                <div className="absolute -inset-4 bg-brand-100/50 rounded-2xl transform rotate-3"></div>
                <img 
                   src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1000&auto=format&fit=crop" 
                   alt="Modern Laboratory" 
                   className="relative rounded-2xl shadow-2xl w-full object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs hidden md:block">
                   <p className="text-brand-900 font-bold text-4xl mb-1">5000+</p>
                   <p className="text-gray-500 font-medium">Happy Institutions served across India</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-brand-900 py-20 md:py-24 relative overflow-hidden">
         <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-800 rounded-full opacity-50 blur-3xl animate-pulse"></div>
         <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-900 rounded-full opacity-50 blur-3xl"></div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
         
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Setting up a new lab?</h2>
          <p className="text-brand-100 mb-10 text-lg md:text-xl max-w-2xl mx-auto font-light">
            We offer special discounts and complete setup packages for new educational institutions and research startups.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <button 
                onClick={() => onNavigate('contact')}
                className="bg-white text-brand-900 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg shadow-xl transition-colors hover:-translate-y-1"
              >
                Request Setup Quote
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;