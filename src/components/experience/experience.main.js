import React, { useState } from "react"
import BarrelExperience from "./experience.barrel"
import InteraptExperience from "./experience.interapt"

const Experience = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <section className="experience">
        <div className="experience--heading">
          <h2>Experience</h2>
          <button
            className="experience--toggle"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? "Interapt Experience" : "Cracker Barrel Experience"}
          </button>
        </div>
        <span
          className="experience--containerb"
          style={{
            display: toggle ? "grid" : "none",
          }}
        >
          <BarrelExperience />
        </span>

        <span
          className="experience--containeri"
          style={{
            display: !toggle ? "grid" : "none",
          }}
        >
          <InteraptExperience />
        </span>
      </section>
    </>
  )
}
export default Experience
