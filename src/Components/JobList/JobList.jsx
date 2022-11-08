import React from 'react';
import css from './JobList.module.scss'
import JobListItem from "../JobListItem/JobListItem";
import Pagination from "../Pagination/Pagination";

const JobList = ({jobsData, updateOneJobData, currentPage, setCurrentPage, itemsPerPage}) => {


    //Get Current jobs for pages
    const indexOfLastJob = currentPage * itemsPerPage;
    const indexOfFirstJob = indexOfLastJob - itemsPerPage;
    const currentJobs = jobsData.slice(indexOfFirstJob, indexOfLastJob)
    // ==========

    //change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
        sessionStorage.setItem('selectedPage', JSON.stringify(pageNumber));
    }
    // =========

    return (
        <div className={css.jobList_wrapper}>
            <div className={css.jobList_container}>
                {currentJobs && currentJobs.map(jb =>
                    <JobListItem
                        key={jb.id}
                        jobOneData={jb}
                        onClick={() => updateOneJobData(jb)}
                    />
                )}
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} jobsPerPage={itemsPerPage}
                            totalJobs={jobsData.length} paginate={paginate}/>
            </div>
        </div>
    );
};

export default JobList;