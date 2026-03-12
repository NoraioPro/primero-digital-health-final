import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import ContactPage from "./pages/ContactPage";
import PediatricPage from "./pages/PediatricPage";
import PediatricLandingPage from "./pages/PediatricLandingPage";
import ImplantsPage from "./pages/ImplantsPage";
import CosmeticPage from "./pages/CosmeticPage";
import OrthodonticsPage from "./pages/OrthodonticsPage";
import RootCanalPage from "./pages/RootCanalPage";
import OralSurgeryPage from "./pages/OralSurgeryPage";
import PromotionalLandingPage from "./pages/PromotionalLandingPage";
import NotFound from "./pages/NotFound";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <FloatingWhatsApp />
          <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/asnan-atfal" element={<PediatricLandingPage />} />
              <Route path="/asnan-atfal/" element={<PediatricLandingPage />} />
              <Route path="/zeraet-asnan-madinet-nasr" element={<ImplantsPage />} />
              <Route path="/zeraet-asnan-madinet-nasr/" element={<ImplantsPage />} />
              <Route path="/cosmetic-dentistry" element={<CosmeticPage />} />
              <Route path="/cosmetic-dentistry/" element={<CosmeticPage />} />
              <Route path="/orthodontics" element={<OrthodonticsPage />} />
              <Route path="/orthodontics/" element={<OrthodonticsPage />} />
              <Route path="/root-canal-treatment" element={<RootCanalPage />} />
              <Route path="/root-canal-treatment/" element={<RootCanalPage />} />
              <Route path="/oral-surgery" element={<OralSurgeryPage />} />
              <Route path="/oral-surgery/" element={<OralSurgeryPage />} />
              <Route path="/offer" element={<PromotionalLandingPage />} />
              <Route path="/offer/" element={<PromotionalLandingPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
