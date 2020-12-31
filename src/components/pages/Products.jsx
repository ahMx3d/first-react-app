import React from 'react';
import '../../App.css';

export default function Products(){
    return(
        <h1 style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/img-1.jpg'})` }} className="products">
            PRODUCTS
        </h1>
    );
}