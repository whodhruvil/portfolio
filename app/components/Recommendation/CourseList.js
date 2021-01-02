import React from "react";
import { Link } from "react-router-dom";

function CourseList({ courseName, courseLink, author, authorTwitter }) {
  return (
    <>
      <li className='list'>
        <a href={courseLink} target='_blank' rel='noopener noreferrer'>
          {courseName}
        </a>
        <span style={{ marginRight: 10, marginLeft: 10, color: "#000" }}>
          by
        </span>
        <a href={authorTwitter} target='_blank' rel='noopener noreferrer'>
          {author}
        </a>
      </li>
    </>
  );
}

export default CourseList;
