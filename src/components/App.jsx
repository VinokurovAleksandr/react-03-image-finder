import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
// import appStyle from "./app.module.css";

// import style from './Searchbar/Searchbar.module.css';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from "./ImageGallery/ImageGallery";
// import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";

export class App extends Component {
  state = {
    hits: '',
}

  handelFormSubmit = hits => { 
    this.setState({hits})
    
  }
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handelFormSubmit} />
        <ToastContainer autoClose={3000} />
        <ImageGallery hits={this.state.hits}>
          {/* <ImageGalleryItem /> */}
        </ImageGallery>
      </div>
    
    )
  }
};
