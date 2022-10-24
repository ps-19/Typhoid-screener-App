import React from "react";
import { MdLocationOn } from "react-icons/md";
import "./Contact.scss";

function Contact() {
  return (
    <section className="contact">
      <div className="contact__form">
        <h2>Contact Us</h2>
        {/* <img src={ContactImg} alt="" /> */}

        <p>
          Do you have any questions?
          <br />
          Please do not hesitate to contact us directly. Our team will come back
          to you within a matter of hours to help you.
        </p>

        <form className="contact__form" action="/contact" method="post">
          <div className="contact__name">
            <label>
              <p>First Name</p>
              <input
                type="text"
                id="name"
                name="yourname"
                placeholder="Your Name"
                required
              />
            </label>

            <label>
              <p>Last Name</p>
              <input
                type="text"
                id="email"
                name="youremail"
                placeholder="Your Email"
                required
              />
            </label>
          </div>

          <label>
            <p>Subject</p>
            <input
              type="text"
              id="subject"
              name="yoursubject"
              placeholder="Subject"
              required
            />
          </label>

          <label>
            <p>Phone Number</p>
            <input
              type="tel"
              id="phone"
              name="yourphone"
              placeholder="Phone Number"
              required
            />
          </label>

          <label>
            <p>Message</p>
            <textarea
              type="text"
              id="message"
              name="yourmessage"
              rows="6"
              placeholder="Start writing from here..."
            ></textarea>
          </label>

          <button type="submit" id="form-submit">
            Send Message
          </button>
        </form>
      </div>

      <div className="contact__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31848.135702262563!2d11.428475379101561!3d3.80641180000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bd1860b12a267%3A0x703e7c20a22cc1de!2sMboalab!5e0!3m2!1sen!2sng!4v1666290777082!5m2!1sen!2sng"
          width="600"
          height="450"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="contact__info">
          <h4>Or reach out directly on:</h4>
          <p>
            <MdLocationOn /> PO Box: 31066, Yaoundé, Cameroon.
          </p>
          <a href="tel:+23 76 9746 5154">+23 76 9746 5154</a>
          <a href="mailto:mboalab@gmail.com">mboalab@gmail.com</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
