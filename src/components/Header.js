import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './styles.css'
import { NavLink } from 'react-router-dom';
import { Menu } from '@mui/material';
import { Close, Delete } from '@mui/icons-material';
import { useSelector } from 'react-redux';

function Header() {

    const getData = useSelector((state) => state.cartReducer.carts);
    console.log(getData)

    const [anchorE1, setAnchorE1] = useState(null);
    const open = Boolean(anchorE1);
    const handleClick = (event) => {
        setAnchorE1(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorE1(null)
    }

    return (
        <>
            <div className='container'>
                <nav>
                    <ul>
                        <li><NavLink to="/"><span>Add to cart</span></NavLink></li>
                        <li><NavLink to="/">Home</NavLink></li>
                    </ul>
                    <div className='cartIcon'
                        id='basic-button'
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <ShoppingCartIcon style={{ fontSize: 50 }} />
                        <span>{getData.length}</span>
                    </div>
                </nav>
            </div>

            <Menu
                id='basic-menu'
                anchorEl={anchorE1}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {
                    getData.length ?
                        <div className='card_details'>
                            <div className='close' onClick={handleClose}>
                                <Close />
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Photo</th>
                                        <th>Restaurant Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getData.map((e) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                            <NavLink to={`/cart/${e.id}`}>
                                                                <img src={e.imgdata} style={{ width: "6rem", height: "5rem", cursor: "pointer" }} alt='images' />
                                                            </NavLink>
                                                        </td>
                                                        <td style={{ display: "flex", justifyContent: "space-between" }}>
                                                            <div>
                                                                <p>{e.rname}</p>
                                                                <p>price : ${e.price}</p>
                                                                <p style={{ padding: "0", margin: "0 0 0 4px" }}>Quantity : {e.qnty}</p>
                                                            </div>
                                                            <div>
                                                                <p style={{ color: "red", cursor: "pointer" }}><Delete /></p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                    <p>Total : $300</p>
                                </tbody>
                            </table>
                        </div>

                        :

                        <div className='card_details'>
                            <div className='close' onClick={handleClose}>
                                <Close />
                            </div>
                            <p>Your card is empty</p>
                        </div>
                }
            </Menu>
        </>
    )
}

export default Header