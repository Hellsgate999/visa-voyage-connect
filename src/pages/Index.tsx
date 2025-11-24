import { motion } from 'framer-motion';
import { GraduationCap, Plane, Globe2, Users, ArrowRight, CheckCircle2, Star, Award, Shield, Sparkles, MapPin, BookOpen, Briefcase, FileText, Clock, UserCheck, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AuthHeader from '@/components/layout/AuthHeader';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Study Abroad",
      description: "Access top universities in 50+ countries",
      stat: "10K+ Students"
    },
    {
      icon: <Plane className="h-6 w-6" />,
      title: "Tourism Visa",
      description: "Explore 195+ destinations hassle-free",
      stat: "99% Success"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Work Abroad",
      description: "Career opportunities in global companies",
      stat: "5K+ Placements"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community",
      description: "Connect with global travelers & students",
      stat: "50K+ Members"
    }
  ];

  const educationCountries = [
    {
      name: "United States",
      image: "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600",
      universities: "200+",
      students: "50K+"
    },
    {
      name: "United Kingdom",
      image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=600",
      universities: "150+",
      students: "30K+"
    },
    {
      name: "Canada",
      image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600",
      universities: "100+",
      students: "40K+"
    }
  ];

  const tourismCountries = [
    {
      name: "France",
      image: "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=600",
      visitors: "89M/year",
      attractions: "Historic Sites"
    },
    {
      name: "Japan",
      image: "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=600",
      visitors: "31M/year",
      attractions: "Culture & Tech"
    },
    {
      name: "Italy",
      image: "https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=600",
      visitors: "64M/year",
      attractions: "Art & History"
    }
  ];

  const workingCountries = [
    {
      name: "Germany",
      image: "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=600",
      opportunities: "5K+ Jobs",
      salary: "€50K+ avg"
    },
    {
      name: "Australia",
      image: "https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=600",
      opportunities: "3K+ Jobs",
      salary: "AU$70K+ avg"
    },
    {
      name: "UAE",
      image: "https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=600",
      opportunities: "8K+ Jobs",
      salary: "Tax-free income"
    }
  ];

  const visaProcessSteps = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Document Verification",
      description: "We check and verify all required documents"
    },
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "Application Filing",
      description: "Expert filing of your visa application"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Status Tracking",
      description: "Real-time updates on application status"
    },
    {
      icon: <CheckCircle2 className="h-8 w-8" />,
      title: "Visa Approval",
      description: "Assistance until you get your visa"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      country: "India",
      text: "Got my UK student visa in just 3 weeks! The guidance was exceptional.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "David Chen",
      country: "China",
      text: "Best platform for visa assistance. Helped me with every single step.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Maria Garcia",
      country: "Mexico",
      text: "Community support is amazing! Connected with students worldwide.",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <AuthHeader />

      <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

        <div className="container mx-auto px-4 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-blue-900 text-sm font-medium">Trusted by 50,000+ Students & Travelers</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              Your Journey to
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Study, Work & Travel Abroad
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Expert visa processing, university guidance, and career support for 195+ countries.
              Start your global journey today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button
                onClick={() => navigate('/countries')}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Explore Countries
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => navigate('/visa-services')}
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-50 px-8 h-14 text-lg font-semibold"
              >
                <Shield className="mr-2 h-5 w-5" />
                Visa Services
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span>99% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full border-2 hover:border-blue-600 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{feature.description}</p>
                  <div className="text-blue-600 font-semibold text-sm">{feature.stat}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
              <GraduationCap className="h-5 w-5 text-blue-600" />
              <span className="text-blue-900 font-semibold text-sm">Education</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Top Study Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Study at world-class universities and get expert guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {educationCountries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border-0">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={country.image}
                      alt={country.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Education
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{country.name}</h3>
                      <div className="flex items-center gap-4 text-white/90 text-sm">
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4" />
                          {country.universities}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {country.students}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-cyan-100 rounded-full px-4 py-2 mb-4">
              <Plane className="h-5 w-5 text-cyan-600" />
              <span className="text-cyan-900 font-semibold text-sm">Tourism</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Travel Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore breathtaking destinations with hassle-free visa processing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {tourismCountries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border-0">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={country.image}
                      alt={country.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Tourism
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{country.name}</h3>
                      <div className="space-y-1 text-white/90 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {country.visitors}
                        </div>
                        <div>{country.attractions}</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 mb-4">
              <Briefcase className="h-5 w-5 text-green-600" />
              <span className="text-green-900 font-semibold text-sm">Work Abroad</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Global Career Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Build your career in top companies worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {workingCountries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border-0">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={country.image}
                      alt={country.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Work
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{country.name}</h3>
                      <div className="space-y-1 text-white/90 text-sm">
                        <div className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          {country.opportunities}
                        </div>
                        <div>{country.salary}</div>
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
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 h-12"
            >
              View All Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Visa Processing Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, transparent, and efficient visa processing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {visaProcessSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className="p-6 text-center border-2 hover:border-blue-600 hover:shadow-lg transition-all">
                  <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </Card>
                {index < visaProcessSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200"></div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => navigate('/visa-services')}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 h-14 text-lg font-semibold"
            >
              Start Visa Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied students and travelers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-6 h-full border-2 hover:border-blue-600 transition-all">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.country}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-4">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-blue-100 text-lg mb-6">
                  Get free consultation from our visa experts and take the first step towards your dream destination.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                    <span>Free initial consultation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                    <span>Expert guidance at every step</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                    <span>99% visa success rate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                    <span>Support until you reach your destination</span>
                  </li>
                </ul>
                <Button
                  onClick={() => navigate('/visa-services')}
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 h-14 text-lg font-semibold"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <Globe2 className="h-10 w-10 mb-3 text-cyan-300" />
                  <div className="text-3xl font-bold mb-1">195+</div>
                  <div className="text-blue-100 text-sm">Countries Covered</div>
                </Card>
                <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <Users className="h-10 w-10 mb-3 text-cyan-300" />
                  <div className="text-3xl font-bold mb-1">50K+</div>
                  <div className="text-blue-100 text-sm">Happy Clients</div>
                </Card>
                <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <Award className="h-10 w-10 mb-3 text-cyan-300" />
                  <div className="text-3xl font-bold mb-1">99%</div>
                  <div className="text-blue-100 text-sm">Success Rate</div>
                </Card>
                <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <Shield className="h-10 w-10 mb-3 text-cyan-300" />
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-blue-100 text-sm">Support Available</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Globe2 className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">GlobalVisa</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted partner for education abroad, work opportunities, and international travel.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="hover:text-white cursor-pointer transition-colors">Study Abroad</div>
                <div className="hover:text-white cursor-pointer transition-colors">Tourism Visa</div>
                <div className="hover:text-white cursor-pointer transition-colors">Work Visa</div>
                <div className="hover:text-white cursor-pointer transition-colors">Visa Processing</div>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div onClick={() => navigate('/countries')} className="hover:text-white cursor-pointer transition-colors">Countries</div>
                <div onClick={() => navigate('/visa-services')} className="hover:text-white cursor-pointer transition-colors">Visa Services</div>
                <div onClick={() => navigate('/community')} className="hover:text-white cursor-pointer transition-colors">Community</div>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Email: info@globalvisa.com</div>
                <div>Phone: +1 (555) 123-4567</div>
                <div>24/7 Support Available</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 GlobalVisa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
