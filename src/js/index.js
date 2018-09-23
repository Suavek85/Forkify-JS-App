//import stringify from './models/Search';
//import {addAB, multiplyAB} from './views/searchView';
//import * as searchView from './views/searchView';
//console.log(`Using imported functions ${searchView.addAB(0,43)} and ${searchView.multiplyAB(33,43)} and ${stringify}`);
// 2d6c6a2442d2c79591ecc7a9a6aba1d9
//https://www.food2fork.com/api/search
//import axios from 'axios';


import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import {
    elements,
    renderLoader,
    clearLoader
} from './views/base';



/* 

Global state of the app 

- Search object
- current recipe object
- shopping list object
- liked recpipes

*/

/* SEARCH CONTROLLER */

const state = {};

const controlSearch = async () => {

    //Get the query from the view

    const query = searchView.getInput();
    console.log(query);

    if (query) {

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

elements.searchResPages.addEventListener('click', e => {

    const btn = e.target.closest('.btn-inline');
    console.log(btn);
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
      
    }
});

/* RECIPE CONTROLLER */

const r = new Recipe(47746);

r.getRecipe();
console.log(r);