// Write your code here

import Header from '../Header/index'

import './index.css'

const Home = () => (
  <div className="hamburger-menu-bg-container">
    <div className="hamburger-menu-container">
      <Header />
      <div className="home-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
          alt="home"
          className="home-sm-img"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
          alt="home"
          className="home-lg-img"
        />
      </div>
    </div>
  </div>
)

export default Home
