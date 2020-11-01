import React from "react"
import SkillsCommunication from "./skills.communication"
import SkillsLeadership from "./skills.leadership"
import SkillsProblem from "./skills.problems"

const Skills = () => (
  <section className="skills">
    <SkillsLeadership />
    <SkillsCommunication />
    <SkillsProblem />
    {/* <SkillsPersonable />
    <SkillsTeaching /> */}
  </section>
)

export default Skills
