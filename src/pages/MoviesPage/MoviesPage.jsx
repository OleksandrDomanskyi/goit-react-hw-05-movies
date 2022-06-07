import SearchMovies from "components/SearchMovies";

import styles from './movies-page.module.scss';

const MoviesPage = () => {
    return (
        <div>
            <h2 className={styles.title}>Search movies</h2>
            <SearchMovies/>
        </div>
        
    )
}

export default MoviesPage;