import Test from "./test";
import Navbar from "./Components/navbar/Navbar";
import "./app.scss"
import Hero from "./Components/Hero/Hero";
import Parallax from "./Components/Parallax/Parallax";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Cursor from "./Components/Cursor/Cursor";

const App = () => {
  return <div>
    <Cursor/>
     <section id="Home">
      <Navbar/> 
      <Hero/>
    </section>

    <section id="services"><Parallax type="Services"/></section>

    <section><Services/></section> 

    <section id="Portfolio"><Parallax type="services"/></section>

     <Portfolio/>

      <section id="Contact">
      <Contact/>  
    </section> 

    {/* <Test/> */}

  </div>;
};

export default App;
