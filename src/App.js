
import './App.css';
import About from './Assets/About';
import Contact from './Assets/Contact';
import Gallary from './Assets/Gallary';
import Home from './Assets/Home';
import Members from './Assets/Members';
import {BrowserRouter ,Routes,Route} from "react-router-dom"
import Header from './Components/Header';
import Footer from './Components/Footer';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Error from './Assets/Error';
import GoToTop from './Components/GoToTop';
function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <GoToTop />
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/Members' element={<Members />}/>
      <Route path='/Gallary' element={<Gallary />}/>
      <Route path='/Contact' element={<Contact />}/>
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    
    </ThemeProvider>
  );
}

export default App;
