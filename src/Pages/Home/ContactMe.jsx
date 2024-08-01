import { useState } from "react";

export default function ContactMe() {

  let options = [
    "Select One...",
    "Web Development",
    "Graphics Design",
    "Video Editing",
  ];
const [info, setInfo] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  select: options[0],
  message: "",
});

// console.log(info)

 function handleSubmit (e){
    e.preventDefault()
    setInfo({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      select: options[0],
      message: "",
    });

 }


  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg"></p>
      </div>
      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              value={info.firstName}
              onChange={(e) => setInfo(e.target.value)}
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              value={info.lastName}
              onChange={(e) => setInfo(e.target.value)}
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              value={info.email}
              onChange={(e) => setInfo(e.target.value)}
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              value={info.phone}
              onChange={(e) =>  setInfo(e.target.value)}
              required
            />
          </label>
        </div>
        <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" className="contact--input text-md">
            {options.map((option, i) => (
              <option  onClick={(e) =>  setInfo(e.target.option)} key={i}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            value={info.message}
            onChange={(e) => setInfo(e.target.value)}
            placeholder="Type your message..."
          />
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
