"use client";
import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { productCategories, productBrands, productsList } from '@/data/productsData';
import { Search, Filter, X, ShoppingCart, ChevronDown, Star } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState(100000);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [sortOrder, setSortOrder] = useState('latest');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  // Toggle brand selection
  const handleBrandToggle = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
    setCurrentPage(1);
  };

  // Reset Filters
  const clearFilters = () => {
    setSelectedBrands([]);
    setPriceRange(100000);
    setInStockOnly(false);
    setMinRating(0);
    setActiveCategory('all');
    setCurrentPage(1);
  };

  // Prevent scrolling when mobile filter is open
  useEffect(() => {
    if (isMobileFilterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileFilterOpen]);

  // Filtering & Sorting Logic
  const filteredProducts = useMemo(() => {
    let result = productsList;

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }
    if (selectedBrands.length > 0) {
      result = result.filter(p => selectedBrands.includes(p.brand));
    }
    if (inStockOnly) {
      result = result.filter(p => p.availability === 'In Stock');
    }
    if (minRating > 0) {
      result = result.filter(p => p.rating >= minRating);
    }
    result = result.filter(p => p.price <= priceRange);

    switch (sortOrder) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default: // latest (simulated by default order)
        break;
    }
    return result;
  }, [activeCategory, selectedBrands, priceRange, inStockOnly, minRating, sortOrder]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const currentProducts = filteredProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  // Reusable Sidebar Content
  const FilterContent = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-[#111827]">Filters</h3>
        <button onClick={clearFilters} className="text-sm font-semibold text-indigo-600 hover:text-indigo-800">Clear All</button>
      </div>

      <div>
        <h4 className="text-sm font-bold text-[#111827] mb-4 uppercase tracking-wider">Brands</h4>
        <div className="space-y-3 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
          {productBrands.map(brand => (
            <label key={brand} className="flex items-center gap-3 cursor-pointer group">
              <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedBrands.includes(brand) ? 'bg-indigo-700 border-indigo-700' : 'border-gray-300 group-hover:border-indigo-400'}`}>
                {selectedBrands.includes(brand) && <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
              </div>
              <span className="text-sm text-[#64748B] group-hover:text-[#111827]">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        {/* FIXED: Added 'en-IN' to toLocaleString to prevent hydration mismatch */}
        <h4 className="text-sm font-bold text-[#111827] mb-4 uppercase tracking-wider">Max Price: ₹{priceRange.toLocaleString('en-IN')}</h4>
        <input 
          type="range" 
          min="1000" 
          max="200000" 
          step="1000"
          value={priceRange} 
          onChange={(e) => { setPriceRange(Number(e.target.value)); setCurrentPage(1); }} 
          className="w-full accent-indigo-700" 
        />
      </div>

      <div>
        <h4 className="text-sm font-bold text-[#111827] mb-4 uppercase tracking-wider">Availability</h4>
        <label className="flex items-center gap-3 cursor-pointer group">
           <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${inStockOnly ? 'bg-indigo-700 border-indigo-700' : 'border-gray-300 group-hover:border-indigo-400'}`}>
              {inStockOnly && <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
            </div>
          <span className="text-sm text-[#64748B]">In Stock Only</span>
        </label>
      </div>

      <div>
        <h4 className="text-sm font-bold text-[#111827] mb-4 uppercase tracking-wider">Min Rating</h4>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map(star => (
            <button key={star} onClick={() => { setMinRating(star); setCurrentPage(1); }} className={`p-1 transition-colors ${minRating >= star ? 'text-amber-400' : 'text-gray-200 hover:text-amber-200'}`}>
              <Star size={20} fill="currentColor" />
            </button>
          ))}
          <span className="text-xs text-gray-400 ml-2">{minRating > 0 ? `${minRating} & Up` : 'Any'}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-white py-12">
      
      {/* Category Horizontal Scroll */}
      <div className="border-b border-gray-100 mb-12 sticky top-[72px] bg-white/90 backdrop-blur-md z-40">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex gap-4 overflow-x-auto no-scrollbar py-4">
            {productCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => { setActiveCategory(cat.id); setCurrentPage(1); }}
                  className={`flex flex-col items-center gap-3 min-w-[100px] p-4 rounded-2xl transition-all duration-300 ${
                    isActive ? 'bg-indigo-700 text-white shadow-md' : 'bg-transparent text-[#64748B] hover:bg-[#F5F7FF] hover:text-[#111827]'
                  }`}
                >
                  <cat.icon size={24} strokeWidth={1.5} />
                  <span className="text-xs font-bold whitespace-nowrap">{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-[280px_1fr] gap-10 items-start relative">
        
        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:block sticky top-[180px] bg-[#F8FAFC] p-8 rounded-3xl border border-gray-100">
          <FilterContent />
        </aside>

        {/* Mobile Filter Drawer */}
        <AnimatePresence>
          {isMobileFilterOpen && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-gray-900/60 z-50 lg:hidden"
            >
              <motion.div 
                initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.3 }}
                className="absolute right-0 top-0 bottom-0 w-[300px] bg-white shadow-2xl p-6 overflow-y-auto"
              >
                <div className="flex justify-end mb-6">
                  <button onClick={() => setIsMobileFilterOpen(false)} className="p-2 bg-gray-100 rounded-full text-gray-500 hover:text-gray-900"><X size={20} /></button>
                </div>
                <FilterContent />
                <Button onClick={() => setIsMobileFilterOpen(false)} className="w-full mt-8">Apply Filters</Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Catalog Area */}
        <div className="flex flex-col min-h-[600px]">
          
          {/* Top Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#111827]">
              {productCategories.find(c => c.id === activeCategory)?.name} 
              <span className="text-gray-400 text-base font-medium ml-2">({filteredProducts.length})</span>
            </h2>
            
            <div className="flex items-center gap-3">
              <button onClick={() => setIsMobileFilterOpen(true)} className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-semibold text-[#111827]">
                <Filter size={16} /> Filters
              </button>
              
              <div className="relative group">
                <select 
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="appearance-none bg-white border border-gray-200 text-[#111827] text-sm font-semibold rounded-lg px-4 py-2 pr-10 focus:outline-none focus:border-indigo-500 cursor-pointer"
                >
                  <option value="latest">Sort by: Latest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name (A-Z)</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Product Grid */}
          {currentProducts.length > 0 ? (
            <motion.div layout className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 flex-1">
              <AnimatePresence mode="popLayout">
                {currentProducts.map((product) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={product.id}
                    className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-indigo-300 hover:-translate-y-1 transition-all duration-300 flex flex-col"
                  >
                    <div className="relative w-full aspect-[4/3] bg-[#F8FAFC] p-6 overflow-hidden">
                      {product.badge && (
                        <span className="absolute top-4 left-4 z-10 bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                          {product.badge}
                        </span>
                      )}
                      <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                        <Image src={product.image} alt={product.name} fill className="object-contain" />
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{product.brand}</span>
                        <div className="flex items-center gap-1 text-xs font-semibold text-amber-500">
                          <Star size={12} fill="currentColor" /> {product.rating}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-[#111827] mb-4 leading-snug group-hover:text-indigo-700 transition-colors">{product.name}</h3>
                      
                      <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-xl font-black text-[#111827]">₹{product.price.toLocaleString('en-IN')}</span>
                        <button className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-indigo-700 flex items-center justify-center group-hover:bg-indigo-700 group-hover:text-white transition-colors duration-300 tooltip-trigger">
                           <ShoppingCart size={18} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="flex flex-col items-center justify-center flex-1 text-center py-20 bg-[#F8FAFC] rounded-3xl border border-dashed border-gray-300">
              <Search size={48} className="text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-[#111827] mb-2">No products found</h3>
              <p className="text-[#64748B] max-w-sm mb-6">We couldn't find any products matching your current filters. Try adjusting your search criteria.</p>
              <Button onClick={clearFilters} variant="outline">Clear All Filters</Button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12 pt-8 border-t border-gray-100">
              <button 
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg font-semibold text-sm transition-colors disabled:opacity-50 text-[#111827] hover:bg-gray-100"
              >
                Prev
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-lg font-bold text-sm transition-colors ${currentPage === i + 1 ? 'bg-indigo-700 text-white' : 'text-[#64748B] hover:bg-gray-100 hover:text-[#111827]'}`}
                >
                  {i + 1}
                </button>
              ))}
              <button 
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg font-semibold text-sm transition-colors disabled:opacity-50 text-[#111827] hover:bg-gray-100"
              >
                Next
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}