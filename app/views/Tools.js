import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

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
        <li className='list'>
          <a
            href='https://www.amazon.com/Apple-MacBook-2-8GHz-MGXG2LL-Renewed/dp/B07DF43SY3'
            target='_blank'
            rel='noopener noreferrer'
          >
            MacBook Pro (Retina, 15-inch, Mid 2015)
          </a>
        </li>
        <li className='list'>
          <a
            href='https://www.amazon.in/Lenovo-80Q700UEIN-15-6-inch-i5-6200U-Graphics/dp/B01B1AD0GI'
            target='_blank'
            rel='noopener noreferrer'
          >
            Lenovo ideapad 300
          </a>
        </li>

        <h3>OS</h3>
        <li className='list'>macOS Catalina</li>
        <li className='list'>Windows 10 Pro</li>
        {/* <li className='list'>Linux(Ubuntu)</li> */}

        <h3>Editor</h3>
        <li className='list'>
          <a
            href='https://code.visualstudio.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            VS Code
          </a>
        </li>
        <li className='list'>
          <a
            href='https://www.sublimetext.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Sublime Text
          </a>
        </li>
        <li className='list'>
          <a
            href='https://www.jetbrains.com/pycharm/'
            target='_blank'
            rel='noopener noreferrer'
          >
            PyCharm
          </a>
        </li>

        <h3>VS Code Extensions</h3>
        <li className='list'>
          <a
            href='https://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode'
            target='_blank'
            rel='noopener noreferrer'
          >
            Theme: SynthWave 84
          </a>
        </li>
        <li className='list'>
          <a
            href='https://marketplace.visualstudio.com/items?itemName=SimonSiefke.prettier-vscode'
            target='_blank'
            rel='noopener noreferrer'
          >
            Prettier
          </a>
        </li>
        <li className='list'>
          <a
            href='https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint'
            target='_blank'
            rel='noopener noreferrer'
          >
            ESLint
          </a>
        </li>
        <li className='list'>
          <a
            href='https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer'
            target='_blank'
            rel='noopener noreferrer'
          >
            Live Server
          </a>
        </li>
        <li className='list'>
          <a
            href='https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme'
            target='_blank'
            rel='noopener noreferrer'
          >
            Material Icon Theme
          </a>
        </li>
        <li className='list'>
          <a
            href='https://marketplace.visualstudio.com/items?itemName=natqe.reload'
            target='_blank'
            rel='noopener noreferrer'
          >
            Reload
          </a>
        </li>
        <li className='list'>
          <a
            href='https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview'
            target='_blank'
            rel='noopener noreferrer'
          >
            Image Preview
          </a>
        </li>
        <li className='list'>
          <a
            href='https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native'
            target='_blank'
            rel='noopener noreferrer'
          >
            React Native Tools
          </a>
        </li>
        <li className='list'>
          <a
            href='https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets'
            target='_blank'
            rel='noopener noreferrer'
          >
            Simple React Snippet
          </a>
        </li>
        <li className='list'>
          <a
            href='https://marketplace.visualstudio.com/items?itemName=NuclleaR.vscode-extension-auto-import'
            target='_blank'
            rel='noopener noreferrer'
          >
            Auto Import - ES6, TS, JSX, TSX
          </a>
        </li>
        <li className='list'>
          <a
            href='https://marketplace.visualstudio.com/items?itemName=ms-python.python'
            target='_blank'
            rel='noopener noreferrer'
          >
            Python
          </a>
        </li>

        <h3>Browser</h3>
        <li className='list'>Chrome</li>
        <li className='list'>Mozilla Firefox</li>

        <h3>Development</h3>
        <li className='list'>
          <a
            href='https://www.postman.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Postman
          </a>
        </li>
        <li className='list'>
          <a
            href='https://github.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Git & Github
          </a>
        </li>
        <li className='list'>
          <a href='https://hyper.is/' target='_blank' rel='noopener noreferrer'>
            Hyper Terminal
          </a>
        </li>
        <li className='list'>
          <a href='https://sizzy.co/' target='_blank' rel='noopener noreferrer'>
            Sizzy
          </a>
        </li>
        <li className='list'>
          <a
            href='https://www.netlify.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Netlify
          </a>
        </li>

        <h3>Image Editor</h3>
        <li className='list'>
          <a
            href='https://www.photopea.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Photopea.com
          </a>
        </li>

        <h3>Notes</h3>
        <li className='list'>
          <a
            href='https://evernote.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Evernote
          </a>
        </li>
        <li className='list'>
          <a
            href='https://onenote.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            OneNote
          </a>
        </li>

        <h3>Task Management</h3>
        <li className='list'>
          <a
            href='https://www.notion.so/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Notion
          </a>
        </li>
        <li className='list'>
          <a
            href='https://trello.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Trello
          </a>
        </li>
        <li className='list'>
          <a
            href='https://todoist.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Todolist
          </a>
        </li>
        <li className='list'>
          <a
            href='https://www.any.do/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Any.do
          </a>
        </li>
      </div>
    </article>
  </Main>
);

export default Tools;
