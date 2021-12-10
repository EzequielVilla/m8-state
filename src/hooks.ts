import { useRecoilValue, useRecoilState } from "recoil"
import { useParams } from "react-router";

import { querySearch, searchState } from "./atoms";
import { useEffect } from "react";

interface inputs{
    search: string,
    id:string,
}

//Save in the atom searchState the new item to find in the API.
export function useSetNewSearch(){
    console.log('enter to hook setNewSearch');
    const query:inputs = useParams();  
    const [mySearch, setMySearch] = useRecoilState(searchState);
    useEffect(()=>{
        console.log("USE EFFECT");  
        if (query.search){
            setMySearch({
                search: query.search,
                id: null,
                
            })   
        }
        else if (query.id){
            setMySearch({
                search: null,
                id: query.id,
            })  
        }
    },[query])
    return mySearch;
    
}
export function useQuerySearch(){    
    return useRecoilValue(querySearch); 
}
