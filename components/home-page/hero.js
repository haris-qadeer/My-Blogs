import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <img src="/images/site/haris.JPG" alt="image of haris" />
      </div>
      <h1>Hi, I'm Haris</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        NextJs or React.
      </p>
    </section>
  );
};

export default Hero;
