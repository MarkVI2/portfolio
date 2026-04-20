import React from 'react';

const Contact = () => {
  return (
    <div className="page contact-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 className="page-title neo-title" style={{ alignSelf: 'flex-start' }}>Contact Me</h1>
      <div className="contact-card neo-box" style={{ maxWidth: '800px', width: '100%', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ marginBottom: '2.5rem', fontSize: '1.2rem', lineHeight: '1.6' }}>
          Ready to talk about the next big project? Whether it's evolutionary AI, aerospace physics, or just grabbing coffee - send a message!
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          
          <a href="mailto:aviatorgator@duck.com" className="detail-tag accent-mint" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.2rem', textDecoration: 'none', padding: '0.8rem 1.5rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            aviatorgator@duck.com
          </a>
          
          <a href="mailto:atharv.garg@mahindrauniversity.edu.in" className="detail-tag accent-yellow" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.2rem', textDecoration: 'none', padding: '0.8rem 1.5rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
            atharv.garg@mahindrauniversity.edu.in
          </a>
          
          <a href="tel:+919619027671" className="detail-tag accent-blue" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.2rem', textDecoration: 'none', padding: '0.8rem 1.5rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            (+91) 9619027671
          </a>
          
          <a href="https://linkedin.com/in/atharv-garg" target="_blank" rel="noreferrer" className="detail-tag accent-purple" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.2rem', textDecoration: 'none', padding: '0.8rem 1.5rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            in/atharv-garg
          </a>
        </div>

        <div className="social-links" style={{ justifyContent: 'center', marginTop: '3rem' }}>
          <a href="https://github.com/MarkVI2" target="_blank" rel="noopener noreferrer" className="neo-link">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
