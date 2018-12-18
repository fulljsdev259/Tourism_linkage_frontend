import React from 'react';
import './index.scss'
import './slider.scss';
import Pic from '../../images/picture.png'
import slider1 from '../../images/Picture2.jpg'
import slider2 from '../../images/2.jpg'
import slider3 from '../../images/dfs_6909.jpg'
import slider4 from '../../images/coffee-3531904_1280.jpg'
import slider5 from '../../images/DJI_Antillean_Charm_2018_Collection_20181119_0055.jpg'
import slider6 from '../../images/vegetables-1363034.jpg'
import Logo from '../../images/Tourism_Linkages_Network_Logo.gif'
import Menu from '../../images/icon/menu.svg'
import CloseBlue from '../../images/icon/crossbluedark.svg'
import Printing from '../../images/icon/printing.svg'
import JamaicaLove from '../../images/jamaicalove.svg'
import Printing2 from '../../images/icon/printing2.svg'
import Metal from '../../images/icon/metal.svg'
import arrowDown from '../../images/icon/white.svg'
import Electricity from '../../images/icon/electicity.svg'
import chemical from '../../images/icon/furniture3.svg'
import furniture2 from '../../images/icon/furniture.svg'
import furniture from '../../images/icon/furniture.svg'
import Textile from '../../images/icon/textile.svg'
import Close from '../../images/icon/cross.svg';
import locationIcon from '../../images/icon/location.svg';
import phone from '../../images/icon/phone.svg';
import rating from '../../images/icon/rating.svg'
import norating from '../../images/icon/norating.svg'
import ReactMapboxGl, { Layer, Marker, Feature, ZoomControl, Popup, GeoJSONLayer } from "react-mapbox-gl";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { withRouter } from 'react-router-dom';

import Modal from 'react-modal';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import FP1 from './icons/fi.svg'
import Print from './icons/print.svg';
import MI from './icons/metal.svg';
const query = gql`
{
    party{
        name
        region
        categories
        latitude
        longitude
        tags
        address
        phoneNumber
    }
}
`


const foodIcon = new Image(13, 13);
foodIcon.src = FP1;
const food = ['food', foodIcon]



const printIcon = new Image(10, 10);
printIcon.src = Print;
const printing1 = ['printing', printIcon]





const metalIcon = new Image(13, 13);
metalIcon.src = MI;
const metal = ['metal', metalIcon]


const electricityIcon = new Image(16, 16);
electricityIcon.src = Electricity;
const electricity = ['electricity', electricityIcon]



const chemical1Icon = new Image(16, 16);
chemical1Icon.src = chemical;
const chemical1 = ['chemical', chemical1Icon]

const furniture2Icon = new Image(16, 16);
furniture2Icon.src = furniture2;
const furniture3 = ['furniture', furniture2Icon]

const textileIcon = new Image(16, 16);
textileIcon.src = Textile;
const textile1 = ['textile', textileIcon]





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
                    - 77.465895,
                    18.065138
                ]
            },
            "obj": {
                "id": 1,
                "title": "Kearion Young",
                "Category": " Fabric",
                "tags": ['bandana', 'shorts', 'blouse', 'jamaican colour apparel'],
                "location": "350 Seaview Gardens, Kingston 11 Kingston",
                "phone": "834-4811",
                "reviews": "9"
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
                    - 77.465895,
                    18.065138
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
                    - 77.465895,
                    18.065138
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
    title: "Jamaican products online",
}, {
    url: slider2,
    title: "linking suppliers & buyers ",
},
{
    url: slider3,
    title: "your money kept locally ",
},
{
    url: slider4,
    title: "creating more jobs",
}, {
    url: slider5,
    title: "Creative Community joy ",
}, {
    url: slider6,
    title: "farm to table",
},

]


