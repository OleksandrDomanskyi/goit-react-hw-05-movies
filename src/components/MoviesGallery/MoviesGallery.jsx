import MoviesGalleryItem from "components/MoviesGalleryItem";

import styles from './movies-gallery.module.scss';

const MoviesGallery = ({items}) => {

    return (
        <>
            <div className={styles.container}>
                <ul className={styles.gallery}>
                    {items.map(item => (
                        <MoviesGalleryItem key={item.id} {...item} />
                    ))}
                </ul>
            </div>
        </>
    );
};

MoviesGallery.defaultProps = {
    items: []
}

export default MoviesGallery;