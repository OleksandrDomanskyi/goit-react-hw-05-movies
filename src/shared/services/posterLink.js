const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_IMG_URL = 'https://icon-library.com/images/not-found-icon/not-found-icon-25.jpg';

const getPosterLink = (path) => (path ? `${BASE_IMG_URL}${path}` : `${DEFAULT_IMG_URL}`);

export default getPosterLink;