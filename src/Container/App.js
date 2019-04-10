import React, { Component } from 'react';
import './App.css';
import HeadSlider from '../Components/HeadSlider';
import Monthspecial from '../Components/Monthspecial';
import About from '../Components/About';
import ContactUs from '../Components/Contactus';
import Category from '../Components/Category';


export default class App extends Component {
    render() {
        return (
            <div>



                <header className="site-header">

                    <div className="container">
                        <div className="header-content">
                            <div className="top-menu  scroll-reveal">
                                <div className="menu">
                                    <div className="title-bar" data-responsive-toggle="main-nav" data-hide-for="medium">
                                        <button className="menu-icon dark" type="button" data-toggle="main-nav"></button>
                                        <div className="title-bar-title">Menu</div>
                                    </div>

                                    <nav id="main-nav" data-animate="menu-in menu-out">
                                        <ul className="main-navigation">
                                            <li><a className="m-active" href="#" data-text="Home">Home</a></li>
                                            <li><a className="m-anim" href="#specials-grid" data-text="Specials">Specials</a></li>
                                            <li><a className="m-anim" href="#about-us" data-text="About">About</a></li>
                                            <li><a className="m-anim" href="#main-menu" data-text="Menu Cart">Menu Cart</a></li>
                                            <li><a className="m-anim" href="#contact-us" data-text="Contact">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>



                    <HeadSlider />


                </header>



                <Category />

                <Monthspecial />

                <About />

                <a href="#0" class="cd-top">Top</a>
                <ContactUs />
            </div>);
    }
}