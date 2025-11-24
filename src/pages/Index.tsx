import { motion } from 'framer-motion';
import { GraduationCap, Plane, Globe, Users, MessageSquare, Map, Building2, Award, ChevronRight, ArrowRight, Star, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AuthHeader from '@/components/layout/AuthHeader';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Index = () => {
  const navigate = useNavigate();

  const educationDestinations = [
    {
      name: "United States",
      image: "https://images.pexels.com/photos/2346091/pexels-photo-2346091.jpeg?auto=compress&cs=tinysrgb&w=600",
      universities: "200+",
      students: "50,000+"
    },
    {
      name: "United Kingdom",
      image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=600",
      universities: "150+",
      students: "30,000+"
    },
    {
      name: "Canada",
      image: "https://images.pexels.com/photos/2849339/pexels-photo-2849339.jpeg?auto=compress&cs=tinysrgb&w=600",
      universities: "100+",
      students: "40,000+"
    },
    {
      name: "Australia",
      image: "https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=600",
      universities: "80+",
      students: "25,000+"
    }
  ];

  const tourismDestinations = [
    {
      name: "France",
      image: "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=600",
      attractions: "Historic Sites",
      rating: "4.9"
    },
    {
      name: "Italy",
      image: "https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=600",
      attractions: "Culture & Art",
      rating: "4.8"
    },
    {
      name: "Japan",
      image: "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=600",
      attractions: "Modern & Traditional",
      rating: "4.9"
    },
    {
      name: "Spain",
      image: "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=600",
      attractions: "Beach & Architecture",
      rating: "4.7"
    }
  ];

  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Visa Assistance",
      description: "Expert guidance for visa applications with 98% success rate",
      features: ["Document Preparation", "Application Support", "Interview Coaching"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Scholarship Help",
      description: "Find and apply for scholarships worth millions of dollars",
      features: ["Scholarship Search", "Application Review", "Essay Guidance"]
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: "Travel Planning",
      description: "Personalized travel itineraries for your perfect journey",
      features: ["Itinerary Planning", "Accommodation Booking", "Local Guides"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Study Abroad",
      description: "Complete support for your international education journey",
      features: ["University Selection", "Application Process", "Career Counseling"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <AuthHeader />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <span className="bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-blue-400/30">
                Your Global Journey Starts Here
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Explore, Study & Travel
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Across The Globe
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Your comprehensive platform for education, tourism, visa services, and connecting with a global community of travelers and students
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                onClick={() => navigate('/countries')}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all"
              >
                Explore Countries
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => navigate('/community')}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg rounded-full shadow-xl transition-all"
              >
                Join Community
                <Users className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex flex-wrap justify-center gap-8 text-sm"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>195+ Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>1000+ Universities</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>98% Success Rate</span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <GraduationCap className="h-10 w-10 text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-900">Education Opportunities</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover world-class universities and educational programs across the globe
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {educationDestinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">{dest.name}</h3>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Building2 className="h-4 w-4" />
                        {dest.universities} Unis
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {dest.students}
                      </span>
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
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-full"
            >
              View All Education Destinations
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Tourism Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Plane className="h-10 w-10 text-cyan-600" />
              <h2 className="text-4xl font-bold text-gray-900">Tourism & Travel</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore breathtaking destinations and create unforgettable memories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {tourismDestinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold text-sm">{dest.rating}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white text-xl font-bold">{dest.name}</h3>
                      <p className="text-gray-200 text-sm">{dest.attractions}</p>
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
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 rounded-full"
            >
              Discover All Destinations
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Globe className="h-10 w-10 text-slate-600" />
              <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for all your education and travel needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-slate-300 h-full">
                  <div className="bg-slate-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-slate-700">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => navigate('/visa-services')}
              size="lg"
              className="bg-slate-800 hover:bg-slate-900 text-white px-8 rounded-full"
            >
              View All Services
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <MessageSquare className="h-10 w-10 text-green-600" />
              <h2 className="text-4xl font-bold text-gray-900">Join Our Community</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with travelers and students from around the world
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Share Experiences</h3>
                <p className="text-gray-600">Connect with others who've been through similar journeys</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Find Companions</h3>
                <p className="text-gray-600">Meet travel buddies and study partners worldwide</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Advice</h3>
                <p className="text-gray-600">Learn from experienced travelers and students</p>
              </Card>
            </motion.div>
          </div>

          <div className="text-center">
            <Button
              onClick={() => navigate('/community')}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 rounded-full"
            >
              Join Community Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Ready to Start Your Journey?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-300 mb-10 leading-relaxed"
            >
              Join thousands of students and travelers who have made their dreams a reality with our platform
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                onClick={() => navigate('/countries')}
                size="lg"
                className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-6 text-lg rounded-full"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => navigate('/visa-services')}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg rounded-full"
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">SlotPilot</h3>
              <p className="text-gray-400">Your passport to seamless education and travel experiences worldwide</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => navigate('/countries')} className="text-gray-400 hover:text-white transition-colors">Countries</button></li>
                <li><button onClick={() => navigate('/visa-services')} className="text-gray-400 hover:text-white transition-colors">Visa Services</button></li>
                <li><button onClick={() => navigate('/community')} className="text-gray-400 hover:text-white transition-colors">Community</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Education Consulting</li>
                <li className="text-gray-400">Travel Planning</li>
                <li className="text-gray-400">Visa Assistance</li>
                <li className="text-gray-400">Scholarship Help</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">About Us</li>
                <li className="text-gray-400">Privacy Policy</li>
                <li className="text-gray-400">Terms of Service</li>
                <li className="text-gray-400">Contact Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} SlotPilot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
