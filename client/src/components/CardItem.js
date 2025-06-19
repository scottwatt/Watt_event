// components/CardItem.js - Updated with OptimizedImage
import React from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <OptimizedImage
              src={props.src}
              alt={props.label}
              width={400}
              height={267}
              className='cards__item__img'
              sizes="(max-width: 768px) 100vw, (max-width: 960px) 50vw, 33vw"
              loading="lazy"
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;