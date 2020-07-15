import React, { Component } from 'react';
import '../styles/slider.css';
import SliderDot from "./dots";
import SliderArrow from "./sliderArrow";
import InnerSlider from "./innerSlider";

class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentSlide: 0,
            currentLeft: -Math.abs(window.innerWidth),
            totalSlides: this.props.children.length,
            slideItems: this.props,
            slideWidth: `${100 / (this.props.children.length + 2)}%`,
            windowWidth: -Math.abs(window.innerWidth),
            handleResize: function(e) {
                this.setState({windowWidth: window.innerWidth});
            },

            componentDidMount: function() {
                window.addEventListener('resize', this.handleResize);
            },

            componentWillUnmount: function() {
                window.removeEventListener('resize', this.handleResize);
            },
        };
    }




    goToSlide(index) {

        this.setState({
            currentSlide: index,
            currentLeft: (index+1) * this.state.windowWidth +"px"
        });
    }


    goPrev() {
        let index = this.state.currentSlide;
        let itemsLength = this.state.totalSlides;


        if (index < 1) {
            index = itemsLength;
        }

        --index;

        this.setState({
            currentSlide: index,
            currentLeft: (index+1) * this.state.windowWidth +"px"
        });
    }

    goNext() {

        let index = this.state.currentSlide;
        let itemsLength = this.state.totalSlides - 1;

        if (index === itemsLength) {
            index = -1;
        }

        ++index;

        this.setState({
            currentSlide: index,
            currentLeft: (index+1) * this.state.windowWidth +"px"
        });

    }

    handleMouseDown(mouseDownEvent) {
        this.setState({
            startX: mouseDownEvent.clientX
            }
        )
    }

    handleMouseUp(mouseUpEvent) {
        const endX = mouseUpEvent.clientX

        if(this.state.startX - endX > 0) {
            this.goNext(this.state.currentSlide + 1)
        } else {
            this.goPrev(this.state.currentSlide - 1)
        }
    }

    handleTouchStart(touchStartEvent) {
        this.setState({
                startX: touchStartEvent.changedTouches[0].clientX
            }
        )
    }

    handleTouchEnd(touchEndEvent) {
        if(this.state.startX - touchEndEvent.changedTouches[0].clientX > 0) {
            this.goNext(this.state.currentSlide + 1)
        } else {
            this.goPrev(this.state.currentSlide - 1)
        }
    }


    render() {
        return (
            <div className="App">
                <div className="slider">
                    <InnerSlider state={this.state}
                                 onMouseDown={mouseDownEvent =>
                        this.handleMouseDown(mouseDownEvent)}
                                 onMouseUp={mouseUpEvent =>
                        this.handleMouseUp(mouseUpEvent)}
                                 onTouchStart={touchStartEvent =>
                                     this.handleTouchStart(touchStartEvent)}
                                 onTouchEnd={touchEndEvent =>
                                     this.handleTouchEnd(touchEndEvent)}/>
                </div>
                <SliderArrow className="arrow-left" onClick={e => this.goPrev(e)}/>
                <SliderArrow className="arrow-right" onClick={e => this.goNext(e)}/>
                <div className="dots-wrapper">
                        {this.state.slideItems.children.map((slide, index) =>
                            <SliderDot
                                index={index}
                                key={index}
                                currentSlide={this.state.currentSlide}
                                onClick={e => this.goToSlide(index)}
                            />
                        )}
                </div>
            </div>
        )
    }
}

export default Slider;