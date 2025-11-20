import { heroData } from "../data/heroData";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>{heroData.title}</h1>
        <p>{heroData.subtitle}</p>
        <button>{heroData.buttonText}</button>
      </div>
      <img src={heroData.image} alt="hero" />
    </section>
  );
}

export default Hero;
