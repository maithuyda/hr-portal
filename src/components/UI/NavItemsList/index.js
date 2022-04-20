import React, { Fragment } from 'react';
import NavItem from '../NavItem';

const NavItemsList = (props) => {
    const navItemsList = props.data.map((item) => (
        <NavItem
            key={item.id}
            title={item.title}
            path={item.path}
            hasDropDown={item.hasDropDown}
            dropDownData={item.dropDownData}
        />
    ));
    return (
        <Fragment>
            <ul>{navItemsList}</ul>
        </Fragment>
    );
};

export default NavItemsList;
