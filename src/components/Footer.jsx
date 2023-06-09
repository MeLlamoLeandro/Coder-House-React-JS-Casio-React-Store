import fbIcon from "./images/fb_icon.webp";
import twIcon from "./images/tw_icon.webp";
import igIcon from "./images/insta_icon.webp";
import ytIcon from "./images/youtube_icon.webp";
import LiIcon from "./images/linkeding.svg";
import GHIcon from "./images/github.svg";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="container-fluid background-primary">
      <div className="row mx-auto d-flex justify-content-center footer-list__items pt-4">
        <div className="col col-md-4">
          <ul>
            <li><h5>Products</h5></li>
            <li>All CASIO Watches</li>
            <li>Electronic Musical Instruments</li>
            <li>Calculators</li>
            <li>Medical Devices</li>
          </ul>
        </div>
        <div className="col col-md-4">
          <ul>
            <li><h5>Support</h5></li>
            <li>Customer Support</li>
            <li>Manuals</li>
            <li>Product Registration</li>
          </ul>
        </div>
        <div className="col col-md-4">
          <ul>
            <li><h5>Corporate</h5></li>
            <li>Corporate Site</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>
      <div className="d-flex">
        <a href="https://www.facebook.com/CasioUSA/" target="_blank" rel="noreferrer">
          <img className="footer-img__items" src={fbIcon} alt="FacebookCasio" />
        </a>
        <a href="https://twitter.com/casio_usa" target="_blank" rel="noreferrer">
          <img className="footer-img__items" src={twIcon} alt="TwitterCasio" />
        </a>
        <a href="https://www.instagram.com/casio_us/" target="_blank" rel="noreferrer">
          <img className="footer-img__items" src={igIcon} alt="InstagramCasio" />
        </a>
        <a href="https://www.youtube.com/user/CasioUSA" target="_blank" rel="noreferrer">
          <img className="footer-img__items" src={ytIcon} alt="YouTubeCasio" />
        </a>
      </div>
      <div className="row footer-text__items ">
        <div className="col-12 ">
          <ul className="d-flex flex-wrap justify-content-start ps-0">
            <li>Privacy Policy</li>
            <li>ADA Compliance</li>
            <li>Terms of Sale </li>
            <li>Return Policy</li>
            <li>Sitemap</li>
            <li>Do Not Sell My Personal Information</li>
          </ul>
        </div>
      </div>
      <div className="d-column pb-2">
        <span className="footer-text__disclaimer"><span className="text-decoration-underline fs-6">Disclaimer:</span> This website is part of a practical assignment for a course at <Link to="https://www.coderhouse.com/" target="_blank" rel="noreferrer">Coder House</Link>  and was created for educational purposes. The content and features are presented to demonstrate skills acquired during the course. It should not be considered as a real website or used for commercial purposes. The information may not be up to date or accurate, and its availability or continuous functionality is not guaranteed. The author and Coder House are not liable for any misuse, damages, or consequences arising from the use of this website. Use it solely for educational purposes and do not make decisions based on the information provided.</span>
        <div className="d-flex gap-3">
          <span>Developed by <Link to="https://www.linkedin.com/in/leandro-giffoni/" target="_blank" rel="noreferrer">Leandro Giffoni</Link></span>
          <Link to="https://www.linkedin.com/in/leandro-giffoni/" target="_blank" rel="noreferrer"><img src={LiIcon} alt="linkedin.com/in/leandro-giffoni" width={24} /></Link><Link to="https://github.com/MeLlamoLeandro" target="_blank" rel="noreferrer"><img src={GHIcon} alt="github.com/MeLlamoLeandro" width={24}/></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer