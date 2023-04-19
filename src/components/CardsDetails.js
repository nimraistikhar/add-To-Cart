import React from 'react';
import './styles.css'
import { Delete, Star } from '@mui/icons-material';

function CardsDetails() {
    return (
        <div>
            <h2>Items Details Page</h2>
            <div className='cardDetailContainer'>
                <div className='cardDetailContainerImg'>
                    <img src='https://b.zmtcdn.com/data/pictures/chains/5/19295245/089cbcf1d3307542c72f77272556b28b_o2_featured_v2.jpg?output-format=webp' />
                </div>
                <div className='cardDetailContent'>
                    <div className='cardDetailtext'>
                        <div><p><span>Restaurant</span> : Massala</p></div>
                        <div><p><span>Price</span> : $ 300</p></div>
                        <div><p><span>Dishes</span> : North Indian, Biryani, Mughlai</p></div>
                        <div><p><span>Total</span> : $ 300</p></div>
                    </div>
                    <div className='cardDetailtext'>
                        <div><span>Rating</span> : <a>3.5 <Star /></a></div>
                        <div><p><span>Orer Review</span> : 1175 + order placed from here recently</p></div>
                        <div><span>Remove</span> : <a><Delete /></a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsDetails