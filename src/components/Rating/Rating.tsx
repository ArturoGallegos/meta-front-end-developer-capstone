import React from 'react';
import styles from './Rating.module.sass'

type PropsType = {
  rating: number
}

const Rating: React.FC<PropsType> = ({rating}: PropsType) => {
  return (<div className={styles.rating}>
    {new Array(rating).fill('').map((_item, index) => <span key={index} className='icon-star'></span>)}
  </div>);
};

export default Rating;
