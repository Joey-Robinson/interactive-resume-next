import React from "react"
import SkillsCommunication from "./skills.communication"
import SkillsLeadership from "./skills.leadership"
import SkillsPersonable from "./skills.personable"
import SkillsProblem from "./skills.problems"
import SkillsRandom from "./skills.random"
import SkillsTeaching from "./skills.teachable"

const Skills = () => (
  <section className="skills">
    <SkillsLeadership />
    <SkillsCommunication />
    <SkillsProblem />
    <SkillsPersonable />
    <SkillsTeaching />
    <SkillsRandom />
  </section>
)

export default Skills
