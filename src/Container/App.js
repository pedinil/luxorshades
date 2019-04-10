import React, { Component } from 'react';
import './App.css';
import HeadSlider from '../Components/HeadSlider';
import Monthspecial from '../Components/Monthspecial';
import About from '../Components/About';
import LineSvg from '../Components/Line.svg';


export default class App extends Component {
    render() {
        return (
            <div >



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


            <section id="main-menu" class="menu-cart scroll-reveal">
                <div class="container">
                    <h1 class="header-txt">Menu Cart</h1>
                    <div class="divider">
                        <img src={LineSvg} />

                    </div>

                    <ul className="menu-navigation" data-tabs data-match-height="true" id="example-tabs">
                        <li className="tabs-title is-active"><a className="m-anim" href="#panel1" aria-selected="true" data-text="Starters">Starters</a></li>
                        <li className="tabs-title"><a className="m-anim" data-tabs-target="panel2" href="#panel2" data-text="Main Dishes">Main Dishes</a></li>
                        <li className="tabs-title"><a className="m-anim" data-tabs-target="panel3" href="#panel3" data-text="Desserts">Desserts</a></li>
                        <li className="tabs-title"><a className="m-anim" data-tabs-target="panel4" href="#panel4" data-text="Drinks">Drinks</a></li>
                    </ul>

                    <div className="tabs-content" data-tabs-content="example-tabs">
                        <div className="tabs-panel is-active" id="panel1">
                            <div className="menu-content">
                                <div className="menu-section">
                                    <table>
                                        <tr>
                                            <td><span>SMOKED RICOTTA TERRINE</span></td>
                                            <td><span>$12</span></td>
                                        </tr>
                                        <tr>
                                            <td>ricotta, shallots, cheddar, capers</td>
                                        </tr>
                                        <tr>
                                            <td><span>SAMPHIRE FRITTERS WITH FENNEL CEVICHE </span></td>
                                            <td><span>$19</span></td>
                                        </tr>
                                        <tr>
                                            <td>fresh samphire, plain flour, cornflower, eggs, fennel</td>
                                        </tr>
                                        <tr>
                                            <td><span>PAN FRIED COURGETTE FLOWERS</span></td>
                                            <td><span>$13</span></td>
                                        </tr>
                                        <tr>
                                            <td>courgette flowers, goats cheese, red onion, pine nuts</td>
                                        </tr>
                                        <tr>
                                            <td><span>SMOKED RICOTTA TERRINE</span></td>
                                            <td><span>$12</span></td>
                                        </tr>
                                        <tr>
                                            <td>ricotta, shallots, cheddar, capers</td>
                                        </tr>
                                        <tr>
                                            <td><span>PAN FRIED COURGETTE FLOWERS</span></td>
                                            <td><span>$11</span></td>
                                        </tr>
                                        <tr>
                                            <td>courgette flowers, goats cheese, red onion, pine nuts</td>
                                        </tr>
                                        <tr>
                                            <td><span>FRIED COURGETTE FLOWERS</span></td>
                                            <td><span>$16</span></td>
                                        </tr>
                                        <tr>
                                            <td>courgette flowers, goats cheese, red onion, pine nuts</td>
                                        </tr>
                                    </table>
                                </div>

                                <div className="menu-section">
                                    <table>
                                        <tr>
                                            <td><span>SMOKED RICOTTA TERRINE</span></td>
                                            <td><span>$12</span></td>
                                        </tr>
                                        <tr>
                                            <td>ricotta, shallots, cheddar, capers</td>
                                        </tr>
                                        <tr>
                                            <td><span>SAMPHIRE FRITTERS WITH FENNEL CEVICHE </span></td>
                                            <td><span>$19</span></td>
                                        </tr>
                                        <tr>
                                            <td>fresh samphire, plain flour, cornflower, eggs, fennel</td>
                                        </tr>
                                        <tr>
                                            <td><span>PAN FRIED COURGETTE FLOWERS</span></td>
                                            <td><span>$13</span></td>
                                        </tr>
                                        <tr>
                                            <td>courgette flowers, goats cheese, red onion, pine nuts</td>
                                        </tr>
                                        <tr>
                                            <td><span>SMOKED RICOTTA TERRINE</span></td>
                                            <td><span>$12</span></td>
                                        </tr>
                                        <tr>
                                            <td>ricotta, shallots, cheddar, capers</td>
                                        </tr>
                                        <tr>
                                            <td><span>PAN FRIED COURGETTE FLOWERS</span></td>
                                            <td><span>$11</span></td>
                                        </tr>
                                        <tr>
                                            <td>courgette flowers, goats cheese, red onion, pine nuts</td>
                                        </tr>
                                        <tr>
                                            <td><span>PAN FRIED COURGETTE FLOWERS</span></td>
                                            <td><span>$16</span></td>
                                        </tr>
                                        <tr>
                                            <td>courgette flowers, goats cheese, red onion, pine nuts</td>
                                        </tr>
                                    </table>
                                </div>

                            </div>

                        </div>


                        <div className="tabs-panel" id="panel2">
                            <div className="menu-content">
                                <div className="menu-section">
                                    <table>
                                        <tr>
                                            <td><span>SAMPHIRE FRITTERS WITH FENNEL CEVICHE </span></td>
                                            <td><span>$19</span></td>
                                        </tr>
                                        <tr>
                                            <td>fresh samphire, plain flour, cornflower, eggs, fennel</td>
                                        </tr>
                                        <tr>
                                            <td><span>PAN FRIED COURGETTE FLOWERS</span></td>
                                            <td><span>$13</span></td>
                                        </tr>
                                        <tr>
                                            <td>courgette flowers, goats cheese, red onion, pine nuts</td>
                                        </tr>
                                        <tr>
                                            <td><span>SMOKED RICOTTA TERRINE</span></td>
                                            <td><span>$12</span></td>
                                        </tr>
                                        <tr>
                                            <td>ricotta, shallots, cheddar, capers</td>
                                        </tr>
                                        <tr>
                                            <td><span>PAN FRIED COURGETTE FLOWERS</span></td>
                                            <td><span>$11</span></td>
                                        </tr>
                                        <tr>
                                            <td>courgette flowers, goats cheese, red onion, pine nuts</td>
                                        </tr>
                                        <tr>
                                            <td><span>PAN FRIED COURGETTE FLOWERS</span></td>
                                            <td><span>$16</span></td>
                                        </tr>
                                        <tr>
                                            <td>courgette flowers, goats cheese, red onion, pine nuts</td>
                                        </tr>
                                    </table>
                                </div>

                                <div className="menu-section">
                                    <table>
                                        <tr>
                                            <td><span>SAMPHIRE FRITTERS WITH FENNEL CEVICHE </span></td>
                                            <td><span>$19</span></td>
                                        </tr>
                                        <tr>
                                            <td>fresh samphire, plain flour, cornflower, eggs, fennel</td>
                                        </tr>
                                        <tr>
                                            <td><span>PAN FRIED COURGETTE FLOWERS</span></td>
                                            <td><span>$13</span></td>
                                        </tr>
                                        <tr>
                                            <td>courgette flowers, goats cheese, red onion, pine nuts</td>
                                        </tr>
                                        <tr>
                                            <td><span>SMOKED RICOTTA TERRINE</span></td>
                                            <td><span>$12</span></td>
                                        </tr>
                                        <tr>
                                            <td>ricotta, shallots, cheddar, capers</td>
                                        </tr>
                                        <tr>
                                            <td><span>PAN FRIED COURGETTE FLOWERS</span></td>
                                            <td><span>$11</span></td>
                                        </tr>
                                        <tr>
                                            <td>courgette flowers, goats cheese, red onion, pine nuts</td>
                                        </tr>
                                        <tr>
                                            <td><span>PAN FRIED COURGETTE FLOWERS</span></td>
                                            <td><span>$16</span></td>
                                        </tr>
                                        <tr>
                                            <td>courgette flowers, goats cheese, red onion, pine nuts</td>
                                        </tr>
                                    </table>
                                </div>

                            </div>

                        </div>


                        <div className="tabs-panel" id="panel3">
                            <div className="menu-content">
                                <div className="menu-section">
                                    <table>

                                        <tr>
                                            <td><span>SMOKED RICOTTA TERRINE</span></td>
                                            <td><span>$12</span></td>
                                        </tr>
                                        <tr>
                                            <td>ricotta, shallots, cheddar, capers</td>
                                        </tr>
                                        <tr>
                                            <td><span>PAN FRIED COURGETTE FLOWERS</span></td>
                                            <td><span>$11</span></td>
                                        </tr>
                                        <tr>
                                            <td>courgette flowers, goats cheese, red onion, pine nuts</td>
                                        </tr>
                                        <tr>
                                            <td><span>COURGETTE FLOWERS</span></td>
                                            <td><span>$16</span></td>
                                        </tr>
                                        <tr>
                                            <td>courgette flowers, goats cheese, red onion, pine nuts</td>
                                        </tr>
                                    </table>
                                </div>

                                <div className="menu-section">
                                    <table>
                                        <tr>
                                            <td><span>SMOKED RICOTTA TERRINE</span></td>
                                            <td><span>$12</span></td>
                                        </tr>
                                        <tr>
                                            <td>ricotta, shallots, cheddar, capers</td>
                                        </tr>
                                        <tr>
                                            <td><span>PAN FRIED COURGETTE FLOWERS</span></td>
                                            <td><span>$11</span></td>
                                        </tr>
                                        <tr>
                                            <td>courgette flowers, goats cheese, red onion, pine nuts</td>
                                        </tr>
                                        <tr>
                                            <td><span>FRIED COURGETTE FLOWERS</span></td>
                                            <td><span>$16</span></td>
                                        </tr>
                                        <tr>
                                            <td>courgette flowers, goats cheese, red onion, pine nuts</td>
                                        </tr>
                                    </table>
                                </div>

                            </div>

                        </div>


                        <div className="tabs-panel" id="panel4">
                            <div className="menu-content">
                                <div className="menu-section">
                                    <table>
                                        <tr>
                                            <td><span>COURGETTE FLOWERS</span></td>
                                            <td><span>$11</span></td>
                                        </tr>
                                        <tr>
                                            <td>courgette flowers, goats cheese, red onion, pine nuts</td>
                                        </tr>
                                        <tr>
                                            <td><span>SMOKED RICOTTA TERRINE</span></td>
                                            <td><span>$12</span></td>
                                        </tr>
                                        <tr>
                                            <td>ricotta, shallots, cheddar, capers</td>
                                        </tr>
                                    </table>
                                </div>

                                <div className="menu-section">
                                    <table>
                                        <tr>
                                            <td><span>COURGETTE FLOWERS</span></td>
                                            <td><span>$11</span></td>
                                        </tr>
                                        <tr>
                                            <td>courgette flowers, goats cheese, red onion, pine nuts</td>
                                        </tr>
                                        <tr>
                                            <td><span>SMOKED RICOTTA TERRINE</span></td>
                                            <td><span>$12</span></td>
                                        </tr>
                                        <tr>
                                            <td>ricotta, shallots, cheddar, capers</td>
                                        </tr>
                                    </table>
                                </div>

                            </div>

                        </div>


                    </div>
                </div>

            </section>


            <a href="#0" className="cd-top">Top</a>

            <footer id="contact-us">
                <div class="container">
                    <div class="footer-content">
                        <h1 class="header-txt scroll-reveal">Contact</h1>
                        <div class="divider scroll-reveal">
                            <img src={LineSvg} />

                        </div>

                        <div className="contact-info scroll-reveal">
                            <div className="info-address">
                                <h3>Veggie</h3>
                                <p></p>
                            </div>
                            <div className="reservations">
                                <h3>Reservations</h3>
                                <p></p>
                            </div>
                        </div>

                        <div className="contact-form scroll-reveal" data-origin="bottom" data-distance="20%">
                            <h3>Contact us</h3>

                        </div>


            </div>
        </div>
       
    </section>


    <a href="#0" class="cd-top">Top</a>

            <Contactus />
         
      
{/*

    <div id="preloader">
        <div className="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>

    


    <script type="text/javascript">
        $('.slider').slick({
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3500,
            arrows: false,
            fade: true,
            cssEase: 'linear'
        });

    </script>
     

    <script>
        $(window).on('load', function() {
            $("#preloader").fadeOut();
        });
    </script>
 */}

            </div >
        );
    }
}


