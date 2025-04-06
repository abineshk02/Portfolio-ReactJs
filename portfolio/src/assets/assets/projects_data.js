const Projects_Data = [
    {
      p_no: "01",
      p_name: "Admin Usage Dashboard",
      p_desc: "A dashboard that monitors API rate limits, user activity, and provides analytical insights.",
      p_details: `
        ● Designed and developed an interactive Admin Dashboard using React.js and Django REST Framework.
        ● Tracked real-time API usage metrics, rate limits, and user activity with visual analytics.
        ● Integrated bar, line, and pie charts using Chart.js for an intuitive representation of data patterns.
        ● Implemented CSV/PDF export functionality for generating custom reports.
        ● Optimized query performance with database indexing and caching techniques.
      `
    },
    {
      p_no: "02",
      p_name: "Kafka Upload System",
      p_desc: "A system for uploading and processing large datasets using Kafka message queues.",
      p_details: `
        ● Built a robust file upload system supporting CSV, Excel, JSON, and TXT formats.
        ● Used Apache Kafka for streaming and queuing uploaded files to background processing services.
        ● Developed Celery tasks for asynchronous processing and integrated Redis as a broker.
        ● Provided real-time upload progress tracking via frontend event updates.
        ● Ensured schema validation, error handling, and logging throughout the upload lifecycle.
      `
    },
    {
      p_no: "03",
      p_name: "Employee Management CRUD",
      p_desc: "A full-stack CRUD application to manage employee records, including authentication and role management.",
      p_details: `
        ● Created a Django-based web application to manage employee profiles, salaries, and departments.
        ● Implemented CRUD functionalities with form validation and session-based authentication.
        ● Integrated Django's permission and group system for role-based access control (admin, HR, staff).
        ● Used Bootstrap and Django templates for responsive UI design.
        ● Included search, filter, and pagination features to enhance user interaction.
      `
    },
    {
      p_no: "04",
      p_name: "Netflix UI Clone",
      p_desc: "A responsive clone of the Netflix homepage using HTML, CSS, and JavaScript.",
      p_details: `
        ● Recreated Netflix's landing page layout with HTML5, CSS3 (Flexbox, Grid), and Vanilla JavaScript.
        ● Focused on pixel-perfect design, smooth hover animations, and transitions.
        ● Built a responsive interface that adapts to desktop, tablet, and mobile devices.
        ● Implemented a login/signup form with validation using CSS pseudo-classes and JavaScript.
        ● Practiced component reuse and layout consistency for a professional finish.
      `
    },
    {
      p_no: "05",
      p_name: "Payslip Template",
      p_desc: "A clean, professional payslip design made with HTML and CSS.",
      p_details: `
        ● Designed a printable payslip layout suitable for payroll systems using only HTML and CSS.
        ● Included employee details, earnings, deductions, tax breakdowns, and net pay.
        ● Styled for A4 print output with media queries and print-specific CSS rules.
        ● Ensured responsive layout and visual hierarchy for both screen and print views.
        ● Ideal for HR demo or integration in internal tools.
      `
    },
    {
      p_no: "06",
      p_name: "Portfolio Website",
      p_desc: "A personal portfolio built with React.js showcasing all my projects.",
      p_details: `
        ● Developed a single-page responsive React portfolio to showcase personal and professional projects.
        ● Implemented reusable components, route-based navigation, and a modern grid layout.
        ● Added animated transitions and scroll effects using Framer Motion and CSS animations.
        ● Integrated downloadable resume, contact form (with form validation), and GitHub/project links.
        ● Deployed the website using GitHub Pages and ensured SEO optimization with meta tags.
      `
    }
  ];
  
  export default Projects_Data;
  