import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Contato from "./pages/Contato/Contato";
import Faq from "./pages/Faq/Faq";
import Home from "./pages/Home/Home";
import Servicos from "./pages/Servicos/Servicos";
import Sobre from "./pages/Sobre/Sobre";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Servicos />
      <Sobre />
      <Faq />
      <Contato />
      <Footer />
    </>
  );
}