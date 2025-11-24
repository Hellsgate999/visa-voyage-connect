import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Users, GraduationCap, TrendingUp, Calendar, Globe2, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AuthHeader from "@/components/layout/AuthHeader";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase, VisaRoute } from "@/lib/supabase";
import { toast } from "sonner";

const allCountries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
  "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
  "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada",
  "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
  "Congo (Republic of the Congo)", "Congo, Democratic Republic of the", "Costa Rica",
  "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Denmark",
  "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
  "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (Swaziland)", "Ethiopia",
  "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
  "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
  "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
  "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
  "Korea, North (Democratic People's Republic of Korea)", "Korea, South (Republic of Korea)",
  "Kosovo*", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho",
  "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
  "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
  "Mauritius", "Mexico", "Micronesia (Federated States of Micronesia)", "Moldova",
  "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
  "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
  "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau",
  "Palestine (State of Palestine)", "Panama", "Papua New Guinea", "Paraguay", "Peru",
  "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa",
  "San Marino", "São Tomé and Príncipe", "Saudi Arabia", "Senegal", "Serbia",
  "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
  "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname",
  "Sweden", "Switzerland", "Syria", "Taiwan**", "Tajikistan", "Tanzania", "Thailand",
  "Timor-Leste (East Timor)", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia",
  "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
  "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu",
  "Vatican City (Holy See)", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const featuredCountries = [
  {
    name: "United States",
    image: "https://images.pexels.com/photos/2346091/pexels-photo-2346091.jpeg?auto=compress&cs=tinysrgb&w=800",
    students: "50,000+",
    universities: "200+",
    successRate: "99%",
    topUniversities: ["Harvard", "MIT", "Stanford"],
    badge: "Education Services"
  },
  {
    name: "Canada",
    image: "https://images.pexels.com/photos/2849339/pexels-photo-2849339.jpeg?auto=compress&cs=tinysrgb&w=800",
    students: "40,000+",
    universities: "100+",
    successRate: "97%",
    topUniversities: ["Toronto", "McGill", "UBC"],
    badge: "Education Services"
  },
  {
    name: "United Kingdom",
    image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800",
    students: "30,000+",
    universities: "150+",
    successRate: "98%",
    topUniversities: ["Oxford", "Cambridge", "Imperial"],
    badge: "Education Services"
  },
  {
    name: "Australia",
    image: "https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=800",
    students: "25,000+",
    universities: "80+",
    successRate: "97%",
    topUniversities: ["Melbourne", "Sydney", "ANU"],
    badge: "Education Services"
  }
];

