import { motion } from 'framer-motion';

/**
 * BubbleMenu Component
 * 
 * A horizontal scrollable menu with "bubble" style items for filtering.
 * Features magnetic hover effects and smooth active state transitions.
 * 
 * @param {Array} categories - List of category strings (e.g., ['All', 'AI', 'UI/UX'])
 * @param {string} activeCategory - Currently selected category
 * @param {Function} onSelect - Callback when a category is selected
 */
const BubbleMenu = ({ categories, activeCategory, onSelect, variant = 'light' }) => {
  const isDark = variant === 'dark';
  
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-4 px-2">
      <div className="flex items-center gap-3 min-w-max px-4 mx-auto justify-center">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          
          return (
            <button
              key={category}
              onClick={() => onSelect(category)}
              className="relative px-6 py-2 rounded-full text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              style={{
                color: isActive ? '#ffffff' : isDark ? 'rgba(255, 255, 255, 0.6)' : '#64748b',
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="activeBubble"
                  className="absolute inset-0 rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{ zIndex: -1, backgroundColor: 'var(--custom-purple)' }}
                />
              )}
              
              {/* Hover effect background */}
              {!isActive && (
                <div 
                  className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity -z-10" 
                  style={{ backgroundColor: isDark ? 'rgba(138, 129, 215, 0.2)' : '#f1f5f9' }}
                />
              )}
              
              <span className="relative z-10">{category}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BubbleMenu;
