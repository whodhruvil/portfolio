import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Main from "../layouts/Main";
import CourseList from "../components/Recommendation/CourseList";

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

        <div>
          <h3>HTML/CSS</h3>
          <CourseList
            courseName='Build Responsive Real World Websites with HTML5 and CSS3'
            author='Jonas Schmedtmann'
          />
          <CourseList
            courseName='Advanced CSS and Sass: Flexbox, Grid, Animations and More!'
            author='Jonas Schmedtmann'
          />

          <h3>Vanilla JavaScript</h3>
          <CourseList
            courseName='JavaScript: Understanding the Weird Parts'
            author='Anthony Alicea'
          />
          <CourseList
            courseName='The Complete JavaScript Course 2020: Build Real Projects!'
            author='Jonas Schmedtmann'
          />
          <CourseList
            courseName='The Ultimate Full-stack JavaScript Developer Bundle'
            author='Mosh Hamedani'
          />
          <CourseList courseName="You don't know JS" author='Kyle Simpson' />
          <CourseList courseName='Javascript 30' author='Wes Bos' />
          <CourseList
            courseName="Typescript: The Complete Developer's Guide"
            author='Stephen Grier'
          />

          <h3>ReactJS</h3>
          <CourseList courseName='Mastering React' author='Mosh Hamedani' />
          <CourseList
            courseName='Modern React with Redux'
            author='Stephen Grider '
          />
          <CourseList
            courseName='React - The Complete Guide (incl Hooks, React Router, Redux)'
            author='Maximilian Schwarzmüller'
          />
        </div>
      </article>
    </Main>
  );
}

export default Recomendation;
