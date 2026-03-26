import React from "react";
import PropTypes from "prop-types";

const fallbackCover = "/images/games/default-cover.svg";

const GameCard = ({ data, index }) => (
  <article className='mini-post'>
    <span className='game-rank'>#{String(index + 1).padStart(2, "0")}</span>
    <header>
      <h3>
        <a href={data.link} target='_blank' rel='noopener noreferrer'>
          {data.title}
        </a>
      </h3>
    </header>
    <a
      href={data.link}
      target='_blank'
      rel='noopener noreferrer'
      className='image'
    >
      <img
        src={data.image}
        alt={data.title}
        loading='lazy'
        onError={({ currentTarget }) => {
          currentTarget.setAttribute("src", fallbackCover);
        }}
      />
    </a>
    <div className='game-info'>
      <p className='game-platform-pill'>{data.platform}</p>
      <p>
        <strong>Release:</strong> {data.year}
      </p>
      <p>
        <strong>Genre:</strong> {data.genre}
      </p>
      <p>{data.description}</p>
    </div>
  </article>
);

GameCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default GameCard;
