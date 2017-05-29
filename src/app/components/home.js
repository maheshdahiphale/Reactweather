import React from "react";
import { render } from "react-dom";

export class Home extends React.Component{
    constructor(props){
        super();
        this.state = {
            age: props.age,
            name:props.name
        };
    }
    onMakeOlder(){
        this.setState({
          age: this.state.age +=3
        }
        );
    }
    onNewName(event){
        event.preventDefault();
        var newName=this.refs.name.value;
        this.setState({
          name:newName
        }
        );
        this.props.onNameChange(newName);
    }
    render(){
        return(
                <div>
                     New Component!
                    <div>
                    <p>Your name is {this.state.name}, age is {this.state.age}</p>
                    <p>User Obj: Name is {this.props.user.name}</p>
                    <button onClick={this.onMakeOlder.bind(this)}>Make older</button>
                        <div>
                        <ul>
                            {this.props.user.hobbies.map((hobby,i) => <li key={i}>{hobby}</li>)}
                            </ul>
                        </div>
                    </div>
                    <form onSubmit={this.onNewName.bind(this)}>
                    <input type="text" ref="name"/>
                    <button>Click to change name</button>
                    </form>
                </div>
        );
    }
}

// Home.propTypes= {
//     name: React.PropTypes.string,
//     age:  React.PropTypes.number,
//     user: React.PropTypes.object
// };