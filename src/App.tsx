import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Speakers from "./components/sections/Speakers";
import Team from "./components/sections/Team";
import FAQ from "./components/sections/FAQ";
import Community from "./components/sections/Community";
import ScrollProgress from "./components/ui/ScrollProgress";

function App() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Speakers />
        <Team />
        <FAQ />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;
