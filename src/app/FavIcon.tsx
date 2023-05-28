import Head from "next/head";

export default function FavIcon() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#e4baef" />
      <meta name="apple-mobile-web-app-title" content="AWS Toronto" />
      <meta name="application-name" content="AWS Toronto" />
      <meta name="msapplication-TileColor" content="#e4baef" />
      <meta name="theme-color" content="#e4baef" />
    </Head>
  );
}
