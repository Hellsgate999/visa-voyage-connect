import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Plane, Globe, Users, MessageSquare, ArrowRight, Shield, Zap, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import AuthModal from '@/components/layout/AuthModal';

const Index = () => {
  const navigate = useNavigate();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  const openAuthModal = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const features = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Study Abroad",
      description: "Access top universities worldwide with expert guidance",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: "Tourism Visa",
      description: "Explore dream destinations with hassle-free visa services",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Visa Assistance",
      description: "Complete visa processing support from application to approval",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Community",
      description: "Connect with students and travelers worldwide",
      color: "from-green-500 to-teal-500"
    }
  ];

  const stats = [
    { number: "50K+", label: "Students Helped" },
    { number: "100+", label: "Countries Covered" },
    { number: "99%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">GlobalVisa</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => navigate('/countries')} className="text-gray-300 hover:text-white transition-colors">
                Countries
              </button>
              <button onClick={() => navigate('/visa-services')} className="text-gray-300 hover:text-white transition-colors">
                Services
              </button>
              <button onClick={() => navigate('/community')} className="text-gray-300 hover:text-white transition-colors">
                Community
              </button>
            </div>

            <div className="flex items-center gap-3">
              <Button
                onClick={() => openAuthModal('signin')}
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                Sign In
              </Button>
              <Button
                onClick={() => openAuthModal('signup')}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1920')] opacity-5 bg-cover bg-center"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Your Gateway to the World</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Study & Travel
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Around the World
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Your trusted partner for education abroad and international travel.
              Get expert visa assistance and connect with a global community.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => navigate('/countries')}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg"
              >
                Explore Countries
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => openAuthModal('signup')}
                size="lg"
                variant="outline"
                className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                Sign Up Free
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Everything You Need in One Place
            </h2>
            <p className="text-xl text-gray-400">
              Comprehensive services for your global journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group cursor-pointer">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-500/20 backdrop-blur-lg p-12">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join thousands of students and travelers who trust us
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  <div className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>Free Consultation</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>Expert Guidance</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>24/7 Support</span>
                  </div>
                </div>

                <Button
                  onClick={() => openAuthModal('signup')}
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-6 text-lg font-bold"
                >
                  Create Free Account
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900/80 border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Globe className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold text-white">GlobalVisa</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted partner for education abroad and international travel.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button onClick={() => navigate('/countries')} className="block text-gray-400 hover:text-white transition-colors">
                  Countries
                </button>
                <button onClick={() => navigate('/visa-services')} className="block text-gray-400 hover:text-white transition-colors">
                  Visa Services
                </button>
                <button onClick={() => navigate('/community')} className="block text-gray-400 hover:text-white transition-colors">
                  Community
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Services</h3>
              <div className="space-y-2">
                <div className="text-gray-400">Study Abroad</div>
                <div className="text-gray-400">Tourism Visa</div>
                <div className="text-gray-400">Visa Consultation</div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <div>Email: info@globalvisa.com</div>
                <div>Phone: +1 (555) 123-4567</div>
                <div>24/7 Support Available</div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
            © 2024 GlobalVisa. All rights reserved.
          </div>
        </div>
      </footer>

      <AuthModal
        open={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
      />
    </div>
  );
};

export default Index;
