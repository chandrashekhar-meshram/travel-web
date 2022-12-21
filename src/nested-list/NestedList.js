import React, { Component, useEffect, useState } from "react";
// import "./../styles/App.css";


// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];

const NestedList =()=> {
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);

    useEffect(()=>{
        setState(states);
    },[state]);
    console.log(state);

    const selectState = (e)=>{
      const data = states.filter(item => item.id);  
      console.log('data', data); 
      setState(data);
      
      console.log('selectd state =', e.target.innertext);    
    }

  return (
    <div className="App" id="main">
        <select onChange={(e)=> selectState(e.target.value)}
        >
            <option value=''>Select State</option>
            {
                state &&
              
                state.map((state, index)=>{
                    return(
                        <option key={index} 
                          value= {state.name}
                          id={`state${index+1}`}
                        > 
                           {state.name}
                        </option>                        
                    )                    
                })
                
            }
        </select>  

        <select>
            <option>Select City</option>
            {
                state.cities &&          
                state.cities.map((city, index)=>{
                    return(
                        <option key={city}
                          value={city.name}
                          id={`city${index+1}`}
                        >
                            {city.name}
                        </option>
                    )
                })
                
            }
        </select>                 
    </div>
  )
}


export default NestedList;

 
// 22 Aug 2022
// https://my.newtonschool.co/playground/project/w4d78kva6tav/

// https://tutorial101.blogspot.com/2021/11/reactjs-dependent-dropdown-country.html
