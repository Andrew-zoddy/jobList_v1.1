import React from 'react';
import {NavLink} from "react-router-dom";
import {Divider} from 'antd';
import {ShareAltOutlined} from '@ant-design/icons';
import css from './DetailedJob.module.scss'
import LocationMap from "../Map/LocationMap";
import ApplyBtn from "../UI/ApplyBtn/ApplyBtn";
import bookmark from '../UI/Images/bookmark.png'
import moment from "moment/moment";
import EmploymentType from "../UI/EmploymentType/EmploymentType";
import Benefit from "../UI/Benefit/Benefit";
import AttachedImage from "../UI/AttachedImage/AttachedImage";
import {useJsApiLoader} from "@react-google-maps/api";

// Key for maps
const API_KEY = process.env.REACT_APP_API_KEY
//=====


const DetailedJob = ({updatedJobData, setCurrentPage}) => {


    // Destructing updated data to get variables
    const {
        title: jobTitle,
        name: jobName,
        address: jobAddress,
        createdAt: jobDate,
        benefits: jobBenefits = [],
        pictures: jobPictures = [],
        description: jobDescription,
        email: jobEmail,
        employment_type: jobEmployment_type = [],
        location: {
            lat: LocationLat,
            long: LocationLong,
        } = {},
        phone: jobPhone,
        salary: jobSalary,

    } = updatedJobData || {}
    // ===========

    // Date formatting
    let date = moment(jobDate).format('MMMM Do YYYY, h:mm')
    // ==========

    // maps default center
    const defaultCenter = {
        lat: LocationLat,
        lng: LocationLong
    };
    // =======

    // maps hook
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
    })
    // =========


    // Text split function and variables
    const splitFunc = () => {
        let split = jobDescription.split('\n')
        return [split[1], split[3], split[4], split[6], split[7]]
    }

    const splitText = splitFunc(jobDescription)
    const benefitsList = splitText[4].split('.').filter(n => n)
    //==================================

    return (
        <div className={css.details_wrapper}>

            <div className={css.details_container}>

                <div className={css.text_block}>

                    <header className={css.header}>

                        <h3 className={css.header_title}>Job Details</h3>

                        <div className={css.btn_container}>

                            <div className={css.bookmark_btn}>
                                <img style={
                                    {
                                        width: '25px',
                                        marginRight: '8px',
                                        cursor: 'pointer',

                                    }} src={bookmark} alt="imageBookmark"/>
                                Save to my list
                            </div>
                            <div className={css.share_btn_block}>
                                <ShareAltOutlined style={{fontSize: '25px', cursor: 'pointer',}}/>
                                <div className={css.share_btn}>Share</div>
                            </div>

                        </div>

                    </header>

                    <Divider className={css.divider}/>

                    <div className={css.apply_btnOne}><ApplyBtn/></div>

                    <section className={css.title_block}>
                        <h2 className={css.job_title}>{jobTitle}</h2>
                        <div className={css.job_salary}>{jobSalary}<br/><span
                            className={css.sum_perYr}>Brutto, per year</span></div>
                        <div className={css.jobDatePost}>Posted {date} </div>
                    </section>

                    <main className={css.job_description_block}>
                        <p>{splitText[0]}</p>
                        <p className={css.job_description_title}>{splitText[1]}</p>
                        <p>{splitText[2]}</p>
                        <p className={css.job_description_title}>{splitText[3]}</p>
                        <p style={{marginBottom: '0'}}>&ensp;{benefitsList[0]}:</p>
                        {benefitsList.slice(1).map(i => <li className={css.benefitsList} key={i}>{i}</li>)}
                    </main>

                    <div className={css.apply_btnTwo}><ApplyBtn/></div>


                    <section className={css.additionalInfo_section}>

                        <h4 className={css.addInfo_title}>Additional info</h4>

                        <div className={css.addInfo_block}>
                            <p className={css.itemsContainer_title}>Employment type</p>
                            <div className={css.type_container}>
                                {jobEmployment_type.map(tp => <EmploymentType key={tp} type={tp}/>)}
                            </div>
                            <p className={css.itemsContainer_title}>Benefits</p>
                            <div className={css.benefits_container}>
                                {jobBenefits.map(bn => <Benefit key={bn} benefit={bn}/>)}
                            </div>

                        </div>

                    </section>

                    <section className={css.attachedImages_block}>
                        <h4 className={css.attachedImages_title}>Attached images</h4>
                        <div className={css.pictures_container}>
                            {jobPictures.map((jp, i) => <AttachedImage key={i} image={jp}/>)}
                        </div>
                    </section>

                </div>

                <div className={css.map_container}>
                    {isLoaded ?
                        <LocationMap jobName={jobName} jobAddress={jobAddress} jobPhone={jobPhone} jobEmail={jobEmail}
                                     center={defaultCenter}/> : <h2>Loading</h2>}
                </div>


            </div>

            <div className={css.button_container}>
                <NavLink onClick={() => setCurrentPage(prev => prev)} className={css.returnBackBtn} to={'/'}>
                    <div className={css.back_text}>RETURN TO JOB BOARD</div>
                </NavLink>
            </div>


        </div>
    );
};

export default DetailedJob;