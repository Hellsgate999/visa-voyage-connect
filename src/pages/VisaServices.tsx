import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import { motion } from "framer-motion";
import { Clock, TrendingUp, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AuthHeader from "@/components/layout/AuthHeader";

interface Country {
  id: string;
  name: string;
  flag_emoji: string;
  description: string;
  processing_time: string;
  success_rate: string;
  badge?: string;
  visa_types: string[];
}

const VisaServices = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const q = query(collection(db, "countries"), orderBy("order_position", "asc"));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Country[];
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  const getBadgeStyles = (badge?: string) => {
    switch (badge?.toLowerCase()) {
      case "most popular":
        return "bg-blue-100 text-blue-800";
      case "high demand":
        return "bg-red-100 text-red-800";
      case "popular":
        return "bg-green-100 text-green-800";
      case "growing":
        return "bg-yellow-100 text-yellow-800";
      case "emerging":
        return "bg-orange-100 text-orange-800";
      case "fast track":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

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
            Visa Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully curated list of countries. Each destination offers unique
            opportunities and experiences tailored to your visa needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {countries.map((country, index) => (
            <motion.div
              key={country.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                {country.badge && (
                  <div className="flex justify-end mb-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getBadgeStyles(country.badge)}`}>
                      {country.badge}
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{country.flag_emoji}</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {country.name}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {country.description}
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-sm text-gray-700">
                    <Clock className="h-5 w-5 mr-2 text-blue-600" />
                    <span className="font-medium">Processing:</span>
                    <span className="ml-2">{country.processing_time}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-700">
                    <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                    <span className="font-medium">Success Rate:</span>
                    <span className="ml-2 font-bold text-green-600">{country.success_rate}</span>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-start text-sm text-gray-700 mb-3">
                      <Users className="h-5 w-5 mr-2 text-gray-600 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">Available Visa Types:</span>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-7">
                      {country.visa_types.map((type, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/country/${country.id}`)}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center gap-2"
                >
                  <span>Explore {country.name} Visas</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisaServices;
