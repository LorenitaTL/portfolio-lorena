import { AboutMe } from "./components/AboutMe";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { MyProjects } from "./components/MyProjects";
import { Footer } from "./components/Footer";
import { Technologies } from "./components/Technologies";
import avatar from "./assets/avatar.jpg";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <AboutMe />
      <MyProjects />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
