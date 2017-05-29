import React from "react";
import { render } from "react-dom";

export class WeatherForm extends React.Component {

   onClick(event){
     event.preventDefault();
      var location=this.refs.location.value;
      
      if(location.length > 0){
          console.log(location);
          this.refs.location.value='';
          this.props.onSearch(location);
      }
   }
    render(){
        return(
            <form onSubmit={this.onClick.bind(this)}>
                <input type="text" ref="location"/>
                <button> Get Wheather </button>
            </form>
        );
    }
}