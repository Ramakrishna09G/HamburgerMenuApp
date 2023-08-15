// Write your code here
import Header from '../Header/index'

import './index.css'

const NotFound = () => (
  <div className="hamburger-menu-bg-container">
    <div className="hamburger-menu-container">
      <Header />
      <div className="not-found-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
          alt="not found"
          className="not-found-img"
        />
        <h1 className="message">Lost Your Way?</h1>
        <p className="sub-message">
          Sorry, we cannot find that page. You will find lots to explore on the
          home page
        </p>
      </div>
    </div>
  </div>
)

export default NotFound
