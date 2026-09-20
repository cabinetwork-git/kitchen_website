import "../components/plasmic/landing_page_starter/plasmic.css"; // plasmic-import: oE3FNJgfJRWctRp1SvVjWz/projectcss
import "@/styles/globals.css";
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import Head from "next/head";
import Link from "next/link";
export default function MyApp({ Component, pageProps }) {
  return (
    <PlasmicRootProvider Head={Head} Link={Link}>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}
