import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
// import { toast } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import style from './Searchbar.module.css';

export class Searchbar extends Component {
    state = {
    hitsName: '',
    // loading: true,

  };

  hendleChange = event => {
    this.setState({ hitsName: event.currentTarget.value.toLowerCase() })
  };

  hendleSubmit = e => {
    e.preventDefault();

    if (this.state.hitsName.trim() === '') {
      toast.error("Введіть пошуковий запит");
      return;
    }

    this.props.onSubmit(this.state.hitsName);

    this.setState({ hitsName: '' })
  };

  //  componentDidMount() { 
  //   this.setState({loading:true})

  //   fetch('https://pixabay.com/api/?q=cat&page=1&key=31471213-f4e1fbc14dde5738e14f2abfa&image_type=photo&orientation=horizontal&per_page=12')
  //     .then(res => res.json())
  //     .then(hits => this.setState({ hits }))
  // }
  
  
  render() { 
return (
  <header
    className={style.Searchbar}>
    <form
      onSubmit={this.hendleSubmit}
      className={style.SearchForm}>
      <button
        type="submit"
        className={style.button}>
        <ImSearch />
        <span
        className={style.button_label}>Search</span>
    </button>

    <input
      className={style.input}
      type="text"
      autoComplete="off"
      autoFocus
        placeholder="Search images and photos"
        onChange={this.hendleChange}
        value={this.state.hitsName}
    />
    </form>
  </header> 
    )
  }
    
};