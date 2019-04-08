import React ,{Component} from 'react';

class Monthspecial extends Component{
    render(){
        return(
            <div>
            <section id="specials-grid" class="month-specials" data-scroll-reveal="enter from the bottom after 0.9s">
        <div class="container">
            <h1 class="header-txt">This month specials</h1>
            <div class="divider">
           
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
       
            <div class="specials-content">
                <div class="special">
                    <div class="special-img img-01">
                        <img src="./assets/img/special-1.png" />
                    </div>
                    <div class="special-items spec-01">
                        <h2 class="scroll-reveal" data-origin="top" data-distance="20%">Greens fava</h2>
                        <span class="line scroll-reveal" data-origin="top" data-distance="20%"></span>
                        <p class="scroll-reveal" data-origin="bottom" data-distance="30%">Nori grape silver beet broccoli kombu beet greens fava</p>
                        <span class="scroll-reveal" data-origin="bottom" data-distance="60%">19$</span>
                    </div>
                </div>
            
                <div class="special">
                    <div class="special-img img-02">
                        <img src="./assets/img/special-2.png" />
                    </div>
                    <div class="special-items spec-02">
                        <h2 class="scroll-reveal" data-origin="top" data-distance="20%">Celery quand</h2>
                        <span class="line scroll-reveal" data-origin="top" data-distance="20%"></span>
                        <p class="scroll-reveal" data-origin="bottom" data-distance="30%">Celery quandong swiss chard chicory earthnut pea</p>
                        <span class="scroll-reveal" data-origin="bottom" data-distance="60%">18$</span>
                    </div>
                </div>
              
                <div class="special">
                    <div class="special-img img-03">
                        <img src="./assets/img/special-3.png" />
                    </div>
                    <div class="special-items spec-03">
                        <h2 class="scroll-reveal" data-origin="top" data-distance="20%">Pea horser</h2>
                        <span class="line scroll-reveal" data-origin="top" data-distance="20%"></span>
                        <p class="scroll-reveal" data-origin="bottom" data-distance="30%">Kohlrabi radish okra azuki bean corn fava bean mustard</p>
                        <span class="scroll-reveal" data-origin="bottom" data-distance="60%">7$</span>
                    </div>
                </div>
               
                <div class="special">
                    <div class="special-items spec-04">
                        <h2 class="scroll-reveal" data-origin="top" data-distance="20%">Soko radicchio</h2>
                        <span class="line scroll-reveal" data-origin="top" data-distance="20%"></span>
                        <p class="scroll-reveal" data-origin="bottom" data-distance="30%">Dandelion zucchini burdock yarrow chickpea dandelion</p>
                        <span class="scroll-reveal" data-origin="bottom" data-distance="60%">25$</span>
                    </div>
                    <div class="special-img img-04">
                        <img src="./assets/img/special-4.png" />
                    </div>
                </div>
               
                <div class="special">
                    <div class="special-items spec-05">
                        <h2 class="scroll-reveal" data-origin="top" data-distance="20%">Tigernut</h2>
                        <span class="line scroll-reveal" data-origin="top" data-distance="20%"></span>
                        <p class="scroll-reveal" data-origin="bottom" data-distance="30%">Grape silver beet watercress potato tigernut</p>
                        <span class="scroll-reveal" data-origin="bottom" data-distance="60%">14$</span>
                    </div>
                    <div class="special-img img-05">
                        <img src="./assets/img/special-5.png" />
                    </div>
                </div>
               
                <div class="special">
                    <div class="special-items spec-06">
                        <h2 class="scroll-reveal" data-origin="top" data-distance="20%">Yarrow sweet</h2>
                        <span class="line scroll-reveal" data-origin="top" data-distance="20%"></span>
                        <p class="scroll-reveal" data-origin="bottom" data-distance="30%">Gumbo kakadu plum komatsuna black-eyed pea green</p>
                        <span class="scroll-reveal" data-origin="bottom" data-distance="60%">8$</span>
                    </div>
                    <div class="special-img img-06">
                        <img src="./assets/img/special-6.png" />
                    </div>
                </div>
               
            </div>
           
        </div>
       
    </section>
    </div>
        );
    }
}

export default Monthspecial;