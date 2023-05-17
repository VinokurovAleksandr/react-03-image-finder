import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
// import appStyle from "./app.module.css";

// import style from './Searchbar/Searchbar.module.css';

import { Searchbar } from './Searchbar/Searchbar';
// import { ImageGallery } from "./ImageGallery/ImageGallery";

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
        <ToastContainer autoClose={3000}/>
      </div>
    
    )
  }
};
