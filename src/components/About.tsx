import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Users, Award, Target, Heart, Shield, Zap, Globe, CheckCircle, ArrowRight } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Heart className="w-6 h-6 text-blue-600" />,
      title: "Customer First",
      description: "We put our customers at the heart of everything we do, ensuring exceptional service and support."
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Trust & Security",
      description: "Your trust is our foundation. We maintain the highest standards of security and transparency."
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-600" />,
      title: "Innovation",
      description: "We continuously innovate to bring you the latest and most efficient mobile service solutions."
    },
    {
      icon: <Globe className="w-6 h-6 text-orange-600" />,
      title: "Accessibility",
      description: "Making mobile services accessible and affordable for everyone across Nigeria."
    }
  ];

  const achievements = [
    { number: "500K+", label: "Happy Customers", description: "Serving customers across Nigeria" },
    { number: "5+", label: "Years Experience", description: "Proven track record in telecom" },
    { number: "99.9%", label: "Uptime", description: "Reliable service delivery" },
    { number: "24/7", label: "Support", description: "Always here to help" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-soft-orange-500 to-blue-green-500 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-soft-orange-600 to-blue-green-600 bg-clip-text text-transparent">
                Assalam Telecom
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className="text-gray-600 hover:text-soft-orange-600 px-3 py-2 rounded-lg hover:bg-soft-orange-50 transition-all duration-200"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-soft-orange-600 px-3 py-2 rounded-lg bg-soft-orange-50"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-soft-orange-600 px-3 py-2 rounded-lg hover:bg-soft-orange-50 transition-all duration-200"
              >
                Contact
              </Link>
              <Link
                to="/signin"
                className="text-gray-600 hover:text-soft-orange-600 px-3 py-2 rounded-lg hover:bg-soft-orange-50 transition-all duration-200"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-gradient-to-r from-soft-orange-500 to-blue-green-500 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              About <span className="text-blue-600">Assalam Telecom</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Empowering communities across Nigeria with reliable, affordable, and innovative mobile services since our inception in Batagarawa, Katsina State.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Founded in the heart of Batagarawa, Katsina State, we began with a simple yet powerful vision.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Assalam Telecom began with a simple yet powerful vision: to make mobile services accessible and affordable for every Nigerian, regardless of their location or economic status.
              </p>
              <p>
                What started as a small telecommunications service provider has grown into a trusted platform serving thousands of customers across Nigeria. Our journey has been driven by our commitment to innovation, customer satisfaction, and community empowerment.
              </p>
              <p>
                Today, we're proud to offer a comprehensive suite of mobile services including data bundles, airtime top-ups, cable subscriptions, and bill payments - all through our user-friendly platform that puts convenience at your fingertips.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{achievement.number}</div>
                    <div className="font-semibold text-gray-900 mb-1">{achievement.label}</div>
                    <div className="text-sm text-gray-600">{achievement.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To democratize access to mobile services across Nigeria by providing reliable, affordable, and innovative telecommunications solutions that empower individuals and businesses to thrive in the digital age.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To become Nigeria's leading mobile services platform, recognized for our commitment to customer satisfaction, technological innovation, and positive impact on communities across the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Join Our Journey
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Be part of the telecommunications revolution. Download our app and experience the future of mobile services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/signup"
              className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="group">
                <img
                  src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred_2x.png"
                  alt="Download on App Store"
                  className="h-16 group-hover:scale-105 transition-transform duration-200"
                />
              </a>
              <a href="#" className="group">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-16 group-hover:scale-105 transition-transform duration-200"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}