const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1Ijoia2VjaGVhbGV4cHJ0MiIsImEiOiJjam94azh4OHcyODByM3FqeHd1Nm43NWl6In0.0w8_b3fwLMXf8a1zSGgC2w"
});

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: null,
            region: 'all',
            category: 'all',
            geoJson: [],
            subMenu: false,
            subMobileMenu: false,
            centerLang: -77.319222,
            centerLat: 18,
            centerZoom: 7.3,

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
        const { data, history } = this.props;
        if (data.loading) {
            return <span>Loading</span>
        }
        let geoJson = null;


        if (this.state.category === 'all' && this.state.region === 'all') {
            geoJson = data.party;
        }
        if (!this.state.region === 'all' && this.state.category === 'all') {
            geoJson = data.party.filter(item => item.region === this.state.region)
        }
        if (this.state.region === 'all' && !this.state.category === 'all') {
            geoJson = data.party.filter(item => item.categories === this.state.category)
        }
        if (!this.state.region === 'all' && !this.state.category === 'all') {
            geoJson = data.party.filter(item => item.categories === this.state.category && item.region === this.state.region)
        }


        console.log(this.props.showListing)
        return <div>
            <div className="home">

                <div className="divBanner">
                    <div className="fade"></div>
                    <Slider autoplay={3000} >
                        {sliderImages.map((item, index) => (

                            <div
                                key={index}
                                style={{ background: `url('${item.url}') no-repeat`, backgroundSize: 'cover' }}
                            >
                                <div className="slider-title">
                                    <h1>{item.title}</h1>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div className="img" onClick={
                        () => {
                            var elmnt = document.getElementById("scollDiv");
                            elmnt.scrollIntoView({ behavior: "smooth" });
                        }
                    }>
                        <img src={arrowDown} />
                    </div>
                </div>
                <div className="divMiddle">
                    <div className="header">
                        <h3>Jamaica's manufactures </h3> <span className="jamaicalove"><img width="20" src={JamaicaLove} /></span>
                    </div>


                    <ul id="menu">
                        <li>
                            <input onClick={() => this.setState({ subMenu: true })} id="check02" type="checkbox" name="menu" />
                            <label htmlFor="check02"> {this.state.region === 'all' ? 'All Jamaica' : this.state.region}</label>
                            {this.state.subMenu ?
                                <ul class="submenu">
                                    <li onClick={(e) => this.setState({
                                        centerLang: -77.319222,
                                        centerLat: 18,
                                        centerZoom: 7.3,
                                        region: "all", subMenu: !this.state.subMenu
                                    })}><a href="#">All Jamaica</a></li>
                                    <li onClick={(e) => this.setState({ centerLang: -77.8939, centerLat: 17.9762, centerZoom: 8.5, region: "Western Jamaica", subMenu: !this.state.subMenu })}><a href="#">Western Jamaica</a></li>
                                    <li onClick={(e) => this.setState({ centerLang: -77.1939, centerLat: 17.9762, centerZoom: 8.5, region: "Central Jamaica", subMenu: !this.state.subMenu })}><a href="#">Central Jamaica</a></li>
                                    <li onClick={(e) => this.setState({ centerLang: -76.54864, centerLat: 17.91184, centerZoom: 8.5, centerZoom: 8.5, region: "Eastern Jamaica", subMenu: !this.state.subMenu })}><a href="#">Eastern Jamaica</a></li>
                                </ul>
                                : ''}
                        </li>
                    </ul>

                    <div style={{ width: this.state.category === 'FOOD and AGRO' ? '22vw' : '20vw' }} onClick={() => this.setState({ category: 'FOOD and AGRO' })} className="contentItems">
                        <div className="icon"><img src={Printing} /></div>
                        <div className="content">Food & Agro</div>
                        <div className="value">{this.state.region === 'all' ?
                            this.props.data.party.filter((item) => item.categories === 'FOOD and AGRO').length :
                            data.party.filter((item) => item.categories === 'FOOD and AGRO'
                                && item.region === this.state.region).length}</div>
                    </div>
                    <div style={{ width: this.state.category === 'PRINTING, PACKAGING and PAPER' ? '22vw' : '20vw' }} onClick={() => this.setState({ category: 'PRINTING, PACKAGING and PAPER' })} className="contentItems">
                        <div className="icon"><img src={Printing2} /></div>
                        <div className="content">Printing & Packaging</div>
                        <div className="value">{this.state.region === 'all' ?
                            this.props.data.party.filter((item) => item.categories === 'PRINTING, PACKAGING and PAPER').length :
                            data.party.filter((item) => item.categories === 'PRINTING, PACKAGING and PAPER'
                                && item.region === this.state.region).length}</div>
                    </div>
                    <div style={{ width: this.state.category === 'MINERALS and METAL' ? '22vw' : '20vw' }} onClick={() => this.setState({ category: 'MINERALS and METAL' })} className="contentItems">
                        <div className="icon"><img src={Metal} /></div>
                        <div className="content">Minerals & Metals</div>
                        <div className="value">{this.state.region === 'all' ?
                            this.props.data.party.filter((item) => item.categories === 'MINERALS and METAL').length :
                            data.party.filter((item) => item.categories === 'MINERALS and METAL'
                                && item.region === this.state.region).length}</div>
                    </div>
                    <div style={{ width: this.state.category === 'ELECTRICAL, ELECTRONICS and AUTOMOTIVE' ? '22vw' : '20vw' }} onClick={() => this.setState({ category: 'ELECTRICAL, ELECTRONICS and AUTOMOTIVE' })} className="contentItems">
                        <div className="icon"><img src={Electricity} /></div>
                        <div className="content">Electrical,Electronics & <br />automative</div>
                        <div className="value">{this.state.region === 'all' ?
                            this.props.data.party.filter((item) => item.categories === 'ELECTRICAL, ELECTRONICS and AUTOMOTIVE').length :
                            data.party.filter((item) => item.categories === 'ELECTRICAL, ELECTRONICS and AUTOMOTIVE'
                                && item.region === this.state.region).length}</div>
                    </div>
                    <div style={{ width: this.state.category === 'CHEMICALS, COSMETICS and PHARMACEUTICALS' ? '22vw' : '20vw' }} onClick={() => this.setState({ category: 'CHEMICALS, COSMETICS and PHARMACEUTICALS' })} className="contentItems">
                        <div className="icon"><img src={chemical} /></div>
                        <div className="content">Chemical, Cosmetics & <br />Pharmaceuticals</div>
                        <div className="value">{this.state.region === 'all' ?
                            this.props.data.party.filter((item) => item.categories === 'CHEMICALS, COSMETICS and PHARMACEUTICALS').length :
                            data.party.filter((item) => item.categories === 'CHEMICALS, COSMETICS and PHARMACEUTICALS'
                                && item.region === this.state.region).length}</div>
                    </div>
                    <div style={{ width: this.state.category === 'FURNITURE, WOODEN and BEDDING' ? '22vw' : '20vw' }} onClick={() => this.setState({ category: 'FURNITURE, WOODEN and BEDDING' })} className="contentItems">
                        <div className="icon"><img src={furniture} /></div>
                        <div className="content">Furniture, Wooden & <br />Bedding</div>
                        <div className="value">{this.state.region === 'all' ?
                            this.props.data.party.filter((item) => item.categories === 'FURNITURE, WOODEN and BEDDING').length :
                            data.party.filter((item) => item.categories === 'FURNITURE, WOODEN and BEDDING'
                                && item.region === this.state.region).length}</div>
                    </div>
                    <div style={{ width: this.state.category === 'TEXTILE and SEWN' ? '22vw' : '20vw' }} onClick={() => this.setState({ category: 'TEXTILE and SEWN' })} className="contentItems">
                        <div className="icon"><img src={Textile} /></div>
                        <div className="content">Textile & Sewn</div>
                        <div className="value">{this.state.region === 'all' ?
                            this.props.data.party.filter((item) => item.categories === 'TEXTILE and SEWN').length :
                            data.party.filter((item) => item.categories === 'TEXTILE and SEWN'
                                && item.region === this.state.region).length}</div>
                    </div>


                </div>

                <div className="divMiddleMobileOnly" id="scollDiv">

                    <ul id="menu">
                        <li>
                            <input onClick={(e) => {

                                this.setState({ subMenu: true })
                                //  e.preventDefault();

                            }} id="Jamaica" type="checkbox" name="menu" />
                            <label htmlFor="Jamaica">{this.state.region === 'all' ? 'All Jamaica' : this.state.region}</label>
                            {this.state.subMenu ?
                                <ul class="submenu">
                                    <li onClick={(e) => {
                                        e.preventDefault();
                                        this.setState({ region: "Western Jamaica", subMenu: !this.state.subMenu })

                                    }}><a href="#">Western Jamaica</a></li>
                                    <li onClick={(e) => {
                                        e.preventDefault();
                                        this.setState({ region: "Central Jamaica", subMenu: !this.state.subMenu })

                                    }
                                    }><a href="#">Central Jamaica</a></li>
                                    <li onClick={(e) => {
                                        e.preventDefault();
                                        this.setState({ region: "Eastern Jamaica", subMenu: !this.state.subMenu })
                                    }
                                    }><a href="#">Eastern Jamaica</a></li>

                                </ul>
                                : ''}
                        </li>
                    </ul>

                    <ul id="menu">
                        <li>
                            <input onClick={(e) => {

                                this.setState({ subMobileMenu: true })
                                //  e.preventDefault();

                            }}
                                id="Category" type="checkbox" name="menu" />
                            <label htmlFor="Category"> {this.state.category === 'all' ? 'All Categories' : this.state.category}</label>
                            {this.state.subMobileMenu ?

                                <ul class="submenu">



                                    <li onClick={(e) => {
                                        this.setState({ category: 'FOOD and AGRO', subMobileMenu: false })
                                        e.preventDefault();
                                    }
                                    } ><a href="#"><div className="icon"><img src={Printing} />Food</div></a></li>


                                    <li onClick={(e) => {
                                        this.setState({ category: 'PRINTING, PACKAGING and PAPER', subMobileMenu: false })
                                        e.preventDefault();
                                    }
                                    }><a href="#"><div className="icon"><img src={Printing2} />Printing & Packaging</div></a></li>

                                    <li onClick={(e) => {
                                        this.setState({ category: 'MINERALS and METAL', subMobileMenu: false })
                                        e.preventDefault();
                                    }
                                    }><a href="#"><div className="icon"><img src={Metal} />Minerals & Metals</div></a></li>
                                    <li onClick={(e) => {
                                        this.setState({ category: 'ELECTRICAL, ELECTRONICS and AUTOMOTIVE', subMobileMenu: false })
                                        e.preventDefault();
                                    }
                                    }><a href="#"><div className="icon"><img src={Electricity} />Electrical,Electronics & automative</div></a></li>
                                    <li onClick={(e) => {
                                        this.setState({ category: 'CHEMICALS, COSMETICS and PHARMACEUTICALS', subMobileMenu: false })
                                        e.preventDefault();
                                    }
                                    } ><a href="#"><div className="icon"><img src={chemical} /> Chemical, Cosmetics &Pharmaceuticals</div></a></li>
                                    <li onClick={(e) => {
                                        this.setState({ category: 'FURNITURE, WOODEN and BEDDING', subMobileMenu: false })
                                        e.preventDefault();
                                    }
                                    } ><a href="#"><div className="icon"><img src={furniture} />Furniture, Wooden & Bedding</div></a></li>
                                    <li onClick={(e) => {
                                        this.setState({ category: 'TEXTILE and SEWN', subMobileMenu: false })
                                        e.preventDefault();
                                    }
                                    }><a href="#"><div className="icon"><img src={Textile} />Textile & Sewn</div></a></li>
                                </ul>
                                : ''}
                        </li>
                    </ul>




                </div>

                <div className="map-section" name="map-listing">
                    <div className="toggler">
                        <button className={!this.props.showListing ? "map-toggle-btn active" : "map-toggle-btn"} onClick={this.props.toggleListing}>Map</button>
                        <button className={this.props.showListing ? "map-toggle-btn active" : "map-toggle-btn"} onClick={this.props.toggleListing}>List</button>
                    </div>
                    <div className={this.props.showListing ? "hide" : "divMap"}>


                        <Map
                            style="mapbox://styles/kechealexprt2/cjpgcspcd5mmw2snw4ihxarw2"

                            className="map"
                            center={[this.state.centerLang, this.state.centerLat]}
                            zoom={[this.state.centerZoom]}
                        >



                            } ) */}

                            <Layer
                                type="symbol"
                                id={"marker1"}
                                layout={{
                                    "icon-image": this.state.category == 'all' || this.state.category == 'FOOD and AGRO' ? "food" : '', 'icon-allow-overlap': true
                                }}
                                images={food}

                            //type="circle" radius={ 20 } color={ '#27ae60' } fillColor='#27ae60' fillOpacity={ 1 }
                            >
                                {data.party.filter(item => this.state.region === 'all' ? item.categories === 'FOOD and AGRO'
                                    : item.region === this.state.region)
                                    .filter(item => this.state.category === 'all' ? item.categories === 'FOOD and AGRO'
                                        : item.categories === this.state.category)
                                    .map((item, index) => (
                                        <Feature
                                            key={index}
                                            onClick={this.markerClick.bind(this, item)}
                                            coordinates={[item.longitude, item.latitude]}
                                        />
                                    ))}

                            </Layer>

                            <Layer type="symbol" id={"marker2"} layout={{ "icon-image": this.state.category == 'all' || this.state.category == 'PRINTING, PACKAGING and PAPER' ? "printing" : '', 'icon-allow-overlap': true }}
                                images={printing1}
                            >
                                {data.party.filter(item => this.state.region === 'all' ? item.categories === 'PRINTING, PACKAGING and PAPER'

                                    : item.region === this.state.region)
                                    .filter(item => this.state.category === 'all' ? item.categories === 'PRINTING, PACKAGING and PAPER'
                                        : item.categories === this.state.category)
                                    .map((item, index) => (
                                        <Feature
                                            key={index}
                                            onClick={this.markerClick.bind(this, item)}
                                            coordinates={[item.longitude, item.latitude]}
                                        />
                                    ))}

                            </Layer>


                            <Layer type="symbol" id={"marker3"} layout={{ "icon-image": this.state.category == 'all' || this.state.category == 'ELECTRICAL, ELECTRONICS and AUTOMOTIVE' ? "electricity" : '', 'icon-allow-overlap': true }}
                                images={electricity}
                            >
                                {data.party.filter(item => this.state.region === 'all' ? item.categories === 'ELECTRICAL, ELECTRONICS and AUTOMOTIVE'
                                    : item.region === this.state.region)
                                    .filter(item => this.state.category === 'all' ? item.categories === 'ELECTRICAL, ELECTRONICS and AUTOMOTIVE'
                                        : item.categories === this.state.category)
                                    .map((item, index) => (
                                        <Feature
                                            key={index}
                                            onClick={this.markerClick.bind(this, item)}
                                            coordinates={[item.longitude, item.latitude]}
                                        />
                                    ))}

                            </Layer>

                            <Layer type="symbol" id={"marker4"} layout={{ "icon-image": this.state.category == 'all' || this.state.category == 'CHEMICALS, COSMETICS and PHARMACEUTICALS' ? "chemical" : '', 'icon-allow-overlap': true }}
                                images={chemical1}
                            >
                                {data.party.filter(item => this.state.region === 'all' ? item.categories === 'CHEMICALS, COSMETICS and PHARMACEUTICALS'
                                    : item.region === this.state.region)
                                    .filter(item => this.state.category === 'all' ? item.categories === 'CHEMICALS, COSMETICS and PHARMACEUTICALS'
                                        : item.categories === this.state.category)
                                    .map((item, index) => (
                                        <Feature
                                            key={index}
                                            onClick={this.markerClick.bind(this, item)}
                                            coordinates={[item.longitude, item.latitude]}
                                        />
                                    ))}

                            </Layer>

                            <Layer type="symbol" id={"marker5"} layout={{ "icon-image": this.state.category == 'all' || this.state.category == 'FURNITURE, WOODEN and BEDDING' ? "furniture" : '', 'icon-allow-overlap': true }}
                                images={furniture3}
                            >
                                {data.party.filter(item => this.state.region === 'all' ? item.categories === 'FURNITURE, WOODEN and BEDDING'
                                    : item.region === this.state.region)
                                    .filter(item => this.state.category === 'all' ? item.categories === 'FURNITURE, WOODEN and BEDDING'
                                        : item.categories === this.state.category)
                                    .map((item, index) => (
                                        <Feature
                                            key={index}
                                            onClick={this.markerClick.bind(this, item)}
                                            coordinates={[item.longitude, item.latitude]}
                                        />
                                    ))}

                            </Layer>

                            <Layer type="symbol" id={"marker6"} layout={{ "icon-image": this.state.category == 'all' || this.state.category == 'MINERALS and METAL' ? "metal" : '', 'icon-allow-overlap': true }}
                                images={metal}
                            >
                                {data.party.filter(item => this.state.region === 'all' ? item.categories === 'MINERALS and METAL'
                                    : item.region === this.state.region)
                                    .filter(item => this.state.category === 'all' ? item.categories === 'MINERALS and METAL'
                                        : item.categories === this.state.category)
                                    .map((item, index) => (
                                        <Feature
                                            key={index}

                                            onClick={this.markerClick.bind(this, item)}
                                            coordinates={[item.longitude, item.latitude]}
                                        />
                                    ))}

                            </Layer>


                            <Layer type="symbol" id={"marker7"} layout={{ "icon-image": this.state.category == 'all' || this.state.category == 'TEXTILE and SEWN' ? "textile" : '', 'icon-allow-overlap': true }}
                                images={textile1}
                            >
                                {data.party.filter(item => this.state.region === 'all' ? item.categories === 'TEXTILE and SEWN'
                                    : item.region === this.state.region)
                                    .filter(item => this.state.category === 'all' ? item.categories === 'TEXTILE and SEWN'
                                        : item.categories === this.state.category)
                                    .map((item, index) => (
                                        <Feature
                                            key={index}
                                            onClick={this.markerClick.bind(this, item)}
                                            coordinates={[item.longitude, item.latitude]}
                                        />
                                    ))}

                            </Layer>
                            <ZoomControl style={{ position: 'relative', top: '2%', left: 0, border: 'none', marginLeft: 10, boxShadow: ' rgba(0, 0, 0, 0.0) 0px 1px 4px' }} />
                            {location && (
                                <Popup key={location.id} coordinates={[location.longitude, location.latitude]}>
                                    <div className="popup">
                                        <div className="popup-content">
                                            <div className="popup-header">
                                                <span className="title">{location.name}</span>
                                                <img className="img" onClick={() => this.closePopup()} src={CloseBlue} />
                                            </div>
                                            <span className="category">{location.categories}</span>
                                            <div className="labels">
                                                {location.tags.split(',').map((data, i) => {
                                                    if (i < 4) {
                                                        return <span key={i}>{data}</span>
                                                    }
                                                })}

                                            </div>
                                            <div className="contact-section">
                                                <div className="item-contact">
                                                    <img src={locationIcon} />
                                                    <span>{location.address}</span>
                                                </div>
                                                <div className="item-contact">
                                                    <img src={phone} />
                                                    <span>{location.phoneNumber}</span>
                                                </div>
                                            </div>
                                            <div className="reviews-section">
                                                <img className="rating" src={rating} />
                                                <div className="reviews">
                                                    <span>9 Reviews</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Popup>
                            )}
                        </Map>














                    </div>
                    <div className={this.props.showListing ? "list-section" : "hide"}>
                        <div className="category">
                            <span>{data.party.filter(item => this.state.region === 'all' ? item
                                : item.region === this.state.region)
                                .filter(item => this.state.category === 'all' ? item
                                    : item.categories === this.state.category).length}</span> {this.state.category === 'all' ? 'All Categories' : this.state.category.toUpperCase()}
                            <br />
                            <span style={{ color: 'grey', fontSize: 12, marginTop: 10 }}>{this.state.region == "all" ? "All Jamica" : (this.state.region).toUpperCase()}</span>
                        </div>
                        {data.party.filter(item => this.state.region === 'all' ? item
                            : item.region === this.state.region)
                            .filter(item => this.state.category === 'all' ? item
                                : item.categories === this.state.category)
                            .map((item, i) => {

                                return <div key={i} onClick={() => history.push(`/detail/${item.name}`)} className="list-item">
                                    <div className="item-header">
                                        <span className="title">{item.name}</span>

                                        <img className="rating" src={rating} />
                                        <div className="reviews">
                                            <span>9 Reviews</span>
                                        </div>

                                    </div>
                                    <span className="category">{item.categories}</span>
                                    <div className="labels">
                                        {item.tags.split(',').map((data, i) => {
                                            if (i < 4) {
                                                return <span key={i}>{data}</span>
                                            }
                                        })}
                                    </div>
                                    <div className="contact-section">
                                        <div className="item-contact">
                                            <img src={locationIcon} />
                                            <span>{item.address}</span>
                                        </div>
                                        <div className="item-contact">
                                            <img src={phone} />
                                            <span>{item.phoneNumber}</span>
                                        </div>
                                    </div>

                                </div>

                            })
                        }
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
                                    <img src={locationIcon} />
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
                                    <img src={locationIcon} />
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
                                    <img src={locationIcon} />
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



export default withRouter(graphql(query)(Index));