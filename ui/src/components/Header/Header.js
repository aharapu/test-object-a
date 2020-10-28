import React from 'react';
import './Header.scss';

const PageTitle = ({ title }) => {
    return (
        <div className='rectangle13'>
            <span className="searchresultsfilters elementskeletonbasesearchfield skeletonelements iconsskilldarhashtag uf292">#</span>
            <span className="title">{title}</span>
        </div>
    );
};

const SocialMediaLinks = ({linkData}) => {
    return
}

const Header = () => {
    return (
        <div className="header">
            <PageTitle data-test="page-title" title="Browse Skills" />
        </div>
    );
};

export default Header;
