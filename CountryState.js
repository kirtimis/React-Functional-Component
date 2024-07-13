import { useState } from "react";
function CountryState()
{
    const[country,setCountry]=useState('')
    const[state,setState]=useState('')
    const[city,setCity]=useState('')
    const[states,setStates]=useState([])
    const[cities,setCities]=useState([])
    const countries=[
        {
            name:"India",
            states:
            [
                {
                    name:"MP",
                    cities:["Indore","Bhopal","Jabalpur","Rewa"]
                },

                {
                    name:"UP",
                    cities:["Luckhnow","Allahabad","Noida","Meerut"]
                }
            ]
        },
        {
            name:"Brazil",
            states:
            [
                {
                    name:"Acre",
                    cities:["Rio BRanco","Sena Madureira"]
                },

                {
                    name:"Bahia",
                    cities:["Palmeiras","Itacare"]

                }
            ]
        }
    ]
    function changeCountry(e)
    {
        setCountry(e.target.value)
        setStates(countries.find(ctr=>ctr.name===e.target.value).states)

        e.preventDefault()
    }

    function changeState(e)
    {
        setState(e.target.value)
        setCities(states.find(state=>state.name===e.target.value).cities)

        e.preventDefault()
    }

return(<div>
    <form className="form">
    <select name="country" className="dropdown" onChange={changeCountry} >
        <option>Select Country</option>
        {countries.map(ctr=>
           ( <option value={ctr.name}>{ctr.name}</option>))}
    </select>
    <br/>
    <select name="state" className="dropdown" onChange={changeState}>
        <option> States</option>
        { states.map(state =>(<option value={state.name}>{state.name}</option>)    )   }
    </select>
    <br/>
    <select name="city" className="dropdown" >
        <option>Cities</option>
        { cities.map(city =>(<option value={city}>{city}</option>)    )   }

    </select>
    <br/>
    </form>
</div>)
}
export default CountryState