import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.headerItem}>
            <header className={s.header}>
                <img src='http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bb9f.png'/>
            </header>
            <div className={s.heading}>CATSTAGRAM</div>
        </div>
    );
}


export default Header;
