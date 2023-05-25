// import { Component } from 'react';


export const ImageGalleryItem = ({ itemList }) => {
     const {webformatURL, largeImageURL, tags} = itemList
    return ( 
         <li className="gallery-item">
            <img src={webformatURL} alt={tags} />  
        </li>
    )
};