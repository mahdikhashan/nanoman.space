import React from 'react';

import Footer from '@/ui/Footer';
import Header from '@/ui/Header';

export default function RootLayout({ children }: { children: React.ReactNode}) {
  return (
    <html>
      <main className="min-h-screen mx-auto overflow-y-auto dark:bg-zinc-900">
        {children}
      </main>
    </html>
  );
}
