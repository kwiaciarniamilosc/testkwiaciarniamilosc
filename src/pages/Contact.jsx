// src/pages/Contact.jsx
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  return (
    <div className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl   font-bold text-center mb-12">
          Kontakt
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl   font-bold mb-6">
                Informacje Kontaktowe
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-pink-500" />
                  <span>ul. Puławska 38, 02-512 Warszawa</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-pink-500" />
                  <span>733 060 191</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-pink-500" />
                  <span>biuro@kwiaciarniamilosc.pl</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-pink-500" />
                  <span>Pon-Pt: 9:00-19:00<br />Sob : 10:00-19:00<br />Nd: 10:00-17:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Imię i nazwisko</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Wiadomość</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors"
                >
                  Wyślij wiadomość
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;