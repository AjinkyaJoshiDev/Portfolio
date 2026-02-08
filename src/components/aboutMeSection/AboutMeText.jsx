import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Ajinkya, a software developer with experience in building scalable,
        full-stack web applications. I work with modern frontend frameworks like
        Angular, React, and Next.js to create responsive and user-friendly
        interfaces. On the backend, I’ve worked with Express and Node.js,
        integrating secure and high-performance APIs. I enjoy translating
        business requirements into reliable technical solutions and continuously
        improving application performance. I’m passionate about learning new
        technologies and delivering high-quality software.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
