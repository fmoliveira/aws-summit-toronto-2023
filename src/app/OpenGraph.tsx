const domain = "awsto2023.fmo.li";
const url = `https://${domain}`;
const image = `${url}/og-image.png`;

interface Props {
  title: string;
  description: string;
}

export default function OpenGraph({ title, description }: Props) {
  return (
    <>
      <FacebookMetaTags title={title} description={description} />
      <TwitterMetaTags title={title} description={description} />
    </>
  );
}

function FacebookMetaTags({ title, description }: Props) {
  return (
    <>
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </>
  );
}

function TwitterMetaTags({ title, description }: Props) {
  return (
    <>
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={domain} />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}
