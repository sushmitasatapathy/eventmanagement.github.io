import React, { useState } from 'react';
import './LoginPage.css';


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
  };

  return (
    <div className="login-page">
      <div className="image-side">
        <img src="https://guidebook.com/resources/wp-content/uploads/2021/01/event-planning3-edited.jpg" alt="Login" />
      </div>
      <div className="form-side">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="social-login">
          <p>Or login with:</p>
          <div class="image-container">
  <img src="https://th.bing.com/th/id/OIP.m3Tq_Q4F9rWzqRFWn5pDAQHaHr?pid=ImgDet&rs=1" alt="Image 1" class="circular-image"/>
  <img src="https://www.aps.edu/sapr/images/pnglot.comtwitterbirdlogopng139932.png/image" alt="Image 2" class="circular-image"/>
  <img src="https://th.bing.com/th/id/R.24eeba595c96018994527df53656e579?rik=02GRssIi97Ll3A&riu=http%3a%2f%2fpngimg.com%2fuploads%2flinkedIn%2flinkedIn_PNG38.png&ehk=BbKDpU51%2bymaYWrmiG5x0QAfanWpkombnVGrKC50uIQ%3d&risl=&pid=ImgRaw&r=0" alt="Image 3" class="circular-image"/>
  <img src="https://clipground.com/images/google-logo-clipart-transparent.png" alt="Image 2" class="circular-image"/>
</div>

        </div>
      
        <p className="signup-link">Don't have an account? <a href="#">Sign up</a></p>
      
      </div>
    </div>
  );
}

export default LoginPage;
