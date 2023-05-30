import { RotatingLines } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export function Loader (visible) {
    return (
        <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={visible}
        />
         
    )
};

Loader.popTypes = {
    visible: PropTypes.bool.isRequired,
};
