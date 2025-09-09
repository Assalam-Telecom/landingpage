import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Shield, Eye, Lock, FileText, Users, Globe, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-black text-gray-900 tracking-tight">
                Assalam Telecom
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200"
              >
                Contact
              </Link>
              <a
                href="https://www.assalamtelecom.com.ng/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200"
              >
                Sign In
              </a>
              <a
                href="https://www.assalamtelecom.com.ng/register"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Privacy <span className="text-blue-600">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your privacy is our priority. Learn how we collect, use, and protect your personal information in compliance with Nigerian data protection laws and Google Play Store requirements.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Last updated: December 15, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>Effective immediately</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">1. Introduction</h2>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-6">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Assalam Telecom</strong> ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application, website, and services.
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                This policy complies with the Nigeria Data Protection Act (NDPA) 2023, the Nigerian Communications Commission (NCC) regulations, and Google Play Store requirements. By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Important:</strong> This policy applies to all users of our mobile application and website, regardless of location. We will not use or share your information with anyone except as described in this Privacy Policy.
              </p>
            </div>

            {/* Definitions */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Definitions</h2>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Personal Data</h3>
                    <p className="text-gray-600">Any information relating to an identified or identifiable natural person, including but not limited to name, email address, phone number, and location data.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Data Controller</h3>
                    <p className="text-gray-600">Assalam Telecom, the entity that determines the purposes and means of processing personal data.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Data Processing</h3>
                    <p className="text-gray-600">Any operation performed on personal data, including collection, recording, storage, adaptation, and disclosure.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Sensitive Personal Data</h3>
                    <p className="text-gray-600">Personal data revealing racial or ethnic origin, political opinions, religious beliefs, health status, or biometric data.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">3. Information We Collect</h2>
              </div>
              
              <div className="space-y-8">
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">3.1 Personal Information</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mb-4">
                    <li>Register for an account or create a profile</li>
                    <li>Make a purchase or transaction</li>
                    <li>Contact our customer support</li>
                    <li>Subscribe to our newsletter or notifications</li>
                    <li>Participate in surveys, promotions, or contests</li>
                    <li>Use our mobile application or website</li>
                  </ul>
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Types of Personal Information Collected:</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-medium text-gray-700 mb-2">Identity Information:</h5>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Full name</li>
                          <li>• Email address</li>
                          <li>• Phone number</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-700 mb-2">KYC Information:</h5>
                        <ul className="text-gray-600 space-y-1">
                          <li>• National Identification Number (NIN)</li>
                          <li>• Bank Verification Number (BVN)</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <p className="text-yellow-800 text-xs">
                          <strong>Important:</strong> NIN and BVN are sensitive personal data under Nigerian law. We collect this information only for legitimate KYC purposes and maintain the highest security standards for its protection.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">3.2 Technical Information</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We automatically collect certain technical information about your device and how you interact with our services:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Device Information:</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• Device model and manufacturer</li>
                        <li>• Operating system and version</li>
                        <li>• Unique device identifiers (UDID, IMEI)</li>
                        <li>• Mobile network information</li>
                        <li>• Screen resolution and orientation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Usage Information:</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• IP address and location data</li>
                        <li>• Browser type and version</li>
                        <li>• App usage patterns and features used</li>
                        <li>• Session duration and frequency</li>
                        <li>• Crash reports and error logs</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">3.3 Transaction Information</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    When you make purchases through our platform, we collect transaction details including:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Purchase amount, date, and time</li>
                    <li>Services purchased (data bundles, airtime, cable subscriptions)</li>
                    <li>Payment method used</li>
                    <li>Transaction status and confirmation</li>
                    <li>Refund or cancellation details</li>
                  </ul>
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mt-4">
                    <div className="flex items-start space-x-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <p className="text-yellow-800 text-sm">
                        <strong>Important:</strong> We do not store your complete payment card information. All payment processing is handled by secure third-party payment processors.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">3.4 Location Information</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    With your explicit consent, we may collect location information to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Provide location-based services</li>
                    <li>Verify your identity for security purposes</li>
                    <li>Comply with regulatory requirements</li>
                    <li>Improve service delivery</li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-4">
                    You can control location sharing through your device settings or our app preferences.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">4. How We Use Your Information</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                We use the information we collect for various legitimate business purposes, including:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Delivery & KYC</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Process your transactions and payments</li>
                    <li>• Deliver purchased services (data, airtime, subscriptions)</li>
                    <li>• Verify your identity using NIN and BVN</li>
                    <li>• Comply with regulatory KYC requirements</li>
                    <li>• Provide customer support and assistance</li>
                    <li>• Send service notifications and updates</li>
                    <li>• Manage your account and preferences</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Security & Compliance</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Prevent fraud and unauthorized access</li>
                    <li>• Comply with legal and regulatory requirements</li>
                    <li>• Investigate and resolve security incidents</li>
                    <li>• Verify user identity and authenticity</li>
                    <li>• Maintain service integrity</li>
                  </ul>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Improvement</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Analyze usage patterns and trends</li>
                    <li>• Improve app functionality and features</li>
                    <li>• Develop new products and services</li>
                    <li>• Conduct research and analytics</li>
                    <li>• Optimize user experience</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Communication</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Send marketing communications (with consent)</li>
                    <li>• Provide customer support</li>
                    <li>• Send important service updates</li>
                    <li>• Respond to inquiries and feedback</li>
                    <li>• Notify about policy changes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Legal Basis for Processing */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Legal Basis for Processing</h2>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-600 leading-relaxed mb-4">
                  We process your personal data based on the following legal grounds under the Nigeria Data Protection Act 2023:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Consent</h3>
                      <p className="text-gray-600 text-sm">You have given clear consent for us to process your personal data for specific purposes.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Contract Performance</h3>
                      <p className="text-gray-600 text-sm">Processing is necessary for the performance of a contract with you or to take steps at your request before entering into a contract.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Legal Obligation</h3>
                      <p className="text-gray-600 text-sm">Processing is necessary for compliance with a legal obligation to which we are subject.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Legitimate Interests</h3>
                      <p className="text-gray-600 text-sm">Processing is necessary for our legitimate interests or those of a third party, provided your interests and fundamental rights do not override those interests.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center mr-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">6. Information Sharing and Disclosure</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">6.1 Service Providers</h3>
                  <p className="text-gray-600 mb-3">
                    We may share information with trusted third-party service providers who assist us in operating our platform, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Payment processors (Paystack, Flutterwave)</li>
                    <li>Cloud hosting providers (AWS, Google Cloud)</li>
                    <li>Analytics services (Google Analytics)</li>
                    <li>Customer support platforms</li>
                    <li>Marketing and communication tools</li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-3">
                    All service providers are contractually obligated to protect your information and use it only for the purposes we specify.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">6.2 Legal Requirements</h3>
                  <p className="text-gray-600">
                    We may disclose your information when required by law, regulation, legal process, or governmental request, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 mt-2">
                    <li>Court orders or subpoenas</li>
                    <li>Regulatory investigations</li>
                    <li>National security requirements</li>
                    <li>Tax compliance obligations</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">6.3 Business Transfers</h3>
                  <p className="text-gray-600">
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction. We will notify you of any such change in ownership or control.
                  </p>
                </div>
                
                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">6.4 Emergency Situations</h3>
                  <p className="text-gray-600">
                    We may share information in emergency situations to protect the safety of our users, employees, or the public, or to prevent imminent harm.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">7. Data Security</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Safeguards</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• SSL/TLS encryption for data transmission</li>
                      <li>• AES-256 encryption for data at rest</li>
                      <li>• Secure data centers with 24/7 monitoring</li>
                      <li>• Regular security audits and penetration testing</li>
                      <li>• Multi-factor authentication for admin access</li>
                      <li>• Intrusion detection and prevention systems</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Operational Measures</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Employee training on data protection</li>
                      <li>• Data minimization and purpose limitation</li>
                      <li>• Regular security awareness programs</li>
                      <li>• Incident response and breach notification procedures</li>
                      <li>• Regular backups and disaster recovery plans</li>
                      <li>• Vendor security assessments</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl mt-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-yellow-800 mb-2">Data Breach Notification</h3>
                    <p className="text-yellow-700 text-sm">
                      In the event of a data breach that poses a risk to your rights and freedoms, we will notify you and the relevant authorities within 72 hours of becoming aware of the breach, as required by the Nigeria Data Protection Act 2023.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Retention */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Data Retention</h2>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-600 leading-relaxed mb-4">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Retention Periods:</h3>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li>• <strong>Account Information:</strong> Retained for the duration of your account plus 3 years after closure</li>
                      <li>• <strong>Transaction Records:</strong> Retained for 7 years for tax and regulatory compliance</li>
                      <li>• <strong>Customer Support Records:</strong> Retained for 3 years after resolution</li>
                      <li>• <strong>Marketing Data:</strong> Retained until consent is withdrawn</li>
                      <li>• <strong>Technical Logs:</strong> Retained for 1 year for security purposes</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Deletion Process:</h3>
                    <p className="text-gray-600 text-sm">
                      When data is no longer needed, we securely delete or anonymize it using industry-standard methods. Some data may be retained longer if required by law or for legitimate business purposes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Your Rights and Choices</h2>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Under the Nigeria Data Protection Act 2023, you have certain rights regarding your personal information:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-xl">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Right of Access</h3>
                    <p className="text-gray-600 mb-2">You can request access to your personal data and information about how it's being processed.</p>
                    <p className="text-gray-500 text-sm">Response time: 30 days</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-xl">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Right of Rectification</h3>
                    <p className="text-gray-600 mb-2">You can request correction of inaccurate or incomplete personal data.</p>
                    <p className="text-gray-500 text-sm">Response time: 30 days</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-purple-50 rounded-xl">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Right of Erasure</h3>
                    <p className="text-gray-600 mb-2">You can request deletion of your personal data in certain circumstances.</p>
                    <p className="text-gray-500 text-sm">Response time: 30 days</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-orange-50 rounded-xl">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Right to Data Portability</h3>
                    <p className="text-gray-600 mb-2">You can request a copy of your personal data in a structured, machine-readable format.</p>
                    <p className="text-gray-500 text-sm">Response time: 30 days</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-red-50 rounded-xl">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">5</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Right to Object</h3>
                    <p className="text-gray-600 mb-2">You can object to processing of your personal data for certain purposes, including direct marketing.</p>
                    <p className="text-gray-500 text-sm">Response time: 30 days</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-indigo-50 rounded-xl">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">6</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Right to Withdraw Consent</h3>
                    <p className="text-gray-600 mb-2">You can withdraw consent for data processing at any time where consent is the legal basis.</p>
                    <p className="text-gray-500 text-sm">Response time: 30 days</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl mt-6">
                <h3 className="font-semibold text-blue-900 mb-2">How to Exercise Your Rights</h3>
                <p className="text-blue-800 text-sm mb-3">
                  To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below. We may need to verify your identity before processing your request.
                </p>
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> Some rights may be limited in certain circumstances, such as when we have a legal obligation to retain data or when processing is necessary for legitimate business purposes.
                </p>
              </div>
            </div>

            {/* International Data Transfers */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">10. International Data Transfers</h2>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Some of our service providers may be located outside Nigeria. When we transfer your personal data internationally, we ensure appropriate safeguards are in place:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Standard contractual clauses approved by the Nigeria Data Protection Commission</li>
                  <li>Adequacy decisions by relevant data protection authorities</li>
                  <li>Binding corporate rules for intra-group transfers</li>
                  <li>Certification schemes and codes of conduct</li>
                </ul>
                <p className="text-gray-600 text-sm mt-4">
                  For more information about our international data transfer practices, please contact us using the information provided below.
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Children's Privacy</h2>
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-yellow-800 mb-2">Age Restrictions</h3>
                    <p className="text-yellow-700 mb-3">
                      Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18.
                    </p>
                    <p className="text-yellow-700 text-sm">
                      If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. If we discover that we have collected personal information from a child under 18, we will take steps to delete such information promptly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cookies and Tracking */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">12. Cookies and Tracking Technologies</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-3">Types of Cookies We Use:</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Essential Cookies</h4>
                      <p className="text-gray-600 text-sm">Required for the basic functionality of our website and app. These cannot be disabled.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Analytics Cookies</h4>
                      <p className="text-gray-600 text-sm">Help us understand how visitors interact with our website and app to improve user experience.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Marketing Cookies</h4>
                      <p className="text-gray-600 text-sm">Used to deliver relevant advertisements and track the effectiveness of our marketing campaigns.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-3">Managing Your Cookie Preferences</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    You can control cookies through your browser settings or our app preferences. However, disabling certain cookies may affect the functionality of our services.
                  </p>
                  <p className="text-gray-600 text-sm">
                    For more information about cookies and how to manage them, visit <a href="https://www.allaboutcookies.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Policy Updates */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">13. Changes to This Privacy Policy</h2>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mb-4">
                  <li>Post the updated policy on our website and app</li>
                  <li>Update the "Last updated" date at the top of this policy</li>
                  <li>Notify you via email or in-app notification</li>
                  <li>Obtain your consent for material changes where required by law</li>
                </ul>
                <p className="text-gray-600 text-sm">
                  We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">14. Contact Us</h2>
              <p className="text-blue-100 mb-6">
                If you have any questions about this Privacy Policy, our data practices, or wish to exercise your rights, please contact us:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Data Protection Officer</h3>
                  <div className="space-y-2 text-blue-100">
                <p><strong>Email:</strong> Info@assalamtelecom.com.ng</p>
                <p><strong>Phone:</strong> +234 814 352 9716</p>
                <p><strong>Address:</strong> Batagarawa, Katsina, Katsina State, Nigeria</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">General Inquiries</h3>
                  <div className="space-y-2 text-blue-100">
                    <p><strong>Email:</strong> Info@assalamtelecom.com.ng</p>
                    <p><strong>Phone:</strong> +234 814 352 9716</p>
                    <p><strong>Website:</strong> www.assalamtelecom.com.ng</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-blue-400">
                <p className="text-blue-100 text-sm">
                  <strong>Response Time:</strong> We will respond to your inquiries within 30 days as required by the Nigeria Data Protection Act 2023.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}