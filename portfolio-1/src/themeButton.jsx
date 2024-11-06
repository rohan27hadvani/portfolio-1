import PropTypes from 'prop-types';
import './index.css';
import { useEffect } from 'react';

const ThemeButton = ({ handleThemeChange, currentTheme }) => {
  // Set default theme to 'theme1' on initial load if no currentTheme is provided
  useEffect(() => {
    if (!currentTheme) {
      handleThemeChange('theme1');
    }
  }, [currentTheme, handleThemeChange]);

  return (
    <div className="flex items-center gap-6">
      {/* Button 1 */}
      <div className="relative cursor-pointer">
        <input
          type="radio"
          className="absolute opacity-0 w-0 h-0 radio-button__input"
          id="radio1"
          name="radio-group"
          onChange={() => handleThemeChange('theme1')}
          checked={currentTheme === 'theme1'} // Check if the current theme is theme1
        />
        <label
          htmlFor="radio1"
          className="inline-block pl-8 mb-2 text-base font-semibold text-black uppercase relative cursor-pointer transition-all duration-300 ease-in-out radio-button__label"
        >
          <span className="radio-button__custom absolute top-0 left-0 w-5 h-5 rounded-full border-2 border-gray-500 transition-all duration-300 ease-in-out"></span>
          Theme 1
        </label>
      </div>

      {/* Button 2 */}
      <div className="relative cursor-pointer">
        <input
          type="radio"
          className="absolute opacity-0 w-0 h-0 radio-button__input"
          id="radio2"
          name="radio-group"
          onChange={() => handleThemeChange('theme2')}
          checked={currentTheme === 'theme2'} // Check if the current theme is theme2
        />
        <label
          htmlFor="radio2"
          className="inline-block pl-8 mb-2 text-base font-semibold text-black uppercase relative cursor-pointer transition-all duration-300 ease-in-out radio-button__label"
        >
          <span className="radio-button__custom absolute top-0 left-0 w-5 h-5 rounded-full border-2 border-gray-500 transition-all duration-300 ease-in-out"></span>
          Theme 2
        </label>
      </div>

      {/* Button 3 */}
      {/* <div className="relative cursor-pointer">
        <input
          type="radio"
          className="absolute opacity-0 w-0 h-0 radio-button__input"
          id="radio3"
          name="radio-group"
          onChange={() => handleThemeChange('theme3')}
          checked={currentTheme === 'theme3'} // Check if the current theme is theme3
        />
        <label
          htmlFor="radio3"
          className="inline-block pl-8 mb-2 text-base font-semibold text-black uppercase relative cursor-pointer transition-all duration-300 ease-in-out radio-button__label"
        >
          <span className="radio-button__custom absolute top-0 left-0 w-5 h-5 rounded-full border-2 border-gray-500 transition-all duration-300 ease-in-out"></span>
          Theme 3
        </label>
      </div> */}
    </div>
  );
};

ThemeButton.propTypes = {
  handleThemeChange: PropTypes.func.isRequired,
  currentTheme: PropTypes.string.isRequired,  // currentTheme is required here
};

export default ThemeButton;
