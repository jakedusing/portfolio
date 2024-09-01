import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "YelpCamp",
    description: "A campground review website",
    image: "/images/projects/yelpcamp.JPG",
    tag: ["All", "Web"],
  },
  {
    id: 1,
    title: "Blaster",
    description: "Online multiplayer shooter game",
    image: "/images/projects/blaster.JPG",
    tag: ["All", "Games"],
  },
  {
    id: 1,
    title: "Kitchen Chaos",
    description: "Kitchen assembly game",
    image: "/images/projects/kitchenchaos.JPG",
    tag: ["All", "Games"],
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-6">
        My Projects
      </h2>
      <div>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
