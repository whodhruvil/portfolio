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
            href='https://www.apple.com/in/shop/buy-mac/macbook-air'
            target='_blank'
            rel='noopener noreferrer'
          >
            MacBook Air M2
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

        <h3>Console</h3>
        <li className='list'>
          <a
            href='https://www.playstation.com/en-in/ps5/'
            target='_blank'
            rel='noopener noreferrer'
          >
            PS5 Disk Edition
          </a>
        </li>

        <h3>OS</h3>
        <li className='list'>macOS Tahoe</li>
        <li className='list'>Windows 10 Pro</li>
        {/* <li className='list'>Linux(Ubuntu)</li> */}

        <h3>Editor</h3>
        <li className='list'>
          <a
            href='https://cursor.sh/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Cursor
          </a>
        </li>
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
            href='https://www.jetbrains.com/webstorm/'
            target='_blank'
            rel='noopener noreferrer'
          >
            WebStorm
          </a>
        </li>

        <h3>VS Code Extensions</h3>
        <li className='list'>
          <a
            href='https://marketplace.visualstudio.com/items?itemName=DaltonMenezes.aura-theme'
            target='_blank'
            rel='noopener noreferrer'
          >
            Theme: Aura Spirit Dracula Theme
          </a>
        </li>
        <li className='list'>
          <a
            href='https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight'
            target='_blank'
            rel='noopener noreferrer'
          >
            Color Highlight
          </a>
        </li>
        <li className='list'>
          <a
            href='https://marketplace.visualstudio.com/items?itemName=anseki.vscode-colorize'
            target='_blank'
            rel='noopener noreferrer'
          >
            Colorize
          </a>
        </li>
        <li className='list'>
          <a
            href='https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek'
            target='_blank'
            rel='noopener noreferrer'
          >
            CSS Peek
          </a>
        </li>
        <li className='list'>
          <a
            href='https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets'
            target='_blank'
            rel='noopener noreferrer'
          >
            ES7+ React/Redux/React-Native snippets
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
            href='https://marketplace.visualstudio.com/items?itemName=miguelsolorio.fluent-icons'
            target='_blank'
            rel='noopener noreferrer'
          >
            Fluent Icons
          </a>
        </li>
        <li className='list'>
          <a
            href='https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitLens — Git supercharged
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
            href='https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode'
            target='_blank'
            rel='noopener noreferrer'
          >
            IntelliCode
          </a>
        </li>
        <li className='list'>
          <a
            href='https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass'
            target='_blank'
            rel='noopener noreferrer'
          >
            Live Sass Compiler
          </a>
        </li>
        <li className='list'>
          <a
            href='https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense'
            target='_blank'
            rel='noopener noreferrer'
          >
            Path Intellisense
          </a>
        </li>
        <li className='list'>
          <a
            href='https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode'
            target='_blank'
            rel='noopener noreferrer'
          >
            Prettier - Code formatter
          </a>
        </li>
        <li className='list'>
          <a
            href='https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager'
            target='_blank'
            rel='noopener noreferrer'
          >
            Project Manager
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
            href='https://marketplace.visualstudio.com/items?itemName=SimonSiefke.svg-preview'
            target='_blank'
            rel='noopener noreferrer'
          >
            SVG Preview
          </a>
        </li>
        <li className='list'>
          <a
            href='https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss'
            target='_blank'
            rel='noopener noreferrer'
          >
            Tailwind CSS IntelliSense
          </a>
        </li>
        <li className='list'>
          <a
            href='https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client'
            target='_blank'
            rel='noopener noreferrer'
          >
            Thunder Client
          </a>
        </li>
        <li className='list'>
          <a
            href='https://marketplace.visualstudio.com/items?itemName=unthrottled.turbo-console-log'
            target='_blank'
            rel='noopener noreferrer'
          >
            Turbo Console Log
          </a>
        </li>
        <li className='list'>
          <a
            href='https://marketplace.visualstudio.com/items?itemName=tldraw.tldraw-vscode'
            target='_blank'
            rel='noopener noreferrer'
          >
            tldraw
          </a>
        </li>
        <li className='list'>
          <a
            href='https://marketplace.visualstudio.com/items?itemName=planbcoding.vscode-react-refactor'
            target='_blank'
            rel='noopener noreferrer'
          >
            VSCode React Refactor
          </a>
        </li>

        <h3>Browser</h3>
        <li className='list'>
          <a
            href='https://brave.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Brave
          </a>
        </li>
        <li className='list'>
          <a
            href='https://www.perplexity.ai/comet'
            target='_blank'
            rel='noopener noreferrer'
          >
            Comet
          </a>
        </li>
        <li className='list'>
          <a
            href='https://www.apple.com/safari/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Safari
          </a>
        </li>
        <li className='list'>
          <a
            href='https://www.google.com/chrome/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Chrome
          </a>
        </li>
        <li className='list'>
          <a
            href='https://www.mozilla.org/en-US/firefox/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Mozilla Firefox
          </a>
        </li>

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
