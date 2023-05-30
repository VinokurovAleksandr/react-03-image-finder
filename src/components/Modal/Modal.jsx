import { Component } from 'react';
import { createPortal } from 'react-dom';

import s from './modal.module.css'

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

    componentDidMount() {
      
        window.addEventListener('keydown',this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
         
    }
    


    handleKeyDown = event => {
        if (event.code === 'Escape') {
            console.log('Click ESC');
            
            this.props.onClose();
        }
        console.log('componentDidMount');
        
    };

    handleBackDropClick = e => {
        console.log('currentTarget' , e.currentTarget);
        
        if (e.currentTarget === e.target) {

            this.props.onClose();
        }
    };

   
    render() {
        const {largeImageURL, tags} = this.props.showModal
        return createPortal(
            
             <div className={s.Overlay} onClick = {this.handleBackDropClick}>
                <div className={s.Modal}>
                    {this.props.children}
            <img src={largeImageURL} alt={tags} />
        </div>
            </div>,
            modalRoot,
        )
}}
  


    
    
