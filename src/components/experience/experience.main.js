import React, { useState } from "react"
import BarrelExperience from "./experience.barrel"
import InteraptExperience from "./experience.interapt"

const Experience = () => {
  const [barrelExperience, setBarrelExperience] = useState(false)
  const [interaptExperience, setInteraptExperience] = useState(false)
  return (
    <>
      <section className="experience">
        <h2>Experience</h2>
        <button
          className="experience--toggleb"
          onClick={() => setBarrelExperience(!barrelExperience)}
        >
          Barrel
        </button>
        <span style={{ display: "none" }}>
          {/* <span style={{ display: barrelExperience ? "block" : "none" }}> */}
          <BarrelExperience />
        </span>

        <button
          className="experience--togglei"
          onClick={() => setInteraptExperience(!interaptExperience)}
        >
          Interapt
        </button>
        <span style={{ display: "none" }}>
          {/* <span style={{ display: interaptExperience ? "block" : "none" }}> */}
          <InteraptExperience />
        </span>
      </section>
    </>
  )
}
export default Experience
