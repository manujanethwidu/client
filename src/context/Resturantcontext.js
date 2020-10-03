import React,{useState,createContext} from 'react'

export const Resturantcontext = React.createContext()

export const ResturantcontextProvider = props =>{
     const [rest,setrest]=useState([])

   return(  
   <Resturantcontext.Provider value={{rest,setrest}}>

          {props.children}

         </Resturantcontext.Provider>)

};