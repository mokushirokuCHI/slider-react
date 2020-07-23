import SliderItem from "./sliderItem";
import React, { Component } from "react";

class InnerSlider extends Component {
    render() {
        const innerSliderWidth = `${(this.props.state.totalSlides + 2) * 100}%`;

        return (
            <div
                className="slider-inner"
                style={{
                    width: innerSliderWidth,
                    left: this.props.state.currentLeft,
                    transition: `${this.props.state.transition}s`,
                }}
                onMouseDown={this.props.onMouseDown}
                onMouseMove={this.props.onMouseMove}
                onMouseUp={this.props.onMouseUp}
                onTouchStart={this.props.onTouchStart}
                onTouchMove={this.props.onTouchMove}
                onTouchEnd={this.props.onTouchEnd}
            >
                <SliderItem
                    items={
                        this.props.state.slideItems.children[
                        this.props.state.totalSlides - 1
                            ].props.children
                    }
                    width={this.props.state.slideWidth}
                    index={this.props.state.totalSlides - 1}
                />
                {this.props.state.slideItems.children.map((slide, index) => {
                    return (
                        <SliderItem
                            items={slide.props.children}
                            width={this.props.state.slideWidth}
                            key={index}
                            index={index}
                        />
                    );
                })}
                <SliderItem
                    items={this.props.state.slideItems.children[0].props.children}
                    width={this.props.state.slideWidth}
                    index={0}
                />
            </div>
        );
    }
}

export default InnerSlider;
