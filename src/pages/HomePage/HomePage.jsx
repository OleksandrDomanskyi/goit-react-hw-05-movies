import { useState, useEffect } from "react";

import MoviesGallery from "components/MoviesGallery";

import { getTrendingMovies } from "shared/services/movies";

import styles from './homepage.module.scss';

const HomePage = () => {

        const [movies, setMovies] = useState({
        items: [],
        loading: false,
        error: null,
    });

    useEffect(() => {
        const fetchMovies = async () => {
            setMovies(prevState => ({ ...prevState, loading: true }));
            const { results } = await getTrendingMovies();
            try {
                setMovies(prevState => ({ ...prevState, loading: false, items: results }));
            } catch (error) {
                setMovies(prevState => ({ ...prevState, loading: false, error: error.message }));
            }
        }
        fetchMovies();
    }, []);

    const { items, loading, error } = movies;

    return (
        <>
            {Boolean(items.length) && (
                <div>
                    <h2 className={styles.title}>Today's Trending Movies</h2>
                    {loading && <p>...Loading</p>}
                    {error && <p>{error}</p>}
                    <MoviesGallery items={items}/>
                </div>
            )}
        </>
    )
};

export default HomePage;