import React, { useState } from 'react';

// Components //
import Header from './header/Header';
import Sticky from 'react-stickynode';

const Layout = ({ children }) => {
    const [isSticky, setIsSticky] = useState(false);

    const handleStateChange = (status) => {
        if (status.status === Sticky.STATUS_FIXED) setIsSticky(true);
        else if (status.status === Sticky.STATUS_ORIGINAL) setIsSticky(false);
    };

    return (
        <>
            <Sticky innerZ={99} top={0} onStateChange={handleStateChange}>
                <Header className={`${isSticky ? 'sticky' : ''} `} />
            </Sticky>
            <main className="main">{children}</main>
        </>
    );
};

export default Layout;
