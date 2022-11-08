import React from 'react';
import css from './Benefit.module.scss'

const Benefit = ({benefit}) => {
    return (
        <div className={css.benefit_wrapper}>
            <div className={css.benefit_item}>{benefit}</div>
        </div>
    );
};

export default Benefit;