import { Link, useLocation } from "react-router-dom";

import getPosterLink from "shared/services/posterLink";

import styles from './movies-gallery-item.module.scss';

const MoviesGalleryItem = ({ id, original_title, poster_path, vote_average }) => {

    const location = useLocation();

    return (
        <li className={styles.item}>
            <Link state={{ from: location }} to={`/movies/${id}`}>
                <div className={styles.container}>
                    <img src={getPosterLink(poster_path)} alt={original_title} className={styles.image} width={250}/>
                    <div className={styles.info}>
                        <h2 className={styles.title}>{original_title}</h2>
                        <p className={styles.score}>{vote_average}</p>
                    </div>
                </div>
            </Link>
        </li>
    )
};

export default MoviesGalleryItem;