import "./Hero.css";

const Hero = () => {
  return(
    <section className="hero">
      <div className="hero-container">

         <div className="hero-text">
          <h1>
          Connect financial accounts <br/> to apps you love in seconds.
          </h1>

          <p>
            Verifrica provides a seamless and convenient way of connecting people's financial accounts to an app with easy and secure access

          </p>

          <div className="hero-btns">
            <button className="primary-btn">Get Started</button>
                 <button className="secondary-btn">Contact Sales</button>
          </div>
          </div>

          <img src="/hero image.jpeg" alt="dashboard" className="hero-image" />

      </div>

    </section>
  );
};







export default Hero;