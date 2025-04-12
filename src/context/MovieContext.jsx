import React, { createContext, useEffect, useState } from 'react'
import { apiURL } from '../config/apiUrl';


export const mymovieContext = createContext();
const MovieContext = ({ children }) => {
    const [movieData, setmovieData] = useState([]);



    const getMovieData = async () => {
        try {
            const response = await fetch(`${apiURL}/movies`);
            const data = await response.json();
            setmovieData(data);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getMovieData();
    }, [])


    console.log(movieData,"movieData");
    return (
        <mymovieContext.Provider >{children}</mymovieContext.Provider>
    )
}

export default MovieContext