import React, { useEffect, useState } from 'react';
import './styles.css'
import { Delete, Star } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CardsDetails() {

    const [data, setData] = useState([]);
    // console.log(data);

    const { id } = useParams();
    // console.log(id);

    const getdata = useSelector((state) => state.cartReducer.carts);
    // console.log(getdata);

    const compare = () => {
        let comparedata = getdata.filter((e) => {
            return e.id == id
        });
        setData(comparedata);
    }

    useEffect(() => {
        compare();
    }, [id])


    return (
        <div>
            <h2>Items Details Page</h2>
            <div className='cardDetailContainer'>


                {
                    data.map((ele) => {
                        return (
                            <>
                                <div className="items_img">
                                    <img src={ele.imgdata} alt="" />
                                </div>

                                <div className="details">
                                    <table>
                                        <tr>
                                            <td>
                                                <p> <strong>Restaurant</strong>  : {ele.rname}</p>
                                                <p> <strong>Price</strong>  : ₹{ele.price}</p>
                                                <p> <strong>Dishes</strong>  : {ele.address}</p>
                                                <p> <strong>Total</strong>  :₹  {ele.price * ele.qnty}</p>
                                            </td>
                                            <td>
                                                <p><strong>Rating :</strong> <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{ele.rating} ★	</span></p>
                                                <p><strong>Order Review :</strong> <span >{ele.somedata}	</span></p>
                                                <p><strong>Remove :</strong> <span ><i className='fas fa-trash' style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i>	</span></p>
                                            </td>
                                        </tr>
                                    </table>
                                </div>

                            </>
                        )
                    })
                }

                {/* {cardData.map((element) => {
                    <>
                        <div className='cardDetailContainerImg'>
                            <img src={element.imgdata} />
                        </div>
                        <div className='cardDetailContent'>
                            <div className='cardDetailtext'>
                                <div><p><span>Restaurant</span> : {element.rname}</p></div>
                                <div><p><span>Price</span> : $ {element.price}</p></div>
                                <div><p><span>Dishes</span> : {element.address}</p></div>
                                <div><p><span>Total</span> : $ 300</p></div>
                            </div>
                            <div className='cardDetailtext'>
                                <div><span>Rating</span> : <a>3.5 <Star /></a></div>
                                <div><p><span>Orer Review</span> : 1175 + order placed from here recently</p></div>
                                <div><span>Remove</span> : <a><Delete /></a></div>
                            </div>
                        </div>
                    </>
                })} */}
            </div>
        </div>
    )
}

export default CardsDetails