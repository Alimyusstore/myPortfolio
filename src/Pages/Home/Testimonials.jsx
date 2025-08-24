import data from "../../data/index.json";

export default function Testimonial() {
  return (
    <section className="testimonial--section" id="testimonial">
      <div className="testimonial--header">
        <p className="sub--title">Client Testimonials</p>
        <h2 className="section--heading">What Industry Leaders Say</h2>
        <p className="testimonial--subtitle">
          Feedback from CEOs and tech leaders who have worked with me
        </p>
      </div>
      <div className="testimonial--container">
        {data?.testimonial?.map((item, index) => (
          <div key={index} className="testimonial--card">
            <div className="testimonial--rating">
              {Array.from({ length: 5 }, (_, starIndex) => (
                <svg
                  key={starIndex}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 27 26"
                  fill="none"
                  className="star-icon"
                >
                  <path
                    d="M12.0945 0.953177C12.5528 -0.135435 14.1138 -0.135434 14.5722 0.95318L17.2772 7.37836C17.4705 7.8373 17.9074 8.15087 18.4089 8.19059L25.4302 8.74669C26.6199 8.84091 27.1022 10.3076 26.1959 11.0746L20.8464 15.6016C20.4643 15.925 20.2973 16.4324 20.4141 16.9158L22.0484 23.6847C22.3253 24.8315 21.0625 25.7381 20.044 25.1235L14.0327 21.4961C13.6033 21.237 13.0633 21.237 12.634 21.4961L6.62265 25.1235C5.60415 25.7381 4.34127 24.8315 4.61818 23.6847L6.25256 16.9158C6.3693 16.4324 6.20243 15.925 5.82034 15.6016L0.47075 11.0746C-0.435624 10.3076 0.0467572 8.84091 1.23639 8.74669L8.25781 8.19059C8.75933 8.15087 9.19621 7.8373 9.38942 7.37836L12.0945 0.953177Z"
                    fill="#FFD700"
                  />
                </svg>
              ))}
            </div>

            <blockquote className="testimonial--quote">
              "{item.description}"
            </blockquote>

            <div className="testimonial--author">
              <img
                src={item.src}
                alt={item.author_name}
                className="author--avatar"
              />
              <div className="author--info">
                <h4 className="author--name">{item.author_name}</h4>
                <p className="author--title">{item.author_designation}</p>
                <p className="author--company">{item.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}