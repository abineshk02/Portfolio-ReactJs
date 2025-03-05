import "./about.css";
import theme_pattern from "../../assets/assets/theme_pattern.svg";
import coding from "../../assets/assets/coding.png";

const About = () => {
  return (
    <div className="about">
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
      {/* <div className="about-skills">
        <h2>Technical Skills</h2>
          <div className="about-skill">
            Programming Languages: Python, JavaScript, TypeScript
          </div>
          <div className="about-skill">
            Web Technologies: HTML, CSS, React.js, Material UI
          </div>
          <div className="about-skill">
            Backend Frameworks: Django, Django REST Framework
          </div>
          <div className="about-skill">Databases: PostgreSQL</div>
          <div className="about-skill">
            DevOps & Tools: Docker, Ansible Playbooks, Git, GitHub, CI/CD
            Pipelines, JIT
          </div>
          <div className="about-skill">Web Servers: Nginx, ASGI</div>
          <div className="about-skill">API Tools: Postman</div>
          <div className="about-skill">Data Processing & Messaging: Kafka</div>
          <div className="about-skill">Methodologies: Agile</div>
          <div className="about-skill">Code Editor: VS Code</div>
          <div className="about-skill">
            Other Skills: UI development, responsive web design, cloning popular
            web pages (e.g., Netflix), and personal portfolio creation
          </div> */}
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
