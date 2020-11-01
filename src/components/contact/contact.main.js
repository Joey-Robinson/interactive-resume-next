import { motion } from "framer-motion"
import React from "react"
import HortizontalLine from "../line/horizontal.line"
import ContactLeft from "./contact.left"
import ContactRight from "./contact.right"

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

const ContactMain = () => (
  <motion.section
    initial="initial"
    animate="animate"
    exit={{ opacity: 10 }}
    className="home"
  >
    <motion.div variants={fadeInUp}>
      <hgroup>
        <h1>Joey Robinson</h1>
        <h2>Trainer Resume</h2>
      </hgroup>
      <HortizontalLine />
      <div className="contact">
        <div className="contact--left">
          <ContactLeft />
        </div>
        <div className="contact--right">
          <ContactRight />
        </div>
      </div>
    </motion.div>
  </motion.section>
)

export default ContactMain
