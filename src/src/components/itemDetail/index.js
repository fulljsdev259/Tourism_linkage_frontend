import React from 'react';
import ContactSectionPic from '../../images/photo.png'
import ContactSectionPic1 from '../../images/photo1.png'
import ContactSectionPic2 from '../../images/photo2.png'
import ContactSectionPic3 from '../../images/photo3.png'
import ContactSectionPic4 from '../../images/photo4.png'
import location from '../../images/icon/location.svg'
import phone from '../../images/icon/phone.svg'
import rating from '../../images/icon/rating.svg'
import arrowBack from '../../images/icon/arrowback.svg'
import Metal from '../../images/icon/metal.svg'
import Electricity from '../../images/icon/electicity.svg'
import furniture3 from '../../images/icon/furniture3.svg'
import furniture2 from '../../images/icon/furniture2.svg'
import Textile from '../../images/icon/textile.svg'
import Close from '../../images/icon/cross.svg';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

import Modal from 'react-modal';
import About from '../about';
import Contact from '../contact';
import Event from '../events';
import GetListed from '../getListed';
import News from '../news'
import Register from '../register';
import './detail.scss'
const customStyles = {
    content: {
        top: '0%',
        left: '0%',
        right: '0%',
        bottom: '0%',
        borderTopLeftRadius: 30,

        border: 'none',
        marginLeft: '35%',
        transform: 'translate(0%, 0%)'
    }
};

const customStylesRegister = {
    content: {
        top: '0%',
        left: '0%',
        right: '0%',
        bottom: '0%',
        border: 'none',
        borderTopLeftRadius: 30,
        backgroundColor: '#5165FF',

        marginLeft: '35%',
        transform: 'translate(0%, 0%)'
    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')
const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1Ijoia2VjaGVhbGV4cHJ0MiIsImEiOiJjam94azh4OHcyODByM3FqeHd1Nm43NWl6In0.0w8_b3fwLMXf8a1zSGgC2w"
});

export default class ItemDetail extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            about: false, contact: false, event: false, getListed: false,
            news: false, register: false, itemDetail: false, mobileMenu: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        //        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }
    render() {
        return <div>
            <div className="home">
                <div className="itemDetail-Map">
                    <Map
                        style="mapbox://styles/mapbox/streets-v8"
                        containerStyle={{
                            height: "100vh",
                            width: "100%"
                        }}>
                        <Layer
                            type="symbol"
                            id="marker"
                            layout={{ "icon-image": "marker-15" }}>
                            <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                        </Layer>
                    </Map>
                </div>
                <div className="item-detail">
                    <div className="back-arrow">
                        <img src={arrowBack} />
                    </div>
                    <div className="content-section">
                        <span className="back-link">Back to list</span>

                        <h3>Kearion Young</h3>
                        <div className="item-reviews">
                            <span>Fabric</span>
                            <span className="seperator"></span>
                            <img src={rating}></img>
                            <span>2 Reviews</span>
                        </div>
                        <div className="item-category ">
                            <img src={furniture3} />
                            <span>Chemical, Cosmetics &amp; Pharmaceuticals</span>
                        </div>
                        <div className="tags">

                            <span>Bandana</span>
                            <span>shirts</span>
                            <span>blouse</span>
                            <span>jamaican colour apparel</span>

                        </div>
                        <div className="item-description">
                            <p>
                                Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum vestibulum felis ac molestie. Praesent aliquet quam et libero dictum, vitae dignissim leo eleifend. In in turpis turpis. Quisque justo turpis, vestibulum non enim nec, tempor mollis mi. Sed vel tristique quam.
                            </p>
                        </div>


                    </div>

                </div>
                <div className="itemDetail-contact">
                    <div className="contact-section">

                        <h4>
                            Contacts
                        </h4>

                        <div className="item-contact">
                            <img src={location} />
                            <span>350 Seaview Gardens, Kingston 11</span>
                        </div>
                        <div className="item-contact">
                            <img src={phone} />
                            <span> 834-4811</span>
                        </div>
                    </div>
                    <div className="open-hour">
                        <h4>Open Hours</h4>
                        <div className="schedule">
                            <span className="day">Monday</span>
                            <span>10:00 a.m. - 5:00 p.m. </span>
                        </div>
                        <div className="schedule">
                            <span className="day"> Tuesday</span>
                            <span className="time">10:00 a.m. - 5:00 p.m. </span>
                        </div>
                        <div className="schedule">
                            <span className="day">Wednesday</span>
                            <span>10:00 a.m. - 5:00 p.m. </span>
                        </div>
                        <div className="schedule">
                            <span className="day">Thursday</span>
                            <span>10:00 a.m. - 5:00 p.m. </span>
                        </div>
                        <div className="schedule">
                            <span className="day">Friday</span>
                            <span>10:00 a.m. - 5:00 p.m. </span>
                        </div>
                        <div className="schedule">
                            <span className="day"> Saturday</span>
                            <span>Closed </span>
                        </div>
                        <div className="schedule">
                            <span className="day"> Sunday</span>
                            <span>Closed </span>
                        </div>
                    </div>
                    <div className="image-section">
                        <div>
                            <img className="img" src={ContactSectionPic1} />
                        </div>
                        <div className="image-row">
                            <img className="image" src={ContactSectionPic2} />
                            <img className="image" src={ContactSectionPic3} />
                            <img className="image" src={ContactSectionPic4} />
                            <img className="image" src={ContactSectionPic} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}