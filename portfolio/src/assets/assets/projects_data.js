const Projects_Data = [
  {
    p_no: "01",
    p_name: "Admin Usage Dashboard",
    p_desc:
      "A dashboard that monitors API rate limits, user activity, and analytics.",
    p_details: `
      ● Built an interactive dashboard using React.js and Django REST Framework.
      ● Tracked API usage, rate limits, and user activity with visual analytics.
      ● Integrated bar, line, and pie charts using Chart.js.
      ● Enabled CSV/PDF export for report generation.
      ● Improved performance with database indexing and caching.
    `,
  },
  {
    p_no: "02",
    p_name: "Kafka Upload System",
    p_desc: "A system for uploading and processing large datasets via Kafka.",
    p_details: `
      ● Built a file upload system supporting CSV, Excel, JSON, and TXT.
      ● Used Kafka to stream files to background processors.
      ● Implemented Celery tasks and Redis for async processing.
      ● Tracked upload progress with real-time frontend updates.
      ● Ensured schema validation, error handling, and logging.
    `,
  },
  {
    p_no: "03",
    p_name: "Employee Management CRUD",
    p_desc: "Full-stack app for managing employees with roles and permissions.",
    p_details: `
      ● Developed a Django app for managing employees.
      ● Implemented CRUD with validation and session-based authentication.
      ● Used Django groups for role-based access control.
      ● Designed a responsive UI with Bootstrap and templates.
      ● Currently enhancing the system to include more advanced features and make it more innovative with extended filtering, analytics, 
        and role customization options
      ● Link : https://employee-mgmt-z366.onrender.com
    `,
  },
  {
    p_no: "04",
    p_name: "BMI Calculator Web App",
    p_desc: "To calculate the bmi and tracking",
    p_details: `
      ● Built a full-stack BMI calculator using React.js and Django REST.
      ● Used JWT authentication and Jazzmin admin customization.
      ● Stored user BMI history in PostgreSQL (hosted on Neon).
      ● Deployed on Vercel (frontend) and Render (backend).
      ● Enabled secure API access and optimized database connections.
      ● Link : https://bmi-calc-gilt.vercel.app
    `,
  },
  {
    p_no: "05",
    p_name: "Payslip Template",
    p_desc: "A responsive payslip design built with HTML and CSS.",
    p_details: `
      ● Designed a clean A4 payslip layout using HTML/CSS.
      ● Included employee info, earnings, deductions, and net pay.
      ● Styled for screen and print using media queries
      ● Ideal for frontend demos or template customization.
      ● Link : https://github.com/abineshk02/payslip-ccs

    `,
  },
  {
    p_no: "06",
    p_name: "Portfolio Website",
    p_desc: "A personal portfolio built with React.js.",
    p_details: `
      ● Built a responsive React portfolio with reusable components.
      ● Implemented routing, scroll animations, and Framer Motion effects.
      ● Added resume download, contact form, and project links.
      ● Deployed on GitHub Pages with SEO optimization.
      ● Link : https://abineshk02.github.io/Portfolio-ReactJs/
    `,
  },
];

export default Projects_Data;
