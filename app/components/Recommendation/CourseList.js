import React from "react";
import { Link } from "react-router-dom";

function CourseList({ courseName, courseLink, author, authorTwitter }) {
  return (
    <>
      <li className='list'>
        <Link to={courseLink} target='_blank' rel='noopener noreferrer'>
          {courseName}
        </Link>
        <span style={{ marginRight: 10, marginLeft: 10, color: "#000" }}>
          by
        </span>
        <Link href={authorTwitter} target='_blank' rel='noopener noreferrer'>
          {author}
        </Link>
      </li>
    </>
  );
}

export default CourseList;
