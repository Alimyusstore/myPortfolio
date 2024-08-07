export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Tajudeen Yusuf</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Frontend</span> <br />
            Developer
          </h1>
          <p className="hero--section-description">
            As a seasoned Software Engineer with over 3years of experience,{" "}
            <br /> I specialize in web and mobile development across various
            frameworks and technologies. <br /> My expertise lies in developing
            responsive websites and applications,
            <br /> seamlessly translating conceptual designs into robust,
            production-ready solutions.
          </p>
        </div>
        <a className="firstBtn" href="https://wa.me/+2347015237423">
          <button className="btn btn-primary">Get In Touch</button>
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/myImg.png" alt="Hero Section" />
      </div>
    </section>
  );
}
