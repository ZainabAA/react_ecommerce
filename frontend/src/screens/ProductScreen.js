import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';

function ProductScreen(props){
    const product = data.products.find(x => x._id === props.match.params.id);
    return <div>
        <div className="back-to-result">
            <Link to='/'>Back to result</Link>
        </div>
        <div  className="details">
            <div className="details-image">
                <img src={product.image} alt="product"></img>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        {product.rating} stars ({product.numReviews} Reviews)
                    </li>
                    <li>
                        Price: <b>${product.price}</b>
                    </li>
                    <li>
                        Description:
                        <div>
                            {product.description}
                        </div>
                    </li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                        Price: {product.price}
                    </li>
                    <li>
                        Status: {product.status}
                    </li>
                    <li>
                        Qty: <select>
                            <options>1</options>
                            <options>2</options>
                            <options>3</options>
                            <options>4</options>
                        </select>
                    </li>
                </ul>
                <button className="button primary">Add To Cart</button>
            </div>
        </div>
    </div>
}

export default ProductScreen;