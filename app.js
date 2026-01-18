import React, { useState } from 'react';
import { Phone, MessageCircle, Laptop, Sun, Battery, Home, Wrench, ShoppingCart, MapPin, Clock, Mail, Menu, X, ChevronRight } from 'lucide-react';

const TechPowerWebsite = () => {
  const [activeNav, setActiveNav] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'shop', label: 'Shop' },
    { id: 'projects', label: 'Projects' },
    { id: 'support', label: 'Support' },
    { id: 'contact', label: 'Contact' }
  ];

  const services = [
    {
      icon: <Laptop className="w-8 h-8" />,
      title: 'Laptop Repair & Sales',
      description: 'Professional laptop repairs, upgrades, and genuine device sales with warranty',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: 'Solar Installation',
      description: 'Complete solar power systems for homes and businesses with expert installation',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: 'Inverters & Batteries',
      description: 'Quality inverter systems and deep cycle batteries for reliable backup power',
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Smart Home Setup',
      description: 'Smart doors, automated systems, and intelligent home solutions',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Computer Services',
      description: 'Desktop repair, software installation, network setup, and IT support',
      color: 'bg-gray-50 text-gray-600'
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'Tech Accessories',
      description: 'Genuine chargers, cables, cases, mice, keyboards, and all computer accessories',
      color: 'bg-indigo-50 text-indigo-600'
    }
  ];

  const featuredProducts = [
    { name: 'HP Pavilion 15', price: '₦285,000', category: 'Laptop', image: '💻' },
    { name: 'Dell XPS 13', price: '₦420,000', category: 'Laptop', image: '💻' },
    { name: '5KVA Inverter', price: '₦195,000', category: 'Power', image: '🔋' },
    { name: '200Ah Battery', price: '₦125,000', category: 'Power', image: '🔋' },
    { name: 'Smart Door Lock', price: '₦45,000', category: 'Smart Home', image: '🚪' },
    { name: 'Solar Panel 300W', price: '₦68,000', category: 'Solar', image: '☀️' }
  ];

  const projects = [
    { title: '5KW Solar Installation', location: 'Ikot Ekpene Road, Uyo', type: 'Residential' },
    { title: 'Office Network Setup', location: 'Aka Road, Uyo', type: 'Commercial' },
    { title: 'Smart Home Automation', location: 'Housing Estate, Uyo', type: 'Residential' }
  ];

  const serviceDetails = {
    computer: [
      { name: 'Laptop Screen Replacement', included: 'Genuine parts, installation, testing' },
      { name: 'Hardware Upgrades', included: 'RAM, SSD, battery replacement with warranty' },
      { name: 'Software Installation', included: 'OS installation, drivers, antivirus setup' },
      { name: 'Data Recovery', included: 'Professional recovery, backup solutions' }
    ],
    power: [
      { name: 'Solar System Design', included: 'Site survey, load calculation, installation' },
      { name: 'Inverter Installation', included: 'Sizing, wiring, battery connection, testing' },
      { name: 'Battery Bank Setup', included: 'Deep cycle batteries, proper configuration' },
      { name: 'System Maintenance', included: 'Regular checks, panel cleaning, troubleshooting' }
    ],
    smart: [
      { name: 'Smart Door Systems', included: 'Fingerprint, keypad, remote access locks' },
      { name: 'Home Automation', included: 'Lighting control, security cameras, sensors' },
      { name: 'Voice Control Setup', included: 'Smart speakers, device integration' },
      { name: 'CCTV Installation', included: 'HD cameras, recording, remote monitoring' }
    ]
  };

  const shopCategories = [
    { name: 'Laptops', count: 24, icon: '💻' },
    { name: 'Accessories', count: 48, icon: '🖱️' },
    { name: 'Inverters', count: 12, icon: '⚡' },
    { name: 'Batteries', count: 15, icon: '🔋' }
  ];

  const renderHome = () => (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Buy Tech. Fix Tech. Power Homes. Make Spaces Smart.
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Your trusted local partner for laptop sales and repair, solar power installation, inverter systems, and smart home solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+2348012345678" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition">
              <Phone className="w-5 h-5" />
              Call Now: 0801 234 5678
            </a>
            <a href="https://wa.me/2348012345678" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-100 text-slate-900 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="text-blue-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Learn More <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center text-6xl">
                  {product.image}
                </div>
                <div className="p-4">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {product.category}
                  </span>
                  <h3 className="font-semibold text-lg mt-2 text-slate-900">{product.name}</h3>
                  <p className="text-2xl font-bold text-green-600 mt-2">{product.price}</p>
                  <a href="https://wa.me/2348012345678" target="_blank" rel="noopener noreferrer" className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition">
                    <MessageCircle className="w-4 h-4" />
                    Order via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Recent Installations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-slate-900">{project.title}</h3>
                <p className="text-gray-600 text-sm flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </p>
                <span className="inline-block text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded mt-2">
                  {project.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for professional service, quality products, and expert installation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+2348012345678" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition">
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
            <a href="#contact" onClick={() => setActiveNav('contact')} className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Get a Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );

  const renderAbout = () => (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-slate-900">About Klemzo Resources</h1>
        <div className="prose max-w-none text-gray-700 space-y-4">
          <p className="text-lg">
            Klemzo Resources is your trusted local partner for technology and energy services. We combine expertise in computer repair, laptop sales, solar power installation, and smart home automation to provide comprehensive solutions for homes and businesses.
          </p>
          <p>
            Since our establishment, we have served hundreds of satisfied customers across Uyo, Akwa Ibom State and surrounding areas. Our team of certified technicians and engineers bring years of experience in both technology services and renewable energy systems.
          </p>
          <p>
            We believe in quality service, transparent pricing, and long-term customer relationships. Whether you need a laptop repaired, a solar system installed, or your home automated, we provide professional service you can trust.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-600 mb-2">100+</div>
            <div className="text-gray-600">Installations</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderServices = () => (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-slate-900 text-center">Our Services</h1>
        
        <div className="space-y-12">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center">
                <Laptop className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Computer & Laptop Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceDetails.computer.map((service, idx) => (
                <div key={idx} className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2 text-slate-900">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">Included: {service.included}</p>
                  <a href="https://wa.me/2348012345678" className="text-blue-600 font-semibold text-sm flex items-center gap-1">
                    Request Service <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-100 text-green-600 w-12 h-12 rounded-lg flex items-center justify-center">
                <Sun className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Power & Energy Systems</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceDetails.power.map((service, idx) => (
                <div key={idx} className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2 text-slate-900">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">Included: {service.included}</p>
                  <a href="https://wa.me/2348012345678" className="text-green-600 font-semibold text-sm flex items-center gap-1">
                    Request Service <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Smart Home Solutions</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceDetails.smart.map((service, idx) => (
                <div key={idx} className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2 text-slate-900">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">Included: {service.included}</p>
                  <a href="https://wa.me/2348012345678" className="text-purple-600 font-semibold text-sm flex items-center gap-1">
                    Request Service <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderShop = () => (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-slate-900 text-center">Shop Products</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {shopCategories.map((cat, idx) => (
            <button key={idx} className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg p-6 text-center transition">
              <div className="text-4xl mb-2">{cat.icon}</div>
              <div className="font-semibold text-slate-900">{cat.name}</div>
              <div className="text-sm text-gray-600">{cat.count} items</div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center text-6xl">
                {product.image}
              </div>
              <div className="p-4">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {product.category}
                </span>
                <h3 className="font-semibold text-lg mt-2 text-slate-900">{product.name}</h3>
                <p className="text-2xl font-bold text-green-600 mt-2">{product.price}</p>
                <div className="mt-4 space-y-2">
                  <a href="https://wa.me/2348012345678" target="_blank" rel="noopener noreferrer" className="block w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold text-center transition">
                    Order via WhatsApp
                  </a>
                  <button className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 py-2 rounded-lg font-semibold transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-slate-900 text-center">Our Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...projects, ...projects].map((project, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="bg-gradient-to-br from-blue-100 to-green-100 h-48 flex items-center justify-center">
                <span className="text-6xl">📸</span>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                  {project.type}
                </span>
                <h3 className="font-semibold text-lg mt-3 text-slate-900">{project.title}</h3>
                <p className="text-gray-600 text-sm flex items-center gap-2 mt-2">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSupport = () => (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-slate-900 text-center">Customer Support</h1>
        <p className="text-center text-gray-600 mb-12">We're here to help with any questions or issues</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 text-slate-900">Common Questions</h3>
            <div className="space-y-3">
              <div className="border-b border-gray-100 pb-3">
                <p className="font-semibold text-sm text-slate-900">Do you offer warranty?</p>
                <p className="text-sm text-gray-600 mt-1">Yes, all repairs and products come with warranty coverage</p>
              </div>
              <div className="border-b border-gray-100 pb-3">
                <p className="font-semibold text-sm text-slate-900">How long does solar installation take?</p>
                <p className="text-sm text-gray-600 mt-1">Typical residential installation takes 1-3 days depending on system size</p>
              </div>
              <div className="pb-3">
                <p className="font-semibold text-sm text-slate-900">Do you provide after-sales support?</p>
                <p className="text-sm text-gray-600 mt-1">Yes, we offer ongoing support and maintenance services</p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 text-slate-900">Contact Support</h3>
            <div className="space-y-3">
              <a href="tel:+2348012345678" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <Phone className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="text-sm font-semibold text-slate-900">Call Us</div>
                  <div className="text-sm text-gray-600">0801 234 5678</div>
                </div>
              </a>
              <a href="https://wa.me/2348012345678" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <MessageCircle className="w-5 h-5 text-green-600" />
                <div>
                  <div className="text-sm font-semibold text-slate-900">WhatsApp</div>
                  <div className="text-sm text-gray-600">Fast response guaranteed</div>
                </div>
              </a>
                              <a href="mailto:info@klemzoresources.com" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <Mail className="w-5 h-5 text-purple-600" />
                <div>
                  <div className="text-sm font-semibold text-slate-900">Email</div>
                  <div className="text-sm text-gray-600">info@klemzoresources.com</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-slate-900 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="bg-white rounded-lg p-8 shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-6 text-slate-900">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Phone</div>
                    <a href="tel:+2348012345678" className="text-blue-600 hover:underline">0801 234 5678</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 text-green-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">WhatsApp</div>
                    <a href="https://wa.me/2348012345678" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Chat with us</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 text-purple-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Email</div>
                    <a href="mailto:info@klemzoresources.com" className="text-purple-600 hover:underline">info@klemzoresources.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 text-red-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Address</div>
                    <p className="text-gray-600">Uyo, Akwa Ibom State, Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 text-yellow-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Business Hours</div>
                    <p className="text-gray-600">Mon - Sat: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto text-gray-600 mb-2" />
                <p className="text-gray-700">Google Maps Integration</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-900">Full Name</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-900">Phone Number</label>
                <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="0801 234 5678" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-900">Email</label>
                <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-900">Service Needed</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select a service</option>
                  <option>Laptop Repair</option>
                  <option>Solar Installation</option>
                  <option>Inverter System</option>
                  <option>Smart Home Setup</option>
                  <option>Product Purchase</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-900">Message</label>
                <textarea rows="4" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us how we can help..."></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeNav) {
      case 'home': return renderHome();
      case 'about': return renderAbout();
      case 'services': return renderServices();
      case 'shop': return renderShop();
      case 'projects': return renderProjects();
      case 'support': return renderSupport();
      case 'contact': return renderContact();
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">KR</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Klemzo Resources</h1>
              <p className="text-xs text-gray-600">Tech • Solar • Smart</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`font-semibold transition ${
                  activeNav === item.id
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-600 hover:text-blue-600"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-gray-200 bg-white">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveNav(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 font-semibold transition ${
                  activeNav === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main>
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Klemzo Resources</h3>
            <p className="text-gray-400 text-sm">Your trusted partner for technology and energy solutions</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <button onClick={() => setActiveNav('about')} className="block text-gray-400 hover:text-white transition">About Us</button>
              <button onClick={() => setActiveNav('services')} className="block text-gray-400 hover:text-white transition">Services</button>
              <button onClick={() => setActiveNav('shop')} className="block text-gray-400 hover:text-white transition">Shop</button>
              <button onClick={() => setActiveNav('contact')} className="block text-gray-400 hover:text-white transition">Contact</button>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Laptop Repair & Sales</p>
              <p>Solar Installation</p>
              <p>Inverter Systems</p>
              <p>Smart Home Setup</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>0801 234 5678</p>
              <p>info@klemzoresources.com</p>
              <p>Uyo, Akwa Ibom State</p>
              <p>Nigeria</p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; 2026 Klemzo Resources. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/2348012345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

export default TechPowerWebsite;
