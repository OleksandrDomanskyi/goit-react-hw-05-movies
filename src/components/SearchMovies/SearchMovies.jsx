import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import SearchMoviesForm from "./SearchMoviesForm";
import MoviesGallery from "components/MoviesGallery";

import { getMoviesBySearch } from "shared/services/movies";

const SearchMovies = () => {

    const [movies, setMovies] = useState({
        items: [],
        loading: false,
        error: null
    });

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');

    useEffect(() => {
        const fetchMovies = async () => {
            setMovies(prevState => ({ ...prevState, loading: true, error: null }));
            try {
                const result = await getMoviesBySearch(query);
                setMovies(prevState => ({ ...prevState, loading: false, items: result }));
            } catch (error) {
                setMovies(prevState => ({ ...prevState, loading: false, error: error.message }));
            }
        }
        if (query) {
            fetchMovies();
        }        
    }, [query]);

    const onSubmit = ({ query }) => setSearchParams({ query });
    const { items, loading, error } = movies;

    return (
        <>
            <SearchMoviesForm onSubmit={onSubmit} />
            {loading && <p>...Loading</p>}
            {error && <p>{error}</p>}
            {Boolean(items.length) &&
                <MoviesGallery items={items} />
            }
        </>
    )
};

export default SearchMovies;