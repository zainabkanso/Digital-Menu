
import "./Hero.css";

function Hero() {
  return (
    <section className="crave-hero" id="home">

      {/* Hero Background Image */}
      <img
        src={`${import.meta.env.BASE_URL}images/burger.png`}
        alt="Delicious burger with fries"
        className="hero-image"
      />

      <div className="container hero-content">

        {/* Small Heading */}
        <div className="hero-label">
          WELCOME TO <span></span>
        </div>

        {/* Main Heading */}
        <h1>
          CRAVE <span>DISTRICT</span>
        </h1>

        {/* Description */}
        <p>
          Burgers, Meals, Drinks & More —
          Your Cravings, Our Passion!
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <a href="#menu" className="btn hero-primary">
            <i className="bi bi-egg-fried me-2"></i>
            View Menu
            <i className="bi bi-arrow-right ms-2"></i>
          </a>

          <a href="#menu" className="btn hero-secondary">
            <i className="bi bi-cart3 me-2"></i>
            Order Now
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;
