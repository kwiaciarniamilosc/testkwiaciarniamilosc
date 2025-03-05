import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import WomensDayLayout from '../special/WomensDayLayout';

const Layout = () => {
  const [isWomensDay, setIsWomensDay] = useState(true);

  return (
    <>
      {isWomensDay ? (
        <WomensDayLayout>
          <div className="min-h-screen flex flex-col" style={{ position: 'relative', zIndex: 100 }}>
            <Navigation />
            <main className="flex-grow w-full">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
                <Outlet />
              </div>
            </main>
            <Footer />
          </div>
        </WomensDayLayout>
      ) : (
        <div className="min-h-screen bg-white flex flex-col">
          <Navigation />
          <main className="flex-grow w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
              <Outlet />
            </div>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layout;