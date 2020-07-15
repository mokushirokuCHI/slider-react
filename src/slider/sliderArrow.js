import React, {Component} from "react";

class SliderArrow extends Component {
    render() {
        return (
            <a  href="#"
                className={this.props.className}
                onClick={this.props.onClick}>
            </a>
        );
    }
}

export default SliderArrow;