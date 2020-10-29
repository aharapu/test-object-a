import React from 'react';
import './Header.scss';
import instaImg from './img/profile-details-------------instagram---fontawesome@2x.png';
import twitterImg from './img/billing-options-and-class-upgrade-shape@2x.png';

const linkData = [
    {
        id: 1,
        name: 'insta',
        img: instaImg,
    },
    {
        id: 2,
        name: 'twitter',
        img: twitterImg,
    },
];

const PageTitle = ({ title }) => {
    return (
        <div className="page-title">
            <span className="hash">#</span>
            <span className="title">{title}</span>
        </div>
    );
};

const SocialMediaLinks = ({ linkData }) => {
    return (
        <div className="social-links">
            {linkData.map((d) => (
                <a key={d.id} className="social-link">
                    <img src={d.img} className="social-link-icon"></img>
                </a>
            ))}
        </div>
    );
};

const LogInOutBtn = () => {
    return <button className="log-in-out-btn">Log Out!</button>;
};

const Header = () => {
    return (
        <div className="header">
            <PageTitle data-test="page-title" title="Browse Skills" />
            <SocialMediaLinks linkData={linkData} />
            <LogInOutBtn />
        </div>
    );
};

export default Header;
