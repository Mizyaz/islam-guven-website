// Component for the Header section
const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <h1 className="profile-name">Islam Güven</h1>
        <div className="contact-info">
          <a href="mailto:islam.guven@ozu.edu.tr"><i className="fas fa-envelope"></i> islam.guven@ozu.edu.tr</a>
          <a href="tel:05435184802"><i className="fas fa-phone"></i> 0-543-518-48-02</a>
          <a href="https://www.linkedin.com/in/islam-guven" target="_blank"><i className="fab fa-linkedin"></i> linkedin/islam-guven</a>
          <a href="https://github.com/mizyaz" target="_blank"><i className="fab fa-github"></i> github/mizyaz</a>
        </div>
        <div className="interests">
          <strong>Main Interests:</strong> Reinforcement Learning, Multi-Agent Systems, Time-Frequency Analysis, Wireless sensor networks
        </div>
      </div>
    </header>
  );
};

// Component for Navigation
const Navigation = ({ activeSection, setActiveSection }) => {
  const [showMenu, setShowMenu] = React.useState(false);
  
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  
  const handleLinkClick = (section) => {
    setActiveSection(section);
    setShowMenu(false);
    
    // Scroll to section
    document.getElementById(section).scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };
  
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
          <li><a href="#education" className={`nav-link ${activeSection === 'education' ? 'active' : ''}`} 
                onClick={() => handleLinkClick('education')}>Education</a></li>
          <li><a href="#publications" className={`nav-link ${activeSection === 'publications' ? 'active' : ''}`}
                onClick={() => handleLinkClick('publications')}>Publications</a></li>
          <li><a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
                onClick={() => handleLinkClick('experience')}>Experience</a></li>
          <li><a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={() => handleLinkClick('skills')}>Skills</a></li>
          <li><a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={() => handleLinkClick('projects')}>Projects</a></li>
          <li><a href="#references" className={`nav-link ${activeSection === 'references' ? 'active' : ''}`}
                onClick={() => handleLinkClick('references')}>References</a></li>
        </ul>
      </div>
    </nav>
  );
};

// Component for Education Section
const Education = () => {
  return (
    <section id="education" className="section fade-in">
      <div className="container">
        <h2 className="section-title"><i className="fas fa-graduation-cap section-icon"></i>Education</h2>
        
        <div className="card">
          <div className="card-highlight"></div>
          <div className="education-header">
            <h3 className="education-title">MSc. Electrical and Electronics Engineering</h3>
            <p className="education-location">Istanbul, Turkey | Sep 2023-Jan 2025</p>
          </div>
          <p className="education-institution">Ozyegin University</p>
          <p className="education-detail"><strong>GPA:</strong> 3.8</p>
          <p className="education-detail"><strong>Teaching Assistant:</strong> EE 341 Fundamentals of Communication Systems: Lab sessions on software defined radio</p>
          <p className="education-detail"><strong>Teaching Assistant:</strong> EE 204 Electromagnetics: Weekly recitation sessions on electromagnetics</p>
          <p className="education-detail"><strong>Thesis Title:</strong> Multi-UAV Path Planning For Joint Coverage and Connectivity Using Reinforcement Learning</p>
        </div>
        
        <div className="card">
          <div className="card-highlight"></div>
          <div className="education-header">
            <h3 className="education-title">BSc. Electrical and Electronics Engineering</h3>
            <p className="education-location">Istanbul, Turkey | Sep-2019-Jun 2023</p>
          </div>
          <p className="education-institution">Ozyegin University</p>
          <p className="education-detail"><strong>GPA:</strong> 3.94</p>
          <p className="education-detail"><strong>Minor:</strong> Computer Science</p>
          <p className="education-detail"><strong>Achievement:</strong> Faculty Valedictorian</p>
          <p className="education-detail"><strong>Scholarship:</strong> Merit-based 100% Tuition scholarship</p>
        </div>
      </div>
    </section>
  );
};

