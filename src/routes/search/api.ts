const base = 'http://hn.algolia.com/api/v1/search?query='

export async function api(query: string) {
    try {
        let response = await fetch(`${base}${query}`)
        let json = await response.json()
        // transform data with json method
        let hits = json.hits
        
        //set titles and urls of results in an array of objects to be consumed by page as form data
        let newResults = hits.map( 
            (hit) => ({ title: hit.title, url: hit.url})
        ) 
        return newResults
    } catch (error) {
        console.log('api call error:', error)
    }
    
    
}