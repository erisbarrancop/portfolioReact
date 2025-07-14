'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "E-commerce Platform",
    description: "Fullstack e-commerce solution with React, Node.js, and MongoDB",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    title: "AI Dashboard",
    description: "Analytics dashboard for machine learning models with real-time data",
    tags: ["Python", "FastAPI", "React"],
    link: "#"
  },
  {
    title: "Blockchain Explorer",
    description: "Web3 application for exploring Ethereum blockchain data",
    tags: ["Solidity", "Web3.js", "Next.js"],
    link: "#"
  }
];

export const Projects = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4 text-center"
        >
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl text-gray-400 mb-12 text-center max-w-2xl mx-auto"
        >
          A selection of my recent work across fullstack development
        </motion.p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-400/30 transition-all group"
            >
              <div className="h-48 bg-gradient-to-br from-blue-900/50 to-cyan-900/50 flex items-center justify-center">
                <span className="text-6xl opacity-30 group-hover:opacity-50 transition-all">📁</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-medium text-sm hover:opacity-90 transition-all">
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};