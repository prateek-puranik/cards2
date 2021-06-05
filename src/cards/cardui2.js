import React,{Component} from 'react'
import Card from './card-ui.js';
import img1 from '../assets/img-card (2).jpg';
import img2 from '../assets/img-card (3).jpg';
import img3 from '../assets/img-card (4).jpg';
import { Link } from 'react-router-dom';

class cardui2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                    <Card imgsrc={img1} title="ANDAMAN" info="The Andaman Islands are an Indian archipelago in the Bay of Bengal. These roughly 300 islands are known for their palm-lined, white-sand beaches, mangroves and tropical rainforests. Coral reefs supporting marine life such as sharks and rays make for popular diving and snorkeling sites." link="activity_delhi"/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img2} title="GOA" info="Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations." />
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img3} title="JAIPUR" info="Jaipur is the capital of India’s Rajasthan state. It evokes the royal family that once ruled the region and that, in 1727, founded what is now called the Old City, or “Pink City” for its trademark building color. "/>
                </div>
            </div>
            </div>
        );
    }
}

export default cardui2;