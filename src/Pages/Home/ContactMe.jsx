import { useState } from "react";

export default function ContactMe() {

  const options = [
    "Select Service...",
    "Frontend Development",
    "Full-Stack Development",
    "Technical Leadership",
    "Business Consultation",
    "Mentorship",
  ];
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: options[0],
    message: "",
    terms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitMessage(
        "Thank you for your message! I'll get back to you soon."
      );
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: options[0],
        message: "",
        terms: false,
      });
    } catch (error) {
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 5000);
    }
  };

  return (
    <section id="Contact" className="contact--section enhanced">
      <div className="contact--header">
        <p className="sub--title">Let's Work Together</p>
        <h2>Get In Touch</h2>
        <p className="contact--description">
          Ready to bring your ideas to life? Let's discuss your project and explore how 
          I can help you achieve your goals.
        </p>
      </div>
      
      <div className="contact--content">
        <div className="contact--info">
          <div className="contact--item">
            <div className="contact--icon">📧</div>
            <div>
              <h4>Email</h4>
              <p>yusuftajudeenajibola@gmail.com</p>
            </div>
          </div>
          <div className="contact--item">
            <div className="contact--icon">📱</div>
            <div>
              <h4>Phone</h4>
              <p>+234 701 523 7423</p>
            </div>
          </div>
          <div className="contact--item">
            <div className="contact--icon">📍</div>
            <div>
              <h4>Location</h4>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
          <div className="contact--item">
            <div className="contact--icon">⏰</div>
            <div>
              <h4>Response Time</h4>
              <p>Within 24 hours</p>
            </div>
          </div>
        </div>

        <form className="contact--form--container enhanced" onSubmit={handleSubmit}>
          {submitMessage && (
            <div className={`submit--message ${submitMessage.includes('Thank') ? 'success' : 'error'}`}>
              {submitMessage}
            </div>
          )}
          
          <div className="form--row">
            <div className="form--group">
              <label htmlFor="firstName" className="contact--label">
                <span className="text-md">First Name *</span>
                <input
                  type="text"
                  className="contact--input text-md"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  placeholder="John"
                />
              </label>
            </div>
            <div className="form--group">
              <label htmlFor="lastName" className="contact--label">
                <span className="text-md">Last Name *</span>
                <input
                  type="text"
                  className="contact--input text-md"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  placeholder="Doe"
                />
              </label>
            </div>
          </div>

          <div className="form--row">
            <div className="form--group">
              <label htmlFor="email" className="contact--label">
                <span className="text-md">Email Address *</span>
                <input
                  type="email"
                  className="contact--input text-md"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="john.doe@example.com"
                />
              </label>
            </div>
            <div className="form--group">
              <label htmlFor="phone" className="contact--label">
                <span className="text-md">Phone Number</span>
                <input
                  type="tel"
                  className="contact--input text-md"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+234 xxx xxx xxxx"
                />
              </label>
            </div>
          </div>

          <div className="form--group">
            <label htmlFor="service" className="contact--label">
              <span className="text-md">Service Needed *</span>
              <select 
                name="service" 
                id="service" 
                className="contact--input text-md"
                value={formData.service}
                onChange={handleInputChange}
                required
              >
                {options.map((option, index) => (
                  <option key={index} value={option} disabled={index === 0}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="form--group">
            <label htmlFor="message" className="contact--label">
              <span className="text-md">Project Details *</span>
              <textarea
                className="contact--input text-md"
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Tell me about your project, timeline, and any specific requirements..."
              />
            </label>
          </div>

          <div className="form--group">
            <label htmlFor="terms" className="checkbox--label">
              <input 
                type="checkbox" 
                name="terms" 
                id="terms" 
                checked={formData.terms}
                onChange={handleInputChange}
                required 
              />
              <span className="text-sm">
                I agree to the terms and conditions and consent to processing of my personal data *
              </span>
            </label>
          </div>

          <div className="form--submit">
            <button 
              type="submit" 
              className="btn btn-primary contact--form--btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}