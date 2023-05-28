import { Component } from 'react';
import style from './style.module.css';

import {fetchQuery} from '../Api/Api';
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { Btn } from '../Button/Button';
import {Loader} from '../Loader/Loader';




export class ImageGallery extends Component {
    state = {
        images: [],
        error: null,
        isLoading: false,
        page: 1,
    };

    componentDidUpdate(prevProps, prevState) {
        const { page } = this.state;
        const { searchText } = this.props;

        if (
            prevProps.searchText !== searchText ||
            prevState.page !== page) {
            
            this.setState({ isLoading: true });

            fetchQuery(searchText, page)
                .then(res => res.json())
                .then(data => this.setState(prevState => ({
                    images: [...prevState.images, ...data.hits]
                })))
                        .catch(error => {
                                this.setState({ error });
                            })
                        .finally(() => this.setState({ isLoading: false }))
                
                
        }
    }

    handleClickBtn = () => {
        this.setState(prevState => ({ page: prevState.page + 1 }))

    }

    render() {
        const { images, isLoading } = this.state;
        
        return (
            
            <>
                {isLoading && <Loader visible={ true } />}
                <ul className={style.ImageGallery}>
                    {images && images.map(image => {
                        return (
                            <ImageGalleryItem
                                key={image.id}
                                itemList={image} />
                        );
                   
                    })}
                     
                </ul>
               {images.length > 0 && <Btn onClickBtn={this.handleClickBtn}></Btn>}
                
            </>
            
        );
        
    }
}