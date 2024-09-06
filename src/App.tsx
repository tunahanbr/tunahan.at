import { FC, useEffect, useState } from "react";

import Hero from "./components/hero";
import Project from "./components/project";
import AnimatedCursor from "react-animated-cursor";
import Navbar from "./components/navbar";
import ProfileDescription from "./components/profile-description";


const App: FC = () => {
  return (
    <>
    {/*<Navbar /> */}
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
      <div className="container mx-auto mb-12">
        <div className="w-full md:w-3/4 lg:w-1/2 mx-auto relative mt-5">
          <Hero
            name="Tunahan Karakaya"
            description={<ProfileDescription />}
            job="Student"
            birthdate="October 18th"
            dateJoined="Joined August 2024"
          />
          <h1 className="mt-10 text-xl font-medium">Featured Projects</h1>
          <Project />
        </div>
      </div>
    </>
  );
};

export default App;
