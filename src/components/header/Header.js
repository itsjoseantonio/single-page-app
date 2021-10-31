import { Container, Row, Col } from 'bootstrap-4-react';
import { Link } from 'react-scroll';

// Components //
import Logo from './Logo';
import MobileDrawer from './MobileDrawer';

// Styles //
import styles from '../../styles/components/header/Header.module.scss';

// Data //
import menu from './Header.data';

const Header = ({ className }) => {
    return (
        <header>
            <Container className="h-100">
                <Row justifyContent="between" className="h-100">
                    <Col
                        col="5"
                        className="d-flex align-items-center justify-content-start h-100"
                    >
                        <Logo />
                    </Col>
                    <Col col="5" className="h-100">
                        <div className="d-flex align-items-center justify-content-end h-100">
                            <nav className={styles.menu}>
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
                                            >
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <MobileDrawer />
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
