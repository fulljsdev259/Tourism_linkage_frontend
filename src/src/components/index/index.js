import React from 'react';
import './index.scss'
import Pic from '../../images/picture.png'
import slider1 from '../../images/slider1.png'
import slider2 from '../../images/slider2.png'
import slider3 from '../../images/slider3.png'
import slider4 from '../../images/slider4.png'
import slider5 from '../../images/slider5.png'
import Logo from '../../images/Tourism_Linkages_Network_Logo.gif'
import Menu from '../../images/icon/menu.svg'
import Printing from '../../images/icon/printing.svg'
import Printing2 from '../../images/icon/printing2.svg'
import Metal from '../../images/icon/metal.svg'
import Electricity from '../../images/icon/electicity.svg'
import furniture from '../../images/icon/furniture.svg'
import furniture2 from '../../images/icon/furniture2.svg'
import Textile from '../../images/icon/textile.svg'
import Close from '../../images/icon/cross.svg';
import location from '../../images/icon/location.svg';
import phone from '../../images/icon/phone.svg';
import rating from '../../images/icon/rating.svg'
import norating from '../../images/icon/norating.svg'
import ReactMapboxGl, { Layer, Marker, Feature, Popup, GeoJSONLayer } from "react-mapbox-gl";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import Modal from 'react-modal';

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

const geojson = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "Dupont Circle",
                "marker-color": "#ff0000",
                "marker-symbol": "rail-metro",
                "line": "red"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -77.04341435972708,
                    38.90959805757176
                ]
            },
            "obj": {
                "id": 1,
                "title": "Test Popup 1",
                "desc": " This is Test description for poup 1"
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Pentagon",
                "marker-color": "#0000ff",
                "marker-symbol": "rail-metro",
                "line": "blue"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -77.05371567343194,
                    38.869462701258364
                ]
            },
            "obj": {
                "id": 2,
                "title": "Test Popup 2",
                "desc": " This is Test description for poup 2"
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Crystal City",
                "marker-color": "#0000ff",
                "marker-symbol": "rail-metro",
                "line": "blue"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -77.05028980970857,
                    38.857904320437974
                ]
            },
            "obj": {
                "id": 3,
                "title": "Test Popup 3",
                "desc": " This is Test description for poup 3"
            }
        }
    ]
}
const sliderImages = [{
    url: slider1,
    title: "Fostering joy through Jamaica Made products.",
}, {
    url: slider1,
    title: "Keeping money in the local economy.",
}, {
    url: slider2,
    title: "Creating and supporting community jobs",
}, {
    url: slider3,
    title: "Regenerating Jamaica's most valuable resources. You!",
}, {
    url: slider4,
    title: "Building vibrant and creative communities",
}, {
    url: slider5,
    title: "Regenerating Jamaica’s most valuable resources. You!",
},
]



