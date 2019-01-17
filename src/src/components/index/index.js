import React from 'react';
import './index.scss'
import './slider.scss';
import Pic from '../../images/picture.png'
import slider1 from '../../images/Picture2.jpg'
import slider2 from '../../images/2.jpg'
import slider3 from '../../images/dfs_6909.jpg'
import slider4 from '../../images/pexels-photo-345135.jpg'
import slider5 from '../../images/DJI_Antillean_Charm_2018_Collection_20181119_0055.jpg'
import slider6 from '../../images/vegetables-1363034.jpg'
import slider7 from '../../images/46352636478840.jpg'
import slider8 from '../../images/IMG_0161.jpg'
import slider9 from '../../images/coffee.jpg'

import Logo from '../../images/Tourism_Linkages_Network_Logo.gif'
import Menu from '../../images/icon/menu.svg'
import CloseBlue from '../../images/icon/crossbluedark.svg'

import JamaicaLove from '../../images/jamaicalove.svg'
//import Loader from '../../images/loader.gif'

import Loader from '../loader';
import Printing from '../../images/icon/printing.svg'
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
import forward from '../../images/arrowforward.svg'
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

import { region, category } from '../../action/auth';
import { connect } from 'react-redux';
import FP1 from './icons/fi.svg'
import Print from './icons/print.svg';
import MI from './icons/metal.svg';
export const query = gql` query party($status:String){
        party(status:$status){
            _id
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
foodIcon.src = Printing;
const food = ['food', foodIcon]



const printIcon = new Image(10, 10);
printIcon.src = Printing2;
const printing1 = ['printing', printIcon]





const metalIcon = new Image(13, 13);
metalIcon.src = Metal;
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
const sliderImages = [

    {


        url: slider9,
        title: "Linking our suppliers with buyers",
    },
    {
        url: slider1,
        title: "Online presence for our products",
    },

    {
        url: slider3,
        title: "Keeping money in Jamaica",
    },

    {
        url: slider7,
        title: "Cultivating dreams & talent",
    },

    {
        url: slider8,
        title: "Discovering the taste of Jamaica",
    },

    {
        url: slider5,
        title: "Creating a creative culture",
    },

    {
        url: slider4,
        title: "Adding more jobs to our economy",
    },

    {
        url: slider6,
        title: "Farm to Table: serving local food",
    },

]

const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1Ijoia2VjaGVhbGV4cHJ0MiIsImEiOiJjam94azh4OHcyODByM3FqeHd1Nm43NWl6In0.0w8_b3fwLMXf8a1zSGgC2w"
});

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            map: null,
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

    componentDidMount() {
        this.props.data.refetch()
    }

    componentDidUpdate(prevProps, prevState) {
        const { map } = this.state;
        if (map) {
            map.resize();
        }
    }

    markerClick = (station) => {
        this.setState({ location: station });
        this.map.state.map.flyTo({ center: [station.longitude, station.latitude] });
        setTimeout(() => {
            this.map.state.map.zoomTo(17, { duration: 2000 });
        }, 1000)

    };

    closePopup = () => {
        this.setState({ location: null });
    }



    render() {

        const { location } = this.state;
        const { data, history, regionData, categoryData, region, category } = this.props;

        if (data.loading) {
            return <Loader />
        }
        let geoJson = null;

        if (categoryData === 'all' && regionData === 'all') {
            geoJson = data.party;
        }
        if (!regionData === 'all' && categoryData === 'all') {
            geoJson = data.party.filter(item => item.region === regionData)
        }
        if (regionData === 'all' && !categoryData === 'all') {
            geoJson = data.party.filter(item => item.categories === categoryData)
        }
        if (!regionData === 'all' && !categoryData === 'all') {
            geoJson = data.party.filter(item => item.categories === categoryData && item.region === regionData)
        }


        var layers = ['country-label-lg', 'country-label-md', 'country-label-sm'];
        return <div>

            <div className="home">

                <div className="divBanner">
                    <div className="fade"></div>
                    <Slider autoplay={2000} >
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
                        <h3>Find Jamaica's Tourism Suppliers </h3>
                    </div>


                    <ul id="menu">
                        <li>
                            <input onClick={() => this.setState({ subMenu: true })} id="check02" type="checkbox" name="menu" />
                            <label htmlFor="check02"> {regionData === 'all' ? 'All Jamaica' : regionData}</label>
                            {this.state.subMenu ?
                                <ul className="submenu">
                                    <li onClick={(e) => {
                                        this.setState({
                                            centerLang: -77.319222,
                                            centerLat: 18,
                                            centerZoom: 7.3,
                                            region: "all",
                                            subMenu: !this.state.subMenu
                                        })
                                        region("all")
                                    }}><a href="#">All Jamaica</a></li>
                                    <li onClick={(e) => {
                                        document.getElementById("check02").checked = false;
                                        this.setState({ centerLang: -77.8939, centerLat: 17.9762, centerZoom: 8.5, region: "Western Jamaica", subMenu: !this.state.subMenu })
                                        region("Western Jamaica")
                                    }}><a href="#">Western Jamaica</a></li>
                                    <li onClick={
                                        (e) => {
                                            document.getElementById("check02").checked = false;
                                            this.setState({ centerLang: -77.1939, centerLat: 17.9762, centerZoom: 8.5, region: "Central Jamaica", subMenu: !this.state.subMenu })
                                            region("Central Jamaica")
                                        }}><a href="#">Central Jamaica</a></li>
                                    <li onClick={

                                        (e) => {
                                            document.getElementById("check02").checked = false;
                                            this.setState({ centerLang: -76.54864, centerLat: 17.91184, centerZoom: 8.5, centerZoom: 8.5, region: "Eastern Jamaica", subMenu: !this.state.subMenu })
                                            region("Eastern Jamaica")
                                        }}><a href="#">Eastern Jamaica</a></li>
                                </ul>
                                : ''}
                        </li>
                    </ul>


                    <div style={{ width: categoryData === 'Food and Agro' ? '24vw' : '22vw' }}
                        onClick={() => category('Food and Agro')} className="contentItems">
                        <div className="icon"><img src={Printing} /></div>
                        <div className="content">Food & Agro</div>
                        <div className="value">{regionData === 'all' ?
                            this.props.data.party.filter((item) => item.categories === 'Food and Agro').length :
                            data.party.filter((item) => item.categories === 'Food and Agro'
                                && item.region === regionData).length}</div>
                    </div>
                    <div style={{ width: categoryData === 'Printing, Packaging and Paper' ? '24vw' : '22vw' }}
                        onClick={() => category('Printing, Packaging and Paper')} className="contentItems">
                        <div className="icon"><img src={Printing2} /></div>
                        <div className="content">Printing & Packaging</div>
                        <div className="value">{regionData === 'all' ?
                            this.props.data.party.filter((item) => item.categories === 'Printing, Packaging and Paper').length :
                            data.party.filter((item) => item.categories === 'Printing, Packaging and Paper'
                                && item.region === regionData).length}</div>
                    </div>
                    <div style={{ width: categoryData === 'Minerals and Metal' ? '24vw' : '22vw' }} onClick={() => category('Minerals and Metal')} className="contentItems">
                        <div className="icon"><img src={Metal} /></div>
                        <div className="content">Minerals & Metals</div>
                        <div className="value">{regionData === 'all' ?
                            this.props.data.party.filter((item) => item.categories === 'Minerals and Metal').length :
                            data.party.filter((item) => item.categories === 'Minerals and Metal'
                                && item.region === regionData).length}</div>
                    </div>
                    <div style={{ width: categoryData === 'Electrical, Electronics and Automotive' ? '24vw' : '22vw' }} onClick={() => category('Electrical, Electronics and Automotive')} className="contentItems">
                        <div className="icon"><img src={Electricity} /></div>
                        <div className="content">Electrical,Electronics & <br />automative</div>
                        <div className="value">{regionData === 'all' ?
                            this.props.data.party.filter((item) => item.categories === 'Electrical, Electronics and Automotive').length :
                            data.party.filter((item) => item.categories === 'Electrical, Electronics and Automotive'
                                && item.region === regionData).length}</div>
                    </div>
                    <div style={{ width: categoryData === 'Chemicals, Cosmetics and Pharmaceuticals' ? '24vw' : '22vw' }} onClick={() => category('Chemicals, Cosmetics and Pharmaceuticals')} className="contentItems">
                        <div className="icon"><img src={chemical} /></div>
                        <div className="content">Chemical, Cosmetics & <br />Pharmaceuticals</div>
                        <div className="value">{regionData === 'all' ?
                            this.props.data.party.filter((item) => item.categories === 'Chemicals, Cosmetics and Pharmaceuticals').length :
                            data.party.filter((item) => item.categories === 'Chemicals, Cosmetics and Pharmaceuticals'
                                && item.region === regionData).length}</div>
                    </div>
                    <div style={{ width: categoryData === 'Furniture, Wooden and Bedding' ? '24vw' : '22vw' }} onClick={() => category('Furniture, Wooden and Bedding')} className="contentItems">
                        <div className="icon"><img src={furniture} /></div>
                        <div className="content">Furniture, Wooden & <br />Bedding</div>
                        <div className="value">{regionData === 'all' ?
                            this.props.data.party.filter((item) => item.categories === 'Furniture, Wooden and Bedding').length :
                            data.party.filter((item) => item.categories === 'Furniture, Wooden and Bedding'
                                && item.region === regionData).length}</div>
                    </div>
                    <div style={{ width: categoryData === 'Textile and Sewn' ? '24vw' : '22vw' }} onClick={() => category('Textile and Sewn')} className="contentItems">
                        <div className="icon"><img src={Textile} /></div>
                        <div className="content">Textile & Sewn</div>
                        <div className="value">{regionData === 'all' ?
                            this.props.data.party.filter((item) => item.categories === 'Textile and Sewn').length :
                            data.party.filter((item) => item.categories === 'Textile and Sewn'
                                && item.region === regionData).length}</div>
                    </div>


                </div>

                <div className="divMiddleMobileOnly" id="scollDiv">
                    <div className="header">
                        <h3>Find Jamaica's Tourism Suppliers</h3> 
                    </div>
                        <ul id="menu">
                            <li>
                                <input onClick={(e) => {

                                    this.setState({ subMenu: true })
                                    //  e.preventDefault();

                                }} id="Jamaica" type="checkbox" name="menu" />
                                <label htmlFor="Jamaica">{regionData === 'all' ? 'All Jamaica' : regionData}</label>
                                {this.state.subMenu ?
                                    <ul className="submenu">
                                        <li onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById("Jamaica").checked = false;
                                            this.setState({ region: "Western Jamaica", subMenu: !this.state.subMenu })
                                            region("Western Jamaica")
                                        }}><a href="#">Western Jamaica</a></li>
                                        <li onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById("Jamaica").checked = false;
                                            this.setState({ region: "Central Jamaica", subMenu: !this.state.subMenu })
                                            region("Central Jamaica")
                                        }
                                        }><a href="#">Central Jamaica</a></li>
                                        <li onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById("Jamaica").checked = false;
                                            this.setState({ region: "Eastern Jamaica", subMenu: !this.state.subMenu })
                                            region("Eastern Jamaica")

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
                                <label htmlFor="Category"> {categoryData === 'all' ? 'All Categories' : categoryData}</label>
                                {this.state.subMobileMenu ?

                                    <ul className="submenu">



                                        <li onClick={(e) => {
                                            document.getElementById("Category").checked = false;
                                            this.setState({ category: 'Food and Agro', subMobileMenu: false })
                                            category('Food and Agro')
                                            e.preventDefault();
                                        }
                                        } ><a href="#"><div className="icon"><img src={Printing} />Food</div></a></li>


                                        <li onClick={(e) => {
                                            document.getElementById("Category").checked = false;
                                            this.setState({ category: 'Printing, Packaging and Paper', subMobileMenu: false })
                                            category('Printing, Packaging and Paper')
                                            e.preventDefault();
                                        }
                                        }><a href="#"><div className="icon"><img src={Printing2} />Printing & Packaging</div></a></li>

                                        <li onClick={(e) => {
                                            document.getElementById("Category").checked = false;
                                            this.setState({ category: 'Minerals and Metal', subMobileMenu: false })
                                            category('Minerals and Metal')
                                            e.preventDefault();
                                        }
                                        }><a href="#"><div className="icon"><img src={Metal} />Minerals & Metals</div></a></li>
                                        <li onClick={(e) => {
                                            document.getElementById("Category").checked = false;
                                            this.setState({ category: 'Electrical, Electronics and Automotive', subMobileMenu: false })
                                            category('Electrical, Electronics and Automotive')
                                            e.preventDefault();
                                        }
                                        }><a href="#"><div className="icon"><img src={Electricity} />Electrical,Electronics & automative</div></a></li>
                                        <li onClick={(e) => {
                                            document.getElementById("Category").checked = false;
                                            this.setState({ category: 'Chemicals, Cosmetics and Pharmaceuticals', subMobileMenu: false })
                                            category('Chemicals, Cosmetics and Pharmaceuticals')

                                            e.preventDefault();
                                        }
                                        } ><a href="#"><div className="icon"><img src={chemical} /> Chemical, Cosmetics &Pharmaceuticals</div></a></li>
                                        <li onClick={(e) => {
                                            document.getElementById("Category").checked = false;
                                            this.setState({ category: 'Furniture, Wooden and Bedding', subMobileMenu: false })
                                            category('Furniture, Wooden and Bedding')
                                            e.preventDefault();
                                        }
                                        } ><a href="#"><div className="icon"><img src={furniture} />Furniture, Wooden & Bedding</div></a></li>
                                        <li onClick={(e) => {
                                            document.getElementById("Category").checked = false;
                                            this.setState({ category: 'Textile and Sewn', subMobileMenu: false })
                                            category('Textile and Sewn')
                                            e.preventDefault();
                                        }
                                        }><a href="#"><div className="icon"><img src={Textile} />Textile & Sewn</div></a></li>
                                    </ul>
                                    : ''}
                            </li>
                        </ul>




                    </div>

                    <div className="map-section" name="map-listing">
                        <div className="toggler check1">
                            <button className={!this.props.showListing ? "map-toggle-btn active" : "map-toggle-btn"} onClick={this.props.toggleListing}>Map View</button>
                            <button className={this.props.showListing ? "list-toggle-btn active" : "list-toggle-btn"} onClick={this.props.toggleListing}>List View</button>
                        </div>
                        <div className={this.props.showListing ? "hide" : "divMap"}>


                            <Map


                                //style="mapbox://styles/mapbox/streets-v8"
                                style="mapbox://styles/kechealexprt2/cjq7f3fqf1h4q2rqdcz44o8j7"

                                className="map"
                                center={[this.state.centerLang, this.state.centerLat]}
                                zoom={[this.state.centerZoom]}
                                ref={(e) => { this.map = e; }}
                                onStyleLoad={map => {
                                    this.setState({
                                        map: map
                                    });
                                    map.setPaintProperty('building', 'fill-color', [
                                        "interpolate",
                                        ["exponential", 0.5],
                                        ["zoom"],
                                        15,
                                        "#e2714b",
                                        22,
                                        "#eee695"
                                    ]);

                                    map.setPaintProperty('building', 'fill-opacity', [
                                        "interpolate",
                                        ["exponential", 0.5],
                                        ["zoom"],
                                        15,
                                        0,
                                        22,
                                        1
                                    ]);
                                }}
                            >



                                } ) */}
    
    
    
    
    
                            <Layer
                                    type="symbol"
                                    id={"marker1"}
                                    layout={{
                                        "icon-image": categoryData == 'all' || categoryData == 'Food and Agro' ? "food" : '', 'icon-allow-overlap': true
                                    }}
                                    images={food}

                                //type="circle" radius={ 20 } color={ '#27ae60' } fillColor='#27ae60' fillOpacity={ 1 }
                                >
                                    {data.party.filter(item => regionData === 'all' ? item.categories === 'Food and Agro'
                                        : item.region === regionData)
                                        .filter(item => categoryData === 'all' ? item.categories === 'Food and Agro'
                                            : item.categories === categoryData)
                                        .map((item, index) => (
                                            <Feature
                                                key={index}
                                                onClick={this.markerClick.bind(this, item)}
                                                coordinates={[item.longitude, item.latitude]}
                                            />
                                        ))}

                                </Layer>


                                <Layer type="symbol" id={"marker2"} layout={{ "icon-image": categoryData == 'all' || categoryData == 'Printing, Packaging and Paper' ? "printing" : '', 'icon-allow-overlap': true }}
                                    images={printing1}
                                >
                                    {data.party.filter(item => regionData === 'all' ? item.categories === 'Printing, Packaging and Paper'

                                        : item.region === regionData)
                                        .filter(item => categoryData === 'all' ? item.categories === 'Printing, Packaging and Paper'
                                            : item.categories === categoryData)
                                        .map((item, index) => (
                                            <Feature
                                                key={index}
                                                onClick={this.markerClick.bind(this, item)}
                                                coordinates={[item.longitude, item.latitude]}
                                            />
                                        ))}

                                </Layer>


                                <Layer type="symbol" id={"marker3"} layout={{ "icon-image": categoryData == 'all' || categoryData == 'Electrical, Electronics and Automotive' ? "electricity" : '', 'icon-allow-overlap': true }}
                                    images={electricity}
                                >
                                    {data.party.filter(item => regionData === 'all' ? item.categories === 'Electrical, Electronics and Automotive'
                                        : item.region === regionData)
                                        .filter(item => categoryData === 'all' ? item.categories === 'Electrical, Electronics and Automotive'
                                            : item.categories === categoryData)
                                        .map((item, index) => (
                                            <Feature
                                                key={index}
                                                onClick={this.markerClick.bind(this, item)}
                                                coordinates={[item.longitude, item.latitude]}
                                            />
                                        ))}

                                </Layer>



                                <Layer type="symbol" id={"marker4"} layout={{ "icon-image": categoryData == 'all' || categoryData == 'Chemicals, Cosmetics and Pharmaceuticals' ? "chemical" : '', 'icon-allow-overlap': true }}
                                    images={chemical1}
                                >
                                    {data.party.filter(item => regionData === 'all' ? item.categories === 'Chemicals, Cosmetics and Pharmaceuticals'
                                        : item.region === regionData)
                                        .filter(item => categoryData === 'all' ? item.categories === 'Chemicals, Cosmetics and Pharmaceuticals'
                                            : item.categories === categoryData)
                                        .map((item, index) => (
                                            <Feature
                                                key={index}
                                                onClick={this.markerClick.bind(this, item)}
                                                coordinates={[item.longitude, item.latitude]}
                                            />
                                        ))}

                                </Layer>




                                <Layer type="symbol" id={"marker5"} layout={{ "icon-image": categoryData == 'all' || categoryData == 'Furniture, Wooden and Bedding' ? "furniture" : '', 'icon-allow-overlap': true }}
                                    images={furniture3}
                                >
                                    {data.party.filter(item => regionData === 'all' ? item.categories === 'Furniture, Wooden and Bedding'
                                        : item.region === regionData)
                                        .filter(item => categoryData === 'all' ? item.categories === 'Furniture, Wooden and Bedding'
                                            : item.categories === categoryData)
                                        .map((item, index) => (
                                            <Feature
                                                key={index}
                                                onClick={this.markerClick.bind(this, item)}
                                                coordinates={[item.longitude, item.latitude]}
                                            />
                                        ))}

                                </Layer>

                                <Layer type="symbol" id={"marker6"} layout={{ "icon-image": categoryData == 'all' || categoryData == 'Minerals and Metal' ? "metal" : '', 'icon-allow-overlap': true }}
                                    images={metal}
                                >
                                    {data.party.filter(item => regionData === 'all' ? item.categories === 'Minerals and Metal'
                                        : item.region === regionData)
                                        .filter(item => categoryData === 'all' ? item.categories === 'Minerals and Metal'
                                            : item.categories === categoryData)
                                        .map((item, index) => (
                                            <Feature
                                                key={index}

                                                onClick={this.markerClick.bind(this, item)}
                                                coordinates={[item.longitude, item.latitude]}
                                            />
                                        ))}

                                </Layer>


                                <Layer type="symbol" id={"marker7"} layout={{ "icon-image": categoryData == 'all' || categoryData == 'Textile and Sewn' ? "textile" : '', 'icon-allow-overlap': true }}
                                    images={textile1}
                                >
                                    {data.party.filter(item => regionData === 'all' ? item.categories === 'Textile and Sewn'
                                        : item.region === regionData)
                                        .filter(item => categoryData === 'all' ? item.categories === 'Textile and Sewn'
                                            : item.categories === categoryData)
                                        .map((item, index) => (
                                            <Feature
                                                key={index}
                                                onClick={this.markerClick.bind(this, item)}
                                                coordinates={[item.longitude, item.latitude]}
                                            />
                                        ))}

                                </Layer>
                                <ZoomControl style={{ position: 'relative', top: '-10px', left: 0, border: 'none', marginLeft: 10, boxShadow: ' rgba(0, 0, 0, 0.0) 0px 1px 4px' }} />
                                {location && (
                                    <Popup key={location.id} coordinates={[location.longitude, location.latitude]}>
                                        <div className="popup">
                                            <div className="popup-content">
                                                <div className="popup-header">
                                                    <span style={{ cursor: 'pointer' }} className="title" onClick={() => history.push(`/supplier/${location._id}`)}>{location.name} <span><img width="8" src={forward} /></span></span>
                                                    <img className="img" onClick={() => this.closePopup()} src={CloseBlue} />
                                                </div>
                                                <span className="category">{location.categories}</span>
                                                <div className="labels">
                                                    {location.tags && location.tags.length > 0 ? location.tags.split(',').map((data, i) => {
                                                        if (i < 4) {
                                                            return <span key={i}>{data}</span>
                                                        }
                                                    }) : ''}

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
                            <div className="category category-sticky">
                                <div>
                                    <span style={{ marginRight: '5px' }}>{data.party.filter(item => regionData === 'all' ? item
                                        : item.region === regionData)
                                        .filter(item => categoryData === 'all' ? item
                                            : item.categories === categoryData).length}</span>
                                    {categoryData === 'all' ? 'All Categories' : categoryData}
                                </div>
                                <div>
                                    {regionData === 'all' ? '' : ' in ' + regionData}
                                </div>

                                {/* <span style={{ color: 'grey', fontSize: 12, marginTop: 10 }}>{regionData == "all" ? "All Jamica" : (regionData)}</span> */}
                            </div>
                            {data.party.filter(item => regionData === 'all' ? item
                                : item.region === regionData)
                                .filter(item => categoryData === 'all' ? item
                                    : item.categories === categoryData)
                                .map((item, i) => {

                                    return <div key={i} onClick={() => history.push(`/supplier/${item._id}`)} className={"list-item" + (i == 0 ? ' first-item' : '')}>
                                        <div className="item-header">
                                            <span className="title">{item.name}</span>
                                            {/*
                                        <div className="rating">
                                            <img src={ rating } />
                                            <span className="reviews">9 Reviews</span>
                                        </div>
                                        */}
                                        </div>
                                        <span className="category">{item.categories}</span>
                                        <div className="labels">
                                            {item.length && item.tags.length > 0 ? item.tags.split(',').map((data, i) => {
                                                if (i < 4) {
                                                    return <span key={i}>{data}</span>
                                                }
                                            }) : ''}
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

                        </div>
                    </div>

                </div>
            </div >

            }
        }
        
const mpStateToProps = (state) => ({
                regionData: state.auth.region,
            categoryData: state.auth.category
        })
        
export default withRouter(connect(mpStateToProps, {region, category })(graphql(query, {
                options: () => {
        return {
                variables: {
                status: 'Published'
        }
    }
}
})(Index)));