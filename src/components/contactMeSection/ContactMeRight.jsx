import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-20">
      <img
        src="../../public/images/email-image.png"
        alt="email image"
        className="max-w-[180px]"
      />
      <ContactInfo />
      </div>
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
