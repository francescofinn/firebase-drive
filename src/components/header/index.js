import React from 'react'

import CatLogo from '../../media/vecteezy_cat_flames_3.jpg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search'

const index = () => {
    return (
        <div className='header'>
            <div className='header__logo'>
                <img src={CatLogo} alt=""/>
                <span>Drive</span>
            </div>
            <div className='header__searchContainer'>
                <div className='header__searchBar'>
                    <SearchIcon />
                    <input type='text' placeholder='Search in Drive' />
                    <ExpandMoreIcon />
                </div>
            </div>
            <div className='header__icons'></div>
        </div>
    )
}

export default index
