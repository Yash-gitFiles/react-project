import React, { useState } from "react";
import styles from "../../styles/home/contact.module.css";
import emailjs from "@emailjs/browser";
import PopOver from "../common/popOver/PopOver";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPopOver, setShowPopOver] = useState(false);
  const [isError, setIsError] = useState(1);

  function hidePopOver() {
    setShowPopOver(false);
    setIsError(0);
  }

  setTimeout(hidePopOver, 3000);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    setIsLoading(true);
    setShowPopOver(false);

    emailjs
      .sendForm(
        process.env.REACT_APP_EJS_SERVICES_ID,
        process.env.REACT_APP_EJS_TEMPLATE_ID,
        form,
        {
          publicKey: process.env.REACT_APP_EJS_PUBLIC_KEY,
        }
      )
      .then(() => {
        form.reset();
        setIsError(-1);
      })
      .catch((error) => {
        setIsError(1);
      })
      .finally(() => {
        setIsLoading(false);
        setShowPopOver(true);
      });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              id="name"
              name="name"
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              id="email"
              name="email"
            />
            <label htmlFor="subject">Enter Your Subject</label>
            <input
              type="text"
              placeholder="Enter your subject"
              required
              id="subject"
              name="subject"
            />
            <label htmlFor="number">Contact Details</label>
            <input
              type="number"
              name="number"
              id="number"
              placeholder="Enter your contact"
              required
            />
            <label htmlFor="message">Enter Your Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Enter your message..."
              required
            ></textarea>
            <button type="submit">{isLoading ? "Sending..." : "Send"}</button>
          </form>
          <PopOver
            message={
              isError === 1
                ? "Failed from submitted!"
                : "Succedd from submitted!"
            }
            hidePopOver={hidePopOver}
            showPopOver={showPopOver}
            status={isError === 1 ? "error" : "success"}
          />
        </div>
        <div className={styles.descContainer}>
          <h2>CONTACT</h2>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>
          <p>info@my-domain.com Tel: 1-800-000-0000</p>
          <iframe
            width="400"
            height="300"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=yogi%20chowk%20surat+(surat)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contact;
