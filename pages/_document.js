import Document, { Html, Head, Main, NextScript } from "next/document";

import Script from "utils/hocs/Script";
import CLASS_NAMES from "utils/constants/class-names";
import { mediaStyles } from "utils/helpers/media";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="supported-color-schemes" content="dark light" />
          <meta name="color-scheme" content="dark light" />

          {/* Primary Meta Tags */}
          <meta name="title" content="Next.js Movies" />
          <meta
            name="description"
            content="The Movies App is a non-trivial demo application built on top of the TMDB (The Movie Database) API"
          />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://movies.zaps.dev" />
          <meta property="og:title" content="Next.js Movies" />
          <meta
            property="og:description"
            content="The Movies App is a non-trivial demo application built on top of the TMDB (The Movie Database) API"
          />
          <meta
            property="og:image"
            content="https://movies.zaps.dev/movies-meta-image.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://movies.zaps.dev" />
          <meta property="twitter:title" content="Next.js Movies" />
          <meta
            property="twitter:description"
            content="The Movies App is a non-trivial demo application built on top of the TMDB (The Movie Database) API"
          />
          <meta
            property="twitter:image"
            content="https://movies.zaps.dev/movies-meta-image.jpg"
          />

          <style
            type="text/css"
            dangerouslySetInnerHTML={{ __html: mediaStyles }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                addEventListener('error', window.__e=function f(e){f.q=f.q||[];f.q.push(e)});
              `,
            }}
          />
        </Head>
        <body className={CLASS_NAMES.LIGHT}>
          <Script>
            {() => {
              (function () {
                var storageKey = "darkMode";
                var classNameDark = "dark";
                var classNameLight = "light";

                function setClassOnDocumentBody(darkMode) {
                  document.body.classList.add(
                    darkMode ? classNameDark : classNameLight
                  );
                  document.body.classList.remove(
                    darkMode ? classNameLight : classNameDark
                  );
                }

                var preferDarkQuery = "(prefers-color-scheme: dark)";
                var mql = window.matchMedia(preferDarkQuery);
                var supportsColorSchemeQuery = mql.media === preferDarkQuery;
                var localStorageTheme = null;
                try {
                  localStorageTheme = localStorage.getItem(storageKey);
                } catch (err) {}
                var localStorageExists = localStorageTheme !== null;
                if (localStorageExists) {
                  localStorageTheme = JSON.parse(localStorageTheme);
                }

                if (localStorageExists) {
                  setClassOnDocumentBody(localStorageTheme);
                } else if (supportsColorSchemeQuery) {
                  setClassOnDocumentBody(mql.matches);
                  localStorage.setItem(storageKey, mql.matches);
                } else {
                  var isDarkMode =
                    document.body.classList.contains(classNameDark);
                  localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
                }
              })();
            }}
          </Script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
