import React from 'react';
import { motion } from 'framer-motion';

const Timeline = ({ items }) => {
  return (
    <div className="relative py-10">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
      
      {items.map((item, index) => (
        <motion.div 
          key={index}
          className={`relative flex items-center mb-12 ${
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          {/* Dot */}
          <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-white shadow-md transform -translate-x-1/2 z-10"></div>
          
          {/* Spacer for desktop alignment */}
          <div className="hidden md:block w-1/2"></div>
          
          {/* Content */}
          <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
            index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
          }`}>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <span className="inline-block px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm font-medium mb-2">
                {item.date}
              </span>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{item.title}</h3>
              <div className="text-gray-500 font-medium mb-3">{item.company}</div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
