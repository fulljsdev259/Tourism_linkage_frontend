import React from 'react';
import { render } from 'react-dom';
import Lightbox from 'react-images';
import { url } from '../config/constant';

class GalleryView extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
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
  render() {
    let newPhotos = []
    if( this.props.data && this.props.data.length > 0 ){
      this.props.data.map((img) => {
        newPhotos.push({
          src: url + '/static/' + img.filename,
          width: 5,
          height: 5
        })
      })
    }
    return (
      <div>
        <div className="image-row">
            {newPhotos ? newPhotos.map((data, i) => {
                return <img 
                  key={i} 
                  className="image" 
                  src={data.src} 
                  onClick={() => {
                    this.openLightboxNew(i)
                  }}
                />
            }) : ''}

        </div>
        <Lightbox images={newPhotos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          backdropClosesModal={true}
        />
      </div>
    )
  }
}


export default GalleryView
