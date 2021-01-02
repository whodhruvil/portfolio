import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Main from "../layouts/Main";
import CourseList from "../components/Recommendation/CourseList";
import data from "../data/recommendation";

function Recomendation() {
  return (
    <Main>
      <Helmet title='Recommendations' />
      <article className='post' id='recommendation'>
        <header>
          <div className='title'>
            <h2>
              <Link to='/recommendations'>RECOMMENDATIONS</Link>
            </h2>
            <p>
              You'll find different resources that I've used and recommendation
            </p>
          </div>
        </header>

        <>
          {data.map((course) => (
            <>
              <h3>{course.title}</h3>
              {course.courseList.map((list) => (
                <CourseList
                  courseName={list.name}
                  courseLink={list.link}
                  author={list.author}
                  authorTwitter={list.authorTwitter}
                />
              ))}
            </>
          ))}
        </>
      </article>
    </Main>
  );
}

export default Recomendation;
