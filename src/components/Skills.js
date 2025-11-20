import { useState } from "react";
import { skillsTabs } from "../data/skillsData";
import CourseCard from "./CourseCard";

function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="skills">
      <h2>Skills to transform your career and life</h2>

      <div className="tabs">
        {skillsTabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={activeTab === index ? "active" : ""}
          >
            {tab.category}
          </button>
        ))}
      </div>

      <div className="courses">
        {skillsTabs[activeTab].courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
