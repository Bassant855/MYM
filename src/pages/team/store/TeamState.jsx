import { useReducer } from "react";
import { TeamContext } from "./TeamContext";
import { team } from "../TeamData";

const reducerFn = (state, action)=>{
    switch(action.type){
        case "handleCategories":
            return {...state,cat:action.payload}
        case "handlePage":
            return {...state,page:action.payload}
        case "boxesCount":
            return{...state,teamCat:action.payload}
        default:
            return state;
    }
}

export const TeamState= (props)=>{

    const [data,dispatchData]= useReducer(reducerFn, {
        cat:"all",
        page:1,
        teamCat:[]
    });

    const handleCategories=(catID)=>{
        dispatchData({
            type:"handleCategories",
            payload:catID
        })
    }

    const handlePage=(page)=>{
        dispatchData({
            type:"handlePage",
            payload:page
        })
    }

    const boxesCount=()=>{
        const ct=[]
        team.map(t=>{
            if(t.section==data.cat || data.cat=="all"){
                ct.push(t);
            }
        });
        dispatchData({
            type:"boxesCount",
            payload:ct
        })
    }

    return(
        <TeamContext.Provider value={{data,handleCategories,handlePage,boxesCount}}>
        {props.children}
        </TeamContext.Provider>
    )
}