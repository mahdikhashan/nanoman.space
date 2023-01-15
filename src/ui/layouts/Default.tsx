import React from 'react';

import Footer from '../Footer';
import Header from '../Header';

export default function RootLayout({ children }: { children: React.ReactNode}) {
  return (
    <html>
      <body className="overflow-y-auto bg-zinc-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-y-8 p-4 md:py-8 md:px-12">
            <div className="row-start-1">
              <Header />
            </div>

            <div className="row-start-2 mt-12 space-x-6">
              {children}
            </div>

            <div className="row-start-3 row-end-4 mt-28 flex items-center justify-center">
              <Footer/>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
