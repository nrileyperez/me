import { motion, useInView } from 'framer-motion';
import { Education as EducationType } from '../data/portfolio';
import { useRef } from 'react';

interface EducationProps {
  data: EducationType[];
}

const Education = ({ data }: EducationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>
      <motion.div 
        className="space-y-8"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {data.map((education, index) => (
          <motion.div 
            key={index} 
            className="card p-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center">
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  className="h-16 w-16"
                  src={education.logo}
                  alt={`${education.school} logo`}
                />
              </motion.div>
              <div className="ml-4">
                <motion.h3 
                  className="text-xl font-semibold text-gray-900"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  {education.school}
                </motion.h3>
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                >
                  {education.degree}
                </motion.p>
                <motion.div 
                  className="mt-1 flex items-center text-sm text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  <span>{education.period}</span>
                </motion.div>
              </div>
            </div>
            <motion.div 
              className="mt-6 space-y-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
            >
              {education.highlights.map((highlight, highlightIndex) => (
                <motion.div 
                  key={highlightIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 + highlightIndex * 0.05 }}
                >
                  <motion.h4 
                    className="text-sm font-medium text-gray-900"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {highlight.title}
                  </motion.h4>
                  <motion.p 
                    className="mt-1 text-sm text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 + highlightIndex * 0.05 }}
                  >
                    {highlight.description}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education; 