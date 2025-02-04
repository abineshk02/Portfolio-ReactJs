import  'react';
import "./hero.css";
import coding from "../../assets/assets/coding.png"

const Hero = () => {
  return (
    <div className='hero'>
        <img src={coding} alt="" />

        <h1> I&apos;m Abinesh, Associate Python FullStack Developer</h1>
        <p> I am an Associate Python Full Stack Developer based in Chennai, with over 10 months of experience. I have worked at Code Crave Solutions, a dynamic startup, where I gained hands-on experience in developing and maintaining full-stack applications.</p>
        <div className="hero-section">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero