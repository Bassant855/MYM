import { createContext } from "react";

export const TeamContext= createContext({
    data: {
        cat:"all",
        page:1,
        teamCat:[]
    },
    handleCategories:()=>{},
    handlePage: ()=>{},
    boxesCount: ()=>{}
});