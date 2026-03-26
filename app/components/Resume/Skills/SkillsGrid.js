import React from "react";
import PropTypes from "prop-types";

const SkillsGrid = ({ skills, categories }) => {
  const getFilteredSkills = () => {
    // For now, show all skills. Later we can add filtering by category
    return skills;
  };

  return (
    <div className='skills-grid'>
      {getFilteredSkills().map((skill) => (
        <div key={skill.title} className='skill-item' title={skill.title}>
          <img
            src={`/images/svg/${skill.svgFile}`}
            alt={skill.title}
            className='skill-icon'
          />
          <span className='skill-title'>{skill.title}</span>
        </div>
      ))}
    </div>
  );
};

SkillsGrid.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      svgFile: PropTypes.string.isRequired,
      category: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
    })
  ).isRequired,
};

export default SkillsGrid;
