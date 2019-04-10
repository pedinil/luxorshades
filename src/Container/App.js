import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeadSlider from '../Pages/HeadSlider';
import Monthspecial from '../Components/Monthspecial';
import About from '../Components/About';
import LineSvg from '../Pages/Line.svg';
import Contactus from '../Components/Contactus';

class App extends Component {
  render() {
    return (
      <div className="App">



<header class="site-header">
        <div class="container">
            <div class="header-content">
                <div class="top-menu  scroll-reveal">
                    <div class="menu">
                        <div class="title-bar" data-responsive-toggle="main-nav" data-hide-for="medium">
                            <button class="menu-icon dark" type="button" data-toggle="main-nav"></button>
                            <div class="title-bar-title">Menu</div>
                        </div>

                        <nav id="main-nav" data-animate="menu-in menu-out">
                            <ul class="main-navigation">
                                <li><a class="m-active" href="#" data-text="Home">Home</a></li>
                                <li><a class="m-anim" href="#specials-grid" data-text="Specials">Specials</a></li>
                                <li><a class="m-anim" href="#about-us" data-text="About">About</a></li>
                                <li><a class="m-anim" href="#main-menu" data-text="Menu Cart">Menu Cart</a></li>
                                <li><a class="m-anim" href="#contact-us" data-text="Contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        <div class="slider">
            <div class="a-slide slide1">
                <div class="container">
                    <div class="bottom-section scroll-reveal" data-origin="right" data-distance="20%">
                        <h1 class="header-txt">Veggie gram fava bean leek dandelion silver beet eggplant bush tomato</h1>

                       
                        <div class="divider">
                        <img src={LineSvg} />
                         {/*
                     
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1930 255.5" style="enable-background:new 0 0 1930 255.5;" xml:space="preserve">
                           
                                <style type="text/css">
                                    .st0{fill:none;stroke:#3c3c3c;stroke-width:10;stroke-linecap:square;stroke-miterlimit:10;}
                                </style>
                                
                                <polyline class="st0" points="1224,171.8 1181.3,171.8 1139.2,129.6 1065,203.9 970.5,110.4 876,203.6 801.8,129.4 759.7,171.5 
                                    717,171.5 "/>
                                <polyline class="st0" points="5,131.5 757.3,131.5 801.8,176.1 885.9,91.9 868.3,74.2 831.5,111 870.4,149.9 970.2,50.2 1070,149.9 
                                    1108.8,111 1072.1,74.2 1054.4,91.9 1138.5,176.1 1183.1,131.5 1925,131.5 "/>
                                <rect x="921.9" y="26.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 231.426 707.2043)" class="st0" width="95" height="95"/>
                                <rect x="921.9" y="99.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 179.8072 728.5855)" class="st0" width="95" height="95"/>
                                <rect x="940.3" y="178.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 137.3893 746.1556)" class="st0" width="58.2" height="58.2"/>
                                </svg>
                                
                         */}
                        </div>
                     
                    

                    </div>
                   
                </div>
            </div>
            <div class="a-slide slide2">
                <div class="container">
                    <div class="bottom-section">
                        <h1 class="header-txt">Dandelion cucumber earthnut pea peanut soko zucchini</h1>
                        <div class="divider">
                        <img src={LineSvg} />
                        {/*
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1930 255.5" style="enable-background:new 0 0 1930 255.5;" xml:space="preserve">
                             
                                <style type="text/css">
                                    .st0{fill:none;stroke:#3c3c3c;stroke-width:10;stroke-linecap:square;stroke-miterlimit:10;}
                                </style>
                               
                                <polyline class="st0" points="1224,171.8 1181.3,171.8 1139.2,129.6 1065,203.9 970.5,110.4 876,203.6 801.8,129.4 759.7,171.5 
                                    717,171.5 "/>
                                <polyline class="st0" points="5,131.5 757.3,131.5 801.8,176.1 885.9,91.9 868.3,74.2 831.5,111 870.4,149.9 970.2,50.2 1070,149.9 
                                    1108.8,111 1072.1,74.2 1054.4,91.9 1138.5,176.1 1183.1,131.5 1925,131.5 "/>
                                <rect x="921.9" y="26.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 231.426 707.2043)" class="st0" width="95" height="95"/>
                                <rect x="921.9" y="99.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 179.8072 728.5855)" class="st0" width="95" height="95"/>
                                <rect x="940.3" y="178.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 137.3893 746.1556)" class="st0" width="58.2" height="58.2"/>
                                </svg>
                                */}
                        </div>

                    </div>

                </div>
            </div>
        </div>
         

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
                {/*
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1930 255.5" style="enable-background:new 0 0 1930 255.5;" xml:space="preserve">
               
                                <style type="text/css">
                                    .st0{fill:none;stroke:#3c3c3c;stroke-width:10;stroke-linecap:square;stroke-miterlimit:10;}
                                </style>
               
                                <polyline class="st0" points="1224,171.8 1181.3,171.8 1139.2,129.6 1065,203.9 970.5,110.4 876,203.6 801.8,129.4 759.7,171.5 
                                    717,171.5 "/>
                                <polyline class="st0" points="5,131.5 757.3,131.5 801.8,176.1 885.9,91.9 868.3,74.2 831.5,111 870.4,149.9 970.2,50.2 1070,149.9 
                                    1108.8,111 1072.1,74.2 1054.4,91.9 1138.5,176.1 1183.1,131.5 1925,131.5 "/>
                                <rect x="921.9" y="26.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 231.426 707.2043)" class="st0" width="95" height="95"/>
                                <rect x="921.9" y="99.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 179.8072 728.5855)" class="st0" width="95" height="95"/>
                                <rect x="940.3" y="178.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 137.3893 746.1556)" class="st0" width="58.2" height="58.2"/>
                                </svg> 
                                 */}
            </div>
         
            <ul class="menu-navigation" data-tabs data-match-height="true" id="example-tabs">
                <li class="tabs-title is-active"><a class="m-anim" href="#panel1" aria-selected="true" data-text="Starters">Starters</a></li>
                <li class="tabs-title"><a class="m-anim" data-tabs-target="panel2" href="#panel2" data-text="Main Dishes">Main Dishes</a></li>
                <li class="tabs-title"><a class="m-anim" data-tabs-target="panel3" href="#panel3" data-text="Desserts">Desserts</a></li>
                <li class="tabs-title"><a class="m-anim" data-tabs-target="panel4" href="#panel4" data-text="Drinks">Drinks</a></li>
            </ul>

            <div class="tabs-content" data-tabs-content="example-tabs">
                <div class="tabs-panel is-active" id="panel1">
                    <div class="menu-content">
                        <div class="menu-section">
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
                    
                        <div class="menu-section">
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
               

                <div class="tabs-panel" id="panel2">
                    <div class="menu-content">
                        <div class="menu-section">
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
                    
                        <div class="menu-section">
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
              

                <div class="tabs-panel" id="panel3">
                    <div class="menu-content">
                        <div class="menu-section">
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
                    
                        <div class="menu-section">
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
           

                <div class="tabs-panel" id="panel4">
                    <div class="menu-content">
                        <div class="menu-section">
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
                    
                        <div class="menu-section">
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


    <a href="#0" class="cd-top">Top</a>

            <Contactus />
         
      
{/*
    <div id="preloader">
        <div class="loader">
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

      </div>
              );
            }
          }
          
          export default App;
