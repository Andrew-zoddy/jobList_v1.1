import React from 'react';
import css from './EmploymentType.module.scss'

const EmploymentType = ({type}) => {
    return (
        <div className={css.type_wrapper}>
            <div className={css.type_item}>{type}</div>
        </div>
    );
};

export default EmploymentType;