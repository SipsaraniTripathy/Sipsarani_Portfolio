import React, { useState } from "react";

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I have 7+ years of experience in Python, Django, React, AWS, Docker, CI/CD pipelines, microservices architecture, and databases like MySQL, PostgreSQL and MongoDB.",
  },
  {
    question: "What kind of projects do you work on?",
    answer:
      "I work on full-stack web applications, REST APIs, automation tools, and cloud-based solutions using Python, Django, React, AWS, and Docker. My work also includes data processing, DevOps pipelines, and scalable system design with databases like MySQL and MongoDB.",
  },
  {
    question: "Are you available for freelance or full-time work?",
    answer:
      "Yes, I’m currently open to new opportunities. You can book a meeting or send me a message here anytime.",
  },
  {
    question: "Can I see your portfolio or resume?",
    answer:
      "Absolutely! You can explore my projects on my portfolio or download my resume from the links provided on the site.",
  },
  {
    question: "How do you ensure project quality?",
    answer:
      "I follow best practices like test-driven development, CI/CD, code reviews, and cloud deployment to ensure high-quality software delivery.",
  },
  {
    question: "How do I contact you for a project?",
    answer:
      "You can send me a message through the contact form or email me directly at sipsatripathy13@gmail.com.",
  },
];

const Bot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("faq"); // "faq" or "contact"

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null); // null | "sending" | "success" | "error"

  const toggleBot = () => setIsOpen(!isOpen);

  const handleQuestionClick = (index) => {
    setActiveFaqIndex(index === activeFaqIndex ? null : index);
  };

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      // Use your Formspree form endpoint here
      const response = await fetch(
        "https://formspree.io/f/xeokewqa", // <-- replace with your Formspree form URL
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={toggleBot}
        className="fixed bottom-5 right-5 z-50 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition"
        aria-label="Toggle Chat Bot"
      >
        {isOpen ? (
          <span style={{ fontSize: "28px", lineHeight: 1 }}>×</span>
        ) : (
          <span style={{ fontSize: "28px", lineHeight: 1 }}>💬</span>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-5 z-50 w-80 max-h-[480px] bg-white dark:bg-gray-900 rounded-lg shadow-xl flex flex-col overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-gray-300 dark:border-gray-700">
            <button
              onClick={() => setActiveTab("faq")}
              className={`flex-1 py-2 text-center font-semibold transition ${
                activeTab === "faq"
                  ? "bg-cyan-600 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              FAQ
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className={`flex-1 py-2 text-center font-semibold transition ${
                activeTab === "contact"
                  ? "bg-cyan-600 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              Contact Me
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 text-gray-900 dark:text-gray-100">
            {activeTab === "faq" && (
              <>
                {faqs.map((faq, idx) => (
                  <div key={idx} className="mb-3">
                    <button
                      onClick={() => handleQuestionClick(idx)}
                      className="w-full text-left font-medium hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                    >
                      {faq.question}
                    </button>
                    {activeFaqIndex === idx && (
                      <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </>
            )}

            {activeTab === "contact" && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                ></textarea>

                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded transition disabled:opacity-50"
                >
                  {formStatus === "sending" ? "Sending..." : "Send Message"}
                </button>

                {formStatus === "success" && (
                  <p className="text-green-600 mt-2">
                    Message sent successfully!
                  </p>
                )}
                {formStatus === "error" && (
                  <p className="text-red-600 mt-2">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Bot;
