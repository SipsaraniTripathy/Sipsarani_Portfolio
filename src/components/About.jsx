import React from "react";

const About = () => {
  const info = [
    { text: "Years experience", count: "7" },
    { text: "Completed Projects", count: "10" },
    { text: "Companies Work", count: "04" },
  ];

  const googleDriveLink =
    "https://drive.google.com/file/d/1mUVmZbVYWvHjlyZnoA3LLpjaNv2CsAcM/view?usp=sharing";

  // for download
  // https://drive.google.com/file/d/1mUVmZbVYWvHjlyZnoA3LLpjaNv2CsAcM/view?usp=sharing
  // for view
  // "https://drive.google.com/file/d/1mUVmZbVYWvHjlyZnoA3LLpjaNv2CsAcM/view?usp=sharing"

  const navigateToResume = () => {
    window.open(googleDriveLink, "_blank");
  };

  return (
    <section id="about" className="py-16 px-4 md:px-10 text-white bg-gray-900">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>

        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Experienced Full Stack Python Developer with 7+ years in
                building web applications and backend solutions. Skilled in
                Python, Django, React, FastAPI, AWS,and CI/CD pipelines.AWS
                Certified Cloud Practitioner with a focus on improving system
                performance and reducing costs.Strong collaborator with
                expertise in agile development and DevOps practices.
                <br />
              </p>

              <div className="flex mt-10 flex-wrap gap-10 justify-center">
                {info.map((content) => (
                  <div key={content.text} className="text-center">
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>
                    </h3>
                    <span className="md:text-base text-sm text-gray-400">
                      {content.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-10">
                <button
                  onClick={navigateToResume}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg shadow-lg transition-all duration-300"
                >
                  Check Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
