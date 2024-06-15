import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './about.css';

export default function Info() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensure the animation triggers only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  return (
    <div ref={ref} className="about__info grid">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="about__box"
      >
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Proficiency</h3>
        <span className="about__subtitle">2 Years Working</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="about__box"
      >
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">48+ projects</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="about__box"
      >
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </motion.div>
    </div>
  );
}
