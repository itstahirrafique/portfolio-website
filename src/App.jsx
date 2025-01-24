import About from "./components/About";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Testimonal from "./components/Testimonal";
import "./styles/color.css";
import "./styles/typography.css";

function App() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Skills />
      <About />
      <Portfolio />
      <Testimonal />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
