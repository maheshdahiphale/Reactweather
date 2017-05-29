import React from "react";
import { render } from "react-dom";
import { Header } from "./components/header";
import { Home } from "./components/home";


class App extends React.Component{
    onNameChange(name){
        this.setState({
           name: name
        });
    }
    constructor(props){
        super();
        this.state = {
            name: 'Mahesh'
        };
    }
    render(){
        var user={
            name:"Mahi",
            hobbies:["cricket","traveling"]
        }
        return (
            <div>
                <div>
                    <Header name={this.state.name}/>
                    </div>
                    <div>
                        <Home name={this.state.name} age={25} user={user} onNameChange={this.onNameChange.bind(this)}>
                            <p>This is child</p>
                            </Home>
                        </div>
            </div>
        );
    }
     
}
render(<App/>,window.document.getElementById("app"));