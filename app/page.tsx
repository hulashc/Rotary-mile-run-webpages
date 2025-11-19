'use client';

import { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Heart, Award, ChevronRight, Clock, Target } from 'lucide-react';

export default function WalkAMileForPolio() {
  const [scrolled, setScrolled] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    // Calculate days until October 2026 event
    const eventDate = new Date('2026-10-24');
    const today = new Date();
    const diffTime = Math.abs(eventDate - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysLeft(diffDays);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="font-bold text-xl text-gray-800">Rotary Leicester</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition">About</a>
            <a href="#impact" className="text-gray-700 hover:text-purple-600 transition">Impact</a>
            <a href="#details" className="text-gray-700 hover:text-purple-600 transition">Event Details</a>
          </div>
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition transform hover:scale-105">
            Register Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-500/10 -z-10"></div>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                🏃‍♀️ Annual Charity Event
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Walk a Mile for
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"> Polio</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join Rotary Leicester in taking the final steps towards a polio-free world. Every mile walked brings hope to children everywhere[web:3][web:4].
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105 flex items-center">
                  Join the Walk <ChevronRight className="ml-2" />
                </button>
                <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold border-2 border-purple-600 hover:bg-purple-50 transition">
                  Donate Now
                </button>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white"></div>
                  ))}
                </div>
                <p className="text-gray-600"><span className="font-bold text-purple-600">200+</span> walkers joined last year</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl">
                    <Calendar className="w-8 h-8 text-purple-600" />
                    <div>
                      <p className="text-sm text-gray-600">Date</p>
                      <p className="font-bold text-gray-900">October 2026</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-pink-50 rounded-xl">
                    <MapPin className="w-8 h-8 text-pink-600" />
                    <div>
                      <p className="text-sm text-gray-600">Location</p>
                      <p className="font-bold text-gray-900">Leicester City Centre</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl">
                    <Clock className="w-8 h-8 text-purple-600" />
                    <div>
                      <p className="text-sm text-gray-600">Time</p>
                      <p className="font-bold text-gray-900">10:00 AM Start</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-6 rounded-xl text-white text-center">
                    <p className="text-sm opacity-90">Event Countdown</p>
                    <p className="text-4xl font-bold">{daysLeft}</p>
                    <p className="text-sm">Days to Go</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: '2.5B', label: 'Children Immunized', color: 'purple' },
              { icon: Target, number: '99.9%', label: 'Reduction in Cases', color: 'pink' },
              { icon: Heart, number: '122', label: 'Countries Reached', color: 'purple' },
              { icon: Award, number: '35+', label: 'Years of Impact', color: 'pink' }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl hover:shadow-xl transition transform hover:scale-105 bg-gradient-to-b from-gray-50 to-white">
                <stat.icon className={`w-12 h-12 mx-auto mb-4 text-${stat.color}-600`} />
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Walk with Us?</h2>
            <p className="text-xl text-gray-600">
              Since 1985, Rotary has been at the forefront of the global effort to eradicate polio, immunizing over 2.5 billion children across 122 countries[web:4][web:1].
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Make History',
                description: 'Be part of the final push to eradicate polio forever and create a lasting legacy for future generations.',
                gradient: 'from-purple-500 to-purple-600'
              },
              {
                title: 'Community Impact',
                description: 'Join fellow Leicester residents in a shared mission to protect children worldwide from this devastating disease.',
                gradient: 'from-pink-500 to-pink-600'
              },
              {
                title: 'Every Step Counts',
                description: 'Your participation directly funds vaccines and immunization programs reaching vulnerable children globally.',
                gradient: 'from-purple-500 to-pink-500'
              }
            ].map((card, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
                <div className={`w-16 h-16 bg-gradient-to-r ${card.gradient} rounded-xl mb-6 flex items-center justify-center`}>
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Story */}
      <section id="impact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">The End Polio Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Polio cases have decreased by over 99.9% since 1988, from an estimated 350,000 cases to just a handful today. This remarkable achievement is the result of Rotary's unwavering commitment alongside global partners[web:4][web:7].
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every year, more than 450 million children are vaccinated using over two billion doses of oral polio vaccine. This will continue until the world is certified polio-free[web:4].
              </p>
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border-l-4 border-purple-600">
                <p className="text-purple-900 font-semibold italic">
                  "A simple walk can change lives. Your £5 donation helps immunize children and brings us closer to a polio-free world."
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-8 rounded-3xl shadow-2xl text-white">
                <h3 className="text-3xl font-bold mb-6">Your Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">£5</span>
                    </div>
                    <p>Entry donation provides vaccines for multiple children</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <p>Mile walked raises awareness across the Leicester community</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">∞</span>
                    </div>
                    <p>Impact lasts forever - help create a polio-free generation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section id="details" className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Event Details</h2>
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Walk a Mile for Polio - October 2026</h3>
                <p className="text-purple-100">Join us for a scenic one-mile walk through Leicester city centre</p>
              </div>
              <div className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-900 text-lg">Registration</h4>
                    <p className="text-gray-600">£5 suggested donation per person</p>
                    <p className="text-gray-600">Children under 11 walk free</p>
                    <p className="text-gray-600">No advance booking required - just turn up!</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-900 text-lg">What to Expect</h4>
                    <p className="text-gray-600">Scenic 1-mile route</p>
                    <p className="text-gray-600">Family-friendly atmosphere</p>
                    <p className="text-gray-600">Rotary volunteers on-site</p>
                  </div>
                </div>
                <div className="border-t pt-6">
                  <h4 className="font-bold text-gray-900 text-lg mb-4">Meeting Point</h4>
                  <p className="text-gray-600 mb-4">Leicester City Centre (exact location TBA)</p>
                  <p className="text-gray-600">All proceeds go directly to the End Polio Now campaign</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Join hundreds of Leicester residents in the fight to end polio. Your steps create hope.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105">
              Register for the Walk
            </button>
            <button className="bg-purple-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-800 transition">
              Learn More About Rotary
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-xl mb-4">Rotary Leicester</h4>
              <p className="text-gray-400">One of the UK's longest-established Rotary Clubs, committed to making an impact locally and internationally.</p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-4">Contact</h4>
              <p className="text-gray-400">Email: info@rotary-leicester.org.uk</p>
              <p className="text-gray-400">Visit: rotary-leicester.org.uk</p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-4">Get Involved</h4>
              <p className="text-gray-400">Monday Lunchtime: Mercure Hotel Granby Street</p>
              <p className="text-gray-400">Wednesday Evenings: Rotary Impact Group</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 Rotary Club Leicester. All rights reserved. | End Polio Now</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
