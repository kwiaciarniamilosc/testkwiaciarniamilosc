import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="bg-pink-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mb-4">
            Newsletter Kwiaciarni Miłość
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Zapisz się, aby otrzymywać inspiracje i oferty specjalne prosto do Twojej skrzynki
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Twój adres email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                required
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors disabled:opacity-50"
              >
                {status === 'loading' ? 'Wysyłanie...' : 'Zapisz się'}
              </button>
            </div>
            
            {status === 'success' && (
              <p className="mt-4 text-green-600">Dziękujemy za zapisanie się do newslettera!</p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-red-600">Wystąpił błąd. Spróbuj ponownie później.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;