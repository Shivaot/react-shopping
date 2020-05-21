import React, { Component } from 'react';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import { SHOP_DATA } from './Shopdata';

class Shoppage extends Component {
    state = {
        collections: SHOP_DATA
    }
    render() {
        return (
            <div className="shop-page">
                {this.state.collections.map(({ id, ...otherProps}) => (
                    <CollectionPreview key={id} {...otherProps} />
                ))}
            </div>
        );
    }
}

export default Shoppage;