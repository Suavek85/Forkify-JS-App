//import stringify from './models/Search';
//import {addAB, multiplyAB} from './views/searchView';
//import * as searchView from './views/searchView';
//console.log(`Using imported functions ${searchView.addAB(0,43)} and ${searchView.multiplyAB(33,43)} and ${stringify}`);
// 2d6c6a2442d2c79591ecc7a9a6aba1d9
//https://www.food2fork.com/api/search
//import axios from 'axios';

/*
async  function getResults(query) {
    const key = '2d6c6a2442d2c79591ecc7a9a6aba1d9';
    try {   
    const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
    const recipes = res.data.recipes;
    console.log(recipes);    
    }
catch(error) {
alert(error); 
}
};
getResults('bacon');
*/

import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements, renderLoader, clearLoader} from './views/base';



/* 

Global state of the app 

- Search object
- current recipe object
- shopping list object
- liked recpipes

*/

const state = {};

const controlSearch = async () => {

    //Get the query from the view

    const query = searchView.getInput();
    console.log(query);
    
    if(query) {
        
        //new search object and add to state
        
        state.search = new Search(query)
        
        //prepare UI for results - TODO
        
        searchView.clearInput();
        searchView.clearResults();
    
        renderLoader(elements.searchRes);
        
        
        //search for recipes
        
        await state.search.getResults();
        
        //render results on UI
        
        searchView.renderResults(state.search.result);
        clearLoader();
        
        //lock the results to the console
        
        //console.log(state.search.result);
        
    }
    
}

elements.searchForm.addEventListener('submit', e => {

    e.preventDefault();
    controlSearch();

});



