import React, { Component } from "react";
import Slider from "react-slick";
import LineSvg from './Line.svg'


export default class HeadSlider extends Component {
    render() {
        const settings = {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3500,
            arrows: false,
            fade: true,
            cssEase: 'linear'
        };
        return (
            <div>
                <Slider {...settings} className="slider">

                    <div className="a-slide slide1">
                        <div className="container">
                            <div className="bottom-section scroll-reveal" data-origin="right" data-distance="20%">
                                <h1 className="header-txt">Veggie gram fava bean leek dandelion silver beet eggplant bush tomato</h1>
                                <div className="divider">
                                    <img src={LineSvg} />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="a-slide slide2">
                        <div className="container">
                            <div className="bottom-section">
                                <h1 className="header-txt">Dandelion cucumber earthnut pea peanut soko zucchini</h1>
                                <div className="divider">
                                    <img src={LineSvg} />
                                </div>

                            </div>

                        </div>
                    </div>

                </Slider>
            </div>
        );
    }
}