import React from 'react';
import {NavLink} from "react-router-dom";
import css from './Pagination.module.scss'

const Pagination = ({jobsPerPage, totalJobs, paginate, currentPage, setCurrentPage}) => {


    // Page number generator
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
        pageNumbers.push(i)
    }
    //=========

    // Arrow click function left
    const arrowLeftClick = () => {
        if (currentPage <= 1) return
        setCurrentPage(currentPage - 1)
    }

    // right
    const arrowRightClick = () => {
        if (currentPage >= pageNumbers.length) return
        setCurrentPage(currentPage + 1)
    }
    //==============

    return (
        <nav className={css.pageNumber_wrapper}>
            <div className={css.pageNumbers_container}>

                <div onClick={arrowLeftClick}
                     style={currentPage === 1
                         ?
                         {
                             borderBottom: '3px solid #7D859C',
                             borderLeft: '3px solid #7D859C'
                         }
                         : null}
                     className={css.arrow_left}>

                </div>

                <div className={css.items_block}>
                    {pageNumbers.map(number =>
                            <span key={number}>
                    <NavLink
                        className={currentPage === number ?
                            css.active
                            :
                            css.non_active
                        }

                        onClick={() => paginate(number)} to={`/`}>
                        {number}
                    </NavLink>

                </span>
                    )}
                </div>

                <div onClick={arrowRightClick} className={css.arrow_right}
                     style={currentPage === pageNumbers.length
                         ?
                         {
                             borderBottom: '3px solid #7D859C',
                             borderLeft: '3px solid #7D859C'
                         }
                         : null}
                >

                </div>

            </div>
        </nav>
    );
};

export default Pagination;