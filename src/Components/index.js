import React, { useContext, useState, useEffect } from 'react';
import { GKContext } from '../Context/GKContextApi';
import GKbody from './GKbody';
import axios from 'axios';
import {
   GKContainer,
   GKHeader,
   GKWrapper,
   GKHero,
   GKInput,
   GKDataList,
   GKoption,
   GKTitle
} from './GKElements'


const GKInterface = () => {

   //Context Api Call
   const { country } = useContext(GKContext);
   //Initialize country name for search
   const [name, setName] = useState([])
   const [ country_name, setContry_name ] = useState('')

   //Initialize onchange function
   const onChangeHandler =(e)=>{
      e.preventDefault();
       setContry_name(e.target.value)
       console.clear()
   }

     useEffect(() => {
     axios.get(`https://restcountries.eu/rest/v2/name/${country_name}?fullText=true`)
      .then(res => {
          setName(res.data)
      })
      .catch(err => {
         console.clear(err)
      })
   }, [country_name])

   return (
      <GKContainer>
         <GKHeader>
            <GKTitle>General Knowledge By County</GKTitle>
            <GKWrapper>
               <GKHero>
                  <GKInput
                     list="country"
                     name="country_name"
                     placeholder="Enter country name..." 
                     onChange={ onChangeHandler }
                  />
                  <GKDataList id="country">
                     {country.map((country, key) => {
                        return (
                           <GKoption  key={key} value={country.name} />
                        )
                     })}
                  </GKDataList>
               </GKHero>
            </GKWrapper>
         </GKHeader>
         {/* GK body  */}
        
      { country_name.length ?  name.map((name, key) => {
            return(
               <GKbody key={key} data={name} />
            )
         }):   <span>Select a country for get info</span>}
         
      </GKContainer>
   )
}

export default GKInterface
