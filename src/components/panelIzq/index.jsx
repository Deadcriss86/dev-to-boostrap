import { Link } from "react-router-dom";
import { FaHome, FaMicrophone, FaCamera, FaTag, FaQuestionCircle, FaShoppingBag, FaHeart, FaStar, FaDog, FaBook, FaBalanceScale, FaThumbsUp, FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function PanelIzq() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav flex-column me-auto mb-2 mb-lg-0"> {/* Aplicando flex-direction: column */}
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <FaHome className="text-yellow-500 mx-1" />
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <FaMicrophone className="text-yellow-500 mx-1" />
              Podcasts
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <FaCamera className="text-yellow-500 mx-1" />
              Videos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <FaTag className="text-yellow-500 mx-1" />
              Tags
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <FaQuestionCircle className="text-yellow-500 mx-1" />
              DEV Help
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <FaShoppingBag className="text-yellow-500 mx-1" />
              Forem Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <FaHeart className="text-red-500 mx-1" />
              Advertise on DEV
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <FaStar className="text-yellow-500 mx-1" />
              DEV Showcase
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <FaDog className="text-yellow-500 mx-1" />
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <FaBook className="text-yellow-500 mx-1" />
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <FaBook className="text-yellow-500 mx-1" />
              Guides
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <FaBalanceScale className="text-yellow-500 mx-1" />
              Software comparisons
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <FaTwitter className="nav-link text-gray-700" />
          </li>
          <li className="nav-item">
            <FaFacebook className="nav-link text-gray-700" />
          </li>
          <li className="nav-item">
            <FaInstagram className="nav-link text-gray-700" />
          </li>
          <li className="nav-item">
            <FaLinkedin className="nav-link text-gray-700" />
          </li>
          <li className="nav-item">
            <FaGithub className="nav-link text-gray-700" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default PanelIzq;
