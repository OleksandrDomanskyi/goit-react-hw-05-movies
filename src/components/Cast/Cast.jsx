import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getCastById } from "shared/services/movies";
import getPosterLink from "shared/services/posterLink";

import styles from './cast.module.scss';

const Cast = () => {

    const [cast, setCast] = useState({
        items: [],
        loading: false,
        error: null,
    });
    const { id } = useParams();

    useEffect(() => {
        const fetchCasts = async () => {
            setCast(prevState => ({ ...prevState, loading: true }));
            const { cast } = await getCastById(id);
            try {              
                setCast(prevState => ({ ...prevState, items: cast, loading: false }));
            } catch (error) {
                setCast(prevState => ({ ...prevState, loading: false, error: error.message }));
            }
        }
        fetchCasts();
    }, [id]);

    const { items, loading, error } = cast;
    const isCast = Boolean(Object.values(items).length);

    const elements = items.map(({ id, name, profile_path, character }) => {
        return (
            <li key={id} className={styles.item}>
                <div>
                    <img src={getPosterLink(profile_path)} alt={name} />
                </div>
                <div className={styles.actor}>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.character}>{character}</p>
                </div>
            </li>
        )
    });

    return (
        <div>
            {isCast > 0 ? (
                    <ul className={styles.list}>
                        {elements}
                    </ul>
                ) : (
                    <p className={styles.alternative}>We don't have any cast for this movie</p>
            )}
            {loading && <p>...Loading</p>}
            {error && <p>{error}</p>}
        </div>
    )
};

export default Cast;