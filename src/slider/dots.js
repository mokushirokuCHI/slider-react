import React, { Component } from "react";

class SliderDot extends Component {
    render() {
        return (
            <li
                className={this.props.index === this.props.currentSlide ? "active" : ""}
                onClick={this.props.onClick}
            />
        );
    }
}

export default SliderDot;
