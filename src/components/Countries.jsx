import { useEffect,useState } from "react";
import { fetchCountries } from "../service/api";
import { Typography,NativeSelect } from "@material-ui/core";


const Countries = ({handleCountryChange}) =>{

  const[ countries, setCountries ] = useState([]);
    
     useEffect(() => {
         const fetchApi = async() =>{
            setCountries(await fetchCountries());
         }
         fetchApi();
     },[])
     return (
         <>
          <Typography style={{marginBottom: 20}} variant="h5" color="textSecondary">Reported Cases or Deaths by Country</Typography>
          <NativeSelect onChange = {(e) => handleCountryChange(e.target.value)}>
              <option value="">Whole World</option>
              { countries.map((country,i) => {
                  return(
                  <option key={i} value={country}>{country}</option>
                  )
              })}
          </NativeSelect>
         </>
     )
}
export default Countries;