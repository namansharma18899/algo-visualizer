import { useContext, useState,createContext, useEffect, useRef } from "react";
import { getGrid } from "../utils/startinggrid";

const context = createContext()

export const useParams=()=>{
    return useContext(context)
}

export const ParamsProvider = ({children}) => {

     const [mode,setmode] = useState(null)
     const [algo,setalgo] = useState('')
     const [run,setrun] = useState(false)
     const [grid,setgrid] = useState(getGrid(50,25))
     const [editing,seteditFlag] = useState(false)
     const [res,setres] = useState(false)
     const start=useRef({x:25,y:12})
     const end=useRef({x:48,y:23})
    
    useEffect(()=>{
      
      restart()
    },[res])


     function restart(){
      setgrid(getGrid(50,25))
     }


      return (<div>
      <context.Provider value={{mode,
        setmode,
        algo,
        setalgo,
        grid,
        setgrid,
        setres,
        editing,
        seteditFlag,
        start,end,run,setrun,res}}>
        {children}
      </context.Provider>
      </div>)

}

