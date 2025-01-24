import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Facebook,
      url: "https://www.facebook.com/100093278811038/",
      label: "Facebook"
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/kwiaciarnia_milosc",
      label: "Instagram"
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/company/kwiaciarnia-milosc/",
      label: "LinkedIn"
    },
    {
      icon: Youtube,
      url: "http://www.youtube.com/@kwiaciarniamilosc",
      label: "YouTube"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <img
              src="src/assets/images/logo/logo.png"
              alt="Kwiaciarnia Miłość"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400">
              Twoja zaufana kwiaciarnia w sercu Warszawy.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2 text-gray-400">
              <p>733 060 191</p>
              <p>biuro@kwiaciarniamilosc.pl</p>
              <p>ul. Puławska 38, 02-512 Warszawa</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Kwiaciarnia Miłość. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;