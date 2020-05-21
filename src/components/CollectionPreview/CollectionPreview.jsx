import React from 'react';

import './CollectionPreview.styles.scss';
import CollectionItem from '../CollectionItem/CollectionItem';

const CollectionPreview = (props) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{props.title.toUpperCase()}</h1>
            <div className="preview">
                {props.items.filter((item, index) => index < 4).map(({ id,  ...otherProps }) => (
                    <CollectionItem key={id} {...otherProps} />
                ))}
            </div>
        </div>
    );
};

export default CollectionPreview;