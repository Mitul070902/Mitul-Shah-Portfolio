import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I am Mitul Shah, and I am a highly motivated Electronics and Telecommunications student at Pune Institute Of Computer Technology. I possess a robust skill set, encompassing languages such as Java, React Js, and Python, alongside proficiency in tools like Git, VS Code, and Figma. Throughout my academic journey, I have consistently excelled, earning a stellar 9.3/10 GPA in my B.E. program.
        </p>



        <p className="text-xl mt-20">
        In my role as a Frontend Developer Intern at PICT-InC, I contributed to the success of the Impetus and Concepts’22 tech fest by designing and developing its user-friendly website using React Js, Tailwind, and Figma. Subsequently, as an Analyst Intern at Kulturehire, I harnessed Power BI and SQL for data visualization, ensuring accurate representation of "The Managers of India" business statement.
        </p>


        <p className="text-xl mt-20">
        My dedication extends to impactful projects, such as the Subjective Answer Evaluation using NLP (Final Year Project), where I employed advanced techniques with the BERT model for semantic understanding. Additionally, my experience in Data Analysis using the AWS Stack facilitated critical insights into COVID-19 infection patterns and risk factors.
        </p>

    
        <p className="text-xl mt-20">
        I have demonstrated leadership as the Overall Head of Operations for Impetus and Concepts’23 and as the Head of Operations and Event Organizer for TEDxPICT. My accolades include winning the DSP Domain at InC’23 and securing runner-up positions in contests like ABSTRACT’22 and Xenatus. With a passion for technology and a proven track record, I am poised for continued success in the field of Modern Technology.
        </p>

      </div>
    </div>
  );
};

export default About;