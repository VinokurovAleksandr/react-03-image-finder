import { Component } from "react";
import PropTypes from 'prop-types';

import s from './style.module.css'

import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem'

export class ImageGallery extends Component {

    render() {

        const { images } = this.props;

        return (
            <ul className={s.ImageGallery}>
                {images && images.map(image => {
                    return (
                        <ImageGalleryItem
                            key={image.id}
                            itemList={image}
                            imgClick={this.props.imgClick}
                        />
                    )
                })}

            </ul>
        )
    }
};

// ImageGallery.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };
