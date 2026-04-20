import React from 'react';

const projects = [
  {
    title: 'Black Hole Sim',
    description: 'Project Lead. Developed a high-fidelity simulation of the Sagittarius A* black hole, porting and optimizing a C++ implementation into Rust to leverage modern performance and safety features. Engineered the simulation for GPU acceleration using Apple\'s Metal Performance Shaders (MPS).',
    link: 'https://github.com/MarkVI2/black_hole',
    accent: 'blue',
  },
  {
    title: 'Social Credit',
    description: 'Project Lead. Engineered a full-stack social currency application leveraging Next.js 15, TypeScript, and MongoDB to manage user-to-user transfers, an admin-controlled economy, and leaderboards. Features secure email auth with httpOnly tokens.',
    link: 'https://social-computing.vercel.app/',
    accent: 'yellow',
  },
  {
    title: 'AI+People',
    description: 'Founder. Connecting people through AI agents by enhancing social interactions using natural language processing and previous learnt social cues. Helping people understand friends in a language of their own; invited by FR8 incubation program.',
    link: 'https://buildandship.org/ai+people',
    accent: 'mint',
  },
  {
    title: 'TBort',
    description: 'Founder. Personal investment platform that uses a multi model approach to analyse market trends, predict stock movements, and provide personalised investment recommendations. Designed for low compute environments.',
    link: 'https://github.com/MarkVI2',
    accent: 'purple',
  },
  {
    title: 'MU Calendar Synchronous',
    description: 'Project Lead. Developed a scalable calendar platform for 1,500+ users to sync the university ERP with personal calendars, achieving 99.9% uptime. Secured a Tech Mahindra grant ($10,000 valuation).',
    link: 'https://mucalsync.buildandship.org',
    accent: 'blue',
  },
  {
    title: 'Enigma (CS Club)',
    description: 'R&D Specialist. Led Mirai CTF & hackathon ops; delivered maze solver & notification systems.',
    link: 'https://github.com/MarkVI2/enigma-lander',
    accent: 'yellow',
  },
  {
    title: 'Notepad for Aviators',
    description: 'Founder. Open-source pilot workflow tool syncing flight data with real-time performance calculations.',
    link: 'https://github.com/MarkVI2/NotepadforAviators',
    accent: 'mint',
  },
  {
    title: 'OhmWay',
    description: 'Project Lead. Maze pathfinding modeled as electrical circuits (PySpice/OpenCV) with interactive Flask visualization.',
    link: 'https://github.com/MarkVI2/OhmWay',
    accent: 'purple',
  },
  {
    title: 'NH-ZKP',
    description: 'Lead Researcher. Neural network hash-based authentication research inspired by ZK proofs; benchmarked vs SHA256 & conventional methods.',
    link: 'https://github.com/MarkVI2/NH-ZKP',
    accent: 'blue',
  },
  {
    title: 'Smart Data Packet Movement',
    description: 'Lead Researcher. Published packet modification model at Internet Layer to improve routing speed & efficiency.',
    link: 'http://www.indianscholar.co.in/downloads/26-atharv-garg.pdf',
    accent: 'yellow',
  }
];

const Projects = () => {
  return (
    <div className="page projects-page">
      <h1 className="page-title neo-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <a
            key={idx}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-card neo-box accent-${proj.accent}`}
          >
            <h2 className="title">{proj.title}</h2>
            <p className="description">{proj.description}</p>
            <div className="link-arrow">Read More →</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
