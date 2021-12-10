import { atom,selector } from "recoil";
interface inputs{
    search?: string,
    id?:string,
}
export const searchState = atom({
    key:"query",
    default: {
        search: "",
        id:"",  
            
    },
})

export const querySearch = selector({
    key:"querySearch",
    get: async({get}):Promise<any> =>{ 
        console.log('enter to querySearch in atoms');
            
        const newSearch = get(searchState)        
        if(newSearch.search){
            const data = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${newSearch.search}`);
            const searchInfo = await data.json();
            const result = searchInfo.results;        
            return result;
        }
        else if(newSearch.id){
            const data = await fetch(`https://api.mercadolibre.com/items/${newSearch.id}`);
            const searchInfo = await data.json(); 
            return searchInfo;
        }      
    }
})