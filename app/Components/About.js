import image from "../../public/matrix.jpg";
import Image from "next/image";
import "./About.css";

const imageAltText = "matrix world background";
const description =
  "I'm a Computer Science student in Dedan Kimathi University of Technology. I enjoy creating unique and simplistic web applications with greater UX.";

const skillsList = [
  "Front-end web development",
  "Mobile Application Programming",
  "User experience",
  "Database Management",
  "Graphics design",
];

const detailOrQuote =
  "A passionate and driven Computer Science student with a strong foundation in software development. Eager to apply my skills to innovative projects, contribute to cutting-edge technologies, and pursue a challenging role in Web3, AI development, or full-stack engineering.";

const About = () => {
  return (
    <section className="padding" id="about">
      <Image className="background" src={image} alt={imageAltText} />
      <div
       className="about"
      >
        <h2>About Myself</h2>
        <p>{description}</p>
        <hr />
       <h2>Skills</h2>
        <ul
         className="skills"
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
