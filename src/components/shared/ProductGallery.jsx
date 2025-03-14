import React from 'react';
import { ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
   name: 'Bukiet Różowy Sen',
   description: 'Elegancka kompozycja z róż i eustomy',
   price: 'od 199 zł',
   image: `${import.meta.env.BASE_URL}assets/images/gallery/blog6.jpg`
 },
 {
   id: 2,
   name: 'Bukiet ślubny z kalii',
   description: 'Elegancki bukiet ślubny wykonany z kalii',
   price: '450 zł', 
   image: `${import.meta.env.BASE_URL}assets/images/gallery/IMG_5425.jpg`
 },
 {
   id: 3,
   name: 'Seville',
   description: 'Bukiet składa się z róż gałązkowych i klasycznych, eustomy oraz eukaliptusa',
   price: ' od 300 zł',
   image: `${import.meta.env.BASE_URL}assets/images/gallery/IMG_5286.PNG`
 },
 {
   id: 4,
   name: 'San Francisco',
   description: 'Bukiet składa się z hortensji, róż gałązkowych i klasycznych, eustomy oraz oxypetalum',
   price: ' 200 zł',
   image: `${import.meta.env.BASE_URL}assets/images/gallery/IMG_5274.PNG`
 },
 {
   id: 5,
   name: 'Wiosenna Świeżość',
   description: 'Kolorowa mieszanka kwiatów sezonowych',
   price: 'od 200 zł',
   image: `${import.meta.env.BASE_URL}assets/images/gallery/IMG_8525.JPG`
 },
 {
   id: 6,
   name: 'Romantyczny Wieczór',
   description: 'Czerwone róże z dekoracyjną zieleną',
   price: ' od 500 zł',
   image: `${import.meta.env.BASE_URL}assets/images/gallery/flowers3.jpg`
 },
 {
  id: 7,
  name: 'Florystyka pogrzebowa',
  description: 'Czerwone róże z dekoracyjną zieleną',
  price: '650 zl',
  image: `${import.meta.env.BASE_URL}assets/images/gallery/Kwiaciarnia Miłość Puławska 3.jpg`
},
{
  id: 8,
  name: 'Prague',
  description: 'The bouquet consists of hydrangea, twig rose, eustoma, alstroemeria and carnation.',
  price: '160-300 zł ',
  image: `${import.meta.env.BASE_URL}assets/images/gallery/IMG_5272.PNG`
},
{
 id: 9,
 name: 'Capri',
 description: 'Bukiet składa się z hortensji, gałązkowych róż w trzech kolorach oraz frezji w zależności od ilości użytych kwiatów.',
 price: '250–600 zł,',
 image: `${import.meta.env.BASE_URL}assets/images/gallery/IMG_5271.PNG`
},
{
  id: 10,
  name: 'Raspberry Kiss',
  description: 'Bukiet składa się wyłącznie z gałązkowych róż',
  price: '200–600 zl',
  image: `${import.meta.env.BASE_URL}assets/images/gallery/IMG_5270.PNG`
},
{
  id: 11,
  name: 'Białe Inspiracje', 
  description: 'Delikatny bukiet z białych kwiatów',
  price: 'od 230 zł',
  image: `${import.meta.env.BASE_URL}assets/images/gallery/white.JPG`
},
{
 id: 12,
 name: 'Verona',
 description: 'Bukiet składa się z róż gałązkowych i klasycznych, eustomy, alstromerii oraz goździków.',
 price: '150-400 zł',
 image: `${import.meta.env.BASE_URL}assets/images/gallery/IMG_2761.JPG`
},
{
  id: 13,
  name: 'Seville',
  description: 'Bukiet składa się z róż gałązkowych i klasycznych, eustomy oraz eukaliptusa',
  price: ' 250-700 zł',
  image: `${import.meta.env.BASE_URL}assets/images/gallery/IMG_5286.PNG`
},
{
  id: 14,
  name: 'Bouquet of roses',
  description: 'Ten bukiet to idealne połączenie delikatności, elegancji i uczuć, które ',
  price: ' 535 zl',
  image: `${import.meta.env.BASE_URL}assets/images/gallery/blog5.jpg`
},
{
  id: 15,
  name: 'Serenade',
  description: 'Autorski bukiet kwiatów w odcieniach pastelowych w rozmiarze XL',
  price: ' 800 zł',
  image: `${import.meta.env.BASE_URL}assets/images/gallery/IMG_5317.JPG`
},
{
 id: 16,
 name: 'róża i hortensja',
 description: 'Ten uroczy bukiet łączy delikatne różowe róże z akcentami.',
 price: '540 zł,',
 image: `${import.meta.env.BASE_URL}assets/images/gallery/IMG_5275.PNG`
},
{
  id: 17,
  name: 'walentynkowy bukiet',
  description: 'Mówią o zachwycie, wdzięczności i najcieplejszych uczuciach. Idealny wybór na Walentynki,',
  price: '500zl',
  image: `${import.meta.env.BASE_URL}assets/images/gallery/IMG_5555.jpg`
},
{
  id: 18,
  name: 'Polne Kwiaty',
  description: 'Naturalna kompozycja polnych kwiatów',
  price: '250 zł',
  image: `${import.meta.env.BASE_URL}assets/images/gallery/wild.jpg`
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
              <div className="aspect-square bg-gray-200">
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