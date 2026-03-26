import React from "react";
import PropTypes from "prop-types";

// This component is now simplified since we use CSS-only approach
// It's kept for backward compatibility but doesn't render anything
const ShineBorder = ({ className = "" }) => {
  // The shine border effect is now handled entirely by CSS
  // This component is kept for API compatibility
  return null;
};

ShineBorder.propTypes = {
  className: PropTypes.string,
  duration: PropTypes.number,
  shineColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  borderWidth: PropTypes.number,
  style: PropTypes.object,
};

export default ShineBorder;
