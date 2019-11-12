   


import React from 'react';
import { render } from 'react-dom';
import eventmarch20 from '../images/eventmarch20.jpeg' 
import Lightbox from 'react-images';
import { url } from '../config/constant';

class EventPopUp extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0, lightboxIsOpen: false };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
   openLightboxNew(id) {
    this.setState({
      currentImage: id,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    localStorage.setItem('eventPopUp', '1');
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  _showEventPopUp = () => {
    if( localStorage.hasOwnProperty('eventPopUp') ){
        return false
    } else {
        return true;
    }
  }

  render() {
    let data = [{
        filename: eventmarch20
    }]

    let newPhotos = []
    if( data && data.length > 0 ){
      data.map((img) => {
        newPhotos.push({
          src: img.filename,
          width: 5,
          height: 5
        })
      })
    }
    
    return (
      <div>
        {this._showEventPopUp() ? 
            <Lightbox images={newPhotos}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
              backdropClosesModal={true}
            />
            :
            null
        }
      </div>
    )
  }
}


export default EventPopUp
