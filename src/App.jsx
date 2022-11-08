import React, {useEffect, useState} from 'react';
import './App.css'
import {message} from "antd";
import JobList from "./Components/JobList/JobList";
import {useDispatch, useSelector} from "react-redux";
import {getJobsData} from "./Redux/jobListReducer";
import {Route, Routes} from "react-router-dom";
import DetailedJob from "./Components/DetailedJob/DetailedJob";
import Preloader from "./Components/Preloader/Preloader";

const App = () => {

    //redux =======
    const dispatch = useDispatch()
    const jobsData = useSelector(state => state.jobsData.jobsData)
    //Error tracking variable
    const error = useSelector(state => state.app.error)
    //Preloader State
    const loading = useSelector(state => state.app.loading)

    //==========

    // updated data function for selected JOb =======
    const [updatedJobData, setUpdatedJobData] = useState(JSON.parse(sessionStorage.getItem('job')) || {})

    const updateOneJobData = (data) => {
        sessionStorage.setItem('job', JSON.stringify(data));
        setUpdatedJobData(data)
    }
    // ==============

    // redux data GET ========
    useEffect(() => {
        dispatch(getJobsData())
    }, [dispatch])
    // =========
    //Error tracking
    useEffect(() => {
        if (!error) return
        message.error(error.message);
    }, [error])


    //pagination states
    const [currentPage, setCurrentPage] = useState(JSON.parse(sessionStorage.getItem('selectedPage')) || 1)
    const [itemsPerPage,] = useState(5)
    // =========

    return (
        <div>
            {loading ? <Preloader/> : <Routes>
                <Route element=
                           {<JobList jobsData={jobsData}
                                     setCurrentPage={setCurrentPage}
                                     currentPage={currentPage}
                                     itemsPerPage={itemsPerPage}
                                     updateOneJobData={updateOneJobData}
                           />}
                       exact
                       path={'/'}/>
                <Route element=
                           {<DetailedJob
                               updatedJobData={updatedJobData}
                               setCurrentPage={setCurrentPage}
                           />}
                       path={`/jobDetails:${updatedJobData.id}`}/>
            </Routes>}
        </div>
    );
};

export default App;