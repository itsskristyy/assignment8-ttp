import React from "react";
import Table from "./components/Table.js";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "red",
      row: 1,
      column: 1,
    };

    this.addRow = this.addRow.bind(this)
    this.deleteRow = this.deleteRow.bind(this)
    this.addColumn = this.addColumn.bind(this)
    this.deleteColumn = this.deleteColumn.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)

  }

  addRow(){
    this.setState({row: this.state.row+1});
  }

  deleteRow(){
    this.setState({
      row: this.state.row > 0 ? this.state.row-1 : 0
    });
  }

  addColumn(){
    this.setState({column: this.state.column+1});
  }

  deleteColumn(){
    this.setState({column: this.state.column > 0 ? this.state.column-1 : 0});
  }

  handleColorChange(e){
    this.setState({color: e.target.value})
  }



  render() {
    return (
      <div className="App">

      <div className = "buttons">
      <button onClick={this.addRow}> Add Row </button>
      <button onClick={this.deleteRow}> Delete Row </button>
      <button onClick={this.addColumn}> Add Column </button>
      <button onClick={this.deleteColumn}> Delete Column </button>
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



      <Table row={this.state.row} column={this.state.column}/>


      </div>
      </div>
    );
  }








}

export default App;
