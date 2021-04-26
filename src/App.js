import { AboutMe } from "./components/AboutMe";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { MyProjects } from "./components/MyProjects";
import { Footer } from "./components/Footer";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <AboutMe />
      <MyProjects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
