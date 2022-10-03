import React, { useState } from "react";
import Button from "../button";
import "./style.css";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = (event) => {
    event.preventDefault();
    console.log(email, message);
    // formun default olarak gelen sayfayı yeniden yüklenmesini engelledik.
  };
  return (
    <form onSubmit={submit} className="contact-form">
      <div className="form-row">
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="form-row">
        <textarea
          rows={6}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>
      <div>
        <Button>Gönder</Button>{" "}
        {/* form içerisindeki button submit işlevindedir. */}
      </div>
    </form>
  );
};

export default ContactForm;
