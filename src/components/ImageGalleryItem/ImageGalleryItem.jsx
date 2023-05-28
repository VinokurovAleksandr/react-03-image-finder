// import { Component } from 'react';
import s from '../ImageGalleryItem/ImageGalleryItem.module.css';


export const ImageGalleryItem = ({ itemList }) => {
     const {webformatURL, tags} = itemList
    return ( 
         <li className= {s.ImageGalleryItem}>
            <img className={s.ImageGalleryItem_image} src={webformatURL} alt={tags} />  
        </li>
        
    )
};


// export const ImageGalleryItem = ({ itemList }) => {
//      const {webformatURL, largeImageURL, tags} = itemList
//     return ( 
//          <li className= {s.ImageGalleryItem}>
//             <img className={s.ImageGalleryItem_image} src={webformatURL} alt={tags} />  
//         </li>
//     )
// };