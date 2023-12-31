/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright vaishnavi 2023 All rights reserved
 * @author vaishnavi <vaishnavirivankar14gmail.com>
 */

'use strict';

const api_key ="358d35552f18964c14a07ac474b169de";

/** 
 * fetch data from server
 * @param {string} URL API url
 * @param {Function} callback callback
 */
 export const fetchData = function(URL, callback) {
   fetch(`${URL}&appid=${api_key}`)
        .then(res => res.json())
        .then(data => callback(data));
}

export const url ={
    currentWeather(lat, lon){
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
    },
    forecast(lat, lon){
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
    },
    airPollution(lat, lon){
        return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
    },
    reverseGeo(lat, lon){
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
    },
    /**
     * 
     * @param {string} query search query e.g.:"Goa","London"
     */
    geo(query){
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }
}


