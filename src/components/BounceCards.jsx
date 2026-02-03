import { useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * BounceCards Component
 * 
 * Renders a stack of images that spread/bounce on hover or load.
 * Mimics a "messy desk" of photos.
 * 
 * @param {string[]} images - Array of image URLs
 * @param {string[]} transformStyles - Array of CSS transform strings for each card's resting position
 */
const BounceCards = ({ 
  images = [], 
  transformStyles = [],
  containerHeight = 400 
}) => {
  
  return (
    <div 
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ height: containerHeight }}
    >
      {images.map((img, index) => {
        // Default scattered style if none provided
        const defaultStyle = transformStyles[index] || `rotate(${index % 2 === 0 ? -5 : 5}deg)`;
        
        return (
          <motion.div
            key={index}
            className="absolute shadow-2xl rounded-2xl overflow-hidden border-4 border-white bg-white"
            style={{
              width: 300, // Fixed width for consistency
              maxWidth: '80vw', // Responsive constraint
              aspectRatio: '4/3',
              zIndex: index,
            }}
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              // Apply the scattered rotation/translation
              transform: defaultStyle
            }}
            whileHover={{ 
              scale: 1.1, 
              zIndex: 50,
              transition: { duration: 0.2 }
            }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: index * 0.1 
            }}
            // Framer Motion handles transform via 'style' prop usually, 
            // but for complex strings we can use initial/animate if we parse it,
            // or just use CSS classes/style for static transform and animate scale/y.
            // Here we mix them carefully.
          >
            {/* Image Container */}
            <div className="w-full h-full relative group cursor-pointer">
              <img 
                src={img} 
                alt={`Gallery item ${index + 1}`} 
                className="w-full h-full object-cover"
              />
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default BounceCards;
