
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark crave-navbar">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand crave-logo" href="#home">
          <i className="bi bi-egg-fried me-2"></i>
          Crave <span>District</span>
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#craveNavbar"
          aria-controls="craveNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation */}
        <div
          className="collapse navbar-collapse"
          id="craveNavbar"
        >
          <ul className="navbar-nav mx-auto gap-lg-4">
            <li className="nav-item">
              <a className="nav-link active" href="#home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#menu">
                Menu
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>

          {/* Cart - functionality added later */}
          <div className="cart-display">
            <i className="bi bi-cart3"></i>
            <span className="cart-count">0</span>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
