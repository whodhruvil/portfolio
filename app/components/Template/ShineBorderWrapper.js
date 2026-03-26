import React from "react";
import PropTypes from "prop-types";

const ShineBorderWrapper = ({
  children,
  className = "",
  style = {},
  variant = "default",
  effect = "shine",
  duration = 14,
}) => {
  const containerClass = `shine-border-container ${className}`;

  // Different variants for different effects
  const getVariantClass = () => {
    const baseVariant = variant === "default" ? "dark" : variant;

    switch (effect) {
      case "glow":
        return `glow-border-${baseVariant}`;
      case "shine-glow":
      case "combined":
        return `shine-glow-${baseVariant}`;
      case "shine":
      default:
        return `shine-border-${baseVariant}`;
    }
  };

  // Custom animation duration if provided
  const customStyle =
    duration !== 14 ? { ...style, animationDuration: `${duration}s` } : style;

  return (
    <div
      className={`${containerClass} ${getVariantClass()}`}
      style={customStyle}
    >
      {children}
    </div>
  );
};

ShineBorderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  duration: PropTypes.number,
  style: PropTypes.object,
  variant: PropTypes.oneOf(["default", "blue", "purple", "pink", "dark"]),
  effect: PropTypes.oneOf(["shine", "glow", "shine-glow", "combined"]),
};

export default ShineBorderWrapper;
