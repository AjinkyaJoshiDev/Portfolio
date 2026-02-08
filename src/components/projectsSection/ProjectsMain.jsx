import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "JioEvents",
    description: "Webinar-enabled video conferencing app",
    align: "right",
    image: "../../public/images/JioEvents-social-media.jpg",
    link: "https://jioevents.com/home",
  },
    {
    name: "Jio Edge Cloud Services",
    description: "Cloud platform for edge computing and scalable services",
    align: "right",
    image: "../../public/images/Jio-cloud.jfif",
    link: "",
  },
    {
    name: "Bancassuarance",
    description: "Full-stack bancassurance platform for policy management and sales",
    align: "right",
    image: "../../public/images/bancassurance.png",
    link: "https://ext.bajajallianz.com/microsites/portal/#/auth/login",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              description={project.description}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
