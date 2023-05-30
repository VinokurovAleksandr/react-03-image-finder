// import { Component } from 'react';
import PropTypes from 'prop-types';

import s from '../ImageGalleryItem/ImageGalleryItem.module.css';



export const ImageGalleryItem = ({ itemList,imgClick }) => {
    const { webformatURL, largeImageURL, tags } = itemList;
    return ( 
         <li className= {s.ImageGalleryItem}>
            <img
                onClick = {() => imgClick({largeImageURL,tags})}
                className={s.ImageGalleryItem_image}
                src={webformatURL}
                alt={tags} />  
        </li> 
    )
};


ImageGalleryItem.propTypes = {
    itemList: PropTypes.object.isRequired,
    imgClick: PropTypes.func.isRequired,
};