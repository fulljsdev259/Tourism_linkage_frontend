import React from 'react';
import './loader.scss';
import Modal from 'react-modal';
import Loader from '../images/loader.gif'
import LoaderBackImage from './loaderBackground.png';


const customStyles = {
    content: {
        top: '0%',
        left: '0%',
        right: '0%',
        bottom: '0%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',

        backgroundImage: `url(${ LoaderBackImage })`,
        zIndex: 1100,
        transform: 'translate(0%, 0%)'
    }
};


export default () => {


    return <Modal
        isOpen={ true }
        contentLabel="Example Modal"
        overlayClassName="Overlay"
        style={ customStyles }


    >       <img width="50" src={ Loader } />

    </Modal>

}

