
import "./Footer.css";

function Footer() {
  return (
    <footer className="crave-footer">
      <div className="container">

        {/* Footer Main Content */}
        <div className="row gy-4">

          {/* Brand */}
          <div className="col-md-6">
            <a className="footer-logo" href="#home">
              <i className="bi bi-egg-fried me-2"></i>
              Crave <span>District</span>
            </a>

            <p className="footer-description">
              Your cravings, our passion.
              Great food, great moments, and
              unforgettable flavors.
            </p>

            {/* Social Icons - visual only for now */}
            <div className="footer-social">
              <span aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </span>

              <span aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </span>

              <span aria-label="WhatsApp">
                <i className="bi bi-whatsapp"></i>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-6">
            <div className="footer-links">
              <h4>Quick Links</h4>

              <a href="#home">Home</a>
              <a href="#menu">Our Menu</a>
              <a href="#about">About Us</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Crave District.
            All rights reserved.
          </p>

          <p>
            Made with <i className="bi bi-heart-fill"></i>
            {" "}for food lovers
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
