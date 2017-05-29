import React from "react";
import { render } from "react-dom";

export class WeatherMessage extends React.Component {

    render(){
        return(
            <div>It's {this.props.temp} in {this.props.location}</div>
        );
    }
}