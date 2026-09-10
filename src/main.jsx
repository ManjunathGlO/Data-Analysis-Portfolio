import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import emailjs from "@emailjs/browser";
import {
  ArrowDown,
  ArrowUp,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  PieChart,
  Send,
  Sparkles,
  Sun,
  X,
  Brain,
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Manjunath G L",
  role: "Data Analyst",
  positioning: "SQL • Python • Power BI • Excel • Data Visualization",
  email: "manjunathgl064@gmail.com",
  phone: "+91 8431769635",
  location: "Bengaluru, Karnataka, India",
  linkedin: "https://www.linkedin.com/in/manjunathgl/",
  github: "https://github.com/ManjunathGlO",
  resume: "/assets/resume/Manjunath_GL_Data_Analyst_Resume.pdf",
  photo: "/assets/profile/Profile.png",
};

const skills = [
  ["SQL", "Database querying, joins, CTEs, aggregations", Database],
  ["Python", "Pandas, NumPy, EDA, visualization", Code2],
  ["Power BI", "Interactive dashboards and business reporting", BarChart3],
  ["Excel", "Pivot tables, formulas, reporting and analysis", FileText],
  ["Tableau", "Visual storytelling and interactive analytics", PieChart],
  [
    "Statistics",
    "Descriptive analysis, trends and business insights",
    CheckCircle2,
  ],
  [
    "Machine Learning",
    "Predictive modeling, classification and model evaluation",
    Brain,
  ],
];

