import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Successful");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          setStatus("Oops, something went wrong...");
        }
      );
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 min-h-screen flex items-center justify-center p-4">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg transition-shadow hover:shadow-xl"
      >
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-lg font-semibold text-blue-600 mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="from_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-4 border border-blue-300 rounded-lg bg-gray-100 focus:outline-none focus:border-blue-500 focus:bg-white text-base sm:text-lg transition-colors"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-lg font-semibold text-blue-600 mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="from_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-4 border border-blue-300 rounded-lg bg-gray-100 focus:outline-none focus:border-blue-500 focus:bg-white text-base sm:text-lg transition-colors"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-lg font-semibold text-blue-600 mb-2"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-4 h-32 border border-blue-300 rounded-lg bg-gray-100 focus:outline-none focus:border-blue-500 focus:bg-white text-base sm:text-lg transition-colors resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 transition-colors"
        >
          Send Email
        </button>
        {status && (
          <p className="mt-6 text-center text-blue-600 font-semibold text-lg">
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default EmailForm;
