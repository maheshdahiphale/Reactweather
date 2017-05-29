import React from "react";
import { render } from "react-dom";
import { WeatherForm } from "./WeatherForm"
import { WeatherMessage } from "./WeatherMessage"
var openWeatherApi = require('./../api/openWeatherApi');
//import { openWeatherApi } from "./../api/openWeatherApi"

export class Weather extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoading: false
        }
    }
    handleSearch(location) {
        var that = this;
        that.setState({
            isLoading: true
        });
        openWeatherApi.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function (errorMsg) {
            that.setState({
            isLoading: false
        });
            alert(errorMsg);
        });

    }
 
    render() {
        var that=this;
        function handleLoadingRender() {
            console.log("loader called");
            if (that.state.isLoading) {
                return <h3>Featching Weather...</h3>;
            }
            else if (that.state.location && that.state.temp) {
                return <WeatherMessage location={that.state.location} temp={that.state.temp} />;
            }

        };
        return (
            <div>
                <h5>
                    Weather Component
                </h5>
                <WeatherForm onSearch={this.handleSearch.bind(this)} />
                {handleLoadingRender()}
            </div>
        );
    }
}