import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white  "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4 md:pb-8">
          <p className="text-2xl md:text-4xl font-bold inline border-b-2 md:border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-lg md:text-xl mt-6 md:mt-2">
          I am Mitul Shah, and I am a ECE student at Pune Institute Of Computer Technology. I
          possess a robust skill set & languages such as Java,
          React Js, and Python, alongside proficiency in tools like Git,and Figma. Throughout my academic journey, I have consistently
          excelled, earning a 9.3/10 GPA in my B.E. program.
        </p>

        <p className="text-xl mt-2">
        In my role as a Frontend Developer Intern at PICT-InC, I contributed to the success of the Impetus and Concepts’22 tech fest by designing and developing its user-friendly website using React Js, Tailwind, and Figma. Subsequently, as an Analyst Intern at Kulturehire, I harnessed Power BI and SQL for data visualization, ensuring accurate representation of the business statement.
        </p>

        {/* Repeat the above pattern for other paragraphs */}

        {/* <p className="text-lg md:text-xl mt-6 md:mt-10">
          My dedication extends to impactful projects, such as the Subjective
          Answer Evaluation using NLP (Final Year Project), where I employed
          advanced techniques with the BERT model for semantic understanding.
          Additionally, my experience in Data Analysis using the AWS Stack
          facilitated critical insights into COVID-19 infection patterns and
          risk factors.
        </p> */}

        <p className="text-lg md:text-xl mt-2 md:mt-2 mb-40">
         My dedication extends to impactful projects, such as the Subjective
          Answer Evaluation using NLP , where I employed
          advanced techniques with the BERT model for semantic understanding.
          Additionally, my experience in Data Analysis using the AWS Stack
          facilitated critical insights into COVID-19 infection patterns and
          risk factors.
          <br></br>
          I have demonstrated leadership as the Overall Head of Operations for
          Impetus and Concepts’23 and as the Head of Operations and Event
          Organizer for TEDxPICT. 
        </p>
      </div>
    </div>
  );
};

export default About;
