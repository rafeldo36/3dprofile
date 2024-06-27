import React from "react";
import {Tilt} from "react-tilt";
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
       With a passion for blending design elegance with technical prowess, I am a multifaceted Software Engineer who thrives at the intersection of creativity and innovation. My journey in the tech world has been as diverse as it has been enriching, blending hands-on development with a keen eye for aesthetics.

From crafting intricate user interfaces that delight to engineering robust APIs that power seamless interactions, I bring a holistic approach to software development. During my Bachelor's studies, I delved deep into a broad spectrum of technologies including Python, MongoDB, HTML5, CSS, JavaScript, ReactJS, Blockchain, and the MERN stack. This technical repertoire has equipped me to tackle challenges head-on, delivering 100% effort and excellence in every project I undertake.

In addition to my technical acumen, I bring a rich experience of over 40 months as a freelance Graphic Designer. This role honed my design sensibilities and taught me the art of visual storytelling, which I seamlessly integrate into my development work. Designing isn’t just about aesthetics for me; it's about creating intuitive, user-friendly interfaces that resonate with and impact millions.

Professionally, I have navigated roles from a Full Stack Developer Intern at Pafex.Co, where I deepened my expertise in the MERN stack, to a persistent presence in the freelance world of graphic design. These experiences have instilled in me a robust understanding of real-time, responsive web development and the critical thinking required to solve real-world problems.

I am driven by a relentless curiosity and a desire to continuously expand my skill set. My goal is to secure a challenging position in a reputable organization where I can leverage my diverse technical skills, deep-rooted passion for design, and problem-solving abilities. I am eager to contribute to meaningful projects that push the boundaries of innovation and make a tangible impact on users around the globe.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,'about');
