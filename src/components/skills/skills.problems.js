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

const SkillsProblem = () => (
  <>
    <div className="item item1 skills--problem">
      <motion.h3 variants={fadeInUp}>Problem Solving</motion.h3>
      <motion.p variants={fadeInUp} className="blurb">
        I feel that my problem solving skills are in the same boat as my
        communication skills. While not perfect, they're able to help me
        navigate issues both before and during an essential or critical moment.
        <br />
        <br />
        Having the ability to choose the best option in a sea of wrong or
        non-ideal ones comes with age and a lot of practice. Two things I think
        I have, one more than the other.
      </motion.p>
    </div>
  </>
)

export default SkillsProblem
