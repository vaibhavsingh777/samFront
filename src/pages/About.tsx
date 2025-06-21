const About = () => {
  return (
    <div className="page about-page">
      <div className="about-hero">
        <h1>About BestEver</h1>
        <p className="subtitle">Creating beautiful digital experiences since 2020</p>
      </div>
      
      <section className="about-section">
        <div className="about-content">
          <h2>Our Story</h2>
          <p>
            Founded in 2020, BestEver began with a simple mission: to create the most visually stunning 
            and user-friendly websites on the internet. What started as a small team of designers and 
            developers has grown into a full-service digital agency serving clients worldwide.
          </p>
          <p>
            We believe that great design should be accessible to everyone, and we're passionate about 
            helping businesses of all sizes establish a powerful online presence.
          </p>
        </div>
        <div className="about-image">
          <img src="https://source.unsplash.com/random/600x400/?office" alt="Our team" />
        </div>
      </section>

      <section className="team-section">
        <h2>Meet The Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://randomuser.me/api/portraits/women/63.jpg" alt="Team member" />
            <h3>Alex Johnson</h3>
            <p>Creative Director</p>
          </div>
          <div className="team-member">
            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Team member" />
            <h3>Sam Wilson</h3>
            <p>Lead Developer</p>
          </div>
          <div className="team-member">
            <img src="https://randomuser.me/api/portraits/women/25.jpg" alt="Team member" />
            <h3>Taylor Smith</h3>
            <p>UX Designer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;