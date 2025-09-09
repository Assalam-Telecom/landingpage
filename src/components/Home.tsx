import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  Wifi, 
  Phone, 
  Tv, 
  CreditCard, 
  Shield, 
  Zap, 
  Users, 
  Star,
  ArrowRight,
  CheckCircle,
  Download,
  Play,
  Clock,
  TrendingUp,
  Battery,
  WifiIcon,
  Signal,
  Menu,
  X,
  Award
} from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: <Wifi className="w-8 h-8 text-blue-600" />,
      title: "Data Bundles",
      description: "Affordable data plans for all networks",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Phone className="w-8 h-8 text-green-600" />,
      title: "Airtime Top-up",
      description: "Recharge any Nigerian number instantly",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: <Tv className="w-8 h-8 text-purple-600" />,
      title: "Cable Subscriptions",
      description: "Pay for DSTV, GOTV seamlessly",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-orange-600" />,
      title: "Bill Payments",
      description: "Settle utility bills easily",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const floatingCards = [
    {
      title: "Data Bundle Active",
      subtitle: "Daily • 2GB remaining",
      status: "Active",
      icon: <WifiIcon className="w-5 h-5" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Total Savings",
      subtitle: "₦2,450.00",
      status: "This month",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Airtime Balance",
      subtitle: "₦1,250.00",
      status: "MTN • 0803***4567",
      icon: <Phone className="w-5 h-5" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  const stats = [
    { 
      number: "500K+", 
      label: "Happy Customers", 
      description: "Serving customers across Nigeria",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    { 
      number: "99.9%", 
      label: "Uptime", 
      description: "Reliable service delivery",
      icon: <Shield className="w-8 h-8 text-green-600" />,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    { 
      number: "5+", 
      label: "Years Experience", 
      description: "Proven track record",
      icon: <Award className="w-8 h-8 text-purple-600" />,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    },
    { 
      number: "24/7", 
      label: "Support", 
      description: "Always here to help",
      icon: <Clock className="w-8 h-8 text-orange-600" />,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <span className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 tracking-tight">
                Assalam Telecom
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-blue-600 font-medium px-3 py-2">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 px-3 py-2 transition-colors duration-200">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 transition-colors duration-200">Contact</Link>
              <a href="https://www.assalamtelecom.com.ng/login" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 px-3 py-2 transition-colors duration-200">Sign In</a>
              <a href="https://www.assalamtelecom.com.ng/register" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
              <div className="px-4 py-6 space-y-4">
                <Link 
                  to="/" 
                  className="block text-blue-600 font-medium px-3 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="block text-gray-600 hover:text-blue-600 px-3 py-2 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className="block text-gray-600 hover:text-blue-600 px-3 py-2 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <a 
                  href="https://www.assalamtelecom.com.ng/login" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-blue-600 px-3 py-2 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </a>
                <a 
                  href="https://www.assalamtelecom.com.ng/register" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-200 text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 lg:pb-32 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Circles */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-green-200/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-60 right-1/3 w-14 h-14 bg-orange-200/20 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          
          {/* Floating Geometric Shapes */}
          <div className="absolute top-32 right-10 w-8 h-8 bg-blue-300/30 rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
          <div className="absolute bottom-40 right-1/4 w-6 h-6 bg-purple-300/30 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-80 left-1/3 w-10 h-10 bg-green-300/30 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          
          {/* Gradient Orbs */}
          <div className="absolute top-24 right-1/2 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2.5s'}}></div>
          <div className="absolute bottom-20 left-1/2 w-24 h-24 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1 text-center lg:text-left">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Buy & Sell Mobile Services{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Instantly
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Nigeria's leading platform for buying and selling data bundles, airtime, cable subscriptions, and bill payments. 
                  Fast, secure, and reliable mobile services at your fingertips.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#" className="group">
                  <img
                    src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred_2x.png"
                    alt="Download on App Store"
                    className="h-12 sm:h-14 lg:h-16 group-hover:scale-105 transition-transform duration-200 mx-auto"
                  />
                </a>
                <a href="#" className="group">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="h-12 sm:h-14 lg:h-16 group-hover:scale-105 transition-transform duration-200 mx-auto"
                  />
                </a>
              </div>
            </div>

            {/* Floating Cards and Mobile Mockups - Hidden on mobile, visible on larger screens */}
            <div className="relative order-1 lg:order-2 hidden lg:block">
              {/* Floating Cards - Hidden on mobile, visible on larger screens */}
              <div className="hidden lg:block absolute -top-8 -left-8 z-10">
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 w-64">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                        <WifiIcon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Data Bundle Sale</h3>
                        <p className="text-sm text-gray-500">2GB • MTN • ₦500</p>
                      </div>
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Sold
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block absolute top-16 -right-8 z-10">
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 w-64">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Today's Earnings</h3>
                        <p className="text-2xl font-bold text-green-600">₦12,450.00</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">From 24 sales</p>
                </div>
              </div>

              <div className="hidden lg:block absolute -bottom-8 -left-4 z-10">
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 w-64">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                        <Phone className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Airtime Sale</h3>
                        <p className="text-2xl font-bold text-purple-600">₦1,250.00</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">Airtel • 0803***4567</p>
                </div>
              </div>

              {/* Mobile Mockup - Responsive sizing */}
              <div className="relative mx-auto w-64 sm:w-72 lg:w-80 h-[500px] sm:h-[550px] lg:h-[600px] bg-gray-900 rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-1.5 sm:p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-4 sm:px-6 py-2 sm:py-3 bg-white border-b border-gray-100">
                    <span className="text-xs sm:text-sm font-semibold text-gray-900">9:41</span>
                    <div className="flex items-center space-x-1">
                      <Signal className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                      <WifiIcon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                      <Battery className="w-4 h-2 sm:w-6 sm:h-3 text-gray-600" />
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                    <div className="text-center">
                      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Assalam Telecom</h2>
                      <p className="text-gray-600 text-xs sm:text-sm">Buy & Sell Mobile Services</p>
                    </div>
                    
                    <div className="space-y-3 sm:space-y-4">
                      <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Data Bundle Sale</h3>
                            <p className="text-xs sm:text-sm text-gray-600">2GB • MTN • ₦500</p>
                          </div>
                          <div className="bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                            Sold
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Airtime Sale</h3>
                            <p className="text-xs sm:text-sm text-gray-600">₦1,250.00 • Airtel</p>
                          </div>
                          <div className="bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                            Sold
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-purple-50 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Cable Sale</h3>
                            <p className="text-xs sm:text-sm text-gray-600">DSTV Premium • ₦15,000</p>
                          </div>
                          <div className="bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                            Sold
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Trusted by <span className="text-blue-600">Thousands</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our numbers speak for themselves. Join the growing community of satisfied users.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="text-center">
                  <div className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200`}>
                    {stat.icon}
                  </div>
                  <div className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}>
                    {stat.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.label}</h3>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Buy and sell data bundles, airtime, cable subscriptions, and bill payments with ease. 
              Fast, secure, and reliable transactions every time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center group border border-gray-100"
              >
                <div className={`w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-200`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">
            Start Buying & Selling Today
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Join thousands of users buying and selling mobile services. Create your account and start trading in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <a
              href="https://www.assalamtelecom.com.ng/register"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <span>Start Trading</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="group">
                <img
                  src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred_2x.png"
                  alt="Download on App Store"
                  className="h-12 sm:h-14 lg:h-16 group-hover:scale-105 transition-transform duration-200"
                />
              </a>
              <a href="#" className="group">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-12 sm:h-14 lg:h-16 group-hover:scale-105 transition-transform duration-200"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Smartphone className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <span className="text-lg sm:text-xl lg:text-2xl font-bold">Assalam Telecom</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Your trusted partner for all mobile services in Nigeria. 
                Making telecommunications accessible and affordable for everyone.
              </p>
            </div>
            
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Services</h3>
              <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
                <li><a href="#" className="hover:text-white transition-colors">Data Bundles</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Airtime Top-up</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cable Subscriptions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bill Payments</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Company</h3>
              <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact Info</h3>
              <div className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
                <p>Batagarawa, Katsina</p>
                <p>Katsina State, Nigeria</p>
                <p>+234 814 352 9716</p>
                <p>Info@assalamtelecom.com.ng</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
            <p>&copy; 2025 Assalam Telecom. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
