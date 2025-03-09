import "./about.css";
import theme_pattern from "../../assets/assets/theme_pattern.svg";
import coding from "../../assets/assets/coding.png";

const About = () => {
  return (
    <div id="about"className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={coding} alt="Coding Illustration" />
        </div>
        <div className="about-right">
          <p>
            Python Full Stack Developer with 10 months of experience at a
            fast-paced startup in Chennai, specializing in <span>Django</span>,{" "}
            <span>React.js</span>, JavaScript, and Material UI. Proficient in
            designing and developing scalable, high-performance web applications
            with a strong focus on backend logic, RESTful APIs, and interactive
            front-end components. Possess a basic understanding of DevOps
            practices, including <span>Docker containerization</span>,{" "}
            <span>Ansible Playbooks for automation</span>, <span>CI/CD</span>{" "}
            pipelines for continuous deployment, and Kafka for real-time data
            streaming. Skilled in version control systems such as{" "}
            <span>Git and GitHub</span>, along with expertise in JIT
            (Just-in-Time compilation), <span>Nginx</span> web servers,
            <span>ASGI</span> (Asynchronous Server Gateway Interface), and{" "}
            <span>PostgreSQL</span>
            database management. Have contributed to complex, industry-standard
            projects requiring meticulous code optimization, structured
            architecture, and best practices, demonstrating skills beyond the
            typical experience level of <span>10 months</span>. Developed admin
            dashboards, data processing pipelines, and file upload systems that
            integrate efficiently with databases and message brokers{" "}
            <span>Kafka</span>.
          </p>
        </div>
      </div>
      <div className="about-skills">
        <div className="skill">
        <p>Programming Languages: Python, JavaScript</p>
        <p>Web Technologies: HTML, CSS, React.js</p>
        </div>
        <hr />
        <div className="skill">
        <p>Databases: PostgreSQL</p>
        <p>DevOps & Tools: Docker, Git, GitHub, CI/CD
        Pipelines</p>
        </div>
        <hr />
        <div className="skill">
        <p>Databases: PostgreSQL</p>
        <p>Web Servers: Nginx, ASGI</p>
        </div>
      </div>
      
    </div>
  );
};

export default About;
