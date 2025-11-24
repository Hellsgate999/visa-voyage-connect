import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, MapPin, Calendar, Star, Plane, Camera, Sun } from 'lucide-react';
import AuthHeader from '@/components/layout/AuthHeader';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

interface Country {
  name: string;
  flag: string;
  image_url: string;
  description: string;
  capital: string;
  language: string;
  currency: string;
  annual_visitors: string;
  best_season: string;
}

interface Attraction {
  name: string;
  type: string;
  image_url: string;
  description: string;
  best_time_to_visit: string;
  location: string;
  rating: number;
}

const TourismCountryDetails = () => {
  const { countryName } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState<Country | null>(null);
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCountryDetails();
  }, [countryName]);

  const fetchCountryDetails = async () => {
    try {
      setLoading(true);
      const formattedName = countryName?.split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');

      const { data: countryData, error: countryError } = await supabase
        .from('tourism_countries')
        .select('*')
        .eq('name', formattedName)
        .maybeSingle();

      if (countryError) throw countryError;
      setCountry(countryData);

      const { data: attractionsData, error: attractionsError } = await supabase
        .from('tourist_attractions')
        .select('*')
        .eq('country_name', formattedName);

      if (attractionsError) throw attractionsError;
      setAttractions(attractionsData || []);
    } catch (error) {
      console.error('Error fetching country details:', error);
      toast.error('Failed to load country details');
    } finally {
      setLoading(false);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'monument':
        return <Camera className="h-5 w-5" />;
      case 'nature':
        return <Sun className="h-5 w-5" />;
      case 'museum':
        return <Globe className="h-5 w-5" />;
      default:
        return <MapPin className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'monument':
        return 'bg-orange-100 text-orange-700';
      case 'nature':
        return 'bg-green-100 text-green-700';
      case 'museum':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-blue-100 text-blue-700';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
        <AuthHeader />
        <div className="container mx-auto px-4 py-12 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-cyan-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!country) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
        <AuthHeader />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Country Not Found</h1>
          <Button onClick={() => navigate('/countries')}>Back to Countries</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      <AuthHeader />

      <div className="relative h-96 overflow-hidden">
        <img
          src={country.image_url}
          alt={country.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <Button
              onClick={() => navigate('/countries')}
              variant="ghost"
              className="text-white mb-4 hover:bg-white/20"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Countries
            </Button>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-7xl">{country.flag}</span>
              <div>
                <h1 className="text-5xl font-black text-white mb-2">{country.name}</h1>
                <p className="text-xl text-gray-200">{country.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 bg-white shadow-lg">
            <Globe className="h-10 w-10 text-cyan-600 mb-3" />
            <p className="text-sm text-gray-600 mb-1">Capital City</p>
            <p className="text-2xl font-bold text-gray-900">{country.capital}</p>
          </Card>

          <Card className="p-6 bg-white shadow-lg">
            <Plane className="h-10 w-10 text-blue-600 mb-3" />
            <p className="text-sm text-gray-600 mb-1">Annual Visitors</p>
            <p className="text-2xl font-bold text-gray-900">{country.annual_visitors}</p>
          </Card>

          <Card className="p-6 bg-white shadow-lg">
            <Calendar className="h-10 w-10 text-green-600 mb-3" />
            <p className="text-sm text-gray-600 mb-1">Best Season</p>
            <p className="text-2xl font-bold text-gray-900">{country.best_season}</p>
          </Card>

          <Card className="p-6 bg-white shadow-lg">
            <Globe className="h-10 w-10 text-purple-600 mb-3" />
            <p className="text-sm text-gray-600 mb-1">Language</p>
            <p className="text-2xl font-bold text-gray-900">{country.language}</p>
          </Card>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <Camera className="h-8 w-8 text-cyan-600" />
            <h2 className="text-4xl font-bold text-gray-900">Top Attractions</h2>
          </div>

          {attractions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {attractions.map((attraction, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={attraction.image_url}
                        alt={attraction.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`flex items-center gap-2 ${getTypeColor(attraction.type)} px-3 py-1 rounded-full text-sm font-bold`}>
                          {getTypeIcon(attraction.type)}
                          {attraction.type}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 bg-white px-3 py-2 rounded-full flex items-center gap-1 shadow-lg">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-bold text-gray-900">{attraction.rating}</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{attraction.name}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{attraction.description}</p>

                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-gray-500">Location</p>
                            <p className="font-semibold text-gray-900">{attraction.location}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Calendar className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-gray-500">Best Time to Visit</p>
                            <p className="font-semibold text-gray-900">{attraction.best_time_to_visit}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center">
              <p className="text-gray-600 text-lg">No attractions data available yet</p>
            </Card>
          )}
        </div>

        <Card className="p-8 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-2">Plan Your Trip</h3>
              <p className="text-cyan-100 text-lg">Get visa assistance and travel planning services</p>
            </div>
            <Button
              onClick={() => navigate('/visa-services')}
              size="lg"
              className="bg-white text-cyan-600 hover:bg-gray-100 font-bold"
            >
              Get Started
              <Plane className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TourismCountryDetails;
