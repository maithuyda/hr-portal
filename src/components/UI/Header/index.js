import React, { Fragment } from 'react';

import HeaderRight from '../HeaderRight';
import HeaderLeft from '../HeaderLeft';

import './index.scss';

const Header = () => {
    return (
        <Fragment>
            <header>
                <div className="content">
                    <div className="sub_media">
                        <HeaderLeft />
                        <HeaderRight />
                    </div>
                </div>
            </header>
        </Fragment>
    );
};

export default Header;
