import React ,{Component} from 'react';
import LineSvg from './Line.svg';

class Monthspecial extends Component{
    render(){
        return(
            <div>
            <section id="specials-grid" class="month-specials" data-scroll-reveal="enter from the bottom after 0.9s">
        <div class="container">
            <h1 class="header-txt">This month specials</h1>
            <div class="divider">
                <img src={LineSvg} />
              
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