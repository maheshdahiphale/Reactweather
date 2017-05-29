import React from "react";
import { render } from "react-dom";
import { Nav } from "./Nav";

export class Main extends React.Component {

    render(){
        return(
            <div>
                <Nav/>
        <h2>Main Component</h2>
        {this.props.children}
                </div>
        );
    }
}
