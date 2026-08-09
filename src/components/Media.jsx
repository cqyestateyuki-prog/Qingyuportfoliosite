/**
 * Media — 图片 / 动图统一渲染
 *
 * 让 .gif .mp4 .webm 和 .png 一样直接写在数据的图片字段里:
 * 视频后缀走 <video>(自动播放、静音、循环、内联),其余走 <img>。
 *
 * .mov 在 Chrome 里能不能播取决于编码,录屏后转 mp4(H.264) 或 webm 更稳。
 */

const VIDEO_EXT = /\.(mp4|webm|mov)$/i;

const Media = ({ src, alt = '', className = '', style, poster, ...rest }) => {
  if (!src) return null;

  if (VIDEO_EXT.test(src)) {
    return (
      <video
        src={src}
        poster={poster}
        className={className}
        style={style}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt || undefined}
        {...rest}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      decoding="async"
      {...rest}
    />
  );
};

export default Media;
