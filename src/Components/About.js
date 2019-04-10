import React, { Component } from 'react';
import LineSvg from './Line.svg';


class About extends Component {
    render() {
        return (
            <div>
                <section id="about-us" class="about">
                    <div class="container">
                        <div class="about-content">
                            <h1 class="header-txt scroll-reveal">About us</h1>
                            <div class="divider scroll-reveal">
                                <img src={LineSvg} />

                            </div>

                            <p class="scroll-reveal" data-origin="top" data-distance="10%">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                            <img class="signature scroll-reveal" data-origin="right" data-distance="20%" src="./assets/signature.png" />
                        </div>
                    </div>

                </section>

            </div>
        );
    }
}
export default About;