# Slider with React

Test exercise for Scandiweb. Slider with React.

## Features

- Responsive
- Mobile friendly
- Supports swipes
- Infinite loop
- Supports images, videos, text content and other. Each SliderItem for one slide!

## Usage

```javascript
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
                </SliderItem>
            </Slider>
        );
    }
}

export default App;
```
