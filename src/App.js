import { AboutMe } from "./components/AboutMe";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { MyProjects } from "./components/MyProjects";
import { Footer } from "./components/Footer";
import { Technologies } from "./components/Technologies";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <AboutMe />
      <MyProjects />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
