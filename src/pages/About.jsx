import React from 'react';

const About = () => {
  return (
    <div className="bg-ltpink-100 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Introduction Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">O Nas</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Kwiaciarnia Miłość to miejsce, gdzie pasja do kwiatów łączy się z profesjonalizmem i kreatywnością,
            oferując unikalne aranżacje na każdą okazję. Daj się oczarować pięknem kwiatów.
          </p>
        </div>

        {/* History and Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={`${import.meta.env.BASE_URL}assets/images/gallery/Shop-front.jpg`}
              alt="Nasze wnętrze"
              className="rounded-lg shadow-xl transform transition-all hover:scale-105"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Nasza Historia</h2>
            <p className="text-gray-600 mb-4">
              Kwiaciarnia Miłość powstała w 2023 roku w sercu Warszawy, na Mokotowie. Od tego czasu dostarczamy
              najwyższej jakości kwiaty i tworzymy wyjątkowe kompozycje florystyczne, które zachwycają i zostają
              w pamięci na długo.
            </p>
            <p className="text-gray-600">
              Nasza oferta obejmuje bukiety okolicznościowe, dekoracje ślubne, aranżacje eventowe, a także ekspresową
              dostawę kwiatów na terenie Warszawy. Każda nasza kompozycja jest tworzona z miłością do detali,
              aby idealnie oddać emocje i wyjątkowe chwile.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
            <img
              src={`${import.meta.env.BASE_URL}assets/images/gallery/IMG_5317.JPG`}
              alt="Nasza praca"
              className="rounded-lg shadow-xl transform transition-all hover:scale-105"
            />
          </div>


          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Nasza Misja</h2>
            <p className="text-gray-600 mb-4">
              Co nas wyróżnia? Pragniemy, aby nasze kwiaty były symbolem miłości, radości i piękna w każdej chwili życia.
            </p>
            <p className="text-gray-600 mb-4">
              Współpracujemy z najlepszymi hodowcami, dbając o świeżość i najwyższą jakość każdej dostawy,
              aby Twoje bukiety zachwycały od pierwszego spojrzenia i na długo pozostawały w pamięci.
            </p>
            <p className="text-gray-600">
              Oferujemy spersonalizowane usługi florystyczne – od eleganckich bukietów ślubnych po ekskluzywne
              flower boxy i dekoracje na specjalne okazje. Każdą kompozycję tworzymy z dbałością o najmniejsze detale,
              aby jak najlepiej oddać Twoje emocje i intencje.
            </p>
          </div>
          </div>
         
        {/* Location and Contact Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={`${import.meta.env.BASE_URL}assets/images/gallery/flowers3.jpg`}
              alt="Wnętrze kwiaciarni"
              className="rounded-lg shadow-xl transform transition-all hover:scale-105"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Nasza Lokalizacja</h2>
            <p className="text-gray-600 mb-4">
              Znajdujemy się w dogodnej lokalizacji na Mokotowie:
            </p>
            <p className="text-gray-600 font-semibold">
              📍 Puławska 38, 02-512 Warszawa
            </p>
            <p className="text-gray-600 mb-4">
              Oferujemy dostawę na terenie całej Warszawy, w tym Mokotowa, Śródmieścia, Ursynowa i innych dzielnic.
            </p>
            <p className="text-gray-600 font-semibold">
              📞 Telefon: <a href="tel:+48-733060191" className="text-blue-600 hover:underline">733 060 191</a>
            </p>
            <p className="text-gray-600 font-semibold">
              🌐 <a href="https://www.kwiaciarniamilosc.pl/" className="text-blue-600 hover:underline">www.kwiaciarniamilosc.pl</a>
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Dlaczego warto nas wybrać?</h2>
          <ul className="text-gray-600 text-lg list-inside">
            <li className="mb-2"> Świeże kwiaty najwyższej jakości</li>
            <li className="mb-2"> Indywidualne podejście do każdego klienta</li>
            <li className="mb-2"> Ekspresowa dostawa tego samego dnia</li>
            <li className="mb-2"> Ręcznie tworzone, unikalne aranżacje</li>
            <li className="mb-2"> Usługi florystyczne na śluby i eventy</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default About;
