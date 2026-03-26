import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import url from 'url';

const Cell = ({ data }) => {
  const hasLink = Boolean(data.link);
  const safeLink = hasLink ? data.link : '#';
  const formattedDate = dayjs(data.date).format('MMMM YYYY');

  return (
    <div className='cell-container'>
      <article className='mini-post project-card'>
        <a
          href={safeLink}
          className='image project-image'
          target={hasLink ? '_blank' : undefined}
          rel={hasLink ? 'noopener noreferrer' : undefined}
          aria-label={hasLink ? `Open project ${data.title}` : `${data.title} has no public link`}
        >
          <img src={url.resolve(BASE_PATH, data.image)} alt={data.title} />
        </a>
        <header>
          <h3>
            {hasLink ? (
              <a href={safeLink} target='_blank' rel='noopener noreferrer'>
                {data.title}
              </a>
            ) : (
              <span>{data.title}</span>
            )}
          </h3>
          <p className='project-subtitle'>{data.subtitle}</p>
          <time className='published'>{formattedDate}</time>
        </header>
        <div className='description'>
          <p>{data.desc}</p>
        </div>
        {hasLink ? (
          <a
            className='button small project-cta'
            href={safeLink}
            target='_blank'
            rel='noopener noreferrer'
          >
            View Project
          </a>
        ) : (
          <span className='project-cta--disabled'>Private Build</span>
        )}
      </article>
    </div>
  );
};

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
