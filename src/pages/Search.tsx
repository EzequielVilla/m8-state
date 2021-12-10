import React from "react";
import { useParams } from "react-router";
import { SearchResult } from "components/SearchResult";
import { querySearch, searchState } from "atoms";
import { useRecoilValue, useRecoilState } from "recoil"
import { useSetNewSearch } from "hooks";




export function Search(){

    return (
        <div>
            <SearchResult></SearchResult>
        </div>
    )


}