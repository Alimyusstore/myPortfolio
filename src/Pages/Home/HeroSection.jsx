import { useState, useEffect } from "react";
export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const titles = [
    "Frontend Developer",
    "Full-Stack Engineer",
    "Tech Team Lead",
  ];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timeoutId;

    if (!isDeleting) {
      // Typing phase
      if (typedText.length < currentTitle.length) {
        timeoutId = setTimeout(() => {
          setTypedText(currentTitle.slice(0, typedText.length + 1));
        }, 100); // Typing speed
      } else {
        // Finished typing, wait then start deleting
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Pause after typing
      }
    } else {

      if (typedText.length > 0) {
        timeoutId = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, 50); 
      } else {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [typedText, isDeleting, titleIndex, titles]);
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">👋 Hey, I'm Tajudeen Yusuf</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">{typedText}</span>
            <span className="cursor">|</span>
          </h1>
          <p className="hero--section-description">
            A result-oriented frontend engineer with{" "}
            <strong>4+ years of experience</strong> building highly functional,
            scalable web applications using{" "}
            <strong>React.js, Next.js, TypeScript</strong>.
            <br />
            Currently expanding expertise in{" "}
            <strong>Angular and backend development</strong> with hands-on
            experience in <strong>Node.js and RESTful APIs</strong>.
            <br />
            Proven track record in{" "}
            <strong>fintech, e-commerce, and edtech</strong> domains with strong
            leadership experience.
          </p>
          <div className="hero--section--stats">
            <div className="stat">
              <h3>30+</h3>
              <p>Students Mentored</p>
            </div>
            <div className="stat">
              <h3>4+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>10+</h3>
              <p>Projects Delivered</p>
            </div>
          </div>
        </div>
        <div className="hero--section--buttons">
          <a href="https://wa.me/+2347015237423" className="firstBtn">
            <button className="btn btn-primary">Get In Touch</button>
          </a>
          <a href="https://github.com/Alimyusstore" className="secondBtn">
            <button className="btn btn-secondary">View My Work</button>
          </a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/myImg.png" alt="Tajudeen Yusuf - Frontend Developer" />
        <div className="floating-icons">
          <div className="icon react">⚛️</div>
          <div className="icon js">⚛️</div>
          <div className="icon ts">⚛️</div>
          <div className="icon node">⚛️</div>
        </div>
      </div>
    </section>
  );
}
