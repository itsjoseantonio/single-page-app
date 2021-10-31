import React, { useState } from 'react';
import { Link } from 'react-scroll';

// Components //
import Drawer from 'rc-drawer';

// Styles //
import 'rc-drawer/assets/index.css';
import styles from '../../styles/components/header/MobileDrawer.module.scss';

// Data //
import menu from './Header.data';

const MobileDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <span
                className={styles.hamburgerIcon}
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg
                    width="26"
                    height="20"
                    viewBox="0 0 26 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.765685 1.54021C0.344003 1.54021 0 1.19499 0 0.770106C0 0.34522 0.344003 0 0.765685 0H25.2343C25.656 0 26 0.34522 26 0.770106C26 1.19499 25.656 1.54021 25.2343 1.54021H0.765685ZM25.2306 9.22989C25.6523 9.22989 25.9963 9.57511 25.9963 10C25.9963 10.4249 25.6523 10.7701 25.2306 10.7701H0.765685C0.344003 10.7701 0 10.4249 0 10C0 9.57511 0.344003 9.22989 0.765685 9.22989H25.2306ZM25.2306 18.4598C25.6523 18.4598 25.9963 18.805 25.9963 19.2299C25.9963 19.6548 25.6523 20 25.2306 20H0.765685C0.344003 20 0 19.6548 0 19.2299C0 18.805 0.344003 18.4598 0.765685 18.4598H25.2306Z"
                        fill="#019DF4"
                    />
                </svg>
            </span>
            <Drawer
                open={isOpen}
                width="100%"
                level={null}
                placement="right"
                handleChild={false}
                handler={false}
                duration={'0.4s'}
            >
                <div className={styles.mobileContent}>
                    <nav>
                        <ul>
                            {menu.map(({ path, label }, i) => (
                                <li key={i}>
                                    <Link
                                        to={path}
                                        spy={true}
                                        smooth={true}
                                        offset={-60}
                                        duration={500}
                                        href="#"
                                        onClick={() => setIsOpen(!isOpen)}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <span
                    className={styles.close}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.9476 10L19.7977 1.13572C20.0566 0.893839 20.068 0.489753 19.8261 0.230797C19.8176 0.219414 19.8062 0.210877 19.7977 0.20234C19.5558 -0.0566165 19.1517 -0.0679992 18.8927 0.173883C18.8814 0.18242 18.8728 0.193803 18.8643 0.20234L10 9.05239L1.13572 0.20234C0.893839 -0.0566165 0.489753 -0.0679992 0.230797 0.173883C0.219414 0.18242 0.210877 0.193803 0.20234 0.20234C-0.0566165 0.444222 -0.0679992 0.848308 0.173883 1.10726C0.18242 1.11865 0.193803 1.12718 0.20234 1.13572L9.05239 10L0.20234 18.8643C-0.0566165 19.1062 -0.0679992 19.5102 0.173883 19.7692C0.18242 19.7806 0.193803 19.7891 0.20234 19.7977C0.324704 19.9257 0.492599 19.9997 0.669031 19.9969C0.845463 19.9997 1.0162 19.9257 1.13572 19.7977L10 10.9476L18.8643 19.7977C19.1062 20.0566 19.5102 20.068 19.7692 19.8261C19.7806 19.8176 19.7891 19.8062 19.7977 19.7977C20.0566 19.5558 20.068 19.1517 19.8261 18.8927C19.8176 18.8814 19.8062 18.8728 19.7977 18.8643L10.9476 10Z"
                            fill="white"
                        />
                    </svg>
                </span>
            </Drawer>
        </>
    );
};

export default MobileDrawer;
