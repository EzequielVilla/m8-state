import React, { FormEvent } from "react";
import {useNavigate} from "react-router-dom"

interface SearchFormProp{  
    children?: React.ReactNode
}


export function SearchForm(props:SearchFormProp){
    
    const navigate = useNavigate()
    const submitHandler =(e:FormEvent)=>{
        e.preventDefault(); 
        
        const search = e.target["search"].value
        navigate(`search/${search}`)
        
        
    }

    return (
        <form onSubmit={e=>submitHandler(e)} >
            <input type="text" name="search" ></input>
            <button > {props.children}</button>
        </form>

    )
    
}

