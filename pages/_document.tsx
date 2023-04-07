import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="dark:bg-zinc-800 bg-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
