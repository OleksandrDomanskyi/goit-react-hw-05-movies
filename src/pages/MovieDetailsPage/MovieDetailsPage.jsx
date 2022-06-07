import { useParams, useNavigate, Link, Outlet, useLocation } from "react-router-dom";

import MovieDescription from "components/MovieDescription";

import styles from './movie-details-page.module.scss';

const MovieDetailsPage = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from || '/';

    const goBack = () => navigate(from);

    return (
        <div>
            <button type="button" onClick={goBack} className={styles.btn}>Go Back</button>
            <MovieDescription id={id}/>
            <div className={styles.container}>
                <h2 className={styles.title}>Additional information:</h2>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link state={{from}} to={`/movies/${id}/cast`}>Cast</Link>
                    </li>
                    <li className={styles.item}>
                        <Link state={{from}} to={`/movies/${id}/reviews`}>Reviews</Link>
                    </li>
                    <Outlet />
                </ul>
            </div>
        </div>
    );
};

export default MovieDetailsPage;