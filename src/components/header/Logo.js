import React from 'react';

// Styles //
import styles from '../../styles/components/header/Logo.module.scss';

const Logo = ({ src }) => {
    return (
        <a href="/" className={styles.logo}>
            <span>Single Page</span>
        </a>
    );
};

export default Logo;
