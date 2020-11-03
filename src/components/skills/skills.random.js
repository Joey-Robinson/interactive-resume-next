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

const SkillsRandom = () => (
  <>
    <motion.div initial="initial" animate="animate" className="skills--random">
      <motion.h3 variants={fadeInUp}>Random</motion.h3>
      <motion.p variants={fadeInUp} className="blurb">
        Some random facts about me: I spent roughly ~8 hours working on this and
        it shows. I'm not a designer. Even as we speak I'm furiously typing away
        in an attempt to have this up and running before I sleep.
        <br />
        <br />I enjoy all things tech. I absolutely love Anime, Manga, and
        Manhwa's (South Korean manga) and have been invloved in the anime
        community for well over 20 years.
      </motion.p>
    </motion.div>
  </>
)
export default SkillsRandom
