import React from 'react';

import './CollectionItem.styles.scss';

const CollectionItem = (props) => {
    return (
        <div className="collection-item">
            <div style={{backgroundImage: `url(${props.imageUrl})`}} className="image" />
            <div className="collection-footer">
                <span className="name">{props.name}</span>
                <span className="price">{props.price}</span>
            </div>
        </div>
    );
};

export default CollectionItem;