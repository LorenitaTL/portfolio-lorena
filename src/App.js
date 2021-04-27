import { AboutMe } from "./components/AboutMe";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { MyProjects } from "./components/MyProjects";
import { Footer } from "./components/Footer";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <AboutMe />
      <MyProjects />
      <Experience/>
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
