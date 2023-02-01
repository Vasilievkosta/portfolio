import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderContainer = () => {

    return (
        <header>
            <nav>
                <ul className='list'>
                    <li>
                        <NavLink to="/">Главная</NavLink>
                    </li>
                    <li>
                        <NavLink to="/topics">Темы ( <i>swapi.dev</i> )</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio">Portfolio ( <i>my works</i> )</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderContainer;