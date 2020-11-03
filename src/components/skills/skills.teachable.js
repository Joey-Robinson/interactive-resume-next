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

const SkillsTeachable = () => (
  <>
    <motion.div
      initial="initial"
      animate="animate"
      className="skills--teachable"
    >
      <motion.h3 variants={fadeInUp}>Teachable</motion.h3>
      <motion.p variants={fadeInUp} className="blurb">
        My favorite. Being teachable. Learning. I crave to learn more. It's a
        deep-seated belief I have. Asking questions, always. I don't feel
        comfortable without asking questions.
        <br />
        <br />
        While I understand that my constant questions can become tedious, I
        continue to strive for excellence and the only way to do that is by
        asking more questions and learning more.
      </motion.p>
    </motion.div>
  </>
)
export default SkillsTeachable
