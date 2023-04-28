import React, { useState } from 'react';
import './styles.css';
import Cardsdata from './CardsData';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';

function Cards() {
    const [data, setData] = useState(Cardsdata);

    const dispatch = useDispatch();

    const send = (e) => {
        console.log(e);
        dispatch(ADD(e));
    }

    return (
        <div>
            <h2>Add to Cart Project</h2>
            <div className='cartContainer'>
                {data.map((element, key) => (
                    <div key={key} className='cartContent'>
                        <div className='cartImage'>
                            <img src={element.imgdata} />
                        </div>
                        <h3>{element.rname}</h3>
                        <p>Price: ${element.price}</p>
                        <a
                            onClick={() => send(element)}
                            style={{ cursor: "pointer" }}
                        >
                            Add to cart
                        </a>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Cards