import React, { Component } from 'react';
import LineSvg from '../Svg/Line.svg';
import Svg1 from '../Svg/Svg1.svg';
import Svg2 from '../Svg/Svg1.svg';


class Contactus extends Component {
    render() {
        return (
            <div>
                <footer id="contact-us" >
                    <div class="container">
                        <div class="footer-content">
                            <h1 class="header-txt scroll-reveal">Contact</h1>
                            <div class="divider scroll-reveal">
                                <img src={LineSvg} />
                              
                            </div>

                            <div class="contact-info scroll-reveal">
                                <div class="info-address">
                                    <h3>Veggie</h3>
                                    <p></p>
                                </div>
                                <div class="reservations">
                                    <h3>Reservations</h3>
                                    <p></p>
                                </div>
                            </div>

                            <div class="contact-form scroll-reveal" data-origin="bottom" data-distance="20%">
                                <h3>Contact us</h3>

                            </div>

                            <div class="social-icons scroll-reveal" data-duration="1500">
                                <div class="fb-i">
                                    <img src={Svg1} />
                           
                                </div>
                                <div class="insta-i">
                                    <img src={Svg2} />
                                
                                </div>
                            </div>
                            <p class="copy-info">Copyright 2017 © by Anna Dadej</p>
                        </div>



                    </div>
                </footer>

            </div>
        );
    }
}

export default Contactus;