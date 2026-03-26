import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Main from "../layouts/Main";
import GameCard from "../components/Games/GameCard";
import data from "../data/games";

const Games = () => (
  <Main>
    <Helmet title='Games' />
    <article className='post' id='games'>
      <header>
        <div className='title'>
          <h2>
            <Link to='/games'>Games I&apos;ve Finished</Link>
          </h2>
          <p>A collection of games I&apos;ve completed and enjoyed</p>
        </div>
      </header>
      <section className='games-hud'>
        <div className='games-hud__panel'>
          <span className='games-hud__label'>Campaigns Completed</span>
          <span className='games-hud__value'>{data.length}</span>
        </div>
        <div className='games-hud__panel'>
          <span className='games-hud__label'>Primary Platform</span>
          <span className='games-hud__value'>PlayStation</span>
        </div>
        <div className='games-hud__panel'>
          <span className='games-hud__label'>Mode</span>
          <span className='games-hud__value'>Story Focused</span>
        </div>
      </section>
      <div className='games-grid'>
        {data.map((game, index) => (
          <GameCard data={game} index={index} key={game.title} />
        ))}
      </div>
    </article>
  </Main>
);

export default Games;
