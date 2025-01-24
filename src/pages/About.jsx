import React from 'react';

const About = () => {
  return (
    <div className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-playfair font-bold mb-6">
            O Nas
          </h1>
          <p className="text-lg text-gray-600">
            Kwiaciarnia Miłość to miejsce, gdzie pasja do kwiatów łączy się
            z profesjonalizmem i kreatywnością.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="src/assets/images/gallery/Nasze-wnętrze-onas.jpg" //about page photo (O nas)
              alt="Nasze wnętrze"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-playfair font-bold mb-4">
              Nasza Historia
            </h2>
            <p className="text-gray-600 mb-4">
              Od 2020 roku tworzymy wyjątkowe kompozycje kwiatowe dla naszych
              klientów. Każdy bukiet to dla nas nowa historia i nowe wyzwanie.
            </p>
            <p className="text-gray-600">
              Współpracujemy z najlepszymi hodowcami, aby zapewnić najwyższą
              jakość kwiatów.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;