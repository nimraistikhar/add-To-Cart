import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './styles.css'
import { NavLink } from 'react-router-dom';
import { Menu } from '@mui/material';
import { Close } from '@mui/icons-material';
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
                <div className='card_details'>
                    <div className='close' onClick={handleClose}>
                        <Close />
                    </div>
                    <p>Your card is empty</p>
                </div>
            </Menu>
        </>
    )
}

export default Header