import React from "react";
import {Routes, Route} from "react-router-dom"

import { Layout } from "components/Layout";
import { App } from "pages/App";
import { Search } from "pages/Search";
import { Item } from "pages/Item";

function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<App></App>}/>
                <Route path="search/:search" element={<Search/>}/>
                <Route path="item/:id" element={<Item/>}/>
            </Route>
        </Routes>
    )
}

export {AppRoutes}