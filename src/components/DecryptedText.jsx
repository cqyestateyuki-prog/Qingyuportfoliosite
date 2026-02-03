import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * DecryptedText Component
 * 
 * Displays text that "decrypts" itself by scrambling characters before revealing the final text.
 * Effect runs on mount and can be re-triggered on hover.
 * 
 * @param {string} text - The final text to display
 * @param {string} className - CSS classes for styling
 * @param {number} speed - Speed of the decryption effect (ms per character)
 * @param {number} maxIterations - How many scramble iterations before revealing a character
 * @param {boolean} sequential - If true, reveals characters one by one. If false, all at once.
 * @param {boolean} revealDirection - "start" (left-to-right) or "center" or "random"
 * @param {boolean} useOriginalCharsOnly - If true, only uses characters from the original string for scrambling
 * @param {string} characters - Custom string of characters to use for scrambling
 */
const DecryptedText = ({
  text,
  className = "",
  speed = 50,
  maxIterations = 10,
  sequential = true,
  revealDirection = "start",
  useOriginalCharsOnly = false,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?",
  parentHover = false, // If true, relies on parent to trigger hover
  animateOnHover = true
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const iterationRef = useRef(0);
  const intervalRef = useRef(null);
  
  // Characters to use for scrambling
  const scrambleChars = useOriginalCharsOnly 
    ? Array.from(new Set(text.split('').filter(c => c !== ' '))).join('')
    : characters;

  const startAnimation = () => {
    iterationRef.current = 0;
    clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setDisplayText(prevText => {
        const result = text.split('').map((char, index) => {
          if (char === ' ') return ' ';
          
          // Determine if this character should be revealed
          let shouldReveal = false;
          
          if (sequential) {
            if (revealDirection === "start") {
              shouldReveal = index < iterationRef.current / maxIterations;
            } else if (revealDirection === "end") {
              shouldReveal = index > text.length - (iterationRef.current / maxIterations);
            } else if (revealDirection === "center") {
              const middle = text.length / 2;
              const dist = Math.abs(index - middle);
              shouldReveal = dist < iterationRef.current / maxIterations;
            }
          } else {
            shouldReveal = iterationRef.current >= maxIterations;
          }

          if (shouldReveal) {
            return char;
          }
          
          return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        }).join('');
        
        if (sequential) {
          if (iterationRef.current >= text.length * maxIterations) { 
            clearInterval(intervalRef.current);
            return text;
          }
        } else {
          if (iterationRef.current >= maxIterations) {
            clearInterval(intervalRef.current);
            return text;
          }
        }
        
        iterationRef.current += 1; // Increase speed
        return result;
      });
    }, speed);
  };

  useEffect(() => {
    startAnimation();
    return () => clearInterval(intervalRef.current);
  }, [text]);

  const handleMouseEnter = () => {
    if (animateOnHover) {
      setIsHovering(true);
      startAnimation();
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // If parent controls hover
  useEffect(() => {
    if (parentHover && animateOnHover) {
      startAnimation();
    }
  }, [parentHover]);

  return (
    <span 
      className={`inline-block whitespace-nowrap ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {displayText}
    </span>
  );
};

export default DecryptedText;
