import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GalleryItem {
    id: string;
    type: "image" | "video";
    src: string;
    thumbnail?: string;
    title?: string;
    category?: string;
    beforeSrc?: string; // For before-after comparison
}

interface GalleryProps {
    items: GalleryItem[];
    title?: string;
    subtitle?: string;
    showFilters?: boolean;
}

import { galleryCategories } from "@/lib/galleryData";

const Gallery: React.FC<GalleryProps> = ({ items, title, subtitle, showFilters = false }) => {
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
    const [filter, setFilter] = useState("all");

    const categories = ["all", ...new Set(items.map((item) => item.category).filter(Boolean))];

    const filteredItems = filter === "all" ? items : items.filter((item) => item.category === filter);

    const handleNext = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (!selectedItem) return;
        const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
        const nextIndex = (currentIndex + 1) % filteredItems.length;
        setSelectedItem(filteredItems[nextIndex]);
    };

    const handlePrev = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (!selectedItem) return;
        const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
        const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
        setSelectedItem(filteredItems[prevIndex]);
    };

    return (
        <div className="w-full py-12">
            {(title || subtitle) && (
                <div className="text-center mb-12">
                    {title && <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h2>}
                    {subtitle && <p className="text-slate-400 text-lg max-w-2xl mx-auto">{subtitle}</p>}
                </div>
            )}

            {showFilters && categories.length > 2 && (
                <div className="flex justify-center mb-16 px-4">
                    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 p-2 md:p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full overflow-x-auto no-scrollbar max-w-full shadow-2xl">
                        {categories.map((cat) => (
                            <motion.div key={cat} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    variant={filter === cat ? "default" : "ghost"}
                                    onClick={() => setFilter(cat!)}
                                    className={cn(
                                        "rounded-full px-5 md:px-8 h-10 md:h-12 text-sm md:text-base transition-all duration-500 whitespace-nowrap font-semibold w-full",
                                        filter === cat
                                            ? "bg-primary text-white shadow-xl shadow-primary/30 scale-105"
                                            : "text-slate-400 hover:text-white hover:bg-white/10"
                                    )}
                                >
                                    {cat === "all" ? "All Gallery" : galleryCategories[cat as keyof typeof galleryCategories] || cat}
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <AnimatePresence mode="popLayout">
                    {filteredItems.map((item) => (
                        <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            className="group relative cursor-pointer"
                            onClick={() => setSelectedItem(item)}
                        >
                            <div className={cn(
                                "rounded-[2.5rem] overflow-hidden glass border border-white/10 group-hover:border-primary/40 transition-all duration-500 shadow-xl relative",
                                item.category === "team" ? "aspect-[3/4]" : "aspect-square"
                            )}>
                                <img
                                    src={item.thumbnail || item.src}
                                    alt={item.title || "Gallery Item"}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                    <h4 className="text-white font-bold text-lg leading-tight mb-1">{item.title}</h4>
                                    <p className="text-primary text-xs font-bold uppercase tracking-wider">{item.category === 'team' ? 'Our Expert' : item.category}</p>
                                </div>

                                {item.category === "team" && (
                                    <div className="absolute top-4 left-4 bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                                        Team
                                    </div>
                                )}

                                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                                    {item.type === "video" ? (
                                        <Play className="w-5 h-5 text-white fill-white" />
                                    ) : (
                                        <Maximize2 className="w-5 h-5 text-white" />
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
                <DialogContent className="max-w-[95vw] md:max-w-7xl max-h-[95vh] p-0 overflow-hidden bg-black/98 border-white/5 rounded-[2.5rem] shadow-2xl">
                    {selectedItem && (
                        <div className="relative w-full h-[85vh] md:h-[90vh] flex flex-col items-center justify-between p-4 md:p-8">
                            {/* Header Actions */}
                            <div className="absolute top-6 right-6 flex items-center gap-2 z-50">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-white hover:bg-white/10 rounded-full h-12 w-12"
                                    onClick={() => setSelectedItem(null)}
                                >
                                    <X className="w-7 h-7" />
                                </Button>
                            </div>

                            {/* Main Content Area */}
                            <div className="flex-1 w-full flex items-center justify-center relative overflow-hidden px-4 md:px-16">
                                {/* Navigation Buttons */}
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-50 rounded-full h-14 w-14 bg-black/20 backdrop-blur-md border border-white/10 hidden md:flex"
                                    onClick={handlePrev}
                                >
                                    <ChevronLeft className="w-8 h-8" />
                                </Button>

                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-50 rounded-full h-14 w-14 bg-black/20 backdrop-blur-md border border-white/10 hidden md:flex"
                                    onClick={handleNext}
                                >
                                    <ChevronRight className="w-8 h-8" />
                                </Button>

                                <div className="w-full h-full flex items-center justify-center">
                                    {selectedItem.type === "video" ? (
                                        <video
                                            src={selectedItem.src}
                                            controls
                                            autoPlay
                                            className="max-w-full max-h-[75vh] rounded-3xl shadow-2xl border border-white/10"
                                        />
                                    ) : (
                                        <div className="relative w-full h-full flex items-center justify-center">
                                            {selectedItem.beforeSrc ? (
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl">
                                                    <div className="relative group/before">
                                                        <span className="absolute top-4 left-4 glass px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest text-white z-10">BEFORE</span>
                                                        <img
                                                            src={selectedItem.beforeSrc}
                                                            className="rounded-3xl w-full aspect-square object-cover border border-white/10 shadow-2xl transition-transform duration-500 group-hover/before:scale-[1.02]"
                                                            alt="Before"
                                                        />
                                                    </div>
                                                    <div className="relative group/after">
                                                        <span className="absolute top-4 left-4 bg-primary px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest text-white z-10 shadow-lg shadow-primary/20">AFTER</span>
                                                        <img
                                                            src={selectedItem.src}
                                                            className="rounded-3xl w-full aspect-square object-cover border border-primary/20 shadow-2xl transition-transform duration-500 group-hover/after:scale-[1.02]"
                                                            alt="After"
                                                        />
                                                    </div>
                                                </div>
                                            ) : (
                                                <img
                                                    src={selectedItem.src}
                                                    alt={selectedItem.title}
                                                    className="max-w-full max-h-[80vh] object-contain rounded-3xl shadow-2xl border border-white/10"
                                                />
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Caption Footer */}
                            <div className="w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
                                <div className="text-center md:text-left flex-1">
                                    <div className="flex items-center justify-center md:justify-start gap-3 mb-1">
                                        <h3 className="text-2xl font-bold text-white">{selectedItem.title}</h3>
                                        <span className="bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-primary/30">
                                            {selectedItem.category}
                                        </span>
                                    </div>
                                    <p className="text-slate-400 text-sm">Professional care at Primero Digital Health</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Button
                                        onClick={handlePrev}
                                        variant="outline"
                                        className="rounded-full h-12 w-12 md:hidden border-white/10"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </Button>
                                    <Button
                                        onClick={handleNext}
                                        variant="outline"
                                        className="rounded-full h-12 w-12 md:hidden border-white/10"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Gallery;
