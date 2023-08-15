// Write your code here
import {Link} from 'react-router-dom'

import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button
          data-testid="hamburgerIconButton"
          type="button"
          className="hamburger-btn"
        >
          <GiHamburgerMenu className="hamburger-icon" />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <>
          <button
            data-testid="closeButton"
            type="button"
            className="close-btn"
            onClick={() => close()}
          >
            <IoMdClose className="close-icon" />
          </button>
          <ul className="content-container">
            <li>
              <Link to="/" className="link">
                <div className="content-card">
                  <AiFillHome className="content-icon" />
                  <p className="content-name">Home</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/about" className="link">
                <div className="content-card">
                  <BsInfoCircleFill className="content-icon" />
                  <p className="content-name">About</p>
                </div>
              </Link>
            </li>
          </ul>
        </>
      )}
    </Popup>
  </div>
)

export default Header
