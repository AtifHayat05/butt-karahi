import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/About";
import SignatureDish from "./components/Menu";
import Gallery from "./components/Gallery";
import WhyChooseUs from "./components/WhyChooseUs";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-stone-950">
      <Navbar />

      <main>
        <Home />
        <Menu />
        <SignatureDish />
        <Gallery />
        <WhyChooseUs />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
