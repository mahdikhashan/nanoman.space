import React, { type PropsWithChildren } from 'react';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      {children}
    </html>
  );
}
