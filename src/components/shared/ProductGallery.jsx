import React from 'react';
import { ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Bukiet Różowy Sen',
    description: 'Elegancka kompozycja z róż i eustomy',
    price: '199 zł',
    image: '/api/placeholder/400/400'
  },
  {
    id: 2,
    name: 'Białe Inspiracje',
    description: 'Delikatny bukiet z białych kwiatów',
    price: '179 zł',
    image: '/api/placeholder/400/400'
  },
  {
    id: 3,
    name: 'Polne Kwiaty',
    description: 'Naturalna kompozycja polnych kwiatów',
    price: '149 zł',
    image: '/api/placeholder/400/400'
  },
  {
    id: 4,
    name: 'Bukiet Ślubny Classic',
    description: 'Klasyczny bukiet ślubny z róż i piwonii',
    price: '299 zł',
    image: '/api/placeholder/400/400'
  },
  {
    id: 5,
    name: 'Wiosenna Świeżość',
    description: 'Kolorowa mieszanka kwiatów sezonowych',
    price: '169 zł',
    image: '/api/placeholder/400/400'
  },
  {
    id: 6,
    name: 'Romantyczny Wieczór',
    description: 'Czerwone róże z dekoracyjną zieleną',
    price: '229 zł',
    image: '/api/placeholder/400/400'
  }
];

const ProductGallery = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mb-4">
            Nasze Bukiety
          </h2>
          <p className="text-lg text-gray-600">
            Wybierz spośród naszych najpiękniejszych kompozycji
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                  <span className="text-lg font-medium text-pink-500">{product.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button
                  className="inline-flex items-center text-pink-500 hover:text-pink-600 transition-colors"
                  onClick={() => window.location.href = 'https://wolt.com/'}
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