import { RotatingLines } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import s from './Loader.module.css';

export function Loader (visible) {
    return (
        <div className={s.loader}>
             <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={visible}
            
        />
        </div>
       
         
    )
};

Loader.popTypes = {
    visible: PropTypes.bool.isRequired,
};
