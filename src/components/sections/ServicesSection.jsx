import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Bukiety",
      description: "Wyjątkowe kompozycje na Twoją szczególną okazję",
      image: `${import.meta.env.BASE_URL}assets/images/gallery/flowers5.jpg`,
    },
    {
      title: "Dekoracje Eventowe",
      description: "Profesjonalne dekoracje na każde wydarzenie",
      image: `${import.meta.env.BASE_URL}assets/images/gallery/Jak-przedłużyć-życie-bukietu.JPG`,
    },
    {
      title: "Florystyka pogrzebowa",
      description: "W trudnych chwilach pożegnania pomagamy wyrazić pamięć i szacunek poprzez eleganckie, dostojne kompozycje kwiatowe.",
      image: `${import.meta.env.BASE_URL}assets/images/gallery/Kwiaciarnia Miłość Puławska 3.jpg`,
    },
    {
      title: "Flower boxy",
      description: "Piękne bukiety na każdą okazję",
      image: `${import.meta.env.BASE_URL}assets/images/gallery/jak-przedluzyc-zycie-roz.jpg`,
    },
    {
      title: "Balony",
      description: "Zestaw balonów dla noworodka",
      image: `${import.meta.env.BASE_URL}src/assets/images/gallery/newborn.jpg`,
    },
    {
      title: "Florystyka weselna",
      description: "eleganckie bukiety ślubne",
      image: `${import.meta.env.BASE_URL}src/assets/images/gallery/IMG_7265.JPG`,
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Nasze Usługi
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to="/galeria"
                  className="inline-flex items-center text-pink-500 hover:text-pink-600"
                >
                  Zobacz więcej <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;