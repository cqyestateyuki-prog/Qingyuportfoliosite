/**
 * MoonIcon — 实心新月(替代过细的 ☾ 字符,用于区块标签)
 * 跟随 currentColor,与 ✦ 并排使用
 */

const MoonIcon = ({ size = 11, className = '', style }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`inline-block ${className}`}
    style={{ verticalAlign: '-1px', ...style }}
    aria-hidden="true"
  >
    <path d="M21 14.5A9.5 9.5 0 0 1 9.5 3a9.5 9.5 0 1 0 11.5 11.5Z" />
  </svg>
);

export default MoonIcon;
