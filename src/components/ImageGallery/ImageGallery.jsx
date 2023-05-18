import { Component } from 'react';
import style from './style.module.css';
// import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

export class ImageGallery extends Component {
    state = {
        hits: null,
    }

componentDidUpdate(prevProps, prevState) {
    if (prevProps.hist !== this.props.hits) {

        fetch('https://pixabay.com/api/?q=cat&page=1&key=31471213-f4e1fbc14dde5738e14f2abfa&image_type=photo&orientation=horizontal&per_page=12')
      .then(res => res.json())
      .then(hits => this.setState({ hits }))
    }
}

    render() {
          return (
     <div>
          <ul className={style.ImageGallery}>
           {this.state.hits && <li className="gallery-item">
            <img src="" alt="" />
            {this.state.hits.id}
        </li>  }
                      
          </ul>
        </div>
)
    }
  
};