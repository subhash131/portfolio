import Hero from "./components/Hero";
import Project from "./components/Project";
import WorkedWith from "./components/WorkedWith";
import { projects } from "./constants/projects";

function App() {
  return (
    <div className="wrapper">
      <Hero />
      <WorkedWith />
      {projects.map((project) => {
        return (
          <Project
            number={project.number}
            subtitle={project.subtitle}
            name={project.name}
            description={project.description}
            image1={project.image1}
            image2={project.image2}
            key={project.number}
          />
        );
      })}
    </div>
  );
}

export default App;
