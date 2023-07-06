import React from 'react';
import './About.css';

function AboutPage() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="about-content">
        <div className="about-image">
          <img src="https://th.bing.com/th/id/OIP.eQzvTPXeJ3qACdF8ffpU7AHaEo?pid=ImgDet&rs=1" alt="About Us" />
        </div>
        <div className="about-description">
          <p>
            We are a team of experienced event planners with a passion for creating unforgettable events that exceed our clients' expectations. With years of experience in the industry, we have built a reputation for delivering exceptional service and innovative event solutions.
          </p>
          <p>
            Our team is comprised of talented professionals with expertise in event planning, marketing, design, and logistics. We work closely with our clients to understand their vision and goals, and then we use our creativity and expertise to bring that vision to life.
          </p>
          <p>
            Whether you're planning a corporate event, a wedding, or a private party, we have the knowledge and resources to make your event a success. Contact us today to learn more about our services and how we can help you create an unforgettable event.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
