import { error } from '@sveltejs/kit';

const base = 'http://hn.algolia.com/api/v1/search?query='

export async function api(query: string) {
    try {
        let response = await fetch(`${base}${query}`)
        let json = await response.json()
        let hits = json.hits 
        let newResults = hits.map( 
            (hit) => ({ title: hit.title, url: hit.url})
        ) 
        return newResults
    } catch (err) {
        console.log('api call error:', err)
    }
    
    
}