const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1Ijoia2VjaGVhbGV4cHJ0MiIsImEiOiJjam94azh4OHcyODByM3FqeHd1Nm43NWl6In0.0w8_b3fwLMXf8a1zSGgC2w"
});

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: null,
        };


    }
    markerClick = (station) => {
        this.setState({ location: station });
    };

    closePopup = () => {
        this.setState({ location: null });
    }

    render() {
        const { location } = this.state;
        return <div>
            <div className="home">

                <div className="divBanner">


                    <Slider autoplay={3000}>
                        {sliderImages.map((item, index) => (

                            <div
                                key={index}
                                style={{ background: `url('${item.url}') no-repeat center center` }}
                            >
                                <div className="center slider-title">
                                    <h1>{item.title}</h1>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="divMiddle">
                    <h3>Discover local manufactures</h3>
                    <select>
                        <option value="Western Jamica">Western Jamica</option>
                        <option value="Western Jamica">Western Jamica</option>
                    </select>
                    <div className="contentItems">
                        <div className="icon"><img src={Printing} /></div>
                        <div className="content">Food & Agro</div>
                        <div className="value">21</div>
                    </div>
                    <div className="contentItems">
                        <div className="icon"><img src={Printing2} /></div>
                        <div className="content">Printing & Packaging</div>
                        <div className="value">117</div>
                    </div>
                    <div className="contentItems">
                        <div className="icon"><img src={Metal} /></div>
                        <div className="content">Minerals & Metals</div>
                        <div className="value">202</div>
                    </div>
                    <div className="contentItems">
                        <div className="icon"><img src={Electricity} /></div>
                        <div className="content">Electrical,Electronics & <br />automative</div>
                        <div className="value">202</div>
                    </div>
                    <div className="contentItems">
                        <div className="icon"><img src={furniture} /></div>
                        <div className="content">Chemical, Cosmetics & <br />Pharmaceuticals</div>
                        <div className="value">256</div>
                    </div>
                    <div className="contentItems">
                        <div className="icon"><img src={furniture2} /></div>
                        <div className="content">Furniture, Wooden & <br />Bedding</div>
                        <div className="value">202</div>
                    </div>
                    <div className="contentItems">
                        <div className="icon"><img src={Textile} /></div>
                        <div className="content">Textile & Sewn</div>
                        <div className="value">202</div>
                    </div>


                </div>
                <div className="map-section" name="map-listing">
                    <div className="toggler">
                        <button className={!this.props.showListing ? "map-toggle-btn active" : "map-toggle-btn"} onClick={this.props.toggleListing}>Map</button>
                        <button className={this.props.showListing ? "map-toggle-btn active" : "map-toggle-btn"} onClick={this.props.toggleListing}>List</button>
                    </div>
                    <div className={this.props.showListing ? "hide" : "divMap"}>
                        <Map
                            style="mapbox://styles/mapbox/streets-v8"
                            className="map"
                        >
                            <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
                                {Object.keys(geojson.features).map((item, index) => (
                                    <Feature
                                        key={geojson.features[index].obj.id}
                                        onClick={this.markerClick.bind(this, geojson.features[item])}
                                        coordinates={geojson.features[item].geometry.coordinates}
                                    />
                                ))}
                            </Layer>
                            {location && (
                                <Popup onClick={this.closePopup} key={location.id} coordinates={location.geometry.coordinates}>
                                    <div style={{
                                        backgroundColor: '#fff',
                                        color: '#3f618c',
                                        fontWeight: 400,
                                        padding: '5px',
                                        borderRadius: '2px'
                                    }}>

                                        <div>{location.obj.title}</div>
                                        <p>{location.obj.desc}</p>
                                    </div>
                                </Popup>
                            )}
                        </Map>
                    </div>
                    <div className={this.props.showListing ? "list-section" : "hide"}>
                        <div className="category">
                            256 Chemical, Cosmetics &amp; Pharmaceuticals
                        </div>
                        <div className="list-item">
                            <div className="item-header">
                                <span className="title">Richard James Robinson</span>

                                <img className="rating" src={rating} />
                                <div className="reviews">
                                    <span>9 Reviews</span>
                                </div>

                            </div>
                            <span className="category">Cotton Fabric</span>
                            <div className="labels">
                                <span>
                                    male closing
                                </span>
                                <span>female closing</span>

                            </div>
                            <div className="contact-section">
                                <div className="item-contact">
                                    <img src={location} />
                                    <span>350 Seaview Gardens, Kingston 11</span>
                                </div>
                                <div className="item-contact">
                                    <img src={phone} />
                                    <span> 834-4811</span>
                                </div>
                            </div>

                        </div>
                        <div className="list-item">
                            <div className="item-header">
                                <span className="title">Richard James Robinson</span>

                                <img className="rating" src={norating} />
                                <div className="reviews">
                                    <span>No Reviews</span>
                                </div>

                            </div>
                            <span className="category">Cotton Fabric</span>
                            <div className="labels">
                                <span>
                                    male closing
                                </span>
                                <span>female closing</span>

                            </div>
                            <div className="contact-section">
                                <div className="item-contact">
                                    <img src={location} />
                                    <span>350 Seaview Gardens, Kingston 11</span>
                                </div>
                                <div className="item-contact">
                                    <img src={phone} />
                                    <span> 834-4811</span>
                                </div>
                            </div>

                        </div>
                        <div className="list-item">
                            <div className="item-header">
                                <span className="title">Richard James Robinson</span>

                                <img className="rating" src={rating} />
                                <div className="reviews">
                                    <span>2 Reviews</span>
                                </div>

                            </div>
                            <span className="category">Cotton Fabric</span>
                            <div className="labels">
                                <span>
                                    male closing
                                </span>
                                <span>female closing</span>

                            </div>
                            <div className="contact-section">
                                <div className="item-contact">
                                    <img src={location} />
                                    <span>350 Seaview Gardens, Kingston 11</span>
                                </div>
                                <div className="item-contact">
                                    <img src={phone} />
                                    <span> 834-4811</span>
                                </div>
                            </div>

                        </div>
                        <div className="list-item">
                            <div className="item-header">
                                <span className="title">Richard James Robinson</span>

                                <img className="rating" src={rating} />
                                <div className="reviews">
                                    <span>1 Review</span>
                                </div>

                            </div>
                            <span className="category">Cotton Fabric</span>
                            <div className="labels">
                                <span>
                                    male closing
                                </span>
                                <span>female closing</span>

                            </div>
                            <div className="contact-section">
                                <div className="item-contact">
                                    <img src={location} />
                                    <span>350 Seaview Gardens, Kingston 11</span>
                                </div>
                                <div className="item-contact">
                                    <img src={phone} />
                                    <span> 834-4811</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div >
    }
}