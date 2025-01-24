import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Leaf, ChevronRight } from 'lucide-react';
import Newsletter from '../components/shared/Newsletter';
import imageService from '../services/imageService';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50" />
        <img
          src="/src/assets/images/hero/hero-main.jpeg"          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-white mb-6">
            Najpiękniejsze <span className="text-pink-500">kwiaty</span>
            <br />z serca Warszawy
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Ekskluzywne kompozycje kwiatowe oraz wyjątkowe dekoracje,
            które sprawią, że każda okazja stanie się niezapomniana.
          </p>
          <a
            href="https://wolt.com/pl/pol/warsaw/venue/pracownia-kwiatw-i-balonw-mio"
            className="inline-flex items-center px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full text-lg transition-colors"
          >
            Zamów kwiaty
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </header>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: MapPin, text: "ul. Puławska 38, 02-512 Warszawa" },
            { icon: Clock, text: "Dostawa 7/7 w Warszawie" },
            { icon: Leaf, text: "Świeże kwiaty każdego dnia" }
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg"
            >
              <feature.icon className="h-6 w-6 text-pink-500" />
              <span className="text-gray-800">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-center mb-12">
            Nasze Usługi
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Bukiety Ślubne",
                description: "Wyjątkowe kompozycje na Twoją szczególną okazję.",
                image: imageService.getImage('gallery').roseLife // Replace with the actual image path for 'flower3')
              },
              {
                title: "Dekoracje Eventowe",
                description: "Profesjonalne dekoracje na każde wydarzenie.",
                image: imageService.getImage('gallery').redRosesSymbol2 // Re
              },
              {
                title: "Bukiety Okolicznościowe",
                description: "Piękne bukiety na każdą okazję.",
                image: imageService.getImage('gallery').redRosesSymbol4 //
              }
            ].map((service, index) => (
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

      {/* Reviews Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-center mb-12">
            Opinie Klientów
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Justyna Gacek",
                review: "Mial być delikatny bukiet, wyszło super, bardzo miła obsługa. Stosunkowo długo otwarte jak na kwiaciarnię.",
                image: "src/assets/images/reviewer/justina.png"
              },
              {
                name: "Juelli Meshram",
                review: "Kwiaciarnia Miłość is my go-to flower shop in Warsaw! The flowers are always fresh, beautifully arranged, and exactly what I need. The staff is incredibly friendly and always ready to help with suggestions. Whether it’s for a special occasion or just a thoughtful gift, this florist never disappoints. Highly recommend it!",
                image: "src/assets/images/reviewer/jui.png"
              },
              {
                name: "Melissa Gavroche",
                review: "Zakupiłam paczkę niespodziankę na Foodsi, nastawiałam się że dostanę już podwiętniete kwiatki w szarym papierze. Tymczasem dostałam przepiękny bukiet z pieknymi kwiatami! Będę zdecydowanie wracać w to miejsce!.",
                image: "src/assets/images/reviewer/melissa.png"
              }
            ].map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={`${review.name}`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold">{review.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Home;
