import React from "react";
import { render } from "react-dom";

export class Header extends React.Component {

    render(){
        return(
            <div>
                <ul>
                    <li> Hello {this.props.name}
                        </li>
                </ul>
                </div>
        );
    }
}