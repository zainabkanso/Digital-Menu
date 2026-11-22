
import "./Contact.css";

function Contact() {
  return (
    <section className="crave-contact" id="contact">
      <div className="container">

        {/* Contact Header */}
        <div className="contact-header">
          <span className="contact-label">
            GET IN TOUCH
          </span>

          <h2>
            Let's <span>Connect!</span>
          </h2>

          <p>
            Have a question or a craving?
            We'd love to hear from you.
          </p>
        </div>

        {/* Contact Information */}
        <div className="row g-4 justify-content-center">

          {/* Email */}
          <div className="col-md-5">
            <div className="contact-card">
              <i className="bi bi-envelope-fill"></i>

              <h3>Email Us</h3>

              <p>Have a question? Send us a message.</p>

              <span>Digital.menu@example.com</span>
            </div>
          </div>

          {/* Phone */}
          <div className="col-md-5">
            <div className="contact-card">
              <i className="bi bi-telephone-fill"></i>

              <h3>Call Us</h3>

              <p>We're here to help with your cravings.</p>

              <span>+961 76 123 456</span>
            </div>
          </div>

        </div>

        {/* Social Media */}
        <div className="contact-social">
          <h4>Follow Us</h4>

          <div className="social-icons">
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

      </div>
    </section>
  );
}

export default Contact;
