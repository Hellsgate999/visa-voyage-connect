import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Community from "./pages/Community";
import VisaServices from "./pages/VisaServices";
import Countries from "./pages/Countries";
import AdminCountries from "./pages/AdminCountries";
import EducationCountryDetails from "./pages/EducationCountryDetails";
import TourismCountryDetails from "./pages/TourismCountryDetails";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/visa-services" element={<VisaServices />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/education/:countryName" element={<EducationCountryDetails />} />
          <Route path="/tourism/:countryName" element={<TourismCountryDetails />} />
          <Route path="/community" element={<Community />} />
          <Route path="/admin/countries" element={<AdminCountries />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;