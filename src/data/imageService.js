const imageMap = {
  logo: {
    default: `${import.meta.env.BASE_URL}assets/images/logo/logo.png`,
    dark: `${import.meta.env.BASE_URL}assets/images/logo/logo-dark.png`,
    favicon: `${import.meta.env.BASE_URL}assets/images/logo/favicon.ico`
  },
  hero: {
    main: `${import.meta.env.BASE_URL}assets/images/hero/hero-main.jpeg`,
    mobile: `${import.meta.env.BASE_URL}assets/images/hero/hero-mobile.jpg`,
    cover: `${import.meta.env.BASE_URL}assets/images/gallery/hero-cover.jpg`
  },
  gallery: {
    redRoses: `${import.meta.env.BASE_URL}assets/images/gallery/bouquet1.jpg`,
    roseLife: `${import.meta.env.BASE_URL}assets/images/gallery/bouquet5.jpg`,
    img5425: `${import.meta.env.BASE_URL}assets/images/gallery/bouquet4.jpg`,
    product: `${import.meta.env.BASE_URL}assets/images/gallery/product.png`,
    flower3: `${import.meta.env.BASE_URL}assets/images/gallery/flower3.jpg`,
    luxuryBouquet: `${import.meta.env.BASE_URL}assets/images/gallery/luksusowy-bukiet-roz-najlepsza-kwiaciarnia-warszawa-mokotow.jpg`,
    dcimPulawska: `${import.meta.env.BASE_URL}assets/images/gallery/DCIM ul. Puławsk 38.jpg`,
    redRosesSymbol1: `${import.meta.env.BASE_URL}assets/images/gallery/bouquet1.jpg`,
    flowers4: `${import.meta.env.BASE_URL}assets/images/gallery/flowers4.jpg`,
    redRosesSymbol2: `${import.meta.env.BASE_URL}assets/images/gallery/bouquet3.jpg`,
    flowers5: `${import.meta.env.BASE_URL}assets/images/gallery/flowers5.jpg`,
    img4596: `${import.meta.env.BASE_URL}assets/images/gallery/IMG_4596.jpg`,
    kwiaciarniaPulawska: `${import.meta.env.BASE_URL}assets/images/gallery/Kwiaciarnia Miłość Puławska 3.jpg`,
    flowers6: `${import.meta.env.BASE_URL}assets/images/gallery/flowers6.jpg`,
    flowers3: `${import.meta.env.BASE_URL}assets/images/gallery/flowers3.jpg`,
    redRosesSymbol4: `${import.meta.env.BASE_URL}assets/images/gallery/bouquet2.jpg`,
    kwiaciarniaMilosc: `${import.meta.env.BASE_URL}assets/images/gallery/kwiaciarnia-milosc-pulawska-38.jpg`,
    bouquetLife: `${import.meta.env.BASE_URL}assets/images/gallery/Jak-przedłużyć-życie-bukietu.JPG`
  },
  reviewer: [
    `${import.meta.env.BASE_URL}assets/images/reviewer/reviewer-1.png`,
    `${import.meta.env.BASE_URL}assets/images/reviewer/reviewer-2.png`,
    `${import.meta.env.BASE_URL}assets/images/reviewer/reviewer-3.png`
  ]
 };
 
 const getImage = (category) => {
  if (!imageMap[category]) {
    throw new Error(`Category "${category}" not found in imageMap.`);
  }
  return imageMap[category];
 };
 
 const getAllGalleryImages = () => Object.values(imageMap.gallery);
 const getAllReviewerImages = () => imageMap.reviewer;
 
 export default {
  getImage,
  getAllGalleryImages,
  getAllReviewerImages
 };