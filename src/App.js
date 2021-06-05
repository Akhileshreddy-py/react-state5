import React from "react";
import "./style.css";

export default class App extends React.Component {
constructor()
{
  super()
this.state={inc:0};
}
render()
{ return (
    <div>
      <h1>increment : {this.state.inc} </h1>
      <button onClick={function Ak(){this.setState({inc:22})}}> click </button>
    </div>
  );
}
}