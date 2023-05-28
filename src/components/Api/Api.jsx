const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '31471213-f4e1fbc14dde5738e14f2abfa';


export const fetchQuery = (searchText, page) => {
    return fetch(
        `${BASE_URL}?q=${searchText}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        
};

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '31471213-f4e1fbc14dde5738e14f2abfa';

// export const fetchQuery = (searchText) => {
//   return fetch(
//     `${BASE_URL}?q=${searchText}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//   )
// };



