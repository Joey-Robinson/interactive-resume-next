import { motion } from "framer-motion"
import React from "react"

let easing = [0.6, -0.05, 0.01, 0.99]

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
}

const SkillsCommunication = () => (
  <>
    <div className="item item1 skills--communication">
      <motion.h3 variants={fadeInUp}>Communication</motion.h3>
      <motion.p variants={fadeInUp} className="blurb">
        Communication. Both my most valued and lacking skill. While I'm often
        able to explain myself clearly and concisely, I feel that I can always
        improve in this department. Since I personally don't believe in resumes
        only showing a persons positive side - I often find myself becoming
        frustrated with myself due to my lack of communication skills.
        <br />
        <br />
        It's incredibly easy to say you have communication skills, which of
        course I do, but being able to refine those and improve those on a daily
        basis is where the real growth of communication comes from.
      </motion.p>
    </div>
  </>
)

export default SkillsCommunication
