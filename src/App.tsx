import { lazy, Suspense } from "react";
const Header = lazy(() => import("./components/headers/Header"));
const Banner = lazy(() => import("./components/Banner"));
const Logobar = lazy(() => import("./components/Logobars"));
const Section2 = lazy(() => import("./components/Section2"));
const Section3 = lazy(() => import("./components/Section3"));
const Section5 = lazy(() => import("./components/Section5"));
const Section6 = lazy(() => import("./components/Section6"));
const Section7 = lazy(() => import("./components/Section7"));
const Section8 = lazy(() => import("./components/Section8"));
const Section9 = lazy(() => import("./components/Section9"));
const Footer = lazy(() => import("./components/footers/Footer"));
import GoogleAnalytics from "./lib/GoogleAnalytics";

function App() {
  return (
    <>
      <GoogleAnalytics />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="w-full min-h-screen">
          <Header />
          <Banner />
          <Logobar />
          <Section2 />
          <Section3 />
          <Section5 />
          <Section6 />
          <Section7 />
          <Section8 />
          <Section9 />
          <Footer />
        </div>
      </Suspense>
    </>
  );
}

export default App;
