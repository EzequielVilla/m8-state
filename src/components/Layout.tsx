import React from "react";
import { SearchForm } from "components/SearchForm";
import { Outlet } from "react-router";

export function Layout(){
   
    return (
        <div>
            <SearchForm>Buscar!</SearchForm>
            <Outlet/>
        </div>
    )
}