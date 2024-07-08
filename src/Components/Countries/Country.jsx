import { useState } from "react";
import "./Country.css"

const Country = ({country}) => {
    const {name, flags, population, ccn3, status} = country;

    const [visit, setVisit] = useState(false)

    // advanced
    // const visitCountry = () =>{
    //     setVisit(true)
    // }
    
    const visitCountry = () =>{
        setVisit(!visit)
    }

    return (
        <div className="country">
            <h3>Name: {name.common}</h3>
          <img src={flags.png} alt="" />
          <p>Population: {population}</p>
          <p>Code: {ccn3}</p>
          <p>Status: {status}</p>

          <button onClick={visitCountry}>{visit ? 'Visited' : 'Going'}</button>
          {visit ? 'I have visted' : 'I want to visit'}
        </div>
    );
};

export default Country;