"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "BookClub",
    description:
      "Full-stack web application for posting and reviewing books.  Built with JavaScript, Node, Express, and MongoDB.",
    image: "/images/projects/bookclub.JPG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jakedusing/BookClub",
    previewUrl: "https://book-club-alpha.vercel.app/",
  },
  {
    id: 2,
    title: "Pokemon Guesser",
    description:
      "Web app built with HTML, CSS, and JavaScript where users guess the names of random Pokemon based on their images.  Uses the Poki API",
    image: "/images/projects/pokemonguesser.JPG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jakedusing/PokemonGuesser",
    previewUrl: "https://jd-pokemon-guesser.netlify.app/",
  },
  {
    id: 3,
    title: "Breath of the Wild Compendium",
    description: "A compendium to learn all about Breath of the Wild",
    image: "/images/projects/botw.JPG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jakedusing/BOTW-Compendium",
    previewUrl: "https://zeldabotwcompendium.netlify.app/",
  },
  {
    id: 4,
    title: "NPM Registry",
    description: "Package manager for Javascript.  Search and view packages.",
    image: "/images/projects/registry.JPG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jakedusing/registry",
    previewUrl: "https://npmregistry.netlify.app/",
  },
  {
    id: 5,
    title: "McCormick's Flooring",
    description: "Web application for a flooring contactor",
    image: "/images/projects/flooring.JPG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jakedusing/McCormicksFlooring",
    previewUrl: "https://mccormicksflooring.netlify.app/",
  },
  {
    id: 6,
    title: "Blaster",
    description:
      "Online multiplayer shooter game made with C++ in Unreal Engine",
    image: "/images/projects/blaster.JPG",
    tag: ["All", "Games"],
    gitUrl: "https://github.com/jakedusing/blaster",
    previewUrl: "https://jakedusing.itch.io/blaster",
  },
  {
    id: 7,
    title: "Kitchen Chaos",
    description: "Kitchen assembly game made with C# in Unity",
    image: "/images/projects/kitchenchaos.JPG",
    tag: ["All", "Games"],
    gitUrl: "https://github.com/jakedusing/KitchenChaos",
    previewUrl: "https://jakedusing.itch.io/kitchen-chaos",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-6">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Games"
          isSelected={tag === "Games"}
        />
      </div>
      <ul ref={ref} className="grid lg:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
