import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Users, GraduationCap, TrendingUp, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AuthHeader from "@/components/layout/AuthHeader";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
    name: "Mexico",
    image: "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=800",
    students: "25,000+",
    universities: "80+",
    successRate: "94%",
    topUniversities: ["UNAM", "Tec de Monterrey", "IPN"],
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
    name: "Germany",
    image: "https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=800",
    students: "35,000+",
    universities: "120+",
    successRate: "96%",
    topUniversities: ["TU Munich", "Heidelberg", "LMU Munich"],
    badge: "Education Services"
  },
  {
    name: "France",
    image: "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=800",
    students: "28,000+",
    universities: "90+",
    successRate: "95%",
    topUniversities: ["Sorbonne", "École Polytechnique", "Sciences Po"],
    badge: "Education Services"
  },
  {
    name: "Italy",
    image: "https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=800",
    students: "22,000+",
    universities: "70+",
    successRate: "93%",
    topUniversities: ["Bologna", "Sapienza", "Politecnico Milano"],
    badge: "Education Services"
  },
  {
    name: "Spain",
    image: "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=800",
    students: "20,000+",
    universities: "65+",
    successRate: "92%",
    topUniversities: ["Barcelona", "Complutense", "Pompeu Fabra"],
    badge: "Education Services"
  }
];

const Countries = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const navigate = useNavigate();

  const filteredCountries = allCountries.filter((country) =>
    country.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search countries or colleges..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg rounded-full border-2 border-gray-200 focus:border-blue-500"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full px-8">
                Go
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === "all"
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Top-Ranked
            </button>
            <button
              onClick={() => setActiveFilter("scholarships")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === "scholarships"
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Scholarships Available
            </button>
            <button
              onClick={() => setActiveFilter("english")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === "english"
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              English-Taught Programs
            </button>
          </div>
        </motion.div>

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

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Countries</h2>
          {searchQuery ? (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <p className="text-sm text-gray-600 mb-4">
                Found {filteredCountries.length} countries
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {filteredCountries.map((country, index) => (
                  <motion.button
                    key={country}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.02 }}
                    onClick={() => navigate(`/country/${country.toLowerCase().replace(/\s+/g, "-")}`)}
                    className="text-left p-4 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors border border-gray-200 hover:border-blue-300"
                  >
                    <p className="font-medium text-gray-900">{country}</p>
                  </motion.button>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <p className="text-sm text-gray-600 mb-4">
                Showing {allCountries.length} countries
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {allCountries.map((country, index) => (
                  <motion.button
                    key={country}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.01 }}
                    onClick={() => navigate(`/country/${country.toLowerCase().replace(/\s+/g, "-")}`)}
                    className="text-left p-4 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors border border-gray-200 hover:border-blue-300"
                  >
                    <p className="font-medium text-gray-900">{country}</p>
                  </motion.button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Countries;
