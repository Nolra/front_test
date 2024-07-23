import Button from "../ui/Button";

const Hero = () => (
  <section className="hero">
    <div className="container">
      <div className="hero__row">
        <div className="hero__col">
          <h1 className="hero__head">
            Discover the vast expanses of
            <span className="hero__head-selected"> space</span>
          </h1>
          <h2 className="hero__subhead">
            Where the possibilities are
            <span className="hero__subhead-selected"> endless!</span>
          </h2>
          <Button variant={'full'} />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
