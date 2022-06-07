import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getReviewById } from "shared/services/movies";

import styles from './reviews.module.scss';

const Reviews = () => {

    const [reviews, setReviews] = useState({
        items: [],
        loading: false,
        error: false,
    });
    const { id } = useParams();

    useEffect(() => {
        const fetchReviews = async () => {
            setReviews(prevState => ({ ...prevState, loading: true }));            
            const  {results}  = await getReviewById(id);
            try {              
                setReviews(prevState => ({ ...prevState, items: results, loading: false }));
            } catch (error) {
                setReviews(prevState => ({ ...prevState, loading: false, error: error.message }));
            }
        }
        fetchReviews();
    }, [id]);

    const { items, loading, error } = reviews;
    const isCast = Boolean(Object.values(items).length);

    const elements = items.map(({id, author, content}) => {
        return (
            <li key={id}>
                <h2 className={styles.author}>{author}</h2>
                <p className={styles.content}>{content}</p>
            </li>
                
        )
    });

    return (
        <div className={styles.container}>
            {isCast > 0 ? (
                <ul className={styles.list}>
                    {elements}
                </ul>
            ) : (
                <p className={styles.alternative}>We don't have any reviews for this movie</p>
            )}
            {loading && <p>...Loading</p>}
            {error && <p>{error}</p>}
        </div>
    )
};

export default Reviews;