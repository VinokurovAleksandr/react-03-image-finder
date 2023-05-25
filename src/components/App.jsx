import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import s from "./app.module.css";

// import style from './Searchbar/Searchbar.module.css';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from "./ImageGallery/ImageGallery";
// import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";

export class App extends Component {
  state = {
    searchText: '',
}

  handelFormSubmit = searchText => { 
    this.setState({searchText})
    
  }

  render() {
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.handelFormSubmit} />
        <ToastContainer autoClose={2000} />
        <ImageGallery searchText={this.state.searchText}/>
          
       
      </div>
    
    )
  }
};
