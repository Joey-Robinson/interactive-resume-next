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

const SkillsPersonable = () => (
  <>
    <motion.div
      initial="initial"
      animate="animate"
      className="skills--personable"
    >
      <motion.h3 variants={fadeInUp}>Personable</motion.h3>
      <motion.p variants={fadeInUp} className="blurb">
        I consider myself incredibly personable. Of all my listed skills here,
        this is one of, if not my strongest one. I'm able to relate with many
        people which helps them feel at ease when speaking with me.
        <br />
        <br />
        While being a good leader, communicative, and having problem solving
        skills are vital for any role, being personable - especially in a
        leadership role - is above and beyond the most vital. If you're unliked,
        people will dread being with or around you.
      </motion.p>
    </motion.div>
  </>
)
export default SkillsPersonable
