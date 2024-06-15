/* eslint-disable react/prop-types */
import { useState } from "react";
import "./home.css";
import "./modal.css";
import { toast } from "react-hot-toast";

export default function Modal({ vissible, toggleModal }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    if (email === "" || message === "") {
      toast.error("Pleasse Provide us valid email or password");
      return new Error("Try Again Later");
    }
    try {
      await toast.promise(
        (async () => {
          const response = await fetch("http://localhost:9090/sendEmail", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              message,
            }),
          });

          if (!response.ok) {
            throw new Error("Error while sending email");
          }
          const data = await response.json();
          setEmail("");
          setMessage("");
          return data;
        })(),
        {
          loading: "Sending Message...",
          success: "Thank you for your message!",
          error: "Error sending message. Please try again later.",
        }
      );
    } catch (err) {
      console.error("Error sending email:", err);
    }
  };
  return (
    <div id="myModal" className={vissible ? "modal-visible" : "modal"}>
      <div className="modal-content">
        <span className="close-btn" onClick={toggleModal}>
          &times;
        </span>
        <h2>Connect With Me</h2>
        <form>
          <label htmlFor="email">Email/Name</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="modal-input"
            type="email"
            id="email"
            placeholder="Your Email or Your Name"
            name="email"
            required
          />
          <label htmlFor="message">Message:</label>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="modal-input"
            type="text"
            name=""
            placeholder="Your Message"
            id=""
          />
          <button onClick={handleForm} type="button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
