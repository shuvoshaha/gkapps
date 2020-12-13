import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

//Initilize Context Api
export const GKContext = createContext()

const GKContextApi = ({children}) => {
 
 const [country, setCountry] = useState([])
 const [err, setErr] = useState('')
 
 // Get The all conutry info with API
 useEffect(() =>{
  axios.get(`https://restcountries.eu/rest/v2/all`)
  .then( res => {
   setCountry(res.data);
  })
  .catch( err => {
   setErr("Something went wrong")
  } )
 }, [setCountry])

 return (
 <GKContext.Provider value={{ country, err }}>
  {children}
 </GKContext.Provider>
 )
}

export default GKContextApi