const projects = [
  {
    title: "Customer Churn Analysis & Prediction",
    category: "Power BI",
    tags: ["Python", "Excel", "SQL", "Power BI", "Machine Learning"],
    image: "/assets/projects/project-1.png",
    description:
      "Analyzed 6,418 customers to identify churn drivers across contract type, payment method, and tenure, revealing a 27% churn rate.",
    problem:
      "Identify high-risk customer segments and understand the key factors driving customer churn.",
    insights:
      "Uncovered churn patterns by contract, payment method, and tenure to support targeted customer retention strategies.",
    github: "https://github.com/ManjunathGlO/Customer-Churn-Analysis.git",
    live: "https://drive.google.com/file/d/1g7DENUqRuBPvTkyad7_9fxCF5D5iQ4hj/view?usp=sharing",
  },

  {
    title: "HR Analytics: Employee Attrition Insights",
    category: "Python",
    tags: ["Python", "Excel", "SQL", "Power BI", "Machine Learning"],
    image: "/assets/projects/project-2.png",
    description:
      "Analyzed 1,417 employees to track a 16.3% attrition rate and identify workforce patterns across departments, job roles, and satisfaction levels.",
    problem:
      "Identify the key factors contributing to employee attrition and improve workforce retention planning.",
    insights:
      "Revealed attrition patterns across departments, job roles, satisfaction, and employee demographics to support targeted retention decisions.",
    github: "https://github.com/ManjunathGlO/HR-Analytics-Dashboard.git",
    live: "https://drive.google.com/file/d/1ZfzBzN4I_OWMmLFN43uCwlI2jfkVSXFq/view?usp=sharing",
  },

  {
    title: "Super Store Sales Analysis & Forecasting",
    category: "SQL",
    tags: ["Python", "Excel", "SQL", "Power BI", "Machine Learning"],
    image: "/assets/projects/project-3.png",
    description:
      "Analyzed $2.22M in sales and $175K profit across regions, segments, and categories to identify performance gaps and growth opportunities.",
    problem:
      "Understand sales and profitability trends to identify underperforming segments and support future demand planning.",
    insights:
      "Identified regional, segment, and category performance patterns to highlight growth opportunities and areas requiring attention.",
    github: "https://github.com/ManjunathGlO/Super-Store-Sales-Analysis.git",
    live: "https://drive.google.com/file/d/17P9Dt9lwJFobzNeJ658SlTha-TQHd1CR/view?usp=sharing",
  },

  {
    title: "Sales & Profit Analysis Dashboard",
    category: "Excel",
    tags: ["Python", "Excel", "SQL", "Power BI", "Machine Learning"],
    image: "/assets/projects/project-4.png",
    description:
      "Analyzed $23.6M in sales and $2.47M profit across years, categories, regions, and customers to evaluate business performance.",
    problem:
      "Improve visibility into sales and profitability performance across products, customers, regions, and time periods.",
    insights:
      "Identified top-performing customers, categories, and regions while highlighting profitability trends for business decision-making.",
    github:
      "https://github.com/ManjunathGlO/Sales-Profit-Analysis-Dashboard.git",
    live: "https://drive.google.com/file/d/1mR10Pvjhd8tPKnGO2nkJc9Hz33sc4Kmn/view?usp=sharing",
  },

  {
    title: "HR Team Analytics Dashboard",
    category: "Excel",
    tags: ["Python", "Excel", "SQL", "Power BI", "Machine Learning"],
    image: "/assets/projects/project-5.png",
    description:
      "Analyzed workforce data covering 171 employees and a 27% attrition rate across departments, job levels, and reporting structures.",
    problem:
      "Improve visibility into workforce composition, attrition, and organizational structure for HR decision-making.",
    insights:
      "Highlighted headcount distribution, attrition patterns, and workforce trends across departments and job levels.",
    github: "https://github.com/ManjunathGlO/HR-Team-Analytics.git",
    live: "https://drive.google.com/file/d/1pAZcHd0VJPd4AiOGdsHVeUJ0vVxn409b/view?usp=sharing",
  },

  {
    title: "E-Commerce Sales Analysis",
    category: "Excel",
    tags: ["Python", "Excel", "SQL", "Power BI", "Machine Learning"],
    image: "/assets/projects/project-6.png",
    description:
      "Analyzed e-commerce sales performance across regions, categories, and customer segments to uncover purchasing and revenue trends.",
    problem:
      "Understand customer purchasing behavior and identify sales trends across products, regions, and customer segments.",
    insights:
      "Identified high-performing categories, customer segments, and regional sales patterns to support data-driven sales decisions.",
    github: "https://github.com/ManjunathGlO/E-Commerce-Sales-Analysis..git",
    live: "https://drive.google.com/file/d/1_RuhACFQxrZQ7RO9hEU4r58YT6LYei6v/view?usp=sharing",
  },
];

const certifications = [
  {
    name: "Master in Data Science and Analytics With AI & ML",
    issuer: "ITVedant",
    date: "2026",
    id: "Credential ID: CERT_380_4",
    image: "/assets/certifications/certificate-1.png",
    credential:
      "https://drive.google.com/file/d/1cWRCsjwq6ydYRuzJons0s4Be9w9lXoZ4/view?usp=sharing",
  },
  {
    name: "Python for Web Development",
    issuer: "IBMCEP",
    date: "2026",
    id: "Credential ID: EE88...B329",
    image: "/assets/certifications/certificate-2.png",
    credential:
      "https://courses.itvedant.skillsnetwork.site/certificates/ee8838843d14498bb4458de700fbb329",
  },
  {
    name: "Advanced SQL and MongoDB",
    issuer: "ITVedant",
    date: "2026",
    id: "Credential ID: EE88...B329",
    image: "/assets/certifications/certificate-3.png",
    credential:
      "https://courses.itvedant.skillsnetwork.site/certificates/ee8838843d14498bb4458de700fbb329",
  },
  {
    name: "Python & Django Framework",
    issuer: "ITVedant",
    date: "2026",
    id: "Credential ID: EE88...B329",
    image: "public/assets/certifications/certificate-4.png",
    credential:
      "https://courses.itvedant.skillsnetwork.site/certificates/ee8838843d14498bb4458de700fbb329",
  },
];

