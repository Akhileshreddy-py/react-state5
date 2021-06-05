import React from "react";
import "./style.css";

export default class App extends React.Component {
constructor()
{
  super()
this.state={inc:0};
}
ak()
{
  this.setState({inc:"hello"})
}
render()
{ return (
    <div>
      <h1>increment : {this.state.inc} </h1>
      <button onClick={this.ak}> click </button>
    </div>
  );
}
}