import { useState, useEffect } from "react";

import { getMoviesByID } from "shared/services/movies";
import getPosterLink from "shared/services/posterLink";

import styles from './movie-description.module.scss';

const MovieDescription = ({id}) => {

    const [movie, setMovie] = useState({
        content: {},
        loading: false,
        error: null,
    });
    
    useEffect(() => {
        const fetchMovie = async () => {
            const data = await getMoviesByID(id);
            setMovie(prevState => ({ ...prevState, loading: true }));
            const genresType = data.genres.map(genre => genre.name).join(', ');
            try {
                setMovie(prevState => ({ ...prevState, content: { ...data, genresType }, loading: false }));;
            } catch (error) {
                setMovie(prevState => ({ ...prevState, loading: true, error: error.message }));
            }
        }
        fetchMovie();
    }, [id]);

    const { content, loading, error } = movie;
    const isMovie = Boolean(Object.values(content).length);

    return (
        <>
            {loading && <p>...Loading</p>}
            {error && <p>{error}</p>}
            {isMovie && (
                <div className={styles.container}>
                    <div className={styles.poster}>
                        <img src={getPosterLink(content.poster_path)} alt={content.original_title}/>
                    </div>
                    <div className={styles.description}>
                        <h2 className={styles.title}>
                            {content.original_title} ({content.release_date.slice(0, 4)})
                        </h2>
                        <p className={styles.title}>User Score: {content.vote_average}</p>
                        <h3 className={styles.title}>Overview:</h3>
                        <p className={styles.title}>{content.overview}</p>
                        <h3 className={styles.title}>Genres:</h3>
                        <p>{content.genresType}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default MovieDescription;