import { useState, useEffect } from 'react';
import { MessageCircle, Trash2, Calendar, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const FeedbackManager = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    loadFeedbacks();
  }, []);

  const loadFeedbacks = () => {
    const storedFeedbacks = JSON.parse(localStorage.getItem('portfolio_feedback') || '[]');
    setFeedbacks(storedFeedbacks.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));
  };

  const deleteFeedback = (id) => {
    const updatedFeedbacks = feedbacks.filter(feedback => feedback.id !== id);
    setFeedbacks(updatedFeedbacks);
    localStorage.setItem('portfolio_feedback', JSON.stringify(updatedFeedbacks));
  };

  const clearAllFeedbacks = () => {
    if (window.confirm('确定要删除所有反馈吗？此操作不可撤销。')) {
      setFeedbacks([]);
      localStorage.setItem('portfolio_feedback', JSON.stringify([]));
    }
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const exportFeedbacks = () => {
    const dataStr = JSON.stringify(feedbacks, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `portfolio_feedback_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  if (!isVisible) {
    return (
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsVisible(true)}
          className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <MessageCircle size={20} />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
        {/* 头部 */}
        <div className="bg-gray-800 p-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full">
              <Bot size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">反馈管理</h3>
              <p className="text-sm text-gray-300">共 {feedbacks.length} 条反馈</p>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/80 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 操作栏 */}
        <div className="p-4 border-b border-gray-200 flex gap-3">
          <Button
            onClick={loadFeedbacks}
            variant="outline"
            size="sm"
          >
            刷新
          </Button>
          <Button
            onClick={exportFeedbacks}
            variant="outline"
            size="sm"
            disabled={feedbacks.length === 0}
          >
            导出
          </Button>
          <Button
            onClick={clearAllFeedbacks}
            variant="outline"
            size="sm"
            disabled={feedbacks.length === 0}
            className="text-red-600 hover:text-red-700"
          >
            清空所有
          </Button>
        </div>

        {/* 反馈列表 */}
        <div className="max-h-96 overflow-y-auto">
          {feedbacks.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <MessageCircle size={48} className="mx-auto mb-4 text-gray-300" />
              <p>暂无反馈</p>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {feedbacks.map((feedback) => (
                <div
                  key={feedback.id}
                  className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User size={16} />
                      <span>HR 反馈</span>
                      <span className="text-gray-400">•</span>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{formatDate(feedback.timestamp)}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteFeedback(feedback.id)}
                      className="text-red-400 hover:text-red-600 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <p className="text-gray-800 leading-relaxed">{feedback.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackManager;
