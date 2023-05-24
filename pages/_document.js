import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Explore a world of captivating videos on the Discover Videos website. Immerse yourself in a wide range of engaging and entertaining content, curated to delight and inspire. Discover Videos brings you a seamless browsing experience powered by Next.js, providing fast and efficient access to a diverse collection of videos. Start your journey today and unlock a world of captivating visual storytelling at Discover Videos." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
