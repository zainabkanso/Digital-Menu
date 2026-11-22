
import "./About.css";

function About() {
  return (
    <section className="crave-about" id="about">
      <div className="container">

        <div className="about-content">

          {/* Section Label */}
          <span className="about-label">
            WHO WE ARE
          </span>

          {/* Heading */}
          <h2>
            More Than Just <span>Food.</span>
          </h2>

          {/* Description */}
          <p>
            Welcome to Crave District, where every bite
            brings a new experience. From juicy burgers
            and delicious meals to refreshing drinks
            and sweet desserts, we have something
            for every craving.
          </p>

          {/* Features */}
          <div className="about-features">

            <div className="about-feature">
              <i className="bi bi-egg-fried"></i>
              <span>Delicious Food</span>
            </div>

            <div className="about-feature">
              <i className="bi bi-cup-straw"></i>
              <span>Refreshing Drinks</span>
            </div>

            <div className="about-feature">
              <i className="bi bi-stars"></i>
              <span>Great Experience</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
