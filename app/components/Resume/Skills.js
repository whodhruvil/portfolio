import React, { Component } from "react";
import PropTypes from "prop-types";

import CategoryButton from "./Skills/CategoryButton";
import SkillsGrid from "./Skills/SkillsGrid";

const handleProps = ({ categories, skills }) => ({
  buttons: categories
    .map((cat) => cat.name)
    .reduce(
      (obj, key) => ({
        ...obj,
        [key]: false,
      }),
      { All: true }
    ),
  skills,
});

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = handleProps({
      categories: props.categories,
      skills: props.skills,
    });
  }

  getFilteredSkills() {
    // search for true active categories
    const actCat = Object.keys(this.state.buttons).reduce(
      (cat, key) => (this.state.buttons[key] ? key : cat),
      "All"
    );

    return this.state.skills
      .sort((a, b) => a.title.localeCompare(b.title))
      .filter((skill) => actCat === "All" || skill.category.includes(actCat));
  }

  getButtons() {
    return Object.keys(this.state.buttons).map((key) => (
      <CategoryButton
        label={key}
        key={key}
        active={this.state.buttons}
        handleClick={this.handleChildClick}
      />
    ));
  }

  handleChildClick = (label) => {
    this.setState((prevState) => {
      // Toggle button that was clicked. Turn all other buttons off.
      const buttons = Object.keys(prevState.buttons).reduce(
        (obj, key) => ({
          ...obj,
          [key]: label === key && !prevState.buttons[key],
        }),
        {}
      );
      // Turn on 'All' button if other buttons are off
      buttons.All = !Object.keys(prevState.buttons).some((key) => buttons[key]);
      return { buttons };
    });
  };

  render() {
    return (
      <div className='skills'>
        <div className='link-to' id='skills' />
        <div className='title'>
          <h3>Skills</h3>
          <p>
            Note: I think these sections are silly, but everyone seems to have
            one. Here is a *mostly* honest overview of my skills.
          </p>
        </div>
        <div className='skill-button-container'>{this.getButtons()}</div>
        <SkillsGrid
          skills={this.getFilteredSkills()}
          categories={this.props.categories}
        />
      </div>
    );
  }
}

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      svgFile: PropTypes.string,
      category: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
    })
  ),
};

Skills.defaultProps = {
  skills: [],
  categories: [],
};

export default Skills;
