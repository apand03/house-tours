import heroLogo from "../../assets/house-hero.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__title">Modern Escape</h1>
        <div className="hero__content">
          <p> The balance of modern architecture and natures calm</p>
          <img src={heroLogo} alt="A house for your needs" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
