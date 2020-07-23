import React, { Component } from "react";

class SliderItem extends Component {
    render() {
        return (
            <div
                className={`slide slide${this.props.index + 1}`}
                style={{ width: this.props.width }}
            >
                {this.props.items}
            </div>
        );
    }
}

export default SliderItem;
