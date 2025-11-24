import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Plane, Search, ArrowRight, Users, Building2, MapPin, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AuthHeader from "@/components/layout/AuthHeader";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

interface EducationCountry {
  name: string;
  flag: string;
  image_url: string;
  description: string;
  student_population: string;
  universities_count: string;
}

interface TourismCountry {
  name: string;
  flag: string;
  image_url: string;
  description: string;
  annual_visitors: string;
  best_season: string;
}

const Countries = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'tourism'>('education');
  const [searchQuery, setSearchQuery] = useState("");
  const [educationCountries, setEducationCountries] = useState<EducationCountry[]>([]);
  const [tourismCountries, setTourismCountries] = useState<TourismCountry[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      setLoading(true);

      const { data: eduData, error: eduError } = await supabase
        .from('education_countries')
        .select('*')
        .order('name');

      if (eduError) throw eduError;
      setEducationCountries(eduData || []);

      const { data: tourData, error: tourError } = await supabase
        .from('tourism_countries')
        .select('*')
        .order('name');

      if (tourError) throw tourError;
      setTourismCountries(tourData || []);
    } catch (error) {
      console.error('Error fetching countries:', error);
      toast.error('Failed to load countries');
    } finally {
      setLoading(false);
    }
  };

  const handleEducationCountryClick = (countryName: string) => {
    const urlName = countryName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/education/${urlName}`);
  };

  const handleTourismCountryClick = (countryName: string) => {
    const urlName = countryName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/tourism/${urlName}`);
  };

  const filteredEducationCountries = educationCountries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTourismCountries = tourismCountries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <AuthHeader />

      <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1920')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Explore Countries Worldwide
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Choose your destination for education or tourism
            </p>

            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search countries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-lg text-white placeholder:text-gray-300"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center gap-4 mb-12">
          <Button
            onClick={() => setActiveTab('education')}
            size="lg"
            className={`px-8 py-6 text-lg rounded-full transition-all ${
              activeTab === 'education'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
            }`}
          >
            <GraduationCap className="mr-2 h-6 w-6" />
            Education Countries
            <span className="ml-3 bg-white/20 px-3 py-1 rounded-full text-sm">
              {educationCountries.length}
            </span>
          </Button>

          <Button
            onClick={() => setActiveTab('tourism')}
            size="lg"
            className={`px-8 py-6 text-lg rounded-full transition-all ${
              activeTab === 'tourism'
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-xl scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
            }`}
          >
            <Plane className="mr-2 h-6 w-6" />
            Tourism Countries
            <span className="ml-3 bg-white/20 px-3 py-1 rounded-full text-sm">
              {tourismCountries.length}
            </span>
          </Button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600 text-lg">Loading countries...</p>
            </div>
          </div>
        ) : (
          <>
            {activeTab === 'education' && (
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Study Abroad Destinations
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Click on any country to see universities and colleges
                  </p>
                </div>

                {filteredEducationCountries.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredEducationCountries.map((country, index) => (
                      <motion.div
                        key={country.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                      >
                        <Card
                          onClick={() => handleEducationCountryClick(country.name)}
                          className="overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500"
                        >
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={country.image_url}
                              alt={country.name}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                            <div className="absolute top-3 right-3 text-5xl">
                              {country.flag}
                            </div>
                            <div className="absolute bottom-3 left-3 right-3">
                              <h3 className="text-white text-xl font-bold">
                                {country.name}
                              </h3>
                            </div>
                          </div>

                          <div className="p-5 bg-gradient-to-br from-white to-blue-50">
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                              {country.description}
                            </p>

                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2 text-sm">
                                <Users className="h-4 w-4 text-blue-600" />
                                <span className="font-semibold text-gray-900">
                                  {country.student_population}
                                </span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Building2 className="h-4 w-4 text-purple-600" />
                                <span className="font-semibold text-gray-900">
                                  {country.universities_count}
                                </span>
                              </div>
                            </div>

                            <Button
                              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                            >
                              View Universities
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <Card className="p-12 text-center">
                    <p className="text-gray-600 text-lg">No education countries found</p>
                  </Card>
                )}
              </div>
            )}

            {activeTab === 'tourism' && (
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Amazing Travel Destinations
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Click on any country to explore tourist attractions
                  </p>
                </div>

                {filteredTourismCountries.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredTourismCountries.map((country, index) => (
                      <motion.div
                        key={country.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                      >
                        <Card
                          onClick={() => handleTourismCountryClick(country.name)}
                          className="overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-cyan-500"
                        >
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={country.image_url}
                              alt={country.name}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                            <div className="absolute top-3 right-3 text-5xl animate-bounce">
                              {country.flag}
                            </div>
                            <div className="absolute bottom-3 left-3 right-3">
                              <h3 className="text-white text-xl font-bold">
                                {country.name}
                              </h3>
                            </div>
                          </div>

                          <div className="p-5 bg-gradient-to-br from-white to-cyan-50">
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                              {country.description}
                            </p>

                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2 text-sm">
                                <Plane className="h-4 w-4 text-cyan-600" />
                                <span className="font-semibold text-gray-900">
                                  {country.annual_visitors}
                                </span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                <span className="font-semibold text-gray-900">
                                  Popular
                                </span>
                              </div>
                            </div>

                            <Button
                              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white"
                            >
                              Explore Places
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <Card className="p-12 text-center">
                    <p className="text-gray-600 text-lg">No tourism countries found</p>
                  </Card>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Countries;
