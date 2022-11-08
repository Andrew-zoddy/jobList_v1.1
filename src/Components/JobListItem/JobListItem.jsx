import React from 'react';
import css from './JobListItem.module.scss'
import {Avatar, Rate} from 'antd';
import 'antd/dist/antd.css';
import moment from "moment";
import {NavLink} from "react-router-dom";
import bookmark_light from '../UI/Images/bookmark.png'


const JobListItem = ({jobOneData, onClick}) => {

    // Destructing for crating new variables
    const {
        id: jobID,
        title: jobTitle,
        name: jobName,
        address: jobAddress,
        createdAt: jobDate,
        pictures: jobPictures = [],
    } = jobOneData || {}
    // =============


    // Randomizing image in array
    // (though in won't make an effect because of image generator link is the same in every obj)
    let randomImage = jobPictures[Math.floor(Math.random() * jobPictures.length)];
    // =============

    // Date formatting
    let date = moment(jobDate).format('MMMM Do YYYY, h:mm')
    //==================

    return (
        <div className={css.item_wrapper}>
            <div className={css.item_container}>


                <div className={css.content_block}>

                    <Avatar className={css.item_avatar} size={85} icon={
                        <img className={css.item_image} src={randomImage} alt="jobImage"/>}
                    />

                    <div className={css.text_block}>
                        <div className={css.item_title}>
                            <NavLink onClick={onClick} className={css.item_title} to={`/jobDetails:${jobID}`}>
                                {jobTitle}
                            </NavLink></div>
                        <div className={css.item_name}>Department name<span className={css.dot_element}></span>{jobName}
                        </div>
                        <div className={css.item_location}>{jobAddress}</div>
                    </div>

                </div>

                <div className={css.rating_info_block}>
                    <div className={css.ratings_block}>
                        <Rate defaultValue={3}  />
                    </div>

                    <div className={css.info_block}>
                        <img className={css.item_bookmark}
                             src={bookmark_light}
                             alt="notBookmarkedImage"/>
                        <div className={css.item_date}>Posted {date}</div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default JobListItem;