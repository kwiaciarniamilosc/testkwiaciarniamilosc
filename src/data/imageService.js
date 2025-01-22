// src/services/imageService.js
const imageMap = {
    logo: {
      default: '/assets/images/logo/logo.png',
      dark: '/assets/images/logo/logo-dark.png',
      favicon: '/assets/images/logo/favicon.ico'
    },
    hero: {
      main: '/assets/images/hero/hero-main.jpeg',
      mobile: '/assets/images/hero/hero-mobile.jpg',
      cover: '/assets/images/gallery/hero-cover.jpg'
    },
    gallery: {
      redRoses: '/assets/images/gallery/bouquet1.jpg',
      roseLife: '/assets/images/gallery/bouquet5.jpg',
      img5425: '/assets/images/gallery/bouquet4.jpg',
      product: '/assets/images/gallery/product.png',
      flower3: '/assets/images/gallery/flower3.jpg',
      luxuryBouquet: '/assets/images/gallery/luksusowy-bukiet-roz-najlepsza-kwiaciarnia-warszawa-mokotow.jpg',
      dcimPulawska: '/assets/images/gallery/DCIM ul. Puławsk 38.jpg',
      redRosesSymbol1: '/assets/images/gallery/bouquet1.jpg',
      flowers4: '/assets/images/gallery/flowers4.jpg',
      redRosesSymbol2: '/assets/images/gallery/bouquet3.jpg',
      flowers5: '/assets/images/gallery/flowers5.jpg',
      img4596: '/assets/images/gallery/IMG_4596.jpg',
      kwiaciarniaPulawska: '/assets/images/gallery/Kwiaciarnia Miłość Puławska 3.jpg',
      flowers6: '/assets/images/gallery/flowers6.jpg',
      flowers3: '/assets/images/gallery/flowers3.jpg',
      redRosesSymbol4: '/assets/images/gallery/bouquet2.jpg',
      kwiaciarniaMilosc: '/assets/images/gallery/kwiaciarnia-milosc-pulawska-38.jpg',
      bouquetLife: '/assets/images/gallery/Jak-przedłużyć-życie-bukietu.JPG'
    },
    reviewer: [
      '/assets/images/reviewer/reviewer-1.png',
      '/assets/images/reviewer/reviewer-2.png',
      '/assets/images/reviewer/reviewer-3.png'
    ]
   };
   
   export const getImage = (fileName) => {
    if (!imageMap[fileName]) {
      throw new Error(`Image "${fileName}" not found in imageMap.`);
    }
    return imageMap[fileName];
  };
   
   export const getAllGalleryImages = () => Object.values(imageMap.gallery);
   export const getAllReviewerImages = () => imageMap.reviewer;
   
   export default {
    getImage,
    getAllGalleryImages,
    getAllReviewerImages
   };