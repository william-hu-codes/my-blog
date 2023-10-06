import "./Footer.css"
import { FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa"


function Footer(props) {
  // console.log(images)
  
    return (
      <footer className="flex-ctr-ctr">
        <a href="https://william-hu.com/" target="_blank">
          <h5 className="footer-text">William Hu</h5>
        </a>
        <h5 className="footer-text">|</h5>
        {/* <h5 className="footer-text">® 2023</h5> */}
        <a href="https://william-hu.com/" target="_blank">
            <h5 className="footer-text">portfolio</h5>
        </a>
        <h5 className="footer-text">|</h5>
        <div className="social-media-ctr">
            <a href="https://www.linkedin.com/in/william-wl-hu" target="_blank" >
                <FaLinkedin className="social-media-icon" />
            </a>
            <a href="https://github.com/william-hu-codes" target="_blank" >
                <FaGithub className="social-media-icon"/>
            </a>
            <a href="mailto:william.hu307@gmail.com" target="_blank">
                <FaMailBulk className="social-media-icon" />
            </a>
        </div>
      </footer>
    )
  }
  
  export default Footer;
  
  