import axios from 'axios';

export default class Search {

    constructor(query) {

        this.query = query;
    }

    async getResults(query) {

        const key = '2d6c6a2442d2c79591ecc7a9a6aba1d9';

        try {

            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.result);

        } catch (error) {
            alert(error);

        }

    }

}





