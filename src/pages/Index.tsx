import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Plane, Globe, Users, MessageSquare, Map, Building2, Award, ChevronRight, ArrowRight, Star, CheckCircle, Sparkles, Rocket, TrendingUp, Clock, Shield, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import AuthHeader from '@/components/layout/AuthHeader';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Index = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const educationDestinations = [
    {
      name: "United States",
      image: "https://images.pexels.com/photos/2346091/pexels-photo-2346091.jpeg?auto=compress&cs=tinysrgb&w=800",
      universities: "200+",
      students: "50,000+",
      flag: "🇺🇸",
      color: "from-blue-500 to-red-500"
    },
    {
      name: "United Kingdom",
      image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800",
      universities: "150+",
      students: "30,000+",
      flag: "🇬🇧",
      color: "from-blue-600 to-red-600"
    },
    {
      name: "Canada",
      image: "https://images.pexels.com/photos/2849339/pexels-photo-2849339.jpeg?auto=compress&cs=tinysrgb&w=800",
      universities: "100+",
      students: "40,000+",
      flag: "🇨🇦",
      color: "from-red-500 to-white"
    },
    {
      name: "Australia",
      image: "https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=800",
      universities: "80+",
      students: "25,000+",
      flag: "🇦🇺",
      color: "from-blue-500 to-yellow-500"
    },
    {
      name: "Germany",
      image: "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800",
      universities: "120+",
      students: "35,000+",
      flag: "🇩🇪",
      color: "from-black to-red-600"
    },
    {
      name: "Singapore",
      image: "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800",
      universities: "30+",
      students: "15,000+",
      flag: "🇸🇬",
      color: "from-red-500 to-white"
    }
  ];

  const tourismDestinations = [
    {
      name: "France",
      image: "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=800",
      attractions: "Historic Sites",
      rating: "4.9",
      flag: "🇫🇷",
      visitors: "89M/year"
    },
    {
      name: "Italy",
      image: "https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=800",
      attractions: "Culture & Art",
      rating: "4.8",
      flag: "🇮🇹",
      visitors: "64M/year"
    },
    {
      name: "Japan",
      image: "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=800",
      attractions: "Modern & Traditional",
      rating: "4.9",
      flag: "🇯🇵",
      visitors: "31M/year"
    },
    {
      name: "Spain",
      image: "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=800",
      attractions: "Beach & Architecture",
      rating: "4.7",
      flag: "🇪🇸",
      visitors: "83M/year"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <AuthHeader />

      <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900">
        <motion.div style={{ y, opacity }} className="absolute inset-0 bg-[url('https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-400/30 rounded-full px-5 py-2 mb-8"
            >
              <Sparkles className="h-5 w-5 text-blue-300" />
              <span className="text-blue-200 font-medium">Your Gateway to Global Opportunities</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
              Explore the World
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Your Way
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover education opportunities and tourism destinations across 195+ countries.
              Get expert visa assistance and connect with a global community.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button
                onClick={() => navigate('/countries')}
                size="lg"
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-7 text-lg font-semibold shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
              >
                Explore Countries
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                onClick={() => navigate('/visa-services')}
                size="lg"
                variant="outline"
                className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-7 text-lg font-semibold"
              >
                Visa Services
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <Users className="h-8 w-8" />, number: "50K+", label: "Students Helped" },
                { icon: <Globe className="h-8 w-8" />, number: "195+", label: "Countries" },
                { icon: <Award className="h-8 w-8" />, number: "99%", label: "Success Rate" },
                { icon: <Shield className="h-8 w-8" />, number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-blue-300 mb-3 flex justify-center">{stat.icon}</div>
                  <div className="text-4xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/50"
          >
            <ChevronRight className="h-8 w-8 rotate-90" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-4">
              <GraduationCap className="h-5 w-5 text-blue-600" />
              <span className="text-blue-900 font-semibold text-sm">Education Abroad</span>
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Top Study Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access world-class universities and educational opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationDestinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 border-0">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute top-4 right-4 text-6xl">{destination.flag}</div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-3xl font-bold text-white mb-2">{destination.name}</h3>
                      <div className="flex items-center gap-4 text-white/90 text-sm">
                        <div className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          {destination.universities}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {destination.students}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => navigate('/countries')}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg"
            >
              View All Education Countries
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-cyan-100 rounded-full px-4 py-2 mb-4">
              <Plane className="h-5 w-5 text-cyan-600" />
              <span className="text-cyan-900 font-semibold text-sm">Travel & Tourism</span>
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Popular Travel Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore breathtaking destinations and create unforgettable memories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourismDestinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4 text-5xl animate-bounce">{destination.flag}</div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{destination.name}</h3>
                      <div className="flex items-center justify-between text-white/90 text-sm">
                        <span className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          {destination.rating}
                        </span>
                        <span className="text-xs">{destination.visitors}</span>
                      </div>
                      <div className="mt-2 text-white/80 text-sm">{destination.attractions}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => navigate('/countries')}
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-6 text-lg"
            >
              Explore All Tourism Destinations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="h-12 w-12" />,
                title: "Community",
                description: "Connect with students and travelers worldwide",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Map className="h-12 w-12" />,
                title: "Visa Services",
                description: "Expert guidance for all your visa requirements",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Clock className="h-12 w-12" />,
                title: "24/7 Support",
                description: "Round-the-clock assistance for your journey",
                color: "from-orange-500 to-red-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1920')] opacity-5 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl font-black mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of students and travelers who trust us
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => navigate('/countries')}
                size="lg"
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-6 text-lg font-bold"
              >
                Get Started Now
                <Rocket className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => navigate('/community')}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                Join Community
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
