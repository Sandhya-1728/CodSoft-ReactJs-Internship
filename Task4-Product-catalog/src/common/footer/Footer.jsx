import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>ShopiCart.</h1>
            <p>Experience seamless shopping with unbeatable deals and unparalleled convenience, only at ShopiCart.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <a href="#" style={{ textDecoration: "none", color:"white"}}><span>Google Play</span></a>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <a href="#" style={{ textDecoration: "none", color:"white"}}><span>App Store</span></a>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>17, Octafy Road, Chennai, India.</li>
              <li>Email: supportshopicart@gmail.com</li>
              <li>Phone: +91 1234567890</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
