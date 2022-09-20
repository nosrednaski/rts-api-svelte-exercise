// import type { RequestHandler } from "./$types";

// export const POST: RequestHandler = async (req) => {
//   // Simulate a delay... instead you'd do something interesting here...
//     await new Promise((resolve) => setTimeout(resolve, 500))

//     return new Response(
//         JSON.stringify({ success: true }),
//         {
//             status: 200, 
//             headers: { 'content-type': 'application/json' }
//         }
//     )
// }
// // import { api } from './api';
// // import type { PageServerLoad, Actions } from './$types';
// // import historyStore from '../../store';

// // export const load: PageServerLoad = async ({ locals }) => {
// // 	// locals.userid comes from src/hooks.js
// // 	const response = await api('GET', `todos/${locals.userid}`);

// // 	if (response.status === 404) {
// // 		// user hasn't created a todo list.
// // 		// start with an empty array
// // 		return {
// 			// todos: [] as Todo[]
// // 		};
// // 	}

// // 	if (response.status === 200) {
// // 		return {
// // 			todos: (await response.json()) as Todo[]
// // 		};
// // 	}

// // 	throw error(response.status);
// // };

// // export const actions: Actions = {
// //     search: async ({request}) => {

// //         // get query term from form
// //         const form = await request.formData()
// //         let query: string = form.get('query')

// //         //add query to history in store
// //         historyStore.updateHistory(query)

// //         // call api
// //         let data: Array<Object> = await api(query)

// //         //set titles and urls of results in an array of objects to be consumed by page as page data
// //         let newResults = data.map( 
// //             (hit) => ({ title: hit.title, url: hit.url})
// //         )
// //         // console.log('', newResults)
// //         return {
// //             results: newResults
// //         }

// //     }
// // }

