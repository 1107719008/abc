import React,{createContext,useState} from "react";
import showData from "../json/show.json";
import meData from "../json/data.json";

export const StoreContext = createContext();

export const StoreProvider=({children})=>{
    const [show,setShow] = useState(showData)
    const [me,setMe] = useState(meData);
    const store ={
        showState:[show,setShow],
        meState:[me,setMe],
    };
    return(
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}