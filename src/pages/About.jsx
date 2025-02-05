import React from 'react';

const About = () => {
  return (
    <div className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">O Nas</h1>
          <p className="text-lg text-gray-600">
            Kwiaciarnia Miłość to miejsce, gdzie pasja do kwiatów łączy się
            z profesjonalizmem i kreatywnością, oferując unikalne aranżacje na każdą okazję.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={`${import.meta.env.BASE_URL}assets/images/gallery/Shop-front.jpg`}
              alt="Nasze wnętrze"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Nasza Historia</h2>
            <p className="text-gray-600 mb-4">
              Kwiaciarnia Miłość powstała w 2023 roku w sercu Warszawy, na Mokotowie.
              Od tego czasu dostarczamy naszym klientom najwyższej jakości kwiaty i wyjątkowe
              kompozycje florystyczne.
            </p>
            <p className="text-gray-600">
              Nasza oferta obejmuje zarówno bukiety okazjonalne, jak i dekoracje ślubne,
              aranżacje eventowe, a także ekspresową dostawę kwiatów na terenie Warszawy.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Nasza Misja</h2>
            <p className="text-gray-600 mb-4">
              Pragniemy, aby nasze kwiaty były symbolem miłości, radości i piękna w każdej chwili życia.
              Współpracujemy z najlepszymi hodowcami, dbając o świeżość i jakość każdej dostawy.
            </p>
            <p className="text-gray-600">
              Oferujemy także personalizowane usługi florystyczne – od bukietów ślubnych
              po ekskluzywne flower boxy i dekoracje na specjalne okazje.
            </p>
          </div>
          <div>
            <img
              src={`${import.meta.env.BASE_URL}assets/images/gallery/IMG_5317.JPG`}
              alt="Nasza praca"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-4">Dlaczego warto nas wybrać?</h2>
          <ul className="text-gray-600 text-lg list-disc list-inside">
            <li>✅ Świeże kwiaty najwyższej jakości</li>
            <li>✅ Indywidualne podejście do każdego klienta</li>
            <li>✅ Ekspresowa dostawa tego samego dnia</li>
            <li>✅ Ręcznie tworzone, unikalne aranżacje</li>
            <li>✅ Usługi florystyczne na śluby i eventy</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={`${import.meta.env.BASE_URL}assets/images/gallery/flowers3.jpg`}
              alt="Wnętrze kwiaciarni"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Nasza Lokalizacja</h2>
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
              📞 Telefon: <a href="tel:733060191" className="text-blue-600">733 060 191</a>
            </p>
            <p className="text-gray-600 font-semibold">
              🌐 <a href="https://www.kwiaciarniamilosc.pl/" className="text-blue-600">www.kwiaciarniamilosc.pl</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
