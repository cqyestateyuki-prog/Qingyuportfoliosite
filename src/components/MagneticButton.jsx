import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * MagneticButton Component
 * 
 * A wrapper component that creates a "magnetic" effect where the button
 * follows the mouse cursor position slightly when hovered.
 */
const MagneticButton = ({ 
  children, 
  className = "", 
  strength = 30, // How strong the pull is (higher number = more movement)
  active = true,
  ...props
}) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    
    // Calculate center of the element
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate distance from center
    const x = clientX - centerX;
    const y = clientY - centerY;
    
    // Set position with strength factor
    // Using a simpler direct mapping for better responsiveness
    setPosition({ 
      x: x * (strength / 100), 
      y: y * (strength / 100) 
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  if (!active) return <div className={className} {...props}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ 
        type: "spring", 
        stiffness: 150, 
        damping: 15, 
        mass: 0.1 
      }}
      className={`inline-block ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;