const Countries = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [sourceCountry, setSourceCountry] = useState("India");
  const [destinationCountries, setDestinationCountries] = useState<string[]>([]);
  const [visaRoutes, setVisaRoutes] = useState<VisaRoute[]>([]);
  const [loading, setLoading] = useState(false);
  const [countrySearchOpen, setCountrySearchOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchVisaRoutes();
  }, [sourceCountry]);

  const fetchVisaRoutes = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('country_visa_routes')
        .select('*')
        .eq('from_country', sourceCountry)
        .order('to_country', { ascending: true });

      if (error) throw error;

      if (data) {
        setVisaRoutes(data);
        const uniqueDestinations = [...new Set(data.map(route => route.to_country))];
        setDestinationCountries(uniqueDestinations);
      }
    } catch (error) {
      console.error('Error fetching visa routes:', error);
      toast.error('Failed to load visa routes');
    } finally {
      setLoading(false);
    }
  };

  const filteredCountries = destinationCountries.length > 0
    ? destinationCountries.filter((country) =>
        country.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allCountries.filter((country) =>
        country.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const getCountryRouteInfo = (countryName: string) => {
    const routes = visaRoutes.filter(r => r.to_country === countryName);
    if (routes.length === 0) return null;

    const studentRoute = routes.find(r => r.visa_type === 'student');
    const touristRoute = routes.find(r => r.visa_type === 'tourist');

    return {
      hasStudent: !!studentRoute,
      hasTourist: !!touristRoute,
      successRate: studentRoute?.success_rate || touristRoute?.success_rate || '95%',
      processingTime: studentRoute?.processing_time || touristRoute?.processing_time || '2-4 weeks'
    };
  };

  const sourceCountryOptions = ["India", "United States", "United Kingdom", "Canada", "Australia", "China", "Pakistan", "Bangladesh", "Nigeria", "Philippines"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <AuthHeader />

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Countries
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Discover education opportunities and visa services across the globe. Find your perfect destination for study and career growth.
          </p>

          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe2 className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Select Your Country</h3>
              </div>

              <div className="relative">
                <button
                  onClick={() => setCountrySearchOpen(!countrySearchOpen)}
                  className="w-full text-left px-6 py-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                      {sourceCountry.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Traveling from</p>
                      <p className="text-xl font-bold text-gray-900">{sourceCountry}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg">
                    <span className="text-sm font-semibold text-blue-600">
                      {destinationCountries.length} Destinations
                    </span>
                  </div>
                </button>

                {countrySearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-2xl border-2 border-gray-200 max-h-80 overflow-y-auto"
                  >
                    <div className="p-4">
                      <p className="text-sm font-semibold text-gray-700 mb-3">Select your country:</p>
                      <div className="space-y-2">
                        {sourceCountryOptions.map((country) => (
                          <button
                            key={country}
                            onClick={() => {
                              setSourceCountry(country);
                              setCountrySearchOpen(false);
                            }}
                            className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
                              sourceCountry === country
                                ? 'bg-blue-600 text-white'
                                : 'hover:bg-gray-100'
                            }`}
                          >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                              sourceCountry === country ? 'bg-white text-blue-600' : 'bg-gray-200 text-gray-700'
                            }`}>
                              {country.charAt(0)}
                            </div>
                            <span className="font-medium">{country}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {loading && (
                <div className="mt-4 flex items-center justify-center gap-2 text-blue-600">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                  <span>Loading destinations...</span>
                </div>
              )}

              {!loading && destinationCountries.length > 0 && (
                <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 text-green-700">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="font-medium">
                      Found {destinationCountries.length} destinations available from {sourceCountry}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search destination countries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg rounded-full border-2 border-gray-200 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === "all"
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              All Destinations
            </button>
            <button
              onClick={() => setActiveFilter("student")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === "student"
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Student Visa
            </button>
            <button
              onClick={() => setActiveFilter("tourist")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === "tourist"
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Tourist Visa
            </button>
          </div>
        </motion.div>

        {destinationCountries.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Available Destinations from {sourceCountry}
            </h2>
            <p className="text-gray-600 mb-8">Showing visa routes and requirements</p>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredCountries.map((country, index) => {
                  const routeInfo = getCountryRouteInfo(country);

                  if (activeFilter === "student" && (!routeInfo || !routeInfo.hasStudent)) return null;
                  if (activeFilter === "tourist" && (!routeInfo || !routeInfo.hasTourist)) return null;

                  return (
                    <motion.button
                      key={country}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.02 }}
                      onClick={() => navigate(`/country/${country.toLowerCase().replace(/\s+/g, "-")}`)}
                      className="text-left p-4 bg-gradient-to-br from-blue-50 to-white hover:from-blue-100 hover:to-blue-50 rounded-xl transition-all border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <p className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                          {country}
                        </p>
                        {routeInfo && (
                          <div className="flex gap-1">
                            {routeInfo.hasStudent && (
                              <GraduationCap className="h-5 w-5 text-blue-600" title="Student Visa Available" />
                            )}
                            {routeInfo.hasTourist && (
                              <Globe2 className="h-5 w-5 text-green-600" title="Tourist Visa Available" />
                            )}
                          </div>
                        )}
                      </div>
                      {routeInfo && (
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center gap-2 text-gray-600">
                            <TrendingUp className="h-4 w-4 text-green-500" />
                            <span>{routeInfo.successRate} Success Rate</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="h-4 w-4 text-blue-500" />
                            <span>{routeInfo.processingTime}</span>
                          </div>
                        </div>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCountries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                onClick={() => navigate(`/country/${country.name.toLowerCase().replace(/\s+/g, "-")}`)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                      <GraduationCap className="h-3 w-3" />
                      {country.badge}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                    {country.name}
                  </h3>
                </div>

                <div className="p-4">
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="text-center">
                      <Users className="h-5 w-5 mx-auto text-gray-600 mb-1" />
                      <p className="text-xs text-gray-500">Students</p>
                      <p className="text-sm font-semibold text-gray-900">{country.students}</p>
                    </div>
                    <div className="text-center">
                      <GraduationCap className="h-5 w-5 mx-auto text-gray-600 mb-1" />
                      <p className="text-xs text-gray-500">Universities</p>
                      <p className="text-sm font-semibold text-gray-900">{country.universities}</p>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="h-5 w-5 mx-auto text-gray-600 mb-1" />
                      <p className="text-xs text-gray-500">Success</p>
                      <p className="text-sm font-semibold text-green-600">{country.successRate}</p>
                    </div>
                  </div>

                  <div className="border-t pt-3">
                    <p className="text-xs text-gray-500 mb-2 font-medium">Top Universities:</p>
                    <div className="flex flex-wrap gap-1">
                      {country.topUniversities.map((uni) => (
                        <span
                          key={uni}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                        >
                          {uni}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full mt-4 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                    Explore Now
                    <Calendar className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
