import { useState } from "react";
import PropTypes from 'prop-types';

import styles from './search-movies-form.module.scss';

const SearchMoviesForm = ({ onSubmit }) => {

    const [state, setState] = useState({
        query: '',
    });

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...state });
        setState({ query: '' });
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} action="" onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    value={state.query}
                    name="query"
                    onChange={handleChange}
                    type="text"
                    placeholder="Search movies"
                    required
                />
            </form>
        </div>
    )
};

SearchMoviesForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchMoviesForm;