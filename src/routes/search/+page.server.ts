import { api } from './api';
import type { PageServerLoad, Actions } from './$types';
import historyStore from '../../store';



export const actions: Actions = {
    search: async ({request}) => {

        // get query term from form
        const form = await request.formData()
        let query: string = form.get('query')

        //add query to history in store
        historyStore.updateHistory(query)

        // call api
        let data: Array<Object> = await api(query)

        //set titles and urls of results in an array of objects to be consumed by page as page data
        let newResults = data.map( 
            (hit) => ({ title: hit.title, url: hit.url})
        )
        // console.log('', newResults)
        return {
            results: newResults
        }

    }
}

