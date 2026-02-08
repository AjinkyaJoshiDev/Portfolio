import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2021
      </p>
      <div className="justify-center items-center gap-4">
        <ExperienceInfo number="4.5+" text="Years" />
      </div>
      <p className="text-center">
        With 4.5 years of experience in building dynamic, responsive, and
        user-friendly web applications using modern frontend technologies.
      </p>
    </div>
  );
};

export default ExperienceTopLeft;
