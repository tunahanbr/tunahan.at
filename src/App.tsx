import Hero from "./components/Hero";
import Project from "./components/Project";
import AnimatedCursor from "react-animated-cursor";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="0, 0, 0"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <div className="container mx-auto ">
        <div className="w-full md:w-3/4 lg:w-1/2 mx-auto relative mt-5">
          <Hero />
          <Skills />
          <h1 className="mt-10 text-xl font-medium">Featured Projects</h1>
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </>
  );
}

export default App;
