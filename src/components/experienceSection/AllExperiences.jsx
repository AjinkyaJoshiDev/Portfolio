import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
    {
    job: "Software Development Engineer",
    company: "Jio Platforms Limited",
    date: "Oct 2021 - Aug 2025",
    responsibilities: [
      "Contributed to a major UI revamp, improving usability and overall user experience.",
      "Integrated WebRTC and optimized cross-browser performance.",
      "Built a cloud services platform using React and Next.js from scratch.",
      "Developed new features and enhancements using Angular based on product requirements.",
    ],
  },
  {
    job: "Software Engineer",
    company: "Bajaj General Insurance Limited",
    date: "Aug 2025 - Present",
    responsibilities: [
      "Developed Angular-based bancassurance application with reactive forms and API integration.",
      "Worked on secure web authentication and authorization mechanisms.",
      "Handled form validations and business rules across the application.",
      "Integrated backend APIs for policy, customer, and payment modules.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-evenly">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < experiences.length - 1 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
