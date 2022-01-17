import React from "react";
import Table from "./components/Table.js";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "transparent",
      row: 1,
      column: 1,
    };
  }



  render() {
    return (
      <div className="App">

      <div className = "buttons">
      <button onClick={("")}> Add Row </button>
      <button onClick={("")}> Delete Row </button>
      <button onClick={("")}> Add Column </button>
      <button onClick={("")}> Delete Column </button>
      <button onClick={("")}> Fill All </button>
      <button onClick={("")}> Clear All </button>
      <button onClick={("")}> Fill Uncolored </button>

      <button> Pick a Color &nbsp;
      <select name="selectColor" id="selectColor">
      <option value="red">Red</option>
      <option value="blue">Blue </option>
      <option value="green">Green </option>
      <option value="brown">Brown </option>
      <option value="pink">Pink </option>
      </select>
      </button>



      <Table/>


      </div>
      </div>
    );
  }








}

export default App;
