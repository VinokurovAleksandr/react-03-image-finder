import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
// import appStyle from "./app.module.css";

// import style from './Searchbar/Searchbar.module.css';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from "./ImageGallery/ImageGallery";
// import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";

export class App extends Component {
  state = {
    hitsName: '',
}

  handelFormSubmit = hitsName => { 
    this.setState({hitsName})
    
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handelFormSubmit} />
        <ToastContainer autoClose={2000} />
        <ImageGallery hitsName={this.state.hitsName}/>
          
       
      </div>
    
    )
  }
};
