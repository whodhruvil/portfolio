import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";

import Main from "../layouts/Main";

const Tools = () => (
  <Main>
    <Helmet title='Tools' />
    <article className='post' id='tools'>
      <header>
        <div className='title'>
          <h2>
            <Link to='/tools'>Tools I use</Link>
          </h2>
        </div>
      </header>
      <div>
        <h3>Devices</h3>
        <li>MacBook Pro (Retina, 15-inch, Mid 2015)</li>
        <li>Lenovo ideapad 300</li>

        <h3>OS</h3>
        <li>macOS Catalina</li>
        <li>Windows 10 pro.</li>
        <li>Linux(ubuntu)</li>

        <h3>Editor</h3>
        <li>VS Code</li>
        <li>Sublime</li>
        <li>PyCharm</li>
        <li>Atom</li>

        <h3>VS Code Extensions</h3>

        <h3>Browser</h3>
        <li>Chrome</li>
        <li>Mozila Firefox</li>
        <li>Safari</li>

        <h3>Development</h3>
        <li>Postman</li>
        <li>Git & Github</li>
        <li>Netlify</li>

        <h3>Notes</h3>
        <li>Evernote</li>
        <li>OneNote</li>

        <h3>Task Management</h3>
        <li>Notion</li>
        <li>Trello</li>
        <li>Todolist</li>
        <li>Any.do</li>
      </div>
    </article>
  </Main>
);

export default Tools;
