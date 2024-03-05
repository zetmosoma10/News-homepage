import Navbar from "./Components/Navbar";
import Features from "./Containers/Features";
import Hero from "./Containers/Hero";

function App() {
  return (
    <main className="max-w-screen-xl mx-auto px-4 pb-8  font-display texts-base text-dark_grayish_blue ">
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}

export default App;
