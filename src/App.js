import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import GoalSection from "./components/GoalSection";
import Services from "./components/Services";
import Vision from "./components/Vision";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <GoalSection />
      <Services />
      <Vision />
    </div>
  );
}

export default App;
