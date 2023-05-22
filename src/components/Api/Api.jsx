const BASE_URL = 'https://pixabay.com/api/';
const KEY = 'key=31471213-f4e1fbc14dde5738e14f2abfa';


function fetchQuery (searchQuery, page) {
    const url = `${BASE_URL}?q=${searchQuery}
    &${page}&${KEY}
    &image_type=photo&orientation=horizontal&per_page=12`;
    return fetch(url).then(r => r.json()).then(console.log)
};

const api = { fetchQuery };

export default api;


