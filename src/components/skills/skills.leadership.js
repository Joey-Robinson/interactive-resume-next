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

const SkillsLeadership = () => (
  <>
    <motion.div
      initial="initial"
      animate="animate"
      className="leadership skills--leadership"
    >
      <motion.h3 variants={fadeInUp}>Leadership</motion.h3>
      <motion.p variants={fadeInUp} className="blurb">
        My leadership skills, while always developing (similar to all my
        skills), are one of my talents. I'm able to quickly and easily - if
        needed - take control & ownership of a situation and expertly navigate
        it. I personally think that being able to no only lead, but follow, is
        monumental for any would be leader, as we can all learn from any person
        or source.
        <br />
        <br />
        Leadership is more than simply directing people to a task, which I where
        I feel comfortable and confident in myself. I'm able to assign a task,
        but I'm also able to help and guide people through the given task if &
        when needed.
      </motion.p>
    </motion.div>
  </>
)
export default SkillsLeadership
