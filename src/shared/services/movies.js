import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "46bbf66c9e65ae01644c2e2f5cf2826f"
    }
});

export const getTrendingMovies = async () => {
    const { data } = await instance.get('/trending/movie/day');
    return data;
};

export const getMoviesByID = async (id) => {
    const { data } = await instance.get(`/movie/${id}`);
    return data;
};

export const getMoviesBySearch = async (query) => {
    const { data } = await instance.get('/search/movie', {
        params: {
            query
        }
    });
    return data.results;
};

export const getCastById = async (id) => {
    const { data } = await instance.get(`/movie/${id}/credits`);
    return data;
};

export const getReviewById = async (id) => {
    const { data } = await instance.get(`/movie/${id}/reviews`);
    return data;
};