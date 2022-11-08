import React, {useRef, useState} from 'react';
import {GoogleMap, Marker} from "@react-google-maps/api";
import css from './LocationMap.module.scss'
import {defaultTheme} from "./Theme";


// Container style for Google Map component
const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '15px'
};
//============

// Default options prop for Google map component
const defaultOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    scrollwheel: false,
    disableDoubleClickZoom: false,
    fullscreenControl: false,
    draggable: true,
    styles: defaultTheme,
}
//==============


const LocationMap = ({center, jobAddress, jobEmail, jobPhone, jobName}) => {

    // Zoom state - just for onClick func being made on address
    const [zoom, setZoom] = useState(2)
    //=================

    // Google map ref (default code)
    const mapRef = useRef(undefined)

    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map;
    }, [])

    const onUnmount = React.useCallback(function callback() {
        mapRef.current = undefined;
    }, [])
    // ========================

    return (
        <div className={css.container}>

            <GoogleMap
                options={defaultOptions}
                mapContainerStyle={containerStyle}
                center={center}
                zoom={zoom}
                // zoom set to 2 - so we can see something ( default lat long that comes
                // in object is not actual)
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <Marker position={center}/>
                <div className={css.my_info_window}>
                    <div className={css.info_container}>
                        <p className={css.job_name}>{jobName}</p>
                        <p onClick={() => setZoom(14)} className={css.job_address}>{jobAddress}</p>
                        <a href={`tel:${jobPhone}`} className={css.job_phone}>{jobPhone}</a>
                        <a href={`mailto:${jobEmail}`} className={css.job_email}>{jobEmail}</a>
                    </div>

                </div>


            </GoogleMap>
        </div>
    );
};

export default LocationMap;
