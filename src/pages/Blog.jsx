import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const categories = [
    { icon: "leaf", text: "Kwiaty do domu i biura" },
    { icon: "ring", text: "Dekoracje kwiatowe na uroczystości" },
    { icon: "star", text: "Psychologia i symbolika kwiatów" },
    { icon: "user-graduate", text: "Kompozycje kwiatowe" },
    { icon: "calendar-alt", text: "Pomysły na prezenty" },
    { icon: "heart", text: "Porady florysty" }
  ];

  const posts = [
    {
        id: 1,
      title: "Kwiaty w domu: jak stworzyć atmosferę przytulności i harmonii",
      date: "21 stycznia 2025",
      category: "Psychologia i symbolika kwiatów",
      excerpt: "Kwiaty to nie tylko ozdoba domu, ale także źródło radości, przytulności i świeżości. Potrafią napełnić pokój życiem, podkreślić styl wnętrza, a nawet poprawić nastrój",
      image: `${import.meta.env.BASE_URL}assets/images/gallery/bouquet1.jpg`
    },
    {
      id: 2,
      title: "Jak przedłużyć życie róż w wazonie?",
      date: "15 grudnia 2024",
      category: "Porady florysty",
      excerpt: "Poznaj sprawdzone sposoby na to, aby Twoje róże pozostały świeże i piękne przez długi czas.",
      image: `${import.meta.env.BASE_URL}assets/images/gallery/jak-przedluzyc-zycie-roz.jpg`
    },
    {
      id: 3,
      title: "Jak przedłużyć życie bukietu? 🌸 Chryzantemy i krokosz",
      date: "11 stycznia 2025",
      category: "Dekoracje Ślubne",
      excerpt: "Chryzantemy i krokosz to prawdziwa ozdoba każdego domu! Aby te kwiaty dłużej cieszyły świeżością",
      image: `${import.meta.env.BASE_URL}assets/images/gallery/Jak-przedłużyć-życie-bukietu.JPG`
    },
    {
      id: 4,
      title: "Odkryj elegancję czerwonych róż i eukaliptusa",
      date: "17 styczeń 2025",
      category: "Kwiaty sezonowe",
      excerpt: "Poznaj piękno i wyrafinowanie naszego specjalnego zimowego FlowerBoxa, który łączy żywe czerwone róże z świeżym eukaliptusem — doskonały prezent na każdą okazję.",
      image: `${import.meta.env.BASE_URL}assets/images/gallery/Odkryj-red-roses.JPG`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h1 className="text-4xl   font-bold mb-4">Blog Kwiatowy</h1>
        <p className="text-gray-600">
          Odkryj świat kwiatów, poznaj najnowsze trendy florystyczne i znajdź inspirację 
          do tworzenia własnych kompozycji kwiatowych. Wskazówki dotyczące pielęgnacji, 
          dekoracji ślubnych i unikalnych aranżacji od Kwiaciarni Miłość w Warszawie.
        </p>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category, index) => (
            <Link
              key={index}
              to="#"
              className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm text-sm text-gray-700 hover:bg-pink-50 transition-colors"
            >
              <i className={`fas fa-${category.icon} mr-2 text-pink-500`}></i>
              {category.text}
            </Link>
          ))}
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map(post => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <i className="far fa-calendar-alt mr-2"></i>
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <i className="fas fa-folder mr-2"></i>
                  <span>{post.category}</span>
                </div>
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link 
                  to="#" 
                  className="inline-flex items-center text-pink-500 hover:text-pink-600"
                >
                  Zobacz więcej
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;