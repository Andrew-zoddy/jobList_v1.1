import React from 'react';
import css from './AttachedImage.module.scss'

const AttachedImage = ({image}) => {
    return (
        <div className={css.image_wrapper}>
            <img className={css.image_item} src={image} alt="jobPic"/>
        </div>
    );
};

export default AttachedImage;