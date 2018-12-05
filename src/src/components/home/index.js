import React from 'react';
import Modal from 'react-modal';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import ItemDetail from '../itemDetail';
import Header from '../header';
import Index from '../index/index';
import { Route, Switch } from 'react-router';

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

export default class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route path="/detail" component={ItemDetail} />
                </Switch>
            </div>
        );
    }
}