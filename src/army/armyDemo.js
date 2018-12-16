import React from 'react';
import './army.scss'

class Demo extends React.Component {
    constructor() {
        super();
        this.state = {
            div1: false
        }
    }
    render() {
        return (
            <div>
                <div className="army">
                    <div className="section1">FAQ</div>
                    <div className="section2">
                        Before making <br />
                        any decision<br />
                        arm yourself<br />
                        with knowledge<br />
                    </div>
                </div>

                <div className="faq">
                    <div onClick={ ( e ) => {
                        e.preventDefault()
                        this.setState( { div1: !this.state.div1 } )
                    } } className="faqTiles" style={ {
                        //  transform: this.state.div1 ? 'translate( -50 %, -50 %)' : '',
                        //transition: 'transform 2s ease-in-out',


                        width: !this.state.div1 ? '88vw' : '100vw', height: !this.state.div1 ? 180 : '100vh'
                    } }>
                        <div className="faqLabel">What is the role of<br /> Army ?</div>
                        <div className="faqIcon">+</div>
                    </div>

                    <div className="faqTiles" style={ { width: '88vw', height: 180, display: !this.state.div1 ? 'flex' : 'none' } }>
                        <div className="faqLabel">Is the army the right branch <br /> of the military for me ? </div>
                        <div className="faqIcon">+</div>

                    </div>

                    <div className="faqTiles" style={ { width: '88vw', height: 180, display: !this.state.div1 ? 'flex' : 'none' } }>
                        <div className="faqLabel">Is the army the right branch <br /> of the military for me ? </div>
                        <div className="faqIcon">+</div>

                    </div>


                </div>
                <div style={ { height: '100vh', } }>3</div>
            </div >
        )
    }
}


export default Demo