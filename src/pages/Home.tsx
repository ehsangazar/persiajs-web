import { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import EventsTile from "../components/sections/EventsTile";
import Speakers from "../components/sections/Speakers";
import GetInvolved from "../components/sections/GetInvolved";
import Team from "../components/sections/Team";
import FAQ from "../components/sections/FAQ";
import Community from "../components/sections/Community";
import ScrollProgress from "../components/ui/ScrollProgress";

export default function Home() {
  // Scroll to top when component mounts (for navigation from other pages)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <EventsTile />
        <Speakers />
        <GetInvolved />
        <Team />
        <FAQ />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
