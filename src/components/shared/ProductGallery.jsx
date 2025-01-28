import React from 'react';
import { ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
   name: 'Bukiet Różowy Sen',
   description: 'Elegancka kompozycja z róż i eustomy',
   price: '199 zł',
   image: `${import.meta.env.BASE_URL}assets/images/gallery/flowers3.jpg`
 },
 {
   id: 2,
   name: 'Białe Inspiracje', 
   description: 'Delikatny bukiet z białych kwiatów',
   price: '179 zł',
   image: `${import.meta.env.BASE_URL}assets/images/gallery/IMG_4596.jpg`
 },
 {
   id: 3,
   name: 'Polne Kwiaty',
   description: 'Naturalna kompozycja polnych kwiatów',
   price: '149 zł',
   image: `${import.meta.env.BASE_URL}assets/images/gallery/luksusowy-bukiet-roz-najlepsza-kwiaciarnia-warszawa-mokotow.jpg`
 },
 {
   id: 4,
   name: 'Bukiet Ślubny Classic',
   description: 'Klasyczny bukiet ślubny z róż i piwonii',
   price: '299 zł', 
   image: `${import.meta.env.BASE_URL}assets/images/gallery/kwiaciarnia-milosc-pulawska-38.jpg`
 },
 {
   id: 5,
   name: 'Wiosenna Świeżość',
   description: 'Kolorowa mieszanka kwiatów sezonowych',
   price: '169 zł',
   image: `${import.meta.env.BASE_URL}assets/images/gallery/IMG_5425.jpg`
 },
 {
   id: 6,
   name: 'Romantyczny Wieczór',
   description: 'Czerwone róże z dekoracyjną zieleną',
   price: '229 zł',
   image: `${import.meta.env.BASE_URL}assets/images/gallery/flowers3.jpg`
 }
];

const ProductGallery = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl   font-bold text-gray-900 mb-3 sm:mb-4">
            Nasze Bukiety
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Wybierz spośród naszych najpiękniejszych kompozycji
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{product.name}</h3>
                  <span className="text-base sm:text-lg font-medium text-pink-500">{product.price}</span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4">{product.description}</p>
                <button
                  className="inline-flex items-center text-pink-500 hover:text-pink-600 transition-colors text-sm sm:text-base"
                  onClick={() => window.location.href = 'https://wolt.com/pl/pol/warsaw/venue/pracownia-kwiatw-i-balonw-mio'}
                >
                  Zamów teraz
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;