// Component for Publications Section
const Publications = () => {
  return (
    <section id="publications" className="section fade-in">
      <div className="container">
        <h2 className="section-title"><i className="fas fa-book section-icon"></i>Publications</h2>
        
        <div className="card">
          <div className="card-highlight"></div>
          <h3 className="publication-title">Thesis: MULTI-UAV PATH PLANNING FOR JOINT COVERAGE AND CONNECTIVITY USING REINFORCEMENT LEARNING</h3>
          <p className="publication-authors">İslam Güven</p>
          <p>Development of a search and rescue system using unmanned aerial vehicles (UAVs) enhanced by artificial intelligence and computer vision, designed for operation in disaster zones.</p>
        </div>
        
        <div className="card">
          <div className="card-highlight"></div>
          <h3 className="publication-title">ADAPTIVE MULTI-UAV COORDINATION FOR HETEROGENEOUS TARGET SEARCH AND CONNECT MISSIONS USING PROXIMAL POLICY OPTIMIZATION</h3>
          <div className="publication-meta">
            <span className="publication-venue">VTC 2025 (Under Review)</span>
          </div>
          <p className="publication-authors">İslam Güven, Evşen Yanmaz</p>
        </div>
        
        <div className="card">
          <div className="card-highlight"></div>
          <h3 className="publication-title">Multi-objective Coverage and Connectivity Optimization for Multi-UAV Systems with Evolutionary Algorithms</h3>
          <div className="publication-meta">
            <span className="publication-venue">Ad Hoc Networks 2024</span>
          </div>
          <p className="publication-authors">Islam Guven, Evsen Yanmaz</p>
          <a href="https://www.sciencedirect.com/science/article/pii/S1570870524001318?dgcid=rss_sd_all" target="_blank" className="publication-link">
            <i className="fas fa-external-link-alt"></i> View Publication
          </a>
        </div>
        
        <div className="card">
          <div className="card-highlight"></div>
          <h3 className="publication-title">Maintaining Connectivity for Multi-UAV Multi Target Search Using Reinforcement Learning</h3>
          <div className="publication-meta">
            <span className="publication-venue">ACM DIVANet 2023</span>
          </div>
          <p className="publication-authors">Islam Guven, Evsen Yanmaz</p>
          <a href="https://dl.acm.org/doi/10.1145/3616392.3623414" target="_blank" className="publication-link">
            <i className="fas fa-external-link-alt"></i> View Publication
          </a>
        </div>
        
        <div className="card">
          <div className="card-highlight"></div>
          <h3 className="publication-title">Dynamic Multi-UAV Path Planning for Multi-Target Search and Connectivity</h3>
          <div className="publication-meta">
            <span className="publication-venue">IEEE TVT 2023</span>
          </div>
          <p className="publication-authors">Evsen Yanmaz, Hamid Majidi Balanji, Islam Guven</p>
          <a href="https://ieeexplore.ieee.org/document/10433718" target="_blank" className="publication-link">
            <i className="fas fa-external-link-alt"></i> View Publication
          </a>
        </div>
        
        <div className="card">
          <div className="card-highlight"></div>
          <h3 className="publication-title">Classifying LPI Radar Waveforms with Time Frequency Transformations Using Multi Stage CNN</h3>
          <div className="publication-meta">
            <span className="publication-venue">IEEE IRS 2022</span>
          </div>
          <p className="publication-authors">Islam Guven, Can Yagmur, Bahadir Karadas, Mehmet Parlak</p>
          <a href="https://ieeexplore.ieee.org/document/9904993" target="_blank" className="publication-link">
            <i className="fas fa-external-link-alt"></i> View Publication
          </a>
        </div>
        
        <div className="card">
          <div className="card-highlight"></div>
          <h3 className="publication-title">Blockchain, AI and IoT Empowered Swarm Drones for Agricultural Applications</h3>
          <div className="publication-meta">
            <span className="publication-venue">IEEE GET Blockchain Forum 2022</span>
          </div>
          <p className="publication-authors">Islam Guven, Mehmet Parlak</p>
          <a href="https://ieeexplore.ieee.org/document/10087152" target="_blank" className="publication-link">
            <i className="fas fa-external-link-alt"></i> View Publication
          </a>
        </div>
      </div>
    </section>
  );
};

// Component for Experience Section
const Experience = () => {
  return (
    <section id="experience" className="section fade-in">
      <div className="container">
        <h2 className="section-title"><i className="fas fa-briefcase section-icon"></i>Work Experience</h2>
        
        <div className="card">
          <div className="card-highlight"></div>
          <div className="experience-header">
            <h3 className="experience-company">TUBITAK</h3>
            <p className="experience-period">Istanbul, Turkey | Jan 2022 – present</p>
          </div>
          <p className="experience-position">Research Assistant</p>
          <ul className="experience-list">
            <li className="experience-item">Worked Under the TUBITAK 1001 Project: Deep learning and computer vision assisted multi-UAV search and rescue system</li>
            <li className="experience-item">Worked on the multi-objective optimization problems for multi-UAV search and rescue missions.</li>
            <li className="experience-item">Designed and implemented a multi-UAV path planner using different multi-objective elitist evolutionary genetic algorithms with novel mutation, crossover, sampling, and repair operators.</li>
            <li className="experience-item">Implemented analysis and visualization tools for animating and evaluating multi-UAV mission plans using NumPy, Pandas, and Matplotlib.</li>
            <li className="experience-item">Worked on dynamic path planning of multi-UAV systems using Multi-Agent Reinforcement Learning. Implemented various MARL models using PPO and SAC.</li>
            <li className="experience-item">Implemented Gymnasium environments for multi-UAV search and rescue missions with multiple targets and uncertain mission zones.</li>
            <li className="experience-item">Implemented networking protocols for adhoc networks in NS3.</li>
            <li className="experience-item">Integrated neuro-evolutionary architectures for multi-objective optimization</li>
            <li className="experience-item">Worked under the supervision of Dr. Evsen Yanmaz Adam</li>
          </ul>
        </div>
        
        <div className="card">
          <div className="card-highlight"></div>
          <div className="experience-header">
            <h3 className="experience-company">Ozyegin University</h3>
            <p className="experience-period">Istanbul, Turkey | Sep 2021 – Jun 2023</p>
          </div>
          <p className="experience-position">Research Assistant</p>
          <ul className="experience-list">
            <li className="experience-item">Analyzed LPI radar waveforms and EEG signals using Time-Frequency analysis techniques.</li>
            <li className="experience-item">Designed CNN models and implemented transfer learning for various CNN architectures using MATLAB.</li>
            <li className="experience-item">Modeled a Computer Vision, Blockchain and Time-Frequency analysis assisted UAV swarm network architecture for precision agriculture applications.</li>
            <li className="experience-item">Worked under the supervision of Dr. Mehmet Parlak</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

// Component for Skills Section
const Skills = () => {
  return (
    <section id="skills" className="section fade-in">
      <div className="container">
        <h2 className="section-title"><i className="fas fa-tools section-icon"></i>Skills</h2>
        
        <div className="skills-grid">
          <div className="skill-card">
            <h3 className="skill-name"><i className="fas fa-code skill-icon"></i>Languages</h3>
            <p>Python, MATLAB, Java, C++, verilog, javascript</p>
          </div>
          
          <div className="skill-card">
            <h3 className="skill-name"><i className="fas fa-robot skill-icon"></i>Reinforcement learning</h3>
            <p>Gymnasium, Ray RLLIB, TF-Agents, Stable-baselines 3</p>
          </div>
          
          <div className="skill-card">
            <h3 className="skill-name"><i className="fas fa-brain skill-icon"></i>Deep learning</h3>
            <p>PyTorch, torch-Geometric, TensorFlow</p>
          </div>
          
          <div className="skill-card">
            <h3 className="skill-name"><i className="fas fa-chart-line skill-icon"></i>Optimization</h3>
            <p>Deap, GUROBI, PyMOO, Scipy, CPLEX</p>
          </div>
          
          <div className="skill-card">
            <h3 className="skill-name"><i className="fas fa-database skill-icon"></i>Data Science</h3>
            <p>NumPy, Pandas, MatPlotLib, OpenCV, NetworkX</p>
          </div>
          
          <div className="skill-card">
            <h3 className="skill-name"><i className="fas fa-laptop-code skill-icon"></i>General</h3>
            <p>LaTeX, openMC, React.js, Next.js</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Component for Projects Section
const Projects = () => {
  return (
    <section id="projects" className="section fade-in">
      <div className="container">
        <h2 className="section-title"><i className="fas fa-project-diagram section-icon"></i>Projects</h2>
        
        <div className="card">
          <div className="card-highlight"></div>
          <h3 className="project-title">Graph Anomaly Detection based on Spatio-Temporal neural networks</h3>
          <p>Development of a hybrid-ChebsConv based graph neural network find anomalies in benchmark datasets such as Cora, surpassing the previous methods with a better precision and AUC score.</p>
        </div>
        
        <div className="card">
          <div className="card-highlight"></div>
          <h3 className="project-title">Hirarchical graph neural network architecture for multi-variate financial data</h3>
          <p>Development of a hierarchical graph structure to combine sectoral relationships within different stock price data. The dataset is then analysed with isolation forests and anomaly detectors.</p>
        </div>
        
        <div className="card">
          <div className="card-highlight"></div>
          <h3 className="project-title">Portfolio risk analysis using reinforcement learning and time-frequency analysis</h3>
          <p>A PPO-based portfolio analyser that gives optimal weights of a portfolio on selected dates. A baseline for a mixture of experts model for forecasting and high-frequency trading.</p>
        </div>
      </div>
    </section>
  );
};

// Component for References Section
const References = () => {
  return (
    <section id="references" className="section fade-in">
      <div className="container">
        <h2 className="section-title"><i className="fas fa-user-tie section-icon"></i>References</h2>
        
        <div className="references-grid">
          <div className="card">
            <div className="card-highlight"></div>
            <h3 className="reference-name">Dr. Evsen Yanmaz</h3>
            <p className="reference-email"><i className="fas fa-envelope"></i> evsen.yanmaz@ozyegin.edu.tr</p>
            <p>My master's thesis advisor, Associate Professor at Ozyegin University and Carnegie Mellon University graduate</p>
          </div>
          
          <div className="card">
            <div className="card-highlight"></div>
            <h3 className="reference-name">Dr. H. Fatih Ugurdag</h3>
            <p className="reference-email"><i className="fas fa-envelope"></i> fatih.ugurdag@ozyegin.edu.tr</p>
            <p>Dean of Engineering at Ozyegin University, with extensive industry experience including NVIDIA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Component for Footer
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Islam Güven. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = React.useState('education');
  
  // Intersection Observer to detect which section is in view
  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px', // Adjust margins to control when the callback triggers
      threshold: 0.1
    };
    
    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
      observer.observe(section);
    });
    
    // Cleanup
    return () => {
      document.querySelectorAll('.section').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  return (
    <React.Fragment>
      <Header />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        <Education />
        <Publications />
        <Experience />
        <Skills />
        <Projects />
        <References />
      </main>
      <Footer />
    </React.Fragment>
  );
};

// Render the App
ReactDOM.render(<App />, document.getElementById('root'));