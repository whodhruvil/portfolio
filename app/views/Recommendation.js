import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Main from "../layouts/Main";
import CourseList from "../components/Recommendation/CourseList";

const data = [
  //! HTML/CSS
  {
    title: "HTML/CSS",
    courseList: [
      {
        name: "Build Responsive Real World Websites with HTML5 and CSS3",
        author: "Jonas Schmedtmann",
        link:
          "https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/",
        authorTwitter: "https://www.udemy.com/user/jonasschmedtmann/",
      },
      {
        name: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
        author: "Jonas Schmedtmann",
        link: "https://www.udemy.com/course/advanced-css-and-sass/",
        authorTwitter: "https://www.udemy.com/user/jonasschmedtmann/",
      },
    ],
  },
  //! JS
  {
    title: "Vanilla JavaScript",
    courseList: [
      {
        name: "JavaScript: Understanding the Weird Parts",
        author: "Anthony Alicea",
        link: "https://www.udemy.com/course/understand-javascript/",
        authorTwitter: "https://www.udemy.com/user/anthonypalicea/",
      },
      {
        name: "The Complete JavaScript Course 2020: Build Real Projects!",
        author: "Anthony Alicea",
        link: "https://www.udemy.com/course/the-complete-javascript-course/",
        authorTwitter: "https://www.udemy.com/user/jonasschmedtmann/",
      },
      {
        name: "JavaScript: Understanding the Weird Parts",
        author: "Anthony Alicea",
        link: "https://www.udemy.com/course/understand-javascript/",
        authorTwitter: "https://www.udemy.com/user/anthonypalicea/",
      },
    ],
  },
  {
    title: "HTML/CSS",
    courseList: [
      {
        name: "Build Responsive Real World Websites with HTML5 and CSS3",
        author: "Jonas Schmedtmann",
        link:
          "https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/",
        authorTwitter: "https://www.udemy.com/user/jonasschmedtmann/",
      },
    ],
  },
];

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

{
  /* <>

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

<h3>React JS</h3>
<CourseList courseName='Mastering React' author='Mosh Hamedani' />
<CourseList
  courseName='Modern React with Redux'
  author='Stephen Grider '
/>
<CourseList
  courseName='React - The Complete Guide (incl Hooks, React Router, Redux)'
  author='Maximilian Schwarzmüller'
/>

<h3>React Native</h3>
<CourseList
  courseName='React Native - The Practical Guide'
  author='Maximilian Schwarzmüller'
/>
<CourseList
  courseName='The Ultimate React Native Series'
  author='Mosh Hamedani'
/>

<h3>Node JS</h3>
<CourseList
  courseName='Node.js, Express, MongoDB & More: The Complete Bootcamp 2020'
  author='Jonas Schmedtmann'
/>
<CourseList
  courseName='The Complete Node.js Course'
  author='Mosh Hamedani'
/>
<CourseList
  courseName='The Complete Node.js Developer Course (3rd Edition)'
  author='Andrew Mead '
/>

<h3>Python</h3>
<CourseList
  courseName='Complete Python Mastery'
  author='Mosh Hamedani'
/>
</> */
}
