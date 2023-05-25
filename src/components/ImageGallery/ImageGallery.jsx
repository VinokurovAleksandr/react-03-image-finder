import { Component } from 'react';
// import style from './style.module.css';
import {fetchQuery} from '../Api/Api';
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";



export class ImageGallery extends Component {
    state = {
        items: [],
        error: null,
        isLoaded: false,
        page: 1,

        // hits: {
        //     id: '',
        //     largeImageURL: '',
        //     webformatURL: '',
        // }
        
    };

    componentDidUpdate(prevProps, prevState) {
        const { page } = this.state;

        if (
        prevProps.searchText !== this.props.searchText ||
            prevState.page !== page)
        {
            this.setState({ isLoaded: true });
            fetchQuery(this.props.searchText)
                .then(res => res.json())
                .then(images =>
                    this.setState({
                    images:
                        page === 1 ? images.hits : [...prevState.images, ...images.hits],
                    totalPages: Math.floor(images.totalHits / 12),
                })
                        .catch(error => {
                            this.setState({ error });
                        })
                    .finally(() => this.setState({ isLoaded: false }))
                
            )
            }

    }

    render() {
        return (

            <ul className="gallery">
                {this.state.images && this.state.images.map(image => {
                    return (
                        <ImageGalleryItem
                            key={image.id}
                            itemList={image}
                        />
                    )
                })}
        
            </ul>
        )
    }
}