"use client";
import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { productsList } from '@/data/productsData';
import { Search, ChevronDown, Send } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const ProductCard = ({ product }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const description = product.description || product.desc;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="group bg-white rounded-2xl border border-emerald-100 overflow-hidden shadow-sm hover:shadow-[0_15px_40px_-10px_rgba(4,120,87,0.15)] hover:border-emerald-300 transition-all duration-300 flex flex-col h-fit"
        >
            <div className="relative w-full aspect-[4/3] bg-emerald-50/50 p-6 overflow-hidden border-b border-emerald-50 shrink-0">
                {product.badge && (
                    <span className="absolute top-4 left-4 z-10 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {product.badge}
                    </span>
                )}
                <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                    <Image src={product.image} alt={product.name} fill className="object-contain" />
                </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2"></div>

                <h3 className="text-lg font-bold text-emerald-950 mb-3 leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2 min-h-[3.25rem]">
                    {product.name}
                </h3>

                <div className="mb-5">
                    <motion.p
                        layout="position"
                        className={`text-sm text-emerald-900/70 leading-relaxed ${isExpanded ? '' : 'line-clamp-2'}`}
                    >
                        {description}
                    </motion.p>
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 hover:text-emerald-800 mt-2 transition-colors"
                    >
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                </div>

                <div className="mt-auto pt-4 border-t border-emerald-50 flex items-center justify-between gap-3">
                    <span className="text-xl font-black text-emerald-950">₹{product.price.toLocaleString('en-IN')}</span>
                    <Link
                        href={`/contact?product=${encodeURIComponent(product.name)}#contact-form`}
                        className="px-4 h-10 rounded-xl border border-emerald-700 bg-emerald-700 text-emerald-50 flex items-center justify-center gap-2 text-sm font-bold group-hover:bg-emerald-200 group-hover:text-emerald-900 transition-colors duration-300"
                    >
                        Enquire <Send size={14} />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default function ProductCatalog() {
    const [sortOrder, setSortOrder] = useState('latest');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 8;

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, sortOrder]);

    const filteredProducts = useMemo(() => {
        let result = productsList.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (product.description || product.desc || "").toLowerCase().includes(searchQuery.toLowerCase())
        );

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
            default:
                break;
        }
        return result;
    }, [sortOrder, searchQuery]);

    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
    const currentProducts = filteredProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    return (
        <section id="products" className="bg-[#F4F9F7] py-16 md:py-24 min-h-screen">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex flex-col min-h-[600px]">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-emerald-950">
                            All Products
                            <span className="text-emerald-600/60 text-lg font-medium ml-3">({filteredProducts.length})</span>
                        </h2>

                        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                            <div className="relative w-full sm:w-64">
                                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-600/60 pointer-events-none" />
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full appearance-none bg-white border border-emerald-200 text-emerald-950 text-sm font-semibold rounded-lg pl-9 pr-4 py-2.5 focus:outline-none focus:border-emerald-500 shadow-sm transition-colors"
                                />
                            </div>

                            <div className="relative w-full sm:w-auto group">
                                <select
                                    value={sortOrder}
                                    onChange={(e) => setSortOrder(e.target.value)}
                                    className="w-full appearance-none bg-white border border-emerald-200 text-emerald-950 text-sm font-semibold rounded-lg px-4 py-2.5 pr-10 focus:outline-none focus:border-emerald-500 cursor-pointer shadow-sm transition-colors"
                                >
                                    <option value="latest">Sort by: Latest</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="name">Name (A-Z)</option>
                                </select>
                                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-600/60 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {currentProducts.length > 0 ? (
                        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 flex-1 items-start">
                            <AnimatePresence mode="popLayout">
                                {currentProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    ) : (
                        <div className="flex flex-col items-center justify-center flex-1 text-center py-20 bg-emerald-50/50 rounded-3xl border border-dashed border-emerald-300">
                            <Search size={48} className="text-emerald-300 mb-4" />
                            <h3 className="text-xl font-bold text-emerald-950 mb-2">No products found</h3>
                            <p className="text-emerald-900/70 max-w-sm mb-6">We couldn't find any products matching your search.</p>
                            <Button onClick={() => { setSortOrder('latest'); setSearchQuery(''); }} variant="outline" className="text-emerald-950 border-emerald-200 hover:bg-emerald-100">
                                Reset View
                            </Button>
                        </div>
                    )}

                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-2 mt-16 pt-8 border-t border-emerald-900/10">
                            <button
                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                                className="px-5 py-2.5 rounded-lg font-bold text-sm transition-colors disabled:opacity-50 text-emerald-950 hover:bg-emerald-100/80"
                            >
                                Prev
                            </button>
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`w-11 h-11 rounded-lg font-bold text-sm transition-colors ${currentPage === i + 1 ? 'bg-emerald-700 text-white shadow-md' : 'text-emerald-900/70 hover:bg-emerald-100/80 hover:text-emerald-950'}`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                            <button
                                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                                className="px-5 py-2.5 rounded-lg font-bold text-sm transition-colors disabled:opacity-50 text-emerald-950 hover:bg-emerald-100/80"
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