import React,{Component} from 'react';

class Category extends Component{
    render(){
        return(

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
                );

}
}
export default Category;