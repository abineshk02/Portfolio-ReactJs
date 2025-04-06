import 'react';
import "./hero.css";
import coding from "../../assets/assets/coding.png";
import { Link as AnchorLink } from "react-scroll";

const Hero = () => {
  const openResume = () => {
    window.open(`${import.meta.env.BASE_URL}abinesh-resume.pdf`, "_blank");
  };
  
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = `${import.meta.env.BASE_URL}abinesh-resume.pdf`;
    link.download = "abinesh-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  return (
    <div id="home" className="hero">
      <img src={coding} alt="Coding" />

      <h1>
        <span>I&apos;m Abinesh,</span> Associate Python FullStack Developer
      </h1>

      <p>
        I am an Associate Python Full Stack Developer based in Chennai, with over
        10 months of experience. I have worked at Code Crave Solutions, a dynamic startup.
      </p>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink
            className="anchor-link"
            to="contact"
            offset={-50}
            smooth={true}
            duration={500}
            href="#contact"
          >
            Connect with me
          </AnchorLink>
        </div>

        <div
          className="hero-resume"
          onClick={openResume}
          onDoubleClick={downloadResume}
        >
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
