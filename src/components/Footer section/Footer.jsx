import "./Footer.css";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn
} from "react-icons/fa6";
 




const Footer = () => {
  return (
      <footer className="footer">
        <div className="footer-container">
          
          <div className="footer-top">

          <div className="footer-logo">
            <img src="/logo.png" className="footer-logo"/>
          </div>

          <div className="footer-link">
            <div className="footer-column">
              <h4>Products</h4>
              <a href="#">Transaction</a>
              <a href="#">Authentication</a>
              <a href="#">Balance</a>
              <a href="#">Identity</a>
              <a href="#">Asset</a>
              < a href="#">Pricing</a>
            </div>

            <div className="footer-column">
              <h4>Use Cases</h4>
              <a href="#">Personal finance</a>
               <a href="#">Consumer payment</a>
                <a href="#">Lending</a>
                 <a href="#">Banking</a>
                 <a href="#">Wealth</a>
                 <a href="#">Business finances</a>
              
            </div>

            <div className="footer-column">
              <h4>About</h4>
              <a href="#">Company</a>
               <a href="#">Career</a>
                <a href="#">Contact</a>
                 <a href="#">Legal & Privacy</a>
              
            </div>

            <div className="footer-column">
              <h4>For Consumers</h4>
              <a href="#">Why Verifrica?</a>
            </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© Reef Financial Solutions Ltd</p>

            <div className="social-icon">

            <a href="#"><FaInstagram /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>

            </div>
              </div>


        </div>
    
  
  
  </footer>

  )

}

export default Footer;