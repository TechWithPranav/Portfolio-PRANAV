import { BrowserRouter } from "react-router-dom";
import { About,Contact,Experience,Education,Hero,Navbar,Tech,Works,StarsCanvas } from "./components"

const App = () => {

  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        
        <Hero id="home" />
      </div>
      <About id="about"/>
      <Experience id="experience" />
      <Tech id="tech" />
      <Works id="works" />
      <Education id="education" />
      <div className="relative z-0">
        <Contact id="contact" />
        <StarsCanvas />
      </div>
    </div>
    </BrowserRouter>

  );
}

export default App

