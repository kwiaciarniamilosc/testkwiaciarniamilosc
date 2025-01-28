import React from 'react';

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Justyna Gacek",
      review: "Mial być delikatny bukiet, wyszło super, bardzo miła obsługa. Stosunkowo długo otwarte jak na kwiaciarnię.",
      image: `${import.meta.env.BASE_URL}assets/images/reviewer/justina.png`
    },
    {
      name: "Juelli Meshram",
      review: "Kwiaciarnia Miłość is my go-to flower shop in Warsaw!...",
      image: `${import.meta.env.BASE_URL}assets/images/reviewer/jui.png`
    },
    {
      name: "Melissa Gavroche",
      review: "Zakupiłam paczkę niespodziankę na Foodsi...",
      image: `${import.meta.env.BASE_URL}assets/images/reviewer/melissa.png`
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Opinie Klientów
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
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
  );
};

export default ReviewsSection;