import React from 'react';
import { Link } from 'react-router-dom';
import './CollectionSix.css';

const CollectionSix = (props) => {
    const { group, category, name, photoUrl } = props.sixCollection;

    return (
        <Link to={`${group}/${category}`}>
            <div className="collection-six-wrapper">
                <div className="click-handler">
                    <div className="collection-six">
                        <img src={photoUrl} alt="" />
                        <h4>{name}</h4>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CollectionSix;