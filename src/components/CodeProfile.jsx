import { motion } from 'framer-motion';

const CodeProfile = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-full max-w-md mx-auto"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 animate-pulse"></div>
      
      {/* Code Window */}
      <div className="relative bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden border border-gray-800">
        {/* Window Header */}
        <div className="flex items-center px-4 py-3 bg-[#252526] border-b border-gray-800">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="ml-4 text-xs text-gray-400 font-mono">Workflow.yml</div>
        </div>

        {/* Code Content */}
        <div className="p-6 overflow-x-auto">
          <pre className="font-mono text-sm leading-relaxed">
            <code className="block">
              <span className="text-purple-400">define</span> <span className="text-blue-300">ProductGoal</span> <span className="text-purple-400">-&gt;</span> <span className="text-yellow-300">{'{'}</span>
            </code>
            <code className="block pl-4">
              <span className="text-white">inputs:</span> <span className="text-yellow-300">[</span><span className="text-green-400">'User Needs'</span><span className="text-white">,</span> <span className="text-green-400">'Market Insights'</span><span className="text-yellow-300">],</span>
            </code>
            <code className="block pl-4">
              <span className="text-white">process:</span> <span className="text-blue-300">IterateFast</span><span className="text-yellow-300">(),</span>
            </code>
            <code className="block pl-4">
              <span className="text-white">output:</span> <span className="text-green-400">'Real Impact'</span>
            </code>
            <code className="block">
              <span className="text-yellow-300">{'}'}</span>
            </code>
            <code className="block mt-4 text-gray-500">
              // Focused on shipping real products.
            </code>
            <code className="block text-gray-500">
              // Bridge design and engineering.
            </code>
          </pre>
        </div>
      </div>
      
      {/* Floating Avatar (Optional, can be added if user has a transparent png) */}
      {/* <img src="/media/personphoto.png" className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full border-4 border-white shadow-xl" /> */}
    </motion.div>
  );
};

export default CodeProfile;
