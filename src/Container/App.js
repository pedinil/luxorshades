import React, { Component } from 'react';
import './App.css';
import HeadSlider from '../Components/HeadSlider';
import Monthspecial from '../Components/Monthspecial';
import About from '../Components/About';
import ContactUs from '../Components/Contactus';


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



                <section class="category-icons">
                    <div class="container">
                        <div class="yellow-content">
                            <div class="icon">
                                <img class="scroll-reveal" data-origin="top" data-distance="20%" src="././assets/icon-vege.svg" />
                                <h3 class="scroll-reveal" data-origin="top" data-distance="20%">Turnip greens</h3>
                                <p class="scroll-reveal" data-distance="0" data-duration="500">Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage.</p>
                            </div>
                            <div class="icon">
                                <img class="scroll-reveal" data-origin="top" data-distance="20%" src="./assets/icon-coffee.svg" />
                                <h3 class="scroll-reveal" data-origin="top" data-distance="20%">beetroot water</h3>
                                <p class="scroll-reveal" data-distance="0" data-duration="700">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek.</p>
                            </div>
                            <div class="icon">
                                <img class="scroll-reveal" data-origin="top" data-distance="20%" src="./assets/icon-sweet.svg" />
                                <h3 class="scroll-reveal" data-origin="top" data-distance="20%">get social</h3>
                                <p class="scroll-reveal" data-distance="0" data-duration="900">Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jícama.</p>
                            </div>
                        </div>

                    </div>

                </section>

                <Monthspecial />

                <About />

                <a href="#0" class="cd-top">Top</a>
                <ContactUs />
            </div>);
    }
}