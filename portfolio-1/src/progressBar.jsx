import PropTypes from 'prop-types';


const ProgressBar = ({ strokeDashoffset, theme, imageSrc}) => {
  // Extracting the classes for easier use
  // bgClass = `text-${theme.bg}`;   // e.g., text-bg2
  // const darkClass = `text-${theme.dark}`; // e.g., text-dark2

  return (
    <div className="relative size-40">
      <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className={`stroke-current ${theme.bg}`} // Use the dynamic class for background color
          strokeWidth="2.5"
        />
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className={`stroke-current ${theme.dark}`} // Use the dynamic class for dark color
          strokeWidth="2"
          strokeDasharray="100"
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>

      {/* Image positioned at the center */}
      {imageSrc && (
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={imageSrc} alt="Progress icon" className="w-[50%] h-[50%] opacity-80" />
        </div>
         )}
    </div>
  );
};


ProgressBar.propTypes = {
  strokeDashoffset: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  imageSrc: PropTypes.object.isRequired
};

export default ProgressBar;
