import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./styles/GlobalStyles.styles";
function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero slides={SliderData} />
    </>
  );
}

export default App;
