import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          <span>A</span>nimal <span>S</span>helter
        </h3>
        <p className="footer-links">
          <a href="#" className="link-1">Home</a>
          <a href="#">Adopt</a>
          <a href="#">Pet Care</a>
          <a href="#">Support Us</a>
          <a href="#">About Us</a>
        </p>
        <p className="footer-company-name">Animal Shelter © 2024</p>
      </div>

      <div className="footer-center">
        <div>
          <p><span>Location:</span> Somewhere in the world</p>
        </div>
        <div>
          <p>Phone: +385 91 777 565</p>
        </div>
        <div>
          <p><a href="mailto:support@company.com">Email: animalshelter@gmail.com</a></p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span className="footer-company-about-title">About the company</span>
          <span className="footer-company-about-description">
            Providing a safe and caring environment for animals in need, offering a compassionate place where they receive love, medical care, and a chance for a forever home.
          </span>
        </p>
        <div className="footer-icons">
          <a href="#">
            <img src='https://i.pinimg.com/236x/f4/1e/2d/f41e2dab621c1ee5253cef74e3642fcf.jpg' alt="Instagram" />
          </a>
          <a href="#">
            <img src='https://i.pinimg.com/236x/b5/9d/15/b59d15f1d09ebd9882cad4a448688aac.jpg' alt="Facebook" />
          </a>
          <a href="#">
            <img src='https://i.pinimg.com/564x/00/b5/c7/00b5c767f9d7903675033506787fc952.jpg' alt="TikTok" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
