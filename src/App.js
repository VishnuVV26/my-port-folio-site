import About from "./Components/About/About";
import Bot from "./Components/Bot/Bot";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hireme from "./Components/Hireme/Hireme";
import Intro from "./Components/Intro/Intro";
import MySkills from "./Components/My Skills/MySkills";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App bg-cyan-800">
      <Navbar/>
      <Bot/>
      <Intro/>
      <About/>
      <MySkills/>
      <Hireme/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
