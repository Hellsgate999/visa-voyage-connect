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
    },
    {
      name: "Thailand",
      image: "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800",
      attractions: "Tropical Paradise",
      rating: "4.8",
      flag: "🇹🇭",
      visitors: "40M/year"
    },
    {
      name: "Switzerland",
      image: "https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&w=800",
      attractions: "Alpine Beauty",
      rating: "4.9",
      flag: "🇨🇭",
      visitors: "11M/year"
    }
  ];

  const stats = [
    { number: "195+", label: "Countries", icon: Globe, color: "text-blue-500" },
    { number: "1000+", label: "Universities", icon: GraduationCap, color: "text-green-500" },
    { number: "98%", label: "Success Rate", icon: TrendingUp, color: "text-purple-500" },
    { number: "50K+", label: "Happy Students", icon: Users, color: "text-orange-500" }
  ];

  const services = [
    {
      icon: <Building2 className="w-10 h-10" />,
      title: "Visa Assistance",
      description: "Expert guidance for visa applications with 98% success rate",
      features: ["Document Preparation", "Application Support", "Interview Coaching"],
      color: "from-blue-500 to-cyan-500",
      badge: "Most Popular"
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Scholarship Help",
      description: "Find and apply for scholarships worth millions of dollars",
      features: ["Scholarship Search", "Application Review", "Essay Guidance"],
      color: "from-purple-500 to-pink-500",
      badge: "High Demand"
    },
    {
      icon: <Map className="w-10 h-10" />,
      title: "Travel Planning",
      description: "Personalized travel itineraries for your perfect journey",
      features: ["Itinerary Planning", "Accommodation Booking", "Local Guides"],
      color: "from-orange-500 to-red-500",
      badge: "Trending"
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Study Abroad",
      description: "Complete support for your international education journey",
      features: ["University Selection", "Application Process", "Career Counseling"],
      color: "from-green-500 to-emerald-500",
      badge: "Premium"
    }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Get visa approvals in record time"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Secure",
      description: "Your data is protected with encryption"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round the clock assistance"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Quick Processing",
      description: "Fastest visa processing available"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-white overflow-hidden">
      <AuthHeader />

      {/* Hero Section - CRAZY DESIGN */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1920')] opacity-5 bg-cover bg-center"></div>
          <motion.div
            style={{ y }}
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20"
          ></motion.div>

          {/* Floating Elements */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.div
          style={{ opacity }}
          className="container mx-auto px-4 relative z-10 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 1 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold text-sm shadow-2xl">
              <Sparkles className="w-5 h-5 animate-spin" />
              <span>Your Global Journey Starts Here</span>
              <Sparkles className="w-5 h-5 animate-spin" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl font-black mb-8 leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-300 animate-pulse">
              Explore
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500">
              Study & Travel
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-red-400 to-orange-400">
              The World
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            <span className="font-semibold text-white">195+ Countries</span> • <span className="font-semibold text-white">1000+ Universities</span> • <span className="font-semibold text-white">98% Success</span>
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <Button
              onClick={() => navigate('/countries')}
              size="lg"
              className="group relative bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-600 text-white px-12 py-8 text-xl rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Rocket className="w-6 h-6 group-hover:rotate-45 transition-transform" />
                Explore Countries
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity"></div>
            </Button>

            <Button
              onClick={() => navigate('/community')}
              size="lg"
              className="group relative bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:from-purple-700 hover:via-pink-600 hover:to-red-600 text-white px-12 py-8 text-xl rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Users className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Join Community
                <Star className="w-6 h-6 group-hover:rotate-180 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity"></div>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <stat.icon className={`w-10 h-10 ${stat.color} mx-auto mb-3`} />
                <div className="text-4xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronRight className="w-8 h-8 text-white rotate-90" />
        </motion.div>
      </section>

      {/* Education Section - CRAZY DESIGN */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full mb-6 shadow-xl">
              <GraduationCap className="w-6 h-6" />
              <span className="font-bold text-lg">Education Opportunities</span>
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Study at World's
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"> Best Universities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get admitted to top-ranked universities with our expert guidance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {educationDestinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 50, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="overflow-hidden border-4 border-transparent hover:border-blue-500 transition-all duration-300 shadow-xl hover:shadow-2xl">
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover transition-transform duration-700"
                      whileHover={{ scale: 1.2, rotate: 2 }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${dest.color} opacity-60`}></div>
                    <div className="absolute top-4 right-4 text-6xl">{dest.flag}</div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <h3 className="text-white text-3xl font-black mb-2">{dest.name}</h3>
                      <div className="flex gap-4 text-white">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-5 w-5" />
                          <span className="font-bold">{dest.universities}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-5 w-5" />
                          <span className="font-bold">{dest.students}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-white to-blue-50">
                    <Button
                      onClick={() => navigate('/countries')}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold"
                    >
                      Explore Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={() => navigate('/countries')}
              size="lg"
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all"
            >
              <Globe className="mr-2 h-6 w-6" />
              View All 195+ Countries
              <ChevronRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Tourism Section - CRAZY DESIGN */}
      <section className="py-24 bg-gradient-to-br from-cyan-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-80 h-80 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-full mb-6 shadow-xl">
              <Plane className="w-6 h-6" />
              <span className="font-bold text-lg">Tourism & Travel</span>
              <Star className="w-6 h-6 animate-spin" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Discover Amazing
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600"> Destinations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore breathtaking places and create unforgettable memories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {tourismDestinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <Card className="overflow-hidden shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 border-4 border-transparent hover:border-cyan-500">
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 text-6xl animate-bounce">{dest.flag}</div>
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-xl">
                      <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      <span className="font-black text-lg">{dest.rating}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white text-3xl font-black mb-2">{dest.name}</h3>
                      <div className="flex justify-between items-center">
                        <p className="text-cyan-200 font-bold">{dest.attractions}</p>
                        <p className="text-white text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">{dest.visitors}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={() => navigate('/countries')}
              size="lg"
              className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-700 hover:via-blue-700 hover:to-purple-700 text-white px-12 py-6 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all"
            >
              <Plane className="mr-2 h-6 w-6" />
              Explore All Destinations
              <ChevronRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section - CRAZY DESIGN */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full mb-6 shadow-xl font-bold">
              <Sparkles className="w-6 h-6" />
              <span className="text-lg">Our Premium Services</span>
              <Rocket className="w-6 h-6" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Everything You Need in
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"> One Place</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive solutions for all your education and travel needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -15, rotate: 3 }}
              >
                <Card className={`p-8 h-full bg-gradient-to-br ${service.color} border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden group`}>
                  <div className="absolute top-2 right-2 bg-white text-black text-xs font-bold px-3 py-1 rounded-full">
                    {service.badge}
                  </div>
                  <motion.div
                    className="text-white mb-4"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-black text-white mb-3">{service.title}</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-white">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <span className="font-semibold">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => navigate('/visa-services')}
                    className="w-full mt-6 bg-white text-gray-900 hover:bg-gray-100 font-bold shadow-xl"
                  >
                    Learn More
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Features Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20"
              >
                <div className="text-yellow-400 mb-3 flex justify-center">{feature.icon}</div>
                <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full mb-6 shadow-xl">
              <MessageSquare className="w-6 h-6" />
              <span className="font-bold text-lg">Join Our Community</span>
              <Users className="w-6 h-6" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Connect with
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600"> 50,000+ Students</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Share experiences, find travel companions, and get advice from people who've been there
            </p>

            <Button
              onClick={() => navigate('/community')}
              size="lg"
              className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white px-16 py-8 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all"
            >
              <Users className="mr-3 h-7 w-7" />
              Join Community Now
              <ArrowRight className="ml-3 h-7 w-7" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=1920')] opacity-10 bg-cover bg-center"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-8"
            >
              <Rocket className="w-20 h-20 text-yellow-400" />
            </motion.div>
            <h2 className="text-6xl md:text-7xl font-black mb-8">
              Ready to Start Your
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"> Dream Journey?</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
              Join 50,000+ students who have made their dreams a reality
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                onClick={() => navigate('/countries')}
                size="lg"
                className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-black font-black px-12 py-8 text-xl rounded-full shadow-2xl transform hover:scale-110 transition-all"
              >
                <Sparkles className="mr-2 h-6 w-6" />
                Get Started Now
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-3xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                SlotPilot
              </h3>
              <p className="text-gray-400">Your passport to seamless education and travel experiences worldwide</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => navigate('/countries')} className="text-gray-400 hover:text-white transition-colors">Countries</button></li>
                <li><button onClick={() => navigate('/visa-services')} className="text-gray-400 hover:text-white transition-colors">Visa Services</button></li>
                <li><button onClick={() => navigate('/community')} className="text-gray-400 hover:text-white transition-colors">Community</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Services</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Education Consulting</li>
                <li className="text-gray-400">Travel Planning</li>
                <li className="text-gray-400">Visa Assistance</li>
                <li className="text-gray-400">Scholarship Help</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">About Us</li>
                <li className="text-gray-400">Privacy Policy</li>
                <li className="text-gray-400">Terms of Service</li>
                <li className="text-gray-400">Contact Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} SlotPilot. All rights reserved. Made with ❤️ for students worldwide</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
