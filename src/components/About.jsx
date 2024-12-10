import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Software Engineer with a unique blend of technical expertise and design acumen, specializing in creating user-centered, robust web applications.
        <br></br>
        <br></br>
        Expertise in: <br></br>
        - Angular, React.js <br></br>
        - TypeScript/JavaScript <br></br>
        - MERN & MEAN stacks <br></br>
        - HTML5, CSS, Tailwind CSS <br></br>
        - NgRx, RxJS <br></br>
        <br></br>
        Additional Experience: <br></br>
        - API development with Java, Node.js, MongoDB, MySQL <br></br>
        - UI/UX design <br></br>
        - Full-stack development with hands-on experience at Pafex.Co and TechCharm India <br></br>
        - Blockchain <br></br>
        <br></br>
        Driven by creativity and a passion for innovation, I’m committed to crafting impactful digital experiences that bridge design and technology.</motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about');
