import React, { createContext } from 'react'


export const mymovieContext = createContext();
const MovieContext = ({ children }) => {
    const movie = "MS Tech Youtube Channel ";


    return (
        <mymovieContext.Provider value={movie}>{children}</mymovieContext.Provider>
    )
}

export default MovieContext