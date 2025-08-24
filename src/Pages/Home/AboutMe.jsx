import data from "../../data/index.json";
export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about_me.png" alt="About Tajudeen Yusuf" />
        <div className="about--overlay">
          <div className="tech-stack">
            <span>React.js</span>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Node.js</span>
          </div>
        </div>
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">
            Building Digital Solutions That Matter
          </h1>
          <p className="hero--section-description">
            As a <strong>result-oriented frontend engineer</strong> with 4+
            years of experience, I specialize in creating highly functional,
            scalable web applications that drive business success.
            <br />
            <br />
            My expertise spans across{" "}
            <strong>fintech, e-commerce, and edtech</strong> domains, where I've
            successfully translated complex business requirements into elegant,
            user-centric solutions using modern technologies like React.js,
            Next.js, and TypeScript.
            <br />
            <br />
            Beyond coding, I'm passionate about{" "}
            <strong>mentorship and leadership</strong> - having guided 700+
            entrepreneurs through my Business Academy and led cross-functional
            development teams to deliver production-ready applications.
            <br />
            <br />
            I'm currently expanding my skillset into{" "}
            <strong>full-stack development</strong> with Node.js, Express, and
            database technologies, positioning myself as a versatile engineer
            capable of end-to-end solution delivery.
          </p>

          <div className="achievements--grid">
            {data?.achievements?.map((achievement, index) => (
              <div key={index} className="achievement--item">
                <h3>{achievement.number}</h3>
                <p>{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
