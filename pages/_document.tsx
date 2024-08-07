import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta property="og:title" content="deq.fi"></meta>
      <meta property="og:image:type" content="image/png"></meta>
      <meta property="og:image:width" content="2400"></meta>
      <meta property="og:image:height" content="1260"></meta>
      <meta property="og:image" content="https://res.cloudinary.com/dczghbro7/image/upload/v1721746189/og-image_mzcne9.png"></meta>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:title" content="deq.fi"></meta>
      <meta name="twitter:image:type" content="image/png"></meta>
      <meta name="twitter:image:width" content="2400"></meta>
      <meta name="twitter:image:height" content="1260"></meta>
      <meta name="twitter:image" content="https://res.cloudinary.com/dczghbro7/image/upload/v1721746189/og-image_mzcne9.png"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