function TypingText() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = "Data Analyst";
    let delay = isDeleting ? 65 : 110;

    if (!isDeleting && text === word) {
      delay = 1800;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (text === word) {
          setIsDeleting(true);
        } else {
          setText(word.slice(0, text.length + 1));
        }
      } else {
        if (text === "") {
          setIsDeleting(false);
        } else {
          setText(word.slice(0, text.length - 1));
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  return (
    <h2 className="hero-role" aria-label="Data Analyst">
      {text}
      <span className="typing-cursor" aria-hidden="true">
        |
      </span>
    </h2>
  );
}

function App() {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") !== "light",
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [filter, setFilter] = useState("All");
  const [showTop, setShowTop] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 500);
      const sections = [
        "home",
        "about",
        "resume",
        "projects",
        "certifications",
        "contact",
      ];
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 180) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.tags.includes(filter)),
    [filter],
  );

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <div className="app-shell">
      <button
        className="mobile-menu"
        aria-label="Open navigation"
        onClick={() => setMobileOpen(true)}
      >
        <Menu size={21} />
      </button>

      <aside className={`sidebar ${mobileOpen ? "open" : ""}`}>
        <div className="sidebar-top">
          <button
            className="close-menu"
            aria-label="Close navigation"
            onClick={() => setMobileOpen(false)}
          >
            <X />
          </button>

          <img
            className="profile-photo"
            src={profile.photo}
            alt={`${profile.name} profile`}
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextElementSibling.style.display = "flex";
            }}
          />

          <div className="avatar-fallback" aria-hidden="true">
            {profile.name
              .split(" ")
              .map((x) => x[0])
              .slice(0, 2)
              .join("")}
          </div>
          <h2>{profile.name}</h2>
          <p>{profile.role}</p>
          <span className="availability">
            <i /> Open to Data Analyst Opportunities
          </span>
        </div>

        <nav className="side-nav" aria-label="Primary navigation">
          {[
            "home",
            "about",
            "resume",
            "projects",
            "certifications",
            "contact",
          ].map((id) => (
            <button
              key={id}
              className={active === id ? "active" : ""}
              onClick={() => go(id)}
            >
              <span>{id[0].toUpperCase() + id.slice(1)}</span>
              <ChevronRight size={15} />
            </button>
          ))}
        </nav>

        <div className="socials">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={17} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={17} />
          </a>
        </div>

        <div className="sidebar-footer">
          © {new Date().getFullYear()} {profile.name}
        </div>
      </aside>

      <main className="content">
        <header className="topbar">
          <div className="mini-brand">
            <BarChart3 size={18} /> Portfolio
          </div>
          <div className="top-actions">
            <a href={profile.resume} className="outline-btn small" download>
              <Download size={15} /> Resume
            </a>
            <button
              className="theme-btn"
              onClick={() => setDark((v) => !v)}
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </header>

        <section id="home" className="hero section">
          <div className="hero-copy">
            <span
              className="eyebrow hero-eyebrow"
              style={{ transform: "translateY(-24px)" }}
            >
              <Sparkles size={15} /> DATA ANALYST PORTFOLIO
            </span>

            <span className="hero-greeting">Hello, I'm</span>

            <h1 className="hero-name">Manjunath</h1>

            <TypingText />

            <p className="hero-positioning">
              Data Analyst <span>|</span> SQL <span>|</span> Python{" "}
              <span>|</span> Power BI <span>|</span> Excel <span>|</span> Data
              Visualization
            </p>

            <p className="hero-lead">
              I turn raw data into clear, actionable business insights through
              analytical thinking, SQL, Python, Excel, and modern BI tools —
              with a focus on answering the business question behind the
              numbers.
            </p>

            <div className="hero-actions">
              <button
                className="primary-btn"
                onClick={() => go("projects")}
                type="button"
              >
                View My Projects
                <ChevronRight size={18} />
              </button>

              <a className="outline-btn" href={profile.resume} download>
                Download Resume
                <Download size={18} />
              </a>

              <button
                className="contact-btn"
                onClick={() => go("contact")}
                type="button"
              >
                Contact Me
              </button>
            </div>

            <div className="tool-row">
              {[
                "SQL",
                "Python",
                "Power BI",
                "Excel",
                "Tableau",
                "Machine Learning",
              ].map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="analytics-dashboard">
              <div className="analytics-dashboard__top">
                <div>
                  <span className="analytics-kicker">ANALYTICS WORKSPACE</span>
                  <strong>Business Overview</strong>
                </div>
                <span className="analytics-live">
                  <i /> Live
                </span>
              </div>

              <div className="analytics-tools" aria-label="Analytics tools">
                <span>
                  <Database size={12} /> SQL
                </span>
                <span>
                  <Code2 size={12} /> Python
                </span>
                <span>
                  <BarChart3 size={12} /> Power BI
                </span>
              </div>

              <div className="analytics-kpis">
                <div className="analytics-kpi">
                  <small>Revenue</small>
                  <b>₹1.24M</b>
                  <em>+12.8%</em>
                </div>
                <div className="analytics-kpi">
                  <small>Customers</small>
                  <b>4,281</b>
                  <em>+8.4%</em>
                </div>
                <div className="analytics-kpi">
                  <small>Growth</small>
                  <b>18.6%</b>
                  <em>+3.2%</em>
                </div>
              </div>

              <div className="analytics-charts">
                <div className="analytics-panel analytics-trend">
                  <div className="analytics-panel__head">
                    <span>Sales Trend</span>
                    <small>Jan–Jun</small>
                  </div>
                  <div className="trend-chart" aria-hidden="true">
                    <span style={{ height: "34%" }} />
                    <span style={{ height: "48%" }} />
                    <span style={{ height: "43%" }} />
                    <span style={{ height: "66%" }} />
                    <span style={{ height: "61%" }} />
                    <span style={{ height: "82%" }} />
                    <span style={{ height: "92%" }} />
                  </div>
                  <div className="trend-labels">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </div>

                <div className="analytics-panel analytics-category">
                  <div className="analytics-panel__head">
                    <span>By Category</span>
                    <small>Share</small>
                  </div>
                  <div className="donut-wrap">
                    <div className="analytics-donut">
                      <strong>₹1.2M</strong>
                      <small>Total</small>
                    </div>
                  </div>
                  <div className="analytics-legend">
                    <span>
                      <i /> Electronics
                    </span>
                    <span>
                      <i /> Furniture
                    </span>
                    <span>
                      <i /> Other
                    </span>
                  </div>
                </div>
              </div>

              <div className="analytics-footer">
                <span>
                  <CheckCircle2 size={13} /> Data cleaned &amp; analysis ready
                </span>
                <span>EDA · BI · Insights</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <SectionTitle
            kicker="ABOUT ME"
            title="Analytics with a business mindset."
            text="I enjoy turning messy datasets into structured analysis, compelling visuals and decisions people can act on."
          />
          <div className="about-grid">
            <div className="about-card large">
              <span className="number">01</span>
              <h3>From raw data to useful decisions.</h3>
              <p>
                I approach analytics as a complete workflow: understand the
                business question, clean and explore the data, identify
                meaningful patterns, visualize the story and communicate
                recommendations clearly.
              </p>
              <div className="quote-line">
                “Good analysis doesn't just explain what happened — it helps
                decide what to do next.”
              </div>
            </div>
            <div className="about-card">
              <span className="number">02</span>
              <h3>What I do</h3>
              <ul className="check-list">
                {[
                  "Data Cleaning & EDA",
                  "SQL Analytics",
                  "Dashboard Development",
                  "Business Reporting",
                  "Data Visualization",
                ].map((x) => (
                  <li key={x}>
                    <CheckCircle2 size={16} />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="skills-grid">
            {skills.map(([name, desc, Icon]) => (
              <div className="skill-card" key={name}>
                <Icon size={21} />
                <h4>{name}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="resume" className="section resume-section">
          <SectionTitle
            kicker="RESUME"
            title="A focused toolkit for analytics."
            text="A recruiter-friendly snapshot of my education, skills and professional direction."
          />

          <div className="resume-grid resume-grid-aligned">
            {/* LEFT: EDUCATION + EXPERIENCE + TOOLKIT */}
            <div className="timeline-card resume-timeline-card">
              <div className="timeline-item">
                <span className="timeline-icon">
                  <GraduationCap size={18} />
                </span>

                <div className="timeline-content">
                  <small>EDUCATION</small>

                  <h3>Bachelor of Engineering</h3>
                  <p>
                    M. S. Ramaiah University of Applied Sciences
                    <br />
                    <strong>2020–2023</strong> · First Class Distinction
                  </p>

                  <div className="resume-sub-item">
                    <h3>NTTF (Nettur Technical Training Foundation)</h3>
                    <p>
                      Nettur Technical Training Foundation
                      <br />
                      <strong>2017–2020</strong> · First Class Distinction
                    </p>
                  </div>
                </div>
              </div>

              <div className="timeline-item">
                <span className="timeline-icon">
                  <BriefcaseBusiness size={18} />
                </span>

                <div className="timeline-content">
                  <small>EXPERIENCE</small>

                  <div className="resume-experience">
                    <h3>Data Analyst Intern</h3>
                    <p>
                      <strong>ITVedant</strong> · 2026–Present
                    </p>

                    <ul>
                      <li>
                        Completed hands-on training in SQL, Python, Excel, Power
                        BI, Tableau, Statistics, and Machine Learning.
                      </li>
                      <li>
                        Built end-to-end analytics projects using real-world
                        datasets.
                      </li>
                      <li>
                        Performed data cleaning, EDA, visualization, and
                        dashboard development.
                      </li>
                      <li>
                        Created interactive Power BI dashboards and Python-based
                        analytics notebooks.
                      </li>
                      <li>
                        Practiced advanced SQL including joins, CTEs, and window
                        functions.
                      </li>
                    </ul>
                  </div>

                  <div className="resume-experience">
                    <h3>Data Analyst Intern</h3>
                    <p>
                      <strong>ExcelR</strong> · 2025–2026
                    </p>

                    <ul>
                      <li>
                        Developed practical skills in Excel, SQL, Power BI,
                        Tableau, and Python.
                      </li>
                      <li>
                        Worked on sales, HR, and customer churn analytics case
                        studies.
                      </li>
                      <li>
                        Applied data cleaning, visualization, and statistical
                        analysis techniques.
                      </li>
                      <li>
                        Strengthened business reporting and data-driven
                        decision-making skills.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="timeline-item timeline-item-toolkit">
                <span className="timeline-icon">
                  <Code2 size={18} />
                </span>

                <div className="timeline-content">
                  <small>TECHNICAL TOOLKIT</small>
                  <h3>SQL • Python • Power BI • Excel • Machine Learning</h3>
                  <p>
                    Pandas • NumPy • Scikit-learn • MySQL • Tableau • Statistics
                    • Data Visualization
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: CTA + SNAPSHOT */}
            <div className="resume-side resume-side-aligned">
              <div className="resume-cta resume-cta-aligned">
                <FileText size={31} />
                <h3>Want the full story?</h3>
                <p>
                  Download the latest resume for a detailed view of my
                  background, projects and skills.
                </p>

                <a href={profile.resume} download className="primary-btn">
                  Download Resume <Download size={16} />
                </a>
              </div>

              <div className="resume-snapshot resume-snapshot-aligned">
                <div className="snapshot-heading">
                  <span className="eyebrow">
                    <BarChart3 size={14} /> CAREER SNAPSHOT
                  </span>
                </div>

                <div className="snapshot-stats">
                  <div className="snapshot-stat">
                    <span className="snapshot-icon">
                      <BarChart3 size={17} />
                    </span>
                    <strong>10+</strong>
                    <span>Analytics Projects</span>
                  </div>

                  <div className="snapshot-stat">
                    <span className="snapshot-icon">
                      <Code2 size={17} />
                    </span>
                    <strong>7+</strong>
                    <span>Core Skills</span>
                  </div>

                  <div className="snapshot-stat">
                    <span className="snapshot-icon">
                      <BriefcaseBusiness size={17} />
                    </span>
                    <strong>2</strong>
                    <span>Internships</span>
                  </div>

                  <div className="snapshot-stat">
                    <span className="snapshot-icon">
                      <CheckCircle2 size={17} />
                    </span>
                    <strong>10+</strong>
                    <span>Certifications</span>
                  </div>
                </div>

                <div className="snapshot-block">
                  <span className="snapshot-label">CORE EXPERTISE</span>

                  <div className="expertise-list">
                    {[
                      ["SQL", Database],
                      ["Python", Code2],
                      ["Power BI", BarChart3],
                      ["Excel", FileText],
                      ["Tableau", PieChart],
                      ["Machine Learning", Brain],
                    ].map(([tool, Icon]) => (
                      <span key={tool} className="expertise-chip">
                        <Icon size={13} />
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="snapshot-focus">
                  <span className="focus-dot" />
                  <div>
                    <span className="snapshot-label">CURRENT FOCUS</span>
                    <p>
                      Open to Data Analyst opportunities
                      <span className="focus-divider">·</span>
                      <MapPin size={13} /> Bengaluru, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <SectionTitle
            kicker="SELECTED WORK"
            title="Projects that answer real questions."
            text="Each project is structured around a business problem, analytical workflow, insights and recommendations."
          />
          <div className="project-toolbar">
            <div className="filters">
              {["All", "Python", "SQL", "Power BI", "Excel"].map((x) => (
                <button
                  key={x}
                  className={filter === x ? "selected" : ""}
                  onClick={() => setFilter(x)}
                >
                  {x}
                </button>
              ))}
            </div>
            <span className="project-count">{filtered.length} Projects</span>
          </div>

          <div className="project-grid">
            {filtered.map((p, i) => (
              <article className="project-card" key={p.title}>
                <div className="project-image">
                  <img
                    src={p.image}
                    alt={p.title}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement.classList.add(
                        "image-fallback",
                      );
                    }}
                  />
                  <span className="project-number">0{i + 1}</span>
                  <button
                    className="image-view-btn"
                    type="button"
                    onClick={() => setSelectedProject(p)}
                  >
                    View Case Study <ChevronRight size={15} />
                  </button>
                </div>

                <div className="project-body">
                  <div className="tags">
                    {p.tags.slice(0, 4).map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                    {p.tags.length > 4 && <span>+{p.tags.length - 4}</span>}
                  </div>

                  <h3>{p.title}</h3>
                  <p>{p.description}</p>

                  <div className="project-bottom">
                    <button
                      className="text-btn"
                      type="button"
                      onClick={() => setSelectedProject(p)}
                    >
                      Case Study <ChevronRight size={15} />
                    </button>
                    <span className="project-spacer" />
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} GitHub`}
                    >
                      <Github size={17} />
                    </a>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} live project`}
                    >
                      <ExternalLink size={17} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {selectedProject && (
            <div
              className="case-modal-backdrop"
              role="presentation"
              onClick={(e) => {
                if (e.target === e.currentTarget) setSelectedProject(null);
              }}
            >
              <div
                className="case-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="case-study-title"
              >
                <button
                  className="case-modal-close"
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close case study"
                >
                  <X size={20} />
                </button>

                <div className="case-modal-image">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                  />
                </div>

                <div className="case-modal-content">
                  <span className="case-modal-kicker">
                    {selectedProject.category} · CASE STUDY
                  </span>
                  <h2 id="case-study-title">{selectedProject.title}</h2>

                  <div className="case-modal-tags">
                    {selectedProject.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>

                  <div className="case-study-grid">
                    <div>
                      <small>BUSINESS PROBLEM</small>
                      <p>{selectedProject.problem}</p>
                    </div>
                    <div>
                      <small>KEY INSIGHT</small>
                      <p>{selectedProject.insights}</p>
                    </div>
                  </div>

                  <div className="case-modal-actions">
                    <a
                      className="primary-btn"
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github size={16} /> View on GitHub
                    </a>
                    <a
                      className="outline-btn"
                      href={selectedProject.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={16} /> Live Dashboard
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        <section id="certifications" className="section">
          <SectionTitle
            kicker="CERTIFICATIONS"
            title="Credentials that support the craft."
            text="Replace these placeholders with your verified certifications and credential links."
          />
          <div className="cert-grid">
            {certifications.map((c) => (
              <article className="cert-card" key={c.name}>
                <a
                  className="cert-image"
                  href={c.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${c.name} certificate in full size`}
                  title="Click to view full-size certificate"
                >
                  <img src={c.image} alt={c.name} />
                  <span className="cert-image-hint">View full size ↗</span>
                </a>
                <div>
                  <span className="verified">
                    <CheckCircle2 size={14} /> Credential
                  </span>
                  <h3>{c.name}</h3>
                  <p>
                    {c.issuer} • {c.date}
                  </p>
                  <small>{c.id}</small>
                  <a
                    href={c.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="verify"
                  >
                    Verify credential <ExternalLink size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-box">
            <div>
              <span className="eyebrow">LET'S CONNECT</span>
              <h2>
                Let's turn data into <span>insights.</span>
              </h2>
              <p>
                I'm open to Data Analyst opportunities, analytics projects and
                conversations about using data to solve business problems.
              </p>
              <div className="contact-links">
                <a href={`mailto:${profile.email}`}>
                  <Mail size={18} />
                  {profile.email}
                </a>
                <span>
                  <Phone size={18} />
                  {profile.phone}
                </span>
                <span>
                  <Database size={18} />
                  {profile.location}
                </span>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        <footer>
          <span>{profile.name} · Data Analyst</span>
          <span>
            Built for recruiters & hiring managers · {new Date().getFullYear()}
          </span>
        </footer>
      </main>

      {showTop && (
        <button
          className="back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <ArrowUp size={19} />
        </button>
      )}
      {mobileOpen && (
        <div className="overlay" onClick={() => setMobileOpen(false)} />
      )}
    </div>
  );
}

function ContactForm() {
  const formRef = React.useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        "service_bk2102o",
        "template_hxupyfk",
        formRef.current,
        { publicKey: "_0XNn5jnNRvf5ptcF" },
      );

      formRef.current.reset();
      setStatus({
        type: "success",
        message: "Message sent successfully. I’ll get back to you soon!",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message:
          "Sorry, your message could not be sent. Please try again or email me directly.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={sendEmail}>
      <input required name="name" placeholder="Your name" />
      <input required name="email" type="email" placeholder="Email address" />
      <input required name="title" placeholder="Subject" />
      <textarea
        required
        name="message"
        rows="5"
        placeholder="Tell me about the opportunity or project..."
      />
      <input
        type="hidden"
        name="time"
        value={new Date().toLocaleString()}
        readOnly
      />
      {status.message && (
        <p className={`form-status ${status.type}`} role="status">
          {status.message}
        </p>
      )}
      <button className="primary-btn" type="submit" disabled={sending}>
        <Send size={16} /> {sending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

function SectionTitle({ kicker, title, text }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{kicker}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
