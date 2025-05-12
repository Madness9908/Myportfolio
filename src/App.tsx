import "./App.css";
import NavbarHeader from "./components/NavbarHeader";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <NavbarHeader />
      <Banner></Banner>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
