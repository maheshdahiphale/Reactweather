var Greeter= React.createClass({

getDefaultProps: function(){
  return{
    name:'React',
    message:'This is default'
  }
},
btNew: function(update){
this.setState({
  name:update.name,
  message:update.message
});
},
getInitialState: function(){
  return{
    name:this.props.name,
    message:this.props.message
  }
},
  render: function() {
    var name= this.state.name;
    var message= this.state.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
          <GreeterForm onNew={this.btNew}/>
      </div>
    );
  }
});
var GreeterMessage = React.createClass({
    render: function () {
      var name = this.props.name;
      var message = this.props.message;

      return (
        <div>
          <h1>Hello {name}!</h1>
          <p>{message}</p>
        </div>
      );
    }
});
var GreeterForm= React.createClass({

btClicked: function(e){
e.preventDefault();
var update={};
update.name=this.refs.name.value;
update.message=this.refs.message.value;
this.props.onNew(update);
},
render: function(){
  return(
    <form onSubmit={this.btClicked}>
           <input type="text" ref="name"/>
           <textarea ref="message"/>
           <button>Click </button>
           </form>
  );
}

});


ReactDOM.render(
  <Greeter name="Mahesh" message="This is from propeties"/>,
  document.getElementById('app')
);

