'use client';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Java', level: 85, color: 'from-amber-500 to-amber-600' },
  { name: 'JavaScript', level: 80, color: 'from-yellow-400 to-yellow-500' },
  { name: 'Python', level: 75, color: 'from-blue-400 to-blue-500' },
  { name: 'React', level: 75, color: 'from-cyan-400 to-cyan-500' },
  { name: 'Git', level: 75, color: 'from-orange-400 to-orange-500' },
  { name: 'Node.js', level: 70, color: 'from-green-400 to-green-500' },
  { name: 'SQL', level: 70, color: 'from-blue-300 to-blue-400' },
  { name: 'REST APIs', level: 70, color: 'from-teal-400 to-teal-500' },
  { name: 'PHP', level: 65, color: 'from-purple-400 to-purple-500' },
  { name: 'TypeScript', level: 65, color: 'from-blue-400 to-blue-500' },
  { name: 'PostgreSQL', level: 65, color: 'from-blue-400 to-blue-500' },
  { name: 'Next.js', level: 60, color: 'from-gray-300 to-gray-400' },
  { name: 'MongoDB', level: 60, color: 'from-green-400 to-green-500' },
  { name: 'Docker', level: 55, color: 'from-blue-300 to-blue-400' },
  { name: 'AWS', level: 30, color: 'from-amber-400 to-amber-500' },
];

export const Skills = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Tech Stack</span>
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-800/50 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all"
            >
              <div className="flex justify-between mb-2">
                <h3 className="font-medium text-sm md:text-base">{skill.name}</h3>
                <span className="text-gray-400 text-sm md:text-base">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.05 + 0.2 }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};