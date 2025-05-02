import { motion, useInView } from 'framer-motion';
import { WorkExperience as WorkExperienceType } from '../data/portfolio';
import { useRef } from 'react';

interface WorkExperienceProps {
  data: WorkExperienceType[];
}

const WorkExperience = ({ data }: WorkExperienceProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        Work Experience
      </motion.h2>
      <motion.div 
        className="space-y-8"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {data.map((experience, index) => (
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
                  className="h-12 w-12 rounded-full"
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                />
              </motion.div>
              <div className="ml-4">
                <motion.h3 
                  className="text-xl font-semibold text-gray-900"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  {experience.company}
                </motion.h3>
                <motion.div 
                  className="text-sm text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                >
                  <p className="font-medium">{experience.role}</p>
                  <p>{experience.period}</p>
                </motion.div>
              </div>
            </div>
            <motion.div 
              className="mt-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            >
              <p className="text-gray-600">{experience.description}</p>
              {experience.links && (
                <motion.div 
                  className="mt-4 flex gap-4"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                >
                  {experience.links.map((link, linkIndex) => (
                    <motion.a
                      key={linkIndex}
                      href={link.url}
                      className="text-sm text-primary hover:text-primary-dark font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.label} →
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WorkExperience; 