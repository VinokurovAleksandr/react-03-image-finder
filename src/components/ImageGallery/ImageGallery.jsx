import { Component } from 'react';
import style from './style.module.css';
// import Api from '../Api/Api'
// import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";



export class ImageGallery extends Component {
    state = {
        hits: ([]),
        // hits: {
        //     id: '',
        //     largeImageURL: '',
        //     webformatURL: '',
        // }
        
    }

    componentDidUpdate(prevProps, prevState) {

        const prevName = prevProps.hitsName;
        const nextName = this.props.hitsName;

    if (prevName !== nextName) {
        
        console.log("замінилось імя");
        console.log('prevProps.hitsName ', prevProps.hitsName);
        console.log('this.props.hitsName', this.props.hitsName);
        
        
        fetch(`https://pixabay.com/api/?${nextName}&page=1&key=31471213-f4e1fbc14dde5738e14f2abfa&image_type=photo&orientation=horizontal&per_page=3`)
      .then(res => res.json())
      .then(hits => this.setState({hits}))
    }
    
    
}

    render() {
       
        return (
              <div>
                <ul className={style.ImageGallery}>
                    {this.state.hits && <li className="gallery-item">
                        {this.state.hits.likes}
            <img src="" alt="" />  
        </li>}
               
                      
          </ul>
        </div>
     
)
    }
  
};

