import { writable } from 'svelte/store';

const history = writable<Array<string>> ([])

const historyStore = {
    subscribe: history.subscribe,
    updateHistory: (query) => {
        history.update(x => [...x, query])
    },
    clearHistory: history.set([])
}
export default historyStore 