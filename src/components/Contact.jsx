import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("idle"); // idle, sending, success, error

  const contact_info = [
    {
      icon: <Mail size={24} />,
      text: "sipsatripathy13@gmail.com",
      href: "mailto:sipsatripathy13@gmail.com",
      tooltip: "Send an Email",
    },
    {
      icon: <Phone size={24} />,
      text: "+44 7401578896",
      href: "tel:+447401578896",
      tooltip: "Call Now",
    },
    {
      icon: <MapPin size={24} />,
      text: "Manchester, UK",
      href: "https://www.google.com/maps/place/Manchester,+UK",
      tooltip: "View Location",
    },
  ];

  // Replace with your actual Formspree endpoint URL:
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeokewqa";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    const formData = new FormData(e.target);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setFormStatus("success");
        e.target.reset(); // reset form
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 px-4 text-white bg-[#0f172a]">
      <div className="text-center">
        <h3 className="text-4xl font-bold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Let's work together!</p>
      </div>

      <div className="mt-16 flex flex-col md:flex-row gap-10 max-w-6xl mx-auto bg-gray-800 p-6 rounded-xl shadow-xl">
        {/* Contact Form */}
        <form className="flex flex-col flex-1 gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-sm text-gray-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              className="bg-gray-700 p-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm text-gray-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email Address"
              className="bg-gray-700 p-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1 text-sm text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows={6}
              className="bg-gray-700 p-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
              required
            />
          </div>
          <button
            type="submit"
            disabled={formStatus === "sending"}
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 w-fit disabled:opacity-50"
          >
            {formStatus === "sending" ? "Sending..." : "Send Message"}
          </button>

          {formStatus === "success" && (
            <p className="text-green-400 mt-4">
              Thank you! Your message has been sent.
            </p>
          )}
          {formStatus === "error" && (
            <p className="text-red-400 mt-4">
              Ooops! Something went wrong. Please try again.
            </p>
          )}
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-center gap-6">
          {contact_info.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              title={contact.tooltip}
              className="flex items-center gap-4 text-base md:text-lg text-gray-200 hover:text-white transition-colors"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-cyan-600 rounded-full shadow-md text-white">
                {contact.icon}
              </div>
              <span className="break-words">{contact.text}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
