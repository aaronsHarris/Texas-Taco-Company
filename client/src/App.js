import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./styles/GlobalStyles.styles";
import { useState } from "react";
import {LocationData} from './data/LocationData'
import LocationInfo from "./components/LocationInfo";


function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen)
  }
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData} />
      <LocationInfo restaurants={LocationData}/>
    </>
  );
}

export default App;
