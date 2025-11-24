import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, Users, DollarSign, Award, CheckCircle, ExternalLink, GraduationCap, TrendingUp } from 'lucide-react';
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
  student_population: string;
  universities_count: string;
}

interface University {
  name: string;
  ranking: string;
  image_url: string;
  description: string;
  website: string;
  tuition_range: string;
  programs: string[];
  acceptance_rate: string;
}

const EducationCountryDetails = () => {
  const { countryName } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState<Country | null>(null);
  const [universities, setUniversities] = useState<University[]>([]);
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
        .from('education_countries')
        .select('*')
        .eq('name', formattedName)
        .maybeSingle();

      if (countryError) throw countryError;
      setCountry(countryData);

      const { data: universitiesData, error: universitiesError } = await supabase
        .from('universities')
        .select('*')
        .eq('country_name', formattedName);

      if (universitiesError) throw universitiesError;
      setUniversities(universitiesData || []);
    } catch (error) {
      console.error('Error fetching country details:', error);
      toast.error('Failed to load country details');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <AuthHeader />
        <div className="container mx-auto px-4 py-12 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!country) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <AuthHeader />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Country Not Found</h1>
          <Button onClick={() => navigate('/countries')}>Back to Countries</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
            <Globe className="h-10 w-10 text-blue-600 mb-3" />
            <p className="text-sm text-gray-600 mb-1">Capital</p>
            <p className="text-2xl font-bold text-gray-900">{country.capital}</p>
          </Card>

          <Card className="p-6 bg-white shadow-lg">
            <Users className="h-10 w-10 text-green-600 mb-3" />
            <p className="text-sm text-gray-600 mb-1">Indian Students</p>
            <p className="text-2xl font-bold text-gray-900">{country.student_population}</p>
          </Card>

          <Card className="p-6 bg-white shadow-lg">
            <GraduationCap className="h-10 w-10 text-purple-600 mb-3" />
            <p className="text-sm text-gray-600 mb-1">Universities</p>
            <p className="text-2xl font-bold text-gray-900">{country.universities_count}</p>
          </Card>

          <Card className="p-6 bg-white shadow-lg">
            <DollarSign className="h-10 w-10 text-orange-600 mb-3" />
            <p className="text-sm text-gray-600 mb-1">Currency</p>
            <p className="text-2xl font-bold text-gray-900">{country.currency}</p>
          </Card>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-8 w-8 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900">Top Universities</h2>
          </div>

          {universities.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {universities.map((uni, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={uni.image_url}
                        alt={uni.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold">
                        {uni.ranking}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{uni.name}</h3>
                      <p className="text-gray-600 mb-4">{uni.description}</p>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-500">Tuition Range</p>
                          <p className="font-bold text-gray-900">{uni.tuition_range}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Acceptance Rate</p>
                          <p className="font-bold text-green-600">{uni.acceptance_rate}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm text-gray-500 mb-2">Popular Programs:</p>
                        <div className="flex flex-wrap gap-2">
                          {uni.programs.map((program, idx) => (
                            <span
                              key={idx}
                              className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full font-medium"
                            >
                              {program}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button
                        onClick={() => window.open(`https://${uni.website}`, '_blank')}
                        className="w-full bg-blue-600 hover:bg-blue-700"
                      >
                        Visit Website
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center">
              <p className="text-gray-600 text-lg">No universities data available yet</p>
            </Card>
          )}
        </div>

        <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-2">Ready to Apply?</h3>
              <p className="text-blue-100 text-lg">Get expert guidance for your application</p>
            </div>
            <Button
              onClick={() => navigate('/visa-services')}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold"
            >
              Get Started
              <TrendingUp className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EducationCountryDetails;
