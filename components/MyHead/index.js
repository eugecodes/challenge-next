import Head from "next/head";

const MyHead = ({ children }) => (
  <Head>
    <link rel="preconnect" href="https://image.tmdb.org" />
    <link rel="preconnect" href="https://api.themoviedb.org" />
    {children}
  </Head>
);

export default MyHead;
