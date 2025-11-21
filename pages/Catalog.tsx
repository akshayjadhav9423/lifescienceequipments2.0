import React, { useState, useMemo } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { PRODUCTS, BRANDS } from '../constants';
import { ProductCategory } from '../types';

const Catalog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedBrand, setSelectedBrand] = useState<string>('All');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;

      return matchesSearch && matchesCategory && matchesBrand;
    });
  }, [searchQuery, selectedCategory, selectedBrand]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedBrand('All');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Product Catalog</h1>
        <p className="text-gray-500 mt-2">Browse our extensive collection of lab supplies.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 flex items-center">
                <Filter className="h-4 w-4 mr-2" /> Filters
              </h3>
              {(selectedCategory !== 'All' || selectedBrand !== 'All' || searchQuery) && (
                <button onClick={clearFilters} className="text-xs text-red-500 hover:underline">
                  Clear All
                </button>
              )}
            </div>

            {/* Search Filter */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Categories</h4>
              <div className="space-y-2">
                {['All', ...Object.values(ProductCategory)].map((cat) => (
                  <label key={cat} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === cat}
                      onChange={() => setSelectedCategory(cat)}
                      className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-600 hover:text-gray-900">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Brand Filter */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Brands</h4>
              <div className="space-y-2 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                {['All', ...BRANDS].map((brand) => (
                  <label key={brand} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="brand"
                      checked={selectedBrand === brand}
                      onChange={() => setSelectedBrand(brand)}
                      className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-600 hover:text-gray-900">{brand}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl border border-dashed border-gray-300">
              <Filter className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900">No products found</h3>
              <p className="text-gray-500 mt-1">Try adjusting your search or filters.</p>
              <button 
                onClick={clearFilters}
                className="mt-4 text-brand-600 font-medium hover:underline"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 flex flex-col">
                  <div className="relative h-48 overflow-hidden rounded-t-xl bg-gray-50">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    {product.inStock ? (
                      <span className="absolute top-3 right-3 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                        In Stock
                      </span>
                    ) : (
                      <span className="absolute top-3 right-3 bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full">
                        Out of Stock
                      </span>
                    )}
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="text-xs text-brand-600 font-semibold mb-1 uppercase tracking-wide">
                      {product.brand}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{product.name}</h3>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">{product.description}</p>
                    
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-xl font-bold text-gray-900">₹{product.price.toLocaleString('en-IN')}</span>
                      <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-600 transition-colors">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
