// Write your code here

import Header from '../Header/index'

import './index.css'

const About = () => (
  <div className="hamburger-menu-bg-container">
    <div className="hamburger-menu-container">
      <Header />
      <div className="about-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
          alt="about"
          className="about-sm-img"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
          alt="about"
          className="about-lg-img"
        />
      </div>
    </div>
  </div>
)

export default About
