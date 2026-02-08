import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/ajinkya-joshi-23a5a216a"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial link="https://github.com/AjinkyaJoshiDev" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/ajinkyajoshi219?igsh=Z3A2ZjFyY3dkeHJ3" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
