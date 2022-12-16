import React, {useState, useEffect} from 'react'

const Cascading_DropDown = () => {

    const countries = [
        {id:'1', name: "INDIA"},
        {id:'2', name: 'USA'}
    ];

    const states = [
        {id:'1', countryId:'1', name:'Haryana'},
        {id:'2', countryId:'1', name:'Delhi'},
        {id:'3', countryId:'2', name:'Texas'},
        {id:'4', countryId:'2', name:'California'}
    ];

    const cities = [
        {id:'1', stateId:'1', name:'Faridabad'},
        {id:'2', stateId:'1', name:'Palwal'},
        {id:'3', stateId:'2', name:'Mandi House'},
        {id:'4', stateId:'2', name:'Kalka Ji'},

        {id:'1', stateId:'3', name:'Houston'},
        {id:'2', stateId:'3', name:'Austin'},
        {id:'3', stateId:'4', name:'Los Angeles'},
        {id:'4', stateId:'4', name:'Son Diego'}
    ];

    const [country, setCountry] = useState([]);
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);

    
    useEffect(()=>{
        setCountry(countries);
    },[]);

    const handleCountry = (id)=>{
        const data = states.filter(item => item.countryId === id);
        console.log('handlecountry', data);
        setState(data);
    }

    const handleState = (id)=>{
        const data = cities.filter(item => item.stateId === id);
        setCity(data);
    }


  return (
    <div>
        <h3>Cascading_DropDown</h3>
        <select onChange={(e)=> handleCountry(e.target.value)}>
            <option value='0'>Select Country</option>
            {
              country &&
              country !== undefined
              ? country.map((item, index)=>{
                return(
                    <option key={index} value={item.id}>
                        {item.name}
                    </option>
                )
              })
              :"No Country"
            }
        </select>

        <br/><br/>

        <select onChange={(e)=> handleState(e.target.value)}>
            <option value='0'>Select State</option>
            {
              state &&
              state !== undefined
              ? state.map((item, index)=>{
                return(
                    <option key={index} value={item.id}>
                        {item.name}
                    </option>
                )
              })
              :'No State'
            }
        </select>

        <br/><br/>

        <select>
            <option value='0'>Select City</option>
            {
              city &&
              city !== undefined
              ? city.map((item, index)=>{
                return(
                    <option key={index} value={item.id}>{item.name}</option>
                )
              })
              :'No City'
            }
        </select>
    </div>
  )
}

export default Cascading_DropDown;