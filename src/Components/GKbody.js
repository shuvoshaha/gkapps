import React from 'react';
import {
 GKBodyContainer,
 GKFlag,
 GkBodyWrapper,
 GKInfo,
 GKText,
 GKBorder
} from './GKbodyElements';

const GKbody = ({ data }) => {
 return (
  <>
   <GKFlag src={data.flag} />
   <GKBodyContainer>
    <GkBodyWrapper>

     <GKInfo>
      <GKText><span>Native Name:</span> {data.altSpellings.length ? data.altSpellings[1] : "None"}</GKText>
      <GKText><span>Capital:</span> {data.capital.length ? data.capital : "None"} </GKText>
      <GKText><span>Language:</span> {data.languages[0].name.length ? data.languages[0].name : "None"} </GKText>
      <GKText><span>Currency:</span>  ({data.currencies[0].symbol}) {data.currencies[0].name}</GKText>
      <GKText><span>Country Code:</span> {data.callingCodes.length ? data.callingCodes : "None"} </GKText>
      <GKText><span>Region:</span> {data.region.length ? data.region : "Missing"} </GKText>
      <GKText><span>Area:</span> {(data.area).toLocaleString('en-BD')} </GKText>
      <GKText className="borders"><span>Border(Country):</span>
       <GKBorder>
        {data.borders.length ?
         data.borders.map((data, key) => {
          return (
           <span key={key}> &nbsp;{data},&nbsp;</span>
          )
         }) : "None"}
       </GKBorder>
      </GKText>
      <GKText><span>Website Domain:</span> ({data.topLevelDomain.length ? data.topLevelDomain : "None"}) </GKText>
      <GKText><span>Time Zones:</span> {data.timezones.length ? data.timezones : "Missing"}</GKText>
     </GKInfo>
    </GkBodyWrapper>
   </GKBodyContainer>
  </>
 )
}

export default GKbody
