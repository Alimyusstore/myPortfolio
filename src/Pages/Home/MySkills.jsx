import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Expertise</p>
        <h2 className="skills--section--heading">
          Technical Skills & Leadership
        </h2>
        <p className="skills--subtitle">
          A comprehensive overview of my technical expertise and professional
          capabilities
        </p>
      </div>
      <div className="skills--section--container">
        {Object.entries(data?.skills)?.map(([key, skill], index) => (
          <div key={index} className="skills--section--card enhanced">
            <div className="skills--section--header">
              <div className="skills--section--icon">{skill.icon}</div>
              <h3 className="skills--section--title">{skill.title}</h3>
            </div>
            <div className="skills--section--card--content">
              <p className="skills--section--description">
                {skill.description}
              </p>
              <div className="tech--stack">
                {skill.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech--tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
