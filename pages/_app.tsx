// import "../styles/globals.css";
import type { AppProps } from "next/app";

// import "tailwindcss/tailwind.css";
import "../styles/style.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
