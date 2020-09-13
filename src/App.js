import React from "react";
import { renderWeekCharts } from './charts'
import "./App.css";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  componentDidMount() {
    renderWeekCharts('container')
  }

  render() {
    return (
      <div className='wrapper'>
        <canvas id="container"></canvas>
      </div>
    );
  }
}

export default App;
