import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ImageGallery = ({ image, images, currentIndex, onClose, onPrevious, onNext }) => {
  if (!image) return null;

  const hasMultipleImages = images && images.length > 1;
  const canGoPrevious = hasMultipleImages && currentIndex > 0;
  const canGoNext = hasMultipleImages && currentIndex < images.length - 1;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      {/* 关闭按钮 - 固定在屏幕右上角 */}
      <Button
        onClick={onClose}
        className="fixed top-4 right-4 bg-black/70 hover:bg-black/80 text-white border border-white/30 z-10 shadow-lg"
        size="sm"
      >
        <X className="w-4 h-4 mr-2" />
        Close
      </Button>

      {/* 上一张按钮 */}
      {canGoPrevious && (
        <Button
          onClick={onPrevious}
          className="fixed left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/80 text-white border border-white/30 z-10 shadow-lg"
          size="sm"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>
      )}

      {/* 下一张按钮 */}
      {canGoNext && (
        <Button
          onClick={onNext}
          className="fixed right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/80 text-white border border-white/30 z-10 shadow-lg"
          size="sm"
        >
          Next
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      )}

      {/* 图片容器 */}
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src={image.src}
          alt={image.alt}
          className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg"
        />

        {/* 图片说明 */}
        {image.caption && (
          <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-3 rounded-lg">
            <p className="text-sm">{image.caption}</p>
          </div>
        )}

        {/* 图片计数器 */}
        {hasMultipleImages && (
          <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
};

// 新增：单张大图展示组件
export const SingleImageDisplay = ({ image, onImageClick }) => {
  if (!image) return null;

  return (
    <div className="w-full">
      <div 
        className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
        onClick={() => onImageClick(image)}
      >
        <img 
          src={image.src} 
          alt={image.alt}
          className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      {image.caption && (
        <p className="text-center text-gray-600 mt-4 text-sm italic">{image.caption}</p>
      )}
    </div>
  );
};

// 新增：多图网格展示组件
export const MultiImageGrid = ({ images, onImageClick }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className={`grid gap-8 ${
      images.length === 1 ? 'grid-cols-1' : 
      images.length === 2 ? 'md:grid-cols-2' :
      images.length === 3 ? 'md:grid-cols-3' :
      'md:grid-cols-2'
    }`}>
      {images.map((image, idx) => (
        <div key={idx} className="group">
          <div 
            className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            onClick={() => onImageClick(image)}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          {image.caption && (
            <p className="text-center text-gray-600 mt-4 text-sm italic">{image.caption}</p>
          )}
        </div>
      ))}
    </div>
  );
};

// 新增：智能图片展示组件 - 根据配置选择展示模式
export const SmartImageDisplay = ({ images, onImageClick, displayMode = 'single' }) => {
  if (!images || images.length === 0) return null;

  // 如果指定为单张模式，每张图片单独显示
  if (displayMode === 'single') {
    return (
      <div className="space-y-8">
        {images.map((image, idx) => (
          <SingleImageDisplay 
            key={idx}
            image={image} 
            onImageClick={onImageClick}
          />
        ))}
      </div>
    );
  }

  // 如果指定为网格模式，使用网格布局
  if (displayMode === 'grid') {
    return <MultiImageGrid images={images} onImageClick={onImageClick} />;
  }

  // 默认使用单张模式
  return (
    <div className="space-y-8">
      {images.map((image, idx) => (
        <SingleImageDisplay 
          key={idx}
          image={image} 
          onImageClick={onImageClick}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
