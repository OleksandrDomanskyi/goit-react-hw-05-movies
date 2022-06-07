import { Link } from "react-router-dom";

// import styles from './not-found-page.module.scss';

const NotFoundPage = () => {
    return (
        <div>
            <h2>Такой страницы не существует</h2>
            <Link to="/">На Главную</Link>
        </div>
    )
}

export default NotFoundPage;