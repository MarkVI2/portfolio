import React, { useState, useEffect, useRef } from 'react';

const Home = () => {
  const [clickCount, setClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(0);
  
  // Using a ref for typedKeys ensures the buffer persists correctly through any React re-renders
  const typedKeys = useRef('');

  useEffect(() => {
    // The previous keyword 'halloy' was dropping 'a' due to an external extension intercepting it. 
    // We've shifted to 'evolve' (from your project list) which avoids the letter 'a' entirely!
    const magicWord = 'evolve';

    const handleKeyDown = (e) => {
      console.log("[Easter Egg Debug] Registered key:", e.key);

      // Only capture single alphabet characters to prevent 'Meta' or 'Shift' from breaking the string
      if (e.key.length === 1 && e.key.match(/[a-z]/i)) {
        typedKeys.current += e.key.toLowerCase();
        
        if (typedKeys.current.length > magicWord.length) {
          typedKeys.current = typedKeys.current.slice(-magicWord.length);
        }
        
        console.log("[Easter Egg Debug] Current buffer:", typedKeys.current);

        if (typedKeys.current === magicWord) {
          console.log("[Easter Egg Debug] Match found! Toggling Tokyo Night.");
          document.body.classList.toggle('tokyo-night');
          typedKeys.current = ''; // Reset after triggering
        }
      } else {
        // Reset if they hit space, numbers, or backspace
        console.log("[Easter Egg Debug] Buffer cleared due to non-alphabet key.");
        typedKeys.current = '';
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleProfileClick = () => {
    let currentClicks = clickCount;
    const now = new Date().getTime();
    
    if (now - lastClickTime > 2000) currentClicks = 0;
    currentClicks += 1;
    
    if (currentClicks === 5) {
      console.log(`
        \\
         \\
           _--_     _--_
           (    )   (    )
            |  |     |  |
            |  |     |  |
            |  |____ |  |
            |           |
            \\           /
             \\         /
              \\       /
               -------
      WOOF! You found Snoopy. Keep hacking the planet!
      `);
      currentClicks = 0; 
    }
    setClickCount(currentClicks);
    setLastClickTime(now);
  };

  return (
    <div className="home-container page">
      <header className="home-header neo-box">
        <div className="profile-wrapper neo-box" onClick={handleProfileClick} title="Profile Picture (Click me!)">
          <div className="profile-pic">AAG</div>
        </div>
        <div className="personal-details">
          <h1 className="name neo-title">Atharv Ashish Garg</h1>
          <div className="details-grid">
            <span className="detail-tag" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              (+91) 9619027671
            </span>
            <span className="detail-tag" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              aviatorgator@duck.com
            </span>
            <span className="detail-tag" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
              atharv.garg@mahindrauniversity.edu.in
            </span>
            <span className="detail-tag" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Hyderabad, India | DOB: 22/02/2005
            </span>
          </div>
          <div className="social-links">
            <a href="https://github.com/MarkVI2" target="_blank" rel="noopener noreferrer" className="neo-link">GitHub</a>
            <a href="https://linkedin.com/in/atharv-garg" target="_blank" rel="noopener noreferrer" className="neo-link">LinkedIn</a>
          </div>
        </div>
      </header>

      {/* Scrolling Marquee Tape */}
      <div className="marquee-container neo-box">
        <div className="marquee-content">
          <span>RUST • JAVA • PYTHON • C/C++ • BASH • TYPESCRIPT • LINUX • REACT • MONGODB • FLASK • DOCKER • PYTORCH • BURPSUITE • NMAP • CRYPTOGRAPHY •</span>
          <span>RUST • JAVA • PYTHON • C/C++ • BASH • TYPESCRIPT • LINUX • REACT • MONGODB • FLASK • DOCKER • PYTORCH • BURPSUITE • NMAP • CRYPTOGRAPHY •</span>
        </div>
      </div>

      <div className="content-grid">
        {/* Left Column */}
        <div className="column">
          <section className="about-section neo-box accented">
            <h2>About Me</h2>
            <p>A Computer Science learner specialising in cyber security, machine learning and cryptography, with proven experience in impactful technical solutions.</p>
          </section>

          <section className="experience-section neo-box">
            <h2>Competitions & Awards</h2>
            <ul className="timeline">
              <li>
                <strong>Winner (Team of 4)</strong> @ Shellshock CTF
                <br/><em>11/2025</em><br/>
                <span>1st Place among ~40 teams (>200 participants) at Mahindra University; organised by 5th Bridge Technologies; prize ₹30,000. Led web & API exploit strategy.</span>
              </li>
            </ul>
          </section>

          <section className="research-section neo-box">
            <h2>Education</h2>
            <ul className="timeline">
              <li><strong>Summer School on AI</strong> - IIIT Hyderabad (<em>07/2025</em>)</li>
              <li><strong>B.Tech in CSE</strong> - Mahindra University (<em>08/2023 - Present</em>) - CGPA: 8.00/10.00</li>
              <li><strong>A Levels</strong> - JBCN International School (<em>03/2021 - 06/2023</em>)</li>
            </ul>
          </section>
        </div>

        {/* Right Column */}
        <div className="column">
          <section className="experience-section neo-box">
            <h2>Work Experience</h2>
            <ul className="timeline">
              <li>
                <strong>Research Intern</strong> @ Mahindra University
                <br/><em>01/2026 - Present</em><br/>
                <span>Researching and implementing Evolutionary Algorithms (Differential Evolution with non dominated sorting) with direct applications in aerospace and defence domains.</span>
              </li>
              <li>
                <strong>Contract Engineer</strong> @ Machflare Systems
                <br/><em>12/2025 - Present</em><br/>
                <span>Designing the Keyboard and Cursor Control Unit (KCCU) for the Airbus A350 cockpit for simulation purposes, including full PCB schematic design.</span>
              </li>
              <li>
                <strong>Lead Researcher</strong> @ Project Kairos
                <br/><em>08/2025 - Present</em><br/>
                <span>Engineering a multi-objective optimisation engine using Genetic Algorithms to solve the NP-hard University Timetabling Problem (UTP).</span>
              </li>
              <li>
                <strong>Founder</strong> @ EVOLVE
                <br/><em>09/2024 - Paused Temp.</em><br/>
                <span>Built a cybersecurity research platform with multi-layered sandbox environments and real-time monitoring.</span>
              </li>
              <li>
                <strong>Head Builder</strong> @ Build & Ship
                <br/><em>11/2024 - 02/2025</em><br/>
                <span>Established T-Works defense CoE prototype manufacturing business model.</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
      
      {/* Obfuscated Easter Egg Prompt */}
      <div 
        style={{ textAlign: 'center', opacity: 0.1, padding: '1rem', userSelect: 'none', cursor: 'default', fontSize: '0.8rem', marginTop: '2rem' }} 
        title="Base64 encoded secret..."
      >
        dGFwIHRoZSBmYWNlIDUgdGltZXMg8J+QtiB8IHR5cGUgJ2V2b2x2ZScgZm9yIG5pZ2h0
      </div>
    </div>
  );
};

export default Home;
