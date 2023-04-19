import React, { useState } from 'react';
import './styles.css';
import Cardsdata from './CardsData';

function Cards() {
    const [data, setData] = useState(Cardsdata);

    return (
        <div>
            <h2>Add to Cart Project</h2>
            <div className='cartContainer'>
                {data.map((item, key) => (
                    <div key={key} className='cartContent'>
                        <div className='cartImage'>
                            <img src={item.imgdata} />
                        </div>
                        <h3>{item.rname}</h3>
                        <p>Price: ${item.price}</p>
                        <a>Add to cart</a>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Cards