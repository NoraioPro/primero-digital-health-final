import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, User, Stethoscope, Video, ChevronRight, ChevronLeft, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { VideoItem } from "@/lib/galleryData";

interface VideoGalleryProps {
    videos: VideoItem[];
}

/** Build a YouTube embed URL that loops the video, hides related content, and uses modest branding */
const ytEmbed = (id: string, autoplay = false) =>
    `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&loop=1&playlist=${id}${autoplay ? "&autoplay=1&mute=0" : ""}&origin=${encodeURIComponent(window.location.origin)}`;

/** YouTube thumbnail URL – uses the high-quality thumbnail */
const ytThumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const VideoGallery: React.FC<VideoGalleryProps> = ({ videos }) => {
    const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
    const [activeCategory, setActiveCategory] = useState<string>("all");

    const categories = [
        { id: "all", label: "All Videos", icon: Video },
        { id: "clinical", label: "Clinical Cases", icon: Stethoscope },
        { id: "clinic-tour", label: "Clinic Tour", icon: Video },
        { id: "testimonial", label: "Patients", icon: User },
    ];

    const filteredVideos = activeCategory === "all"
        ? videos
        : videos.filter(v => v.category === activeCategory);

    const handleNext = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (!selectedVideo) return;
        const currentIndex = filteredVideos.findIndex(v => v.id === selectedVideo.id);
        const nextIndex = (currentIndex + 1) % filteredVideos.length;
        setSelectedVideo(filteredVideos[nextIndex]);
    };

    const handlePrev = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (!selectedVideo) return;
        const currentIndex = filteredVideos.findIndex(v => v.id === selectedVideo.id);
        const prevIndex = (currentIndex - 1 + filteredVideos.length) % filteredVideos.length;
        setSelectedVideo(filteredVideos[prevIndex]);
    };

    return (
        <section className="py-24 relative overflow-hidden bg-background">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <span className="text-primary text-sm font-semibold tracking-widest uppercase block mb-3">Video Showcase</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                            Clinical Excellence <br className="hidden md:block" /> in Motion
                        </h2>
                    </div>

                    <div className="flex overflow-x-auto pb-4 md:pb-0 gap-2 no-scrollbar md:flex-wrap md:justify-end">
                        {categories.map((cat) => (
                            <Button
                                key={cat.id}
                                variant={activeCategory === cat.id ? "default" : "outline"}
                                onClick={() => setActiveCategory(cat.id)}
                                className={cn(
                                    "rounded-full px-5 md:px-7 h-10 md:h-12 gap-2 whitespace-nowrap transition-all duration-500 text-sm md:text-base",
                                    activeCategory === cat.id
                                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                                        : "text-slate-400 border-white/5 hover:bg-white/5 hover:border-white/10"
                                )}
                            >
                                <cat.icon className="w-4 h-4" />
                                {cat.label}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredVideos.map((video, index) => (
                            <motion.div
                                key={video.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div
                                    className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden glass border border-white/10 group-hover:border-primary/40 transition-all duration-700 cursor-pointer shadow-2xl"
                                    onClick={() => setSelectedVideo(video)}
                                >
                                    {/* YouTube thumbnail as card background */}
                                    <img
                                        src={ytThumb(video.src)}
                                        alt={video.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        loading="lazy"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 md:p-8">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                                                {video.category}
                                            </span>
                                            {video.duration && (
                                                <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-medium px-3 py-1 rounded-full">
                                                    {video.duration}
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-white text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{video.title}</h3>
                                        <p className="text-slate-400 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                                            {video.description}
                                        </p>
                                    </div>

                                    {/* Play Button */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-2xl transform scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
                                        <Play className="w-6 h-6 text-white fill-white ml-1" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
                <DialogContent className="max-w-[95vw] md:max-w-7xl max-h-[95vh] p-0 overflow-hidden bg-black/98 border-white/5 rounded-[2.5rem] shadow-2xl">
                    {selectedVideo && (
                        <div className="relative w-full h-[85vh] md:h-[90vh] flex flex-col items-center justify-between p-4 md:p-8">
                            {/* Header Actions */}
                            <div className="absolute top-6 right-6 flex items-center gap-2 z-50">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-white hover:bg-white/10 rounded-full h-12 w-12"
                                    onClick={() => setSelectedVideo(null)}
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

                                {/* YouTube embed — loop only, no related videos */}
                                <div className="relative aspect-[9/16] w-full max-w-md bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                                    <iframe
                                        key={selectedVideo.src}
                                        src={ytEmbed(selectedVideo.src, true)}
                                        title={selectedVideo.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full border-0"
                                    />
                                </div>
                            </div>

                            {/* Caption Footer */}
                            <div className="w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
                                <div className="text-center md:text-left flex-1">
                                    <div className="flex items-center justify-center md:justify-start gap-3 mb-1">
                                        <h3 className="text-2xl font-bold text-white">{selectedVideo.title}</h3>
                                        <span className="bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-primary/30">
                                            {selectedVideo.category}
                                        </span>
                                    </div>
                                    <p className="text-slate-400 text-sm line-clamp-1">{selectedVideo.description}</p>
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
        </section>
    );
};

export default VideoGallery;
