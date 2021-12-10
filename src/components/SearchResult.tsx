
import { useQuerySearch, useSetNewSearch } from "hooks";
import React, { CSSProperties } from "react";
import {useNavigate} from "react-router-dom"


interface inputs{
    search: string,
    id:string,
}

    
    //puedo dejar la prop como 1 sola y ver el input
    // o puedo poner opcional que entren distintos props-> newSearch y newId
export function SearchResult (){
    const query:inputs = useSetNewSearch();

    const apiResponse = useQuerySearch();
    const {search,id} = query;
    console.log({search,id});
    console.log(apiResponse);
    
        
    const navigate = useNavigate();
    const clickHandler = (e:React.MouseEvent)=>{
        e.preventDefault();
        const id = (e.currentTarget.getAttribute("id"));
        navigate(`/item/${id}`, {replace: true})

    }    

    //Search Style
    const containerStyleSearch:CSSProperties= {
    border: "solid 2px ",
    display: "flex",
    justifyContent:"space-between",
    height: "130px",
    
    }
    
    const imgStyle:CSSProperties={
        width: "120px",
        height: "120px",
    }
    const titleStyle:CSSProperties={
        margin:"5px 0px 5px 0px",
        width:"200px",
    }
    const priceStyle:CSSProperties={
        fontSize:"28px"
    }


    //Id Style
    const containerStyleId:CSSProperties= {
        display: "grid",      
    }
     
    const imgStyleId:CSSProperties={
        gridColumn: "1 / span 2",
        width: "120px",
        height: "120px",
    }
    const priceStyleId:CSSProperties={
        gridColumn: "2",
        gridRow: "2",
        margin:"5px 0px 5px 0px",
        width:"200px",
    }
    const titleStyleId:CSSProperties={
        gridColumn: "1",
        gridRow: "2",
        fontSize:"28px"
    }
    if(search){
        return (
            <div>
                {apiResponse.map((item)=>(
                    <div className="container"key={item["id"]} style={containerStyleSearch} id={item["id"]}onClick={e=>clickHandler(e) }>
                        <img className="img" src={item["thumbnail"]} style={imgStyle}></img>
                        <div className="price" style={priceStyle}>
                            {item["price"]}
                        </div>
                        <div className="title" style={titleStyle}>
                            {item["title"]}
                        </div>                    
                    </div>
                ))}
            </div>
        )
    }else if(id){
        return (
            <div>
                <div className="container"key={apiResponse["id"]} style={containerStyleId}>
                    <img className="img" src={apiResponse["thumbnail"]} style={imgStyleId}></img>
                    <div className="price" style={priceStyleId}>
                        {apiResponse["price"]}
                    </div>                       
                    <div className="title" style={titleStyleId}>
                        {apiResponse["title"]}
                    </div>                    
                </div>
            </div>
        )
    } else {return null}      
}
        