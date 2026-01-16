import { useState, useEffect } from 'react';
import { Bot, X, Send, Mail } from 'lucide-react';

const FeedbackBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasShownOnce, setHasShownOnce] = useState(false);
  const [showBot, setShowBot] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const sendEmail = async (message) => {
    // 使用 EmailJS 发送邮件
    const serviceId = 'service_mttzh5q'; // 需要替换为你的 EmailJS service ID
    const templateId = 'template_p0gp8pg'; // 需要替换为你的 EmailJS template ID
    const publicKey = 'ceWNVxn0Bdn3J9rYP'; // 需要替换为你的 EmailJS public key
    
    const templateParams = {
      message: message,
      timestamp: new Date().toLocaleString('zh-CN'),
      from_name: 'Portfolio Feedback',
      to_email: 'cqyestateyuki@gmail.com' // 替换为你的邮箱
    };

    try {
      // 动态加载 EmailJS
      const emailjs = await import('@emailjs/browser');
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      return true;
    } catch (error) {
      console.error('邮件发送失败:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!feedback.trim()) return;

    setIsSubmitting(true);

    try {
      // 尝试发送邮件
      const emailSent = await sendEmail(feedback.trim());
      
      // 同时保存到localStorage作为备份
      const existingFeedback = JSON.parse(localStorage.getItem('portfolio_feedback') || '[]');
      const newFeedback = {
        id: Date.now(),
        message: feedback.trim(),
        timestamp: new Date().toLocaleString('zh-CN'),
        type: 'hr_feedback',
        emailSent: emailSent
      };
      existingFeedback.push(newFeedback);
      localStorage.setItem('portfolio_feedback', JSON.stringify(existingFeedback));
      
      setIsSubmitted(true);
      setFeedback('');
      
      // 1.5秒后关闭
      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitted(false);
      }, 1500);
      
    } catch (error) {
      console.error('提交失败:', error);
      // 即使邮件发送失败，也保存到本地
      const existingFeedback = JSON.parse(localStorage.getItem('portfolio_feedback') || '[]');
      const newFeedback = {
        id: Date.now(),
        message: feedback.trim(),
        timestamp: new Date().toLocaleString('zh-CN'),
        type: 'hr_feedback',
        emailSent: false
      };
      existingFeedback.push(newFeedback);
      localStorage.setItem('portfolio_feedback', JSON.stringify(existingFeedback));
      
      setIsSubmitted(true);
      setFeedback('');
      
      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitted(false);
      }, 1500);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsSubmitted(false);
    setFeedback('');
  };

  const handleDismissTooltip = () => {
    setShowTooltip(false);
    setTooltipVisible(false);
    setIsDismissed(true);
    // 保存到 localStorage，记住用户已经关闭过
    localStorage.setItem('feedback_bot_dismissed', 'true');
  };

  // 检查用户是否已经关闭过对话框
  useEffect(() => {
    const dismissed = localStorage.getItem('feedback_bot_dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      return;
    }
  }, []);

  // 页面加载后延迟6秒显示机器人和对话框（如果用户没有关闭过）
  useEffect(() => {
    if (isDismissed) return;
    
    const timer = setTimeout(() => {
      setShowBot(true);
      setShowTooltip(true);
      // 对话框延迟一点显示，实现渐显效果
      setTimeout(() => {
        setTooltipVisible(true);
      }, 200);
    }, 6000); // 6秒延迟

    return () => clearTimeout(timer);
  }, [isDismissed]);

  // 监听滚动事件，只在滚动到项目区域时显示机器人
  useEffect(() => {
    const handleScroll = () => {
      const workSection = document.getElementById('work');
      
      // 如果在项目详情页（没有work section），始终显示
      if (!workSection) {
        setIsVisible(true);
        return;
      }
      
      // 在主页，只在滚动到项目区域时显示
      if (workSection) {
        const rect = workSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    // 初始检查
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 只在项目区域可见且延迟时间到达后显示机器人
  if (!isVisible || !showBot) {
    return null;
  }

  return (
    <>
      {/* 机器人按钮和对话框 - 放在返回按钮上面 */}
      <div className="fixed bottom-28 right-8 z-50">
        <div className="relative flex items-center gap-3">
          {/* 对话框提示 - 平行于机器人，在左侧 */}
          {showTooltip && !isDismissed && (
            <div className={`absolute right-full mr-3 bg-white rounded-xl shadow-2xl p-3 w-72 border border-gray-200 transition-all duration-500 ease-out ${
              tooltipVisible 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform translate-x-2'
            }`}>
            {/* 关闭按钮 */}
            <button
              onClick={handleDismissTooltip}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors p-1"
              aria-label="Close"
            >
              <X size={16} />
            </button>
            
            <p className="text-sm text-gray-700 mb-2 leading-relaxed pr-6">
              Would you mind leaving a quick feedback/advice for my portfolio?
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setShowTooltip(false);
                  setIsOpen(true);
                }}
                className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors shadow-md hover:shadow-lg"
                style={{ background: 'var(--gradient-secondary)' }}
              >
                Sure!
              </button>
            </div>
            {/* 对话框小三角 - 指向右侧（机器人方向） */}
            <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-6 border-b-6 border-l-6 border-transparent border-l-white"></div>
            </div>
          )}

          {/* 机器人按钮 - 使用项目紫色主题，与返回按钮大小一致 */}
          <button
            onClick={() => {
              setShowTooltip(!showTooltip);
              if (!showTooltip) {
                setIsOpen(true);
              }
            }}
            className="text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
            style={{ 
              background: 'var(--gradient-secondary)',
              animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }}
          >
            <Bot size={24} />
          </button>
        </div>
      </div>

      {/* 超简单的反馈框 */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-xs w-full">
            {isSubmitted ? (
              <div className="p-4 text-center">
                <div className="text-green-500 text-3xl mb-2">✓</div>
                <p className="text-sm text-gray-700">Thank you! Sent to my email.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Bot size={16} className="text-blue-500" />
                  <span className="text-sm font-medium text-gray-800">Quick Feedback</span>
                  <button
                    onClick={handleClose}
                    className="ml-auto text-gray-400 hover:text-gray-600"
                  >
                    <X size={14} />
                  </button>
                </div>
                
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Share your thoughts about my portfolio..."
                  className="w-full h-20 p-3 border border-gray-300 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                  maxLength={300}
                />
                
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs text-gray-400">{feedback.length}/300</span>
                  <button
                    type="submit"
                    disabled={!feedback.trim() || isSubmitting}
                    className="text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-md hover:shadow-lg disabled:opacity-50"
                    style={{ background: 'var(--gradient-secondary)' }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Mail size={14} />
                        Send
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackBot;
