import React from 'react';
import Close from '../../images/icon/cross.svg';
import phone from '../../images/icon/phone.svg';
import fax from '../../images/icon/fax.svg';
import email from '../../images/icon/email.svg';
import './index.scss';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1Ijoia2VjaGVhbGV4cHJ0MiIsImEiOiJjam94azh4OHcyODByM3FqeHd1Nm43NWl6In0.0w8_b3fwLMXf8a1zSGgC2w"
});

export default ({ closeModal }) => {
    return <div className="contact">
        <div className="header">
            <div>
                <span>CONTACT US</span>
                <hr />
            </div>
            <img src={Close} onClick={() => closeModal()} />
        </div>
        <div className="content">
            <div className="contact1">
                <div className="heading">
                    Tourism Linkages Network
                </div>
                <p>
                    Ministry of Tourism<br />
                    Jamaica Tourism Centre<br />
                    64 Knutsford Boulevard<br />
                    Kingston 5<br />
                    Jamaica W.I.<br />
                </p>
                <Map
                    style="mapbox://styles/mapbox/streets-v8"
                    className="mobile-map"
                >
                    <Layer
                        type="symbol"
                        id="marker"
                        layout={{ "icon-image": "marker-15" }}>
                        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                    </Layer>
                </Map>
                <p style={{ marginTop: 40 }}>
                    <img src={phone} /> (876) 920-4926-30<br />
                    <img src={fax} /> (876) 920-4944<br />
                    <img src={email} /> info@tourismlinkages.net<br />
                </p>

            </div>
            <div className="input">
                <div className="heading">
                    Leave us message
                </div>
                <textarea placeholder="Type your message here..." className="inputBox" />
                <button className="button">Send</button>
            </div>
        </div>
        <Map
            style="mapbox://styles/mapbox/streets-v8"
            className="desktop-map"
        >
            <Layer
                type="symbol"
                id="marker"
                layout={{ "icon-image": "marker-15" }}>
                <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
            </Layer>
        </Map>
    </div>
}