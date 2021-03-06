import React, { useState } from "react";

export function ContactUs() {
  const [contactEmail, setContactEmail] = useState(null);
  const [contactName, setContactName] = useState(null);
  const [contactPhone, setContactPhone] = useState(null);
  const [contactMessage, setContactMessage] = useState(null);

  function submitHandler() {
    async function myfetch() {
      try {
        await fetch("/api/contactus", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            emailContact: contactEmail,
            name: contactName,
            contentContact: contactMessage,
            number: contactPhone,
          }),
        }).then((res) => {
          if (!res.ok) {
            return Promise.reject({
              status: res.status,
              statusText: res.statusText,
            });
          }
          return alert("Thank you!");
        });
      } catch (error) {
        alert(error.statusText + " : Please try again. ");
      }
    }
    myfetch();
  }

  return (
    <section className="add-meal">
      <form>
        <label>*Your Email:</label>
        <input
          type="text"
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
        ></input>
      </form>
      <form>
        <label>*Full Name:</label>
        <input
          type="text"
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
        ></input>
        <form>
          <label>Phone:</label>
          <textarea
            type="text"
            value={contactPhone}
            onChange={(e) => setContactPhone(e.target.value)}
          ></textarea>
        </form>
        <form>
          <label style={{ color: "#6b5835" }}>Message:</label>
          <textarea
            type="text"
            value={contactMessage}
            onChange={(e) => setContactMessage(e.target.value)}
          ></textarea>
        </form>
        <button
          type="submit"
          style={{ marginTop: "50px" }}
          onClick={submitHandler}
        >
          Submit
        </button>
      </form>
    </section>
  );
}
