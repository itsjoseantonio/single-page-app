// Styles //
import styles from '../../styles/components/slider/SingleItem.module.scss';

const SingleItem = ({ src, label }) => {
    return (
        <div className={styles.item}>
            <picture>
                <source srcSet={src} media="(min-width: 1366px)" />
                <img src={src} alt={label} className={styles.item__image} />
            </picture>
        </div>
    );
};

export default SingleItem;
