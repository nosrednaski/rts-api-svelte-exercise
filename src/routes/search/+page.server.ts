import { api } from './api';
import historyStore from '../history/store';
import type { Actions } from './$types';

export const actions: Actions = {
    search: async ({request}) => {

        // get query term from form
        const form = await request.formData()
        let query: string = form.get('query')

        //add query to history in store
        historyStore.updateHistory(query)

        // call api
        let data: Array<Object> = await api(query)

        console.log('api call', query)

        // return object with status, what the query was and the resulting data
        return {
            hits: data,
            success: true,
            query: query
        }

    }
}



