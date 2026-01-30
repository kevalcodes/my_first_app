// Professional React + TypeScript Portfolio for Keval Sukase
// Based on resume details
// Setup: npm create vite@latest keval-portfolio -- --template react-ts
// Then replace src/App.tsx with this file

import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>Keval Somnath Sukase</h1>
        <p>Java Developer | Spring Boot | React.js</p>
        <div className="links">
          <a href="https://github.com/kevalcodes" target="_blank">GitHub</a>
          <a href="https://www.naukri.com/mnjuser/profile" target="_blank">Naukri</a>
          <a href="mailto:kevalsukase1999@gmail.com">Email</a>
          <a
            href="/Keval_Sukase_Resume.pdf"
            download
            className="resume-btn"
          >
            Download Resume
          </a>
        </div>
      </header>

      <section className="section">
        <h2>About Me</h2>
        <p>
          Java Developer with 3.5+ years of experience in developing web
          applications using Java, Spring Boot, and React.js.
        </p>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <div className="skills">
          <span>Java</span>
          <span>J2EE</span>
          <span>Spring Boot</span>
          <span>Hibernate</span>
          <span>React.js</span>
          <span>MySQL</span>
          <span>Oracle</span>
          <span>PostgreSQL</span>
          <span>MongoDB</span>
          <span>GitHub</span>
        </div>
      </section>

      <section className="section">
        <h2>Experience</h2>

        <div className="card">
          <h3>Sellcraft Global Solutions</h3>
          <p>Java Developer (Aug 2024 – Present)</p>
          <ul>
            <li>Migrated .NET & Angular apps to Spring Boot + React</li>
            <li>Built REST APIs</li>
            <li>Database migrations</li>
            <li>Frontend enhancement</li>
          </ul>
        </div>

        <div className="card">
          <h3>U&B IT Consultancy</h3>
          <p>Java Developer (Jan 2024 – Jul 2024)</p>
          <ul>
            <li>Bug fixing</li>
            <li>Requirement analysis</li>
            <li>Code reviews</li>
          </ul>
        </div>

        <div className="card">
          <h3>Acks Solutions</h3>
          <p>Junior Software Engineer (Jan 2022 – Dec 2023)</p>
          <ul>
            <li>Java development</li>
            <li>Debugging</li>
            <li>Best practices</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Projects</h2>

        <div className="card">
          <h3>Vendor Compliance System</h3>
          <p>Java, Spring Boot, React, PostgreSQL, MongoDB</p>
          <p>
            Platform for vendor registration, document verification, and
            compliance tracking.
          </p>
        </div>

        <div className="card">
          <h3>Inventory Management System</h3>
          <p>Java, Spring Boot, Hibernate, Oracle</p>
          <p>
            Wholesale software and hardware distribution management system.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Education</h2>
        <ul>
          <li>B.E. - Pune University (2022)</li>
          <li>Diploma in Computer Technology (2019)</li>
        </ul>
      </section>

      <section className="section">
        <h2>Contact</h2>
        <p>Email: kevalsukase1999@gmail.com</p>
        <p>Phone: +91 9370548799</p>
        <p>Location: Mumbai, Maharashtra</p>
      </section>

      <footer className="footer">
        <p>© 2026 Keval Sukase | Portfolio</p>
      </footer>
    </div>
  );
};

export default App;
