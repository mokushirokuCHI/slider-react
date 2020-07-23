import React, { Component } from "react";
import "./styles/slider.scss";
import Slider from "./slider/slider";
import SliderItem from "./slider/sliderItem";

class App extends Component {
    render() {
        return (
            <Slider>
                <SliderItem>
                    <span>Slide 1</span>
                </SliderItem>
                <SliderItem>
                    <span>Slide 2</span>
                </SliderItem>
                <SliderItem>
                    <span>Slide 3</span>
                </SliderItem>
                <SliderItem>
                    <span>Slide 4</span>
                </SliderItem>
                <SliderItem>
                    <span>Slide 5</span>
                    <img
                        src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/dog.png"
                        alt=""
                    />
                </SliderItem>
            </Slider>
        );
    }
}

export default